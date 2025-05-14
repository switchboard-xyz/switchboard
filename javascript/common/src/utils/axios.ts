import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  RawAxiosRequestHeaders,
} from 'axios';
import { Agent } from 'https';

const AXIOS = axios.create({
  httpsAgent: new Agent({ maxSockets: 100 }),
});

class Headers {
  private headers: Map<string, string> = new Map();

  constructor(init?: [string, string][] | Record<string, string>) {
    if (init) {
      if (Array.isArray(init)) {
        init.forEach(([key, value]) => this.append(key, value));
      } else {
        Object.entries(init).forEach(([key, value]) => this.append(key, value));
      }
    }
  }

  append(name: string, value: string): void {
    this.headers.set(name.toLowerCase(), value);
  }

  delete(name: string): void {
    this.headers.delete(name.toLowerCase());
  }

  get(name: string): string | null {
    return this.headers.get(name.toLowerCase()) ?? null;
  }

  has(name: string): boolean {
    return this.headers.has(name.toLowerCase());
  }

  set(name: string, value: string): void {
    this.headers.set(name.toLowerCase(), value);
  }

  forEach(callback: (value: string, key: string) => void): void {
    this.headers.forEach((value, key) => callback(value, key));
  }
}

class Response {
  constructor(
    private body: string,
    private init: {
      status: number;
      statusText: string;
      headers: Headers;
    }
  ) {}

  get ok() {
    return this.init.status >= 200 && this.init.status < 300;
  }
  get status() {
    return this.init.status;
  }
  get statusText() {
    return this.init.statusText;
  }
  get headers() {
    return this.init.headers;
  }
  async json() {
    return JSON.parse(this.body);
  }
  async text() {
    return this.body;
  }
}

/**
 * Convert headers to axios headers
 * @param headers NodeJS Headers object or Fetch Headers object
 * @returns Axios Headers object
 */
function convertHeaders(headers?: HeadersInit): RawAxiosRequestHeaders {
  const axiosHeaders: RawAxiosRequestHeaders = {};

  if (headers instanceof Headers) {
    // Convert Headers object to plain object
    headers.forEach((value, key) => (axiosHeaders[key] = value));
  } else if (Array.isArray(headers)) {
    // Convert array of tuples to plain object
    headers.forEach(([key, value]) => (axiosHeaders[key] = value));
  } else {
    // Assume it's already a plain object
    Object.entries(headers ?? {}).forEach(
      // Convert value to string as Axios expects
      ([key, value]) => (axiosHeaders[key] = String(value))
    );
  }

  return axiosHeaders;
}

export async function fetch(
  input: string | URL | globalThis.Request,
  init?: RequestInit
): Promise<Response> {
  // Adding default headers
  const axiosInit: RequestInit = !init || !init.headers ? { ...init } : init;
  const requestConfig: AxiosRequestConfig = {
    method: axiosInit.method,
    headers: convertHeaders(axiosInit.headers),
    data: axiosInit.body,
    baseURL: input.toString(),
    validateStatus: () => true,
  };

  // Retry the request up to 3 timesif it fails with ECONNABORTED error
  const getAxiosResponse = async (attempt = 0): Promise<AxiosResponse> => {
    return await AXIOS.request(requestConfig).catch(async error => {
      if (error.code === 'ECONNABORTED' && attempt < 2) {
        await new Promise(res => setTimeout(res, Math.pow(2, attempt) * 100));
        return getAxiosResponse(attempt + 1);
      } else throw error;
    });
  };
  const axiosResponse = await getAxiosResponse();

  const { data, status, statusText, headers } = axiosResponse;

  // Mapping headers from axios to fetch format
  const response = new Response(JSON.stringify(data), {
    status,
    statusText,
    headers: new Headers(
      Object.entries(headers).map<[string, string]>(([key, value]) => {
        return [key, value.toString()];
      })
    ),
  });

  return Promise.resolve(response);
}
