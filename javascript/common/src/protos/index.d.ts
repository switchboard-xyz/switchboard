import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of an OracleJob. */
export interface IOracleJob {
  /** The chain of tasks to perform for this OracleJob. */
  tasks?: OracleJob.ITask[] | null;
}

/** Represnts a list of tasks to be performed by a switchboard oracle. */
export class OracleJob implements IOracleJob {
  /**
   * Constructs a new OracleJob.
   * @param [properties] Properties to set
   */
  constructor(properties?: IOracleJob);

  /** The chain of tasks to perform for this OracleJob. */
  public tasks: OracleJob.ITask[];

  /**
   * Creates a new OracleJob instance using the specified properties.
   * @param [properties] Properties to set
   * @returns OracleJob instance
   */

  /**
   * Creates a new OracleJob instance from a stringified yaml object.
   * @param [yamlString] stringified yaml object
   * @returns OracleJob instance
   */
  public static fromYaml(yamlString: string): OracleJob;

  /**
   * Converts an OracleJob instance to a stringified yaml object.
   * @returns stringified yaml object
   */
  public toYaml(): string;

  public static create(properties?: IOracleJob): OracleJob;

  /**
   * Encodes the specified OracleJob message. Does not implicitly {@apilink OracleJob.verify|verify} messages.
   * @param message OracleJob message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encode(
    message: IOracleJob,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Encodes the specified OracleJob message, length delimited. Does not implicitly {@apilink OracleJob.verify|verify} messages.
   * @param message OracleJob message or plain object to encode
   * @param [writer] Writer to encode to
   * @returns Writer
   */
  public static encodeDelimited(
    message: IOracleJob,
    writer?: $protobuf.Writer
  ): $protobuf.Writer;

  /**
   * Decodes an OracleJob message from the specified reader or buffer.
   * @param reader Reader or buffer to decode from
   * @param [length] Message length if known beforehand
   * @returns OracleJob
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decode(
    reader: $protobuf.Reader | Uint8Array,
    length?: number
  ): OracleJob;

  /**
   * Decodes an OracleJob message from the specified reader or buffer, length delimited.
   * @param reader Reader or buffer to decode from
   * @returns OracleJob
   * @throws {Error} If the payload is not a reader or valid buffer
   * @throws {$protobuf.util.ProtocolError} If required fields are missing
   */
  public static decodeDelimited(
    reader: $protobuf.Reader | Uint8Array
  ): OracleJob;

  /**
   * Verifies an OracleJob message.
   * @param message Plain object to verify
   * @returns `null` if valid, otherwise the reason why it is not
   */
  public static verify(message: { [k: string]: any }): string | null;

  /**
   * Creates an OracleJob message from a plain object. Also converts values to their respective internal types.
   * @param object Plain object
   * @returns OracleJob
   */
  public static fromObject(object: { [k: string]: any }): OracleJob;

  /**
   * Creates a plain object from an OracleJob message. Also converts values to other types if specified.
   * @param message OracleJob
   * @param [options] Conversion options
   * @returns Plain object
   */
  public static toObject(
    message: OracleJob,
    options?: $protobuf.IConversionOptions
  ): { [k: string]: any };

  /**
   * Converts this OracleJob to JSON.
   * @returns JSON object
   */
  public toJSON(): { [k: string]: any };

  /**
   * Gets the default type url for OracleJob
   * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
   * @returns The default type url
   */
  public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace OracleJob {
  /** Properties of a HttpTask. */
  interface IHttpTask {
    /** A string containing the URL to direct this HTTP request to. */
    url?: string | null;

    /** The type of HTTP request to make. */
    method?: OracleJob.HttpTask.Method | null;

    /** A list of headers to add to this HttpTask. */
    headers?: OracleJob.HttpTask.IHeader[] | null;

    /** A stringified body (if any) to add to this HttpTask. */
    body?: string | null;
  }

  /**
   * The adapter will report the text body of a successful HTTP request to the
   * specified url, or return an error if the response status code is greater
   * than or equal to 400.
   *
   * _**Input**_: None
   *
   * _**Returns**_: String representation of the http response.
   *
   * _**Example**_: Basic HttpTask
   *
   * ```json
   * {"httpTask": {"url": "https://mywebsite.org/path"} }
   * ```
   *
   * _**Example**_: HttpTask example with headers
   *
   * ```json
   * { "httpTask": { "url": "https://mywebsite.org/path", "method": "METHOD_POST", "headers": [ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } ], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
   * ```
   */
  class HttpTask implements IHttpTask {
    /**
     * Constructs a new HttpTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IHttpTask);

    /** A string containing the URL to direct this HTTP request to. */
    public url: string;

    /** The type of HTTP request to make. */
    public method: OracleJob.HttpTask.Method;

    /** A list of headers to add to this HttpTask. */
    public headers: OracleJob.HttpTask.IHeader[];

    /** A stringified body (if any) to add to this HttpTask. */
    public body: string;

    /**
     * Creates a new HttpTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HttpTask instance
     */
    public static create(properties?: OracleJob.IHttpTask): OracleJob.HttpTask;

    /**
     * Encodes the specified HttpTask message. Does not implicitly {@apilink OracleJob.HttpTask.verify|verify} messages.
     * @param message HttpTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IHttpTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified HttpTask message, length delimited. Does not implicitly {@apilink OracleJob.HttpTask.verify|verify} messages.
     * @param message HttpTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IHttpTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HttpTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HttpTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.HttpTask;

    /**
     * Decodes a HttpTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HttpTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.HttpTask;

    /**
     * Verifies a HttpTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HttpTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HttpTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.HttpTask;

    /**
     * Creates a plain object from a HttpTask message. Also converts values to other types if specified.
     * @param message HttpTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.HttpTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HttpTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HttpTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace HttpTask {
    /** An enumeration representing the types of HTTP requests available to make. */
    enum Method {
      METHOD_UNKOWN = 0,
      METHOD_GET = 1,
      METHOD_POST = 2,
    }

    /** Properties of a Header. */
    interface IHeader {
      /** A header key such as `Authorization` or `Content-Type` */
      key?: string | null;

      /** A value for the given header key like `Basic MYAUTHKEY` or `application/json` */
      value?: string | null;
    }

    /** An object that represents a header to add to an HTTP request. */
    class Header implements IHeader {
      /**
       * Constructs a new Header.
       * @param [properties] Properties to set
       */
      constructor(properties?: OracleJob.HttpTask.IHeader);

      /** A header key such as `Authorization` or `Content-Type` */
      public key: string;

      /** A value for the given header key like `Basic MYAUTHKEY` or `application/json` */
      public value: string;

      /**
       * Creates a new Header instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Header instance
       */
      public static create(
        properties?: OracleJob.HttpTask.IHeader
      ): OracleJob.HttpTask.Header;

      /**
       * Encodes the specified Header message. Does not implicitly {@apilink OracleJob.HttpTask.Header.verify|verify} messages.
       * @param message Header message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: OracleJob.HttpTask.IHeader,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Header message, length delimited. Does not implicitly {@apilink OracleJob.HttpTask.Header.verify|verify} messages.
       * @param message Header message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: OracleJob.HttpTask.IHeader,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Header message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Header
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): OracleJob.HttpTask.Header;

      /**
       * Decodes a Header message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Header
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): OracleJob.HttpTask.Header;

      /**
       * Verifies a Header message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Header message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Header
       */
      public static fromObject(object: {
        [k: string]: any;
      }): OracleJob.HttpTask.Header;

      /**
       * Creates a plain object from a Header message. Also converts values to other types if specified.
       * @param message Header
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: OracleJob.HttpTask.Header,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Header to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for Header
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of a JsonParseTask. */
  interface IJsonParseTask {
    /**
     * JSONPath formatted path to the element. https://t.ly/uLtw
     * https://www.npmjs.com/package/jsonpath-plus
     */
    path?: string | null;

    /** The technique that will be used to aggregate the results if walking the specified path returns multiple numerical results. */
    aggregationMethod?: OracleJob.JsonParseTask.AggregationMethod | null;
  }

  /**
   * The adapter walks the path specified and returns the value found at that result. If returning
   * JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
   *
   * _**Input**_: String representation of a JSON object.
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Parses the price field from a JSON object
   *
   * ```json
   * {"jsonParse": {"path": "$.price"} }
   * ```
   */
  class JsonParseTask implements IJsonParseTask {
    /**
     * Constructs a new JsonParseTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IJsonParseTask);

    /**
     * JSONPath formatted path to the element. https://t.ly/uLtw
     * https://www.npmjs.com/package/jsonpath-plus
     */
    public path: string;

    /** The technique that will be used to aggregate the results if walking the specified path returns multiple numerical results. */
    public aggregationMethod: OracleJob.JsonParseTask.AggregationMethod;

    /**
     * Creates a new JsonParseTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JsonParseTask instance
     */
    public static create(
      properties?: OracleJob.IJsonParseTask
    ): OracleJob.JsonParseTask;

    /**
     * Encodes the specified JsonParseTask message. Does not implicitly {@apilink OracleJob.JsonParseTask.verify|verify} messages.
     * @param message JsonParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IJsonParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified JsonParseTask message, length delimited. Does not implicitly {@apilink OracleJob.JsonParseTask.verify|verify} messages.
     * @param message JsonParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IJsonParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a JsonParseTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JsonParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.JsonParseTask;

    /**
     * Decodes a JsonParseTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JsonParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.JsonParseTask;

    /**
     * Verifies a JsonParseTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a JsonParseTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JsonParseTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.JsonParseTask;

    /**
     * Creates a plain object from a JsonParseTask message. Also converts values to other types if specified.
     * @param message JsonParseTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.JsonParseTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this JsonParseTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for JsonParseTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace JsonParseTask {
    /** The methods of combining a list of numerical results. */
    enum AggregationMethod {
      NONE = 0,
      MIN = 1,
      MAX = 2,
      SUM = 3,
      MEAN = 4,
      MEDIAN = 5,
    }
  }

  /** Properties of a MedianTask. */
  interface IMedianTask {
    /** A list of subtasks to process and produce a list of result values. */
    tasks?: OracleJob.ITask[] | null;

    /** A list of subjobs to process and produce a list of result values. */
    jobs?: IOracleJob[] | null;

    /** The minimum number of values before a successful median can be yielded. */
    minSuccessfulRequired?: number | null;
  }

  /**
   * Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.
   *
   * _**Input**_: None
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the median numerical result of 3 tasks.
   *
   * ```json
   * {"medianTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
   * ```
   *
   * _**Example**_: Returns the median numerical result of 3 jobs.
   *
   * ```json
   * {"medianTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
   * ```
   */
  class MedianTask implements IMedianTask {
    /**
     * Constructs a new MedianTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMedianTask);

    /** A list of subtasks to process and produce a list of result values. */
    public tasks: OracleJob.ITask[];

    /** A list of subjobs to process and produce a list of result values. */
    public jobs: IOracleJob[];

    /** The minimum number of values before a successful median can be yielded. */
    public minSuccessfulRequired: number;

    /**
     * Creates a new MedianTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MedianTask instance
     */
    public static create(
      properties?: OracleJob.IMedianTask
    ): OracleJob.MedianTask;

    /**
     * Encodes the specified MedianTask message. Does not implicitly {@apilink OracleJob.MedianTask.verify|verify} messages.
     * @param message MedianTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMedianTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MedianTask message, length delimited. Does not implicitly {@apilink OracleJob.MedianTask.verify|verify} messages.
     * @param message MedianTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMedianTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MedianTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MedianTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MedianTask;

    /**
     * Decodes a MedianTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MedianTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MedianTask;

    /**
     * Verifies a MedianTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MedianTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MedianTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.MedianTask;

    /**
     * Creates a plain object from a MedianTask message. Also converts values to other types if specified.
     * @param message MedianTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MedianTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MedianTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MedianTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MeanTask. */
  interface IMeanTask {
    /** A list of subtasks to process and produce a list of result values. */
    tasks?: OracleJob.ITask[] | null;

    /** A list of subjobs to process and produce a list of result values. */
    jobs?: IOracleJob[] | null;
  }

  /**
   * Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
   *
   * _**Input**_: None
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the mean numerical result of 3 tasks.
   *
   * ```json
   * {"meanTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
   * ```
   *
   * _**Example**_: Returns the mean numerical result of 3 jobs.
   *
   * ```json
   * {"meanTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
   * ```
   */
  class MeanTask implements IMeanTask {
    /**
     * Constructs a new MeanTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMeanTask);

    /** A list of subtasks to process and produce a list of result values. */
    public tasks: OracleJob.ITask[];

    /** A list of subjobs to process and produce a list of result values. */
    public jobs: IOracleJob[];

    /**
     * Creates a new MeanTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MeanTask instance
     */
    public static create(properties?: OracleJob.IMeanTask): OracleJob.MeanTask;

    /**
     * Encodes the specified MeanTask message. Does not implicitly {@apilink OracleJob.MeanTask.verify|verify} messages.
     * @param message MeanTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMeanTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MeanTask message, length delimited. Does not implicitly {@apilink OracleJob.MeanTask.verify|verify} messages.
     * @param message MeanTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMeanTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MeanTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MeanTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MeanTask;

    /**
     * Decodes a MeanTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MeanTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MeanTask;

    /**
     * Verifies a MeanTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MeanTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MeanTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.MeanTask;

    /**
     * Creates a plain object from a MeanTask message. Also converts values to other types if specified.
     * @param message MeanTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MeanTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MeanTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MeanTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MaxTask. */
  interface IMaxTask {
    /** A list of subtasks to process and produce a list of result values. */
    tasks?: OracleJob.ITask[] | null;

    /** A list of subjobs to process and produce a list of result values. */
    jobs?: IOracleJob[] | null;
  }

  /**
   * Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
   *
   * _**Input**_: None
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the maximum numerical result from 3 tasks.
   *
   * ```json
   * {"maxTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
   * ```
   *
   * _**Example**_: Returns the maximum numerical result from 3 jobs.
   *
   * ```json
   * {"maxTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
   * ```
   */
  class MaxTask implements IMaxTask {
    /**
     * Constructs a new MaxTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMaxTask);

    /** A list of subtasks to process and produce a list of result values. */
    public tasks: OracleJob.ITask[];

    /** A list of subjobs to process and produce a list of result values. */
    public jobs: IOracleJob[];

    /**
     * Creates a new MaxTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MaxTask instance
     */
    public static create(properties?: OracleJob.IMaxTask): OracleJob.MaxTask;

    /**
     * Encodes the specified MaxTask message. Does not implicitly {@apilink OracleJob.MaxTask.verify|verify} messages.
     * @param message MaxTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMaxTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MaxTask message, length delimited. Does not implicitly {@apilink OracleJob.MaxTask.verify|verify} messages.
     * @param message MaxTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMaxTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MaxTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MaxTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MaxTask;

    /**
     * Decodes a MaxTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MaxTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MaxTask;

    /**
     * Verifies a MaxTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MaxTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MaxTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.MaxTask;

    /**
     * Creates a plain object from a MaxTask message. Also converts values to other types if specified.
     * @param message MaxTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MaxTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MaxTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MaxTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MinTask. */
  interface IMinTask {
    /** A list of subtasks to process and produce a list of result values. */
    tasks?: OracleJob.ITask[] | null;

    /** A list of subjobs to process and produce a list of result values. */
    jobs?: IOracleJob[] | null;
  }

  /**
   * Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
   *
   * _**Input**_: None
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the minimum numerical result from 3 tasks.
   *
   * ```json
   * {"minTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
   * ```
   *
   * _**Example**_: Returns the minimum numerical result from 3 jobs.
   *
   * ```json
   * {"minTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
   * ```
   */
  class MinTask implements IMinTask {
    /**
     * Constructs a new MinTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMinTask);

    /** A list of subtasks to process and produce a list of result values. */
    public tasks: OracleJob.ITask[];

    /** A list of subjobs to process and produce a list of result values. */
    public jobs: IOracleJob[];

    /**
     * Creates a new MinTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MinTask instance
     */
    public static create(properties?: OracleJob.IMinTask): OracleJob.MinTask;

    /**
     * Encodes the specified MinTask message. Does not implicitly {@apilink OracleJob.MinTask.verify|verify} messages.
     * @param message MinTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMinTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MinTask message, length delimited. Does not implicitly {@apilink OracleJob.MinTask.verify|verify} messages.
     * @param message MinTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMinTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MinTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MinTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MinTask;

    /**
     * Decodes a MinTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MinTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MinTask;

    /**
     * Verifies a MinTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MinTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MinTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.MinTask;

    /**
     * Creates a plain object from a MinTask message. Also converts values to other types if specified.
     * @param message MinTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MinTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MinTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MinTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ValueTask. */
  interface IValueTask {
    /** The value that will be returned from this task. */
    value?: number | null;

    /** Specifies an aggregatorr to pull the value of. */
    aggregatorPubkey?: string | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    big?: string | null;
  }

  /**
   * Returns a specified value.
   *
   * _**Input**_: None
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the value 10
   *
   * ```json
   * {"valueTask": {"value": 10} }
   * ```
   *
   * _**Example**_: Returns the currentRound result of an aggregator
   *
   * ```json
   * {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
   * ```
   *
   * _**Example**_: Returns the value stored in a CacheTask variable
   *
   * ```json
   * {"valueTask": {"big": "${ONE}"} }
   * ```
   */
  class ValueTask implements IValueTask {
    /**
     * Constructs a new ValueTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IValueTask);

    /** The value that will be returned from this task. */
    public value?: number | null;

    /** Specifies an aggregatorr to pull the value of. */
    public aggregatorPubkey?: string | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    public big?: string | null;

    /** ValueTask Value. */
    public Value?: "value" | "aggregatorPubkey" | "big";

    /**
     * Creates a new ValueTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ValueTask instance
     */
    public static create(
      properties?: OracleJob.IValueTask
    ): OracleJob.ValueTask;

    /**
     * Encodes the specified ValueTask message. Does not implicitly {@apilink OracleJob.ValueTask.verify|verify} messages.
     * @param message ValueTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IValueTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ValueTask message, length delimited. Does not implicitly {@apilink OracleJob.ValueTask.verify|verify} messages.
     * @param message ValueTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IValueTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ValueTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ValueTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.ValueTask;

    /**
     * Decodes a ValueTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ValueTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.ValueTask;

    /**
     * Verifies a ValueTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ValueTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ValueTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.ValueTask;

    /**
     * Creates a plain object from a ValueTask message. Also converts values to other types if specified.
     * @param message ValueTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.ValueTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ValueTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ValueTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a WebsocketTask. */
  interface IWebsocketTask {
    /** The websocket url. */
    url?: string | null;

    /** The websocket message to notify of a new subscription. */
    subscription?: string | null;

    /** Minimum amount of time required between when the horses are taking out. */
    maxDataAgeSeconds?: number | null;

    /**
     * Incoming message JSONPath filter.
     * Example: "$[?(@.channel == 'ticker' && @.market == 'BTC/USD')]"
     */
    filter?: string | null;
  }

  /**
   * Opens and maintains a websocket for light speed data retrieval.
   *
   * _**Input**_: None
   *
   * _**Returns**_: String representation of the websocket subscription message.
   *
   * _**Example**_: Opens a coinbase websocket
   *
   * ```json
   * { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":[\"BTC-USD\"],\"channels\":[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"]}]}", "maxDataAgeSeconds": 15, "filter": "$[?(@.type == 'ticker' && @.product_id == 'BTC-USD')]" } }
   * ```
   */
  class WebsocketTask implements IWebsocketTask {
    /**
     * Constructs a new WebsocketTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IWebsocketTask);

    /** The websocket url. */
    public url: string;

    /** The websocket message to notify of a new subscription. */
    public subscription: string;

    /** Minimum amount of time required between when the horses are taking out. */
    public maxDataAgeSeconds: number;

    /**
     * Incoming message JSONPath filter.
     * Example: "$[?(@.channel == 'ticker' && @.market == 'BTC/USD')]"
     */
    public filter: string;

    /**
     * Creates a new WebsocketTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WebsocketTask instance
     */
    public static create(
      properties?: OracleJob.IWebsocketTask
    ): OracleJob.WebsocketTask;

    /**
     * Encodes the specified WebsocketTask message. Does not implicitly {@apilink OracleJob.WebsocketTask.verify|verify} messages.
     * @param message WebsocketTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IWebsocketTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified WebsocketTask message, length delimited. Does not implicitly {@apilink OracleJob.WebsocketTask.verify|verify} messages.
     * @param message WebsocketTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IWebsocketTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a WebsocketTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WebsocketTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.WebsocketTask;

    /**
     * Decodes a WebsocketTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WebsocketTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.WebsocketTask;

    /**
     * Verifies a WebsocketTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a WebsocketTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WebsocketTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.WebsocketTask;

    /**
     * Creates a plain object from a WebsocketTask message. Also converts values to other types if specified.
     * @param message WebsocketTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.WebsocketTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this WebsocketTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WebsocketTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ConditionalTask. */
  interface IConditionalTask {
    /** A list of subtasks to process in an attempt to produce a valid numerical result. */
    attempt?: OracleJob.ITask[] | null;

    /**
     * A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable
     * result.
     */
    onFailure?: OracleJob.ITask[] | null;
  }

  /**
   * This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
   *
   * _**Input**_: The current running numerical result output from a task.
   *
   * _**Returns**_: A numerical result, else run `on_failure` subtasks.
   *
   * _**Example**_: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
   *
   * ```json
   * {"conditionalTask":{"attempt":[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}]}],"onFailure":[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}]}}
   * ```
   */
  class ConditionalTask implements IConditionalTask {
    /**
     * Constructs a new ConditionalTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IConditionalTask);

    /** A list of subtasks to process in an attempt to produce a valid numerical result. */
    public attempt: OracleJob.ITask[];

    /**
     * A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable
     * result.
     */
    public onFailure: OracleJob.ITask[];

    /**
     * Creates a new ConditionalTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ConditionalTask instance
     */
    public static create(
      properties?: OracleJob.IConditionalTask
    ): OracleJob.ConditionalTask;

    /**
     * Encodes the specified ConditionalTask message. Does not implicitly {@apilink OracleJob.ConditionalTask.verify|verify} messages.
     * @param message ConditionalTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IConditionalTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ConditionalTask message, length delimited. Does not implicitly {@apilink OracleJob.ConditionalTask.verify|verify} messages.
     * @param message ConditionalTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IConditionalTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ConditionalTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ConditionalTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.ConditionalTask;

    /**
     * Decodes a ConditionalTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ConditionalTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.ConditionalTask;

    /**
     * Verifies a ConditionalTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ConditionalTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ConditionalTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.ConditionalTask;

    /**
     * Creates a plain object from a ConditionalTask message. Also converts values to other types if specified.
     * @param message ConditionalTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.ConditionalTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ConditionalTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ConditionalTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a DivideTask. */
  interface IDivideTask {
    /** Specifies a basic scalar denominator to divide by. */
    scalar?: number | null;

    /** Specifies another aggregator resut to divide by. */
    aggregatorPubkey?: string | null;

    /** A job whose result is computed before dividing our numerical input by that result. */
    job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    big?: string | null;
  }

  /**
   * This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
   *
   * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the numerical result by dividing by a job of subtasks.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by dividing by an aggregator.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by dividing by a big.
   *
   * ```json
   * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
   * ```
   */
  class DivideTask implements IDivideTask {
    /**
     * Constructs a new DivideTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IDivideTask);

    /** Specifies a basic scalar denominator to divide by. */
    public scalar?: number | null;

    /** Specifies another aggregator resut to divide by. */
    public aggregatorPubkey?: string | null;

    /** A job whose result is computed before dividing our numerical input by that result. */
    public job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    public big?: string | null;

    /** DivideTask Denominator. */
    public Denominator?: "scalar" | "aggregatorPubkey" | "job" | "big";

    /**
     * Creates a new DivideTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DivideTask instance
     */
    public static create(
      properties?: OracleJob.IDivideTask
    ): OracleJob.DivideTask;

    /**
     * Encodes the specified DivideTask message. Does not implicitly {@apilink OracleJob.DivideTask.verify|verify} messages.
     * @param message DivideTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IDivideTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DivideTask message, length delimited. Does not implicitly {@apilink OracleJob.DivideTask.verify|verify} messages.
     * @param message DivideTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IDivideTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DivideTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DivideTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.DivideTask;

    /**
     * Decodes a DivideTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DivideTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.DivideTask;

    /**
     * Verifies a DivideTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DivideTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DivideTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.DivideTask;

    /**
     * Creates a plain object from a DivideTask message. Also converts values to other types if specified.
     * @param message DivideTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.DivideTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DivideTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DivideTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MultiplyTask. */
  interface IMultiplyTask {
    /** Specifies a scalar to multiply by. */
    scalar?: number | null;

    /** Specifies an aggregator to multiply by. */
    aggregatorPubkey?: string | null;

    /** A job whose result is computed before multiplying our numerical input by that result. */
    job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    big?: string | null;
  }

  /**
   * This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
   *
   * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the numerical result by multiplying by a job of subtasks.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by multiplying by an aggregator.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by multiplying by a big.
   *
   * ```json
   * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
   * ```
   */
  class MultiplyTask implements IMultiplyTask {
    /**
     * Constructs a new MultiplyTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMultiplyTask);

    /** Specifies a scalar to multiply by. */
    public scalar?: number | null;

    /** Specifies an aggregator to multiply by. */
    public aggregatorPubkey?: string | null;

    /** A job whose result is computed before multiplying our numerical input by that result. */
    public job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    public big?: string | null;

    /** MultiplyTask Multiple. */
    public Multiple?: "scalar" | "aggregatorPubkey" | "job" | "big";

    /**
     * Creates a new MultiplyTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiplyTask instance
     */
    public static create(
      properties?: OracleJob.IMultiplyTask
    ): OracleJob.MultiplyTask;

    /**
     * Encodes the specified MultiplyTask message. Does not implicitly {@apilink OracleJob.MultiplyTask.verify|verify} messages.
     * @param message MultiplyTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMultiplyTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MultiplyTask message, length delimited. Does not implicitly {@apilink OracleJob.MultiplyTask.verify|verify} messages.
     * @param message MultiplyTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMultiplyTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MultiplyTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiplyTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MultiplyTask;

    /**
     * Decodes a MultiplyTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiplyTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MultiplyTask;

    /**
     * Verifies a MultiplyTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MultiplyTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiplyTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.MultiplyTask;

    /**
     * Creates a plain object from a MultiplyTask message. Also converts values to other types if specified.
     * @param message MultiplyTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MultiplyTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MultiplyTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MultiplyTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an AddTask. */
  interface IAddTask {
    /** Specifies a scalar to add by. */
    scalar?: number | null;

    /** Specifies an aggregator to add by. */
    aggregatorPubkey?: string | null;

    /** A job whose result is computed before adding our numerical input by that result. */
    job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    big?: string | null;
  }

  /**
   * This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
   *
   * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the numerical result by adding by a job of subtasks.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by multiplying by an aggregator.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by multiplying by a big.
   *
   * ```json
   * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
   * ```
   */
  class AddTask implements IAddTask {
    /**
     * Constructs a new AddTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IAddTask);

    /** Specifies a scalar to add by. */
    public scalar?: number | null;

    /** Specifies an aggregator to add by. */
    public aggregatorPubkey?: string | null;

    /** A job whose result is computed before adding our numerical input by that result. */
    public job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    public big?: string | null;

    /** AddTask Addition. */
    public Addition?: "scalar" | "aggregatorPubkey" | "job" | "big";

    /**
     * Creates a new AddTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddTask instance
     */
    public static create(properties?: OracleJob.IAddTask): OracleJob.AddTask;

    /**
     * Encodes the specified AddTask message. Does not implicitly {@apilink OracleJob.AddTask.verify|verify} messages.
     * @param message AddTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IAddTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AddTask message, length delimited. Does not implicitly {@apilink OracleJob.AddTask.verify|verify} messages.
     * @param message AddTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IAddTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AddTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AddTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.AddTask;

    /**
     * Decodes an AddTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AddTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.AddTask;

    /**
     * Verifies an AddTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AddTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AddTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.AddTask;

    /**
     * Creates a plain object from an AddTask message. Also converts values to other types if specified.
     * @param message AddTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.AddTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AddTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AddTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SubtractTask. */
  interface ISubtractTask {
    /** Specifies a scalar to subtract by. */
    scalar?: number | null;

    /** Specifies an aggregator to subtract by. */
    aggregatorPubkey?: string | null;

    /** A job whose result is computed before subtracting our numerical input by that result. */
    job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    big?: string | null;
  }

  /**
   * This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
   *
   * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
   *
   * _**Returns**_: A numerical result.
   *
   * _**Example**_: Returns the numerical result by subtracting by a job of subtasks.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by multiplying by an aggregator.
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
   * ```
   *
   * _**Example**_: Returns the numerical result by multiplying by a big.
   *
   * ```json
   * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
   * ```
   */
  class SubtractTask implements ISubtractTask {
    /**
     * Constructs a new SubtractTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISubtractTask);

    /** Specifies a scalar to subtract by. */
    public scalar?: number | null;

    /** Specifies an aggregator to subtract by. */
    public aggregatorPubkey?: string | null;

    /** A job whose result is computed before subtracting our numerical input by that result. */
    public job?: IOracleJob | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    public big?: string | null;

    /** SubtractTask Subtraction. */
    public Subtraction?: "scalar" | "aggregatorPubkey" | "job" | "big";

    /**
     * Creates a new SubtractTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SubtractTask instance
     */
    public static create(
      properties?: OracleJob.ISubtractTask
    ): OracleJob.SubtractTask;

    /**
     * Encodes the specified SubtractTask message. Does not implicitly {@apilink OracleJob.SubtractTask.verify|verify} messages.
     * @param message SubtractTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISubtractTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SubtractTask message, length delimited. Does not implicitly {@apilink OracleJob.SubtractTask.verify|verify} messages.
     * @param message SubtractTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISubtractTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SubtractTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SubtractTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SubtractTask;

    /**
     * Decodes a SubtractTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SubtractTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SubtractTask;

    /**
     * Verifies a SubtractTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SubtractTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SubtractTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SubtractTask;

    /**
     * Creates a plain object from a SubtractTask message. Also converts values to other types if specified.
     * @param message SubtractTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SubtractTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SubtractTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SubtractTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a LpTokenPriceTask. */
  interface ILpTokenPriceTask {
    /** Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js */
    mercurialPoolAddress?: string | null;

    /** Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist */
    saberPoolAddress?: string | null;

    /** Orca pool address. A full list can be found here: https://www.orca.so/pools */
    orcaPoolAddress?: string | null;

    /** The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json */
    raydiumPoolAddress?: string | null;

    /** A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation. */
    priceFeedAddresses?: string[] | null;

    /** A list of OracleJobs to execute in order to yield the price feed jobs to use for the fair price formula. */
    priceFeedJobs?: IOracleJob[] | null;

    /** If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239 */
    useFairPrice?: boolean | null;
  }

  /**
   * Fetch LP token price info from a number of supported exchanges.
   *
   * See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
   *
   * *NOTE**: This is not the swap price but the price of the underlying LP token.
   *
   * _**Input**_: None
   *
   * _**Returns**_: The price of an LP token for a given AMM pool.
   *
   * _**Example**_: Fetch the Orca LP token price of the SOL/USDC pool
   *
   * ```json
   * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
   * ```
   *
   * _**Example**_: Fetch the fair price Orca LP token price of the SOL/USDC pool
   *
   * ```json
   * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": [ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
   * ```
   *
   * _**Example**_: Fetch the fair price Raydium LP token price of the SOL/USDC pool
   *
   * ```json
   * { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": ["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
   * ```
   */
  class LpTokenPriceTask implements ILpTokenPriceTask {
    /**
     * Constructs a new LpTokenPriceTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ILpTokenPriceTask);

    /** Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js */
    public mercurialPoolAddress?: string | null;

    /** Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist */
    public saberPoolAddress?: string | null;

    /** Orca pool address. A full list can be found here: https://www.orca.so/pools */
    public orcaPoolAddress?: string | null;

    /** The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json */
    public raydiumPoolAddress?: string | null;

    /** A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation. */
    public priceFeedAddresses: string[];

    /** A list of OracleJobs to execute in order to yield the price feed jobs to use for the fair price formula. */
    public priceFeedJobs: IOracleJob[];

    /** If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239 */
    public useFairPrice: boolean;

    /** LpTokenPriceTask PoolAddress. */
    public PoolAddress?:
      | "mercurialPoolAddress"
      | "saberPoolAddress"
      | "orcaPoolAddress"
      | "raydiumPoolAddress";

    /**
     * Creates a new LpTokenPriceTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LpTokenPriceTask instance
     */
    public static create(
      properties?: OracleJob.ILpTokenPriceTask
    ): OracleJob.LpTokenPriceTask;

    /**
     * Encodes the specified LpTokenPriceTask message. Does not implicitly {@apilink OracleJob.LpTokenPriceTask.verify|verify} messages.
     * @param message LpTokenPriceTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ILpTokenPriceTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LpTokenPriceTask message, length delimited. Does not implicitly {@apilink OracleJob.LpTokenPriceTask.verify|verify} messages.
     * @param message LpTokenPriceTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ILpTokenPriceTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LpTokenPriceTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LpTokenPriceTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.LpTokenPriceTask;

    /**
     * Decodes a LpTokenPriceTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LpTokenPriceTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.LpTokenPriceTask;

    /**
     * Verifies a LpTokenPriceTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LpTokenPriceTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LpTokenPriceTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.LpTokenPriceTask;

    /**
     * Creates a plain object from a LpTokenPriceTask message. Also converts values to other types if specified.
     * @param message LpTokenPriceTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.LpTokenPriceTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LpTokenPriceTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LpTokenPriceTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a LpExchangeRateTask. */
  interface ILpExchangeRateTask {
    /** Used alongside mercurial_pool_address to specify the input token for a swap. */
    inTokenAddress?: string | null;

    /** Used alongside mercurial_pool_address to specify the output token for a swap. */
    outTokenAddress?: string | null;

    /** Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js */
    mercurialPoolAddress?: string | null;

    /** Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist */
    saberPoolAddress?: string | null;

    /** *@deprecated** Use orcaPoolAddress */
    orcaPoolTokenMintAddress?: string | null;

    /** The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json */
    raydiumPoolAddress?: string | null;

    /**
     * Pool address for an Orca LP pool or whirlpool.
     * A full list of Orca LP pools can be found here: https://www.orca.so/pools
     */
    orcaPoolAddress?: string | null;

    /** The Port reserve pubkey. A full list can be found here: https://api-v1.port.finance/reserves */
    portReserveAddress?: string | null;
  }

  /**
   * Fetch the current swap price for a given liquidity pool
   *
   * _**Input**_: None
   *
   * _**Returns**_: The swap price for a given AMM pool.
   *
   * _**Example**_: Fetch the exchange rate from the Orca SOL/USDC pool
   *
   * ```json
   * { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
   * ```
   *
   * _**Example**_: Fetch the exchange rate from the Raydium SOL/USDC pool
   *
   * ```json
   * { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
   * ```
   */
  class LpExchangeRateTask implements ILpExchangeRateTask {
    /**
     * Constructs a new LpExchangeRateTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ILpExchangeRateTask);

    /** Used alongside mercurial_pool_address to specify the input token for a swap. */
    public inTokenAddress: string;

    /** Used alongside mercurial_pool_address to specify the output token for a swap. */
    public outTokenAddress: string;

    /** Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js */
    public mercurialPoolAddress?: string | null;

    /** Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist */
    public saberPoolAddress?: string | null;

    /** **@deprecated** Use orcaPoolAddress */
    public orcaPoolTokenMintAddress?: string | null;

    /** The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json */
    public raydiumPoolAddress?: string | null;

    /**
     * Pool address for an Orca LP pool or whirlpool.
     * A full list of Orca LP pools can be found here: https://www.orca.so/pools
     */
    public orcaPoolAddress?: string | null;

    /** The Port reserve pubkey. A full list can be found here: https://api-v1.port.finance/reserves */
    public portReserveAddress?: string | null;

    /** LpExchangeRateTask PoolAddress. */
    public PoolAddress?:
      | "mercurialPoolAddress"
      | "saberPoolAddress"
      | "orcaPoolTokenMintAddress"
      | "raydiumPoolAddress"
      | "orcaPoolAddress"
      | "portReserveAddress";

    /**
     * Creates a new LpExchangeRateTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LpExchangeRateTask instance
     */
    public static create(
      properties?: OracleJob.ILpExchangeRateTask
    ): OracleJob.LpExchangeRateTask;

    /**
     * Encodes the specified LpExchangeRateTask message. Does not implicitly {@apilink OracleJob.LpExchangeRateTask.verify|verify} messages.
     * @param message LpExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ILpExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LpExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.LpExchangeRateTask.verify|verify} messages.
     * @param message LpExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ILpExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LpExchangeRateTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LpExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.LpExchangeRateTask;

    /**
     * Decodes a LpExchangeRateTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LpExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.LpExchangeRateTask;

    /**
     * Verifies a LpExchangeRateTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LpExchangeRateTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LpExchangeRateTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.LpExchangeRateTask;

    /**
     * Creates a plain object from a LpExchangeRateTask message. Also converts values to other types if specified.
     * @param message LpExchangeRateTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.LpExchangeRateTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LpExchangeRateTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LpExchangeRateTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a RegexExtractTask. */
  interface IRegexExtractTask {
    /** Regex pattern to find. */
    pattern?: string | null;

    /** Group number to extract. */
    groupNumber?: number | null;
  }

  /** Find a pattern within a string of a previous task and extract a group number. */
  class RegexExtractTask implements IRegexExtractTask {
    /**
     * Constructs a new RegexExtractTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IRegexExtractTask);

    /** Regex pattern to find. */
    public pattern: string;

    /** Group number to extract. */
    public groupNumber: number;

    /**
     * Creates a new RegexExtractTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RegexExtractTask instance
     */
    public static create(
      properties?: OracleJob.IRegexExtractTask
    ): OracleJob.RegexExtractTask;

    /**
     * Encodes the specified RegexExtractTask message. Does not implicitly {@apilink OracleJob.RegexExtractTask.verify|verify} messages.
     * @param message RegexExtractTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IRegexExtractTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified RegexExtractTask message, length delimited. Does not implicitly {@apilink OracleJob.RegexExtractTask.verify|verify} messages.
     * @param message RegexExtractTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IRegexExtractTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a RegexExtractTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RegexExtractTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.RegexExtractTask;

    /**
     * Decodes a RegexExtractTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RegexExtractTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.RegexExtractTask;

    /**
     * Verifies a RegexExtractTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a RegexExtractTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RegexExtractTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.RegexExtractTask;

    /**
     * Creates a plain object from a RegexExtractTask message. Also converts values to other types if specified.
     * @param message RegexExtractTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.RegexExtractTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this RegexExtractTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RegexExtractTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a XStepPriceTask. */
  interface IXStepPriceTask {
    /** median task containing the job definitions to fetch the STEP/USD price */
    stepJob?: OracleJob.IMedianTask | null;

    /** existing aggregator pubkey for STEP/USD */
    stepAggregatorPubkey?: string | null;
  }

  /** Represents a XStepPriceTask. */
  class XStepPriceTask implements IXStepPriceTask {
    /**
     * Constructs a new XStepPriceTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IXStepPriceTask);

    /** median task containing the job definitions to fetch the STEP/USD price */
    public stepJob?: OracleJob.IMedianTask | null;

    /** existing aggregator pubkey for STEP/USD */
    public stepAggregatorPubkey?: string | null;

    /** XStepPriceTask StepSource. */
    public StepSource?: "stepJob" | "stepAggregatorPubkey";

    /**
     * Creates a new XStepPriceTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns XStepPriceTask instance
     */
    public static create(
      properties?: OracleJob.IXStepPriceTask
    ): OracleJob.XStepPriceTask;

    /**
     * Encodes the specified XStepPriceTask message. Does not implicitly {@apilink OracleJob.XStepPriceTask.verify|verify} messages.
     * @param message XStepPriceTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IXStepPriceTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified XStepPriceTask message, length delimited. Does not implicitly {@apilink OracleJob.XStepPriceTask.verify|verify} messages.
     * @param message XStepPriceTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IXStepPriceTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a XStepPriceTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns XStepPriceTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.XStepPriceTask;

    /**
     * Decodes a XStepPriceTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns XStepPriceTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.XStepPriceTask;

    /**
     * Verifies a XStepPriceTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a XStepPriceTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns XStepPriceTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.XStepPriceTask;

    /**
     * Creates a plain object from a XStepPriceTask message. Also converts values to other types if specified.
     * @param message XStepPriceTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.XStepPriceTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this XStepPriceTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for XStepPriceTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a TwapTask. */
  interface ITwapTask {
    /** The target aggregator for the TWAP. */
    aggregatorPubkey?: string | null;

    /** Period, in seconds, the twap should account for */
    period?: number | null;

    /** Weight samples by their propagation time */
    weightByPropagationTime?: boolean | null;

    /** Minimum number of samples in the history to calculate a valid result */
    minSamples?: number | null;

    /** Ending unix timestamp to collect values up to */
    endingUnixTimestamp?: number | null;

    /** Execute the task to get the ending unix timestamp */
    endingUnixTimestampTask?: OracleJob.ICronParseTask | null;
  }

  /**
   * Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
   *
   * _**Input**_: None
   *
   * _**Returns**_: The time weighted average of an aggregator over a given time period.
   *
   * _**Example**_: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
   *
   * ```json
   * { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
   * ```
   */
  class TwapTask implements ITwapTask {
    /**
     * Constructs a new TwapTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ITwapTask);

    /** The target aggregator for the TWAP. */
    public aggregatorPubkey: string;

    /** Period, in seconds, the twap should account for */
    public period: number;

    /** Weight samples by their propagation time */
    public weightByPropagationTime: boolean;

    /** Minimum number of samples in the history to calculate a valid result */
    public minSamples: number;

    /** Ending unix timestamp to collect values up to */
    public endingUnixTimestamp: number;

    /** Execute the task to get the ending unix timestamp */
    public endingUnixTimestampTask?: OracleJob.ICronParseTask | null;

    /**
     * Creates a new TwapTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TwapTask instance
     */
    public static create(properties?: OracleJob.ITwapTask): OracleJob.TwapTask;

    /**
     * Encodes the specified TwapTask message. Does not implicitly {@apilink OracleJob.TwapTask.verify|verify} messages.
     * @param message TwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ITwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TwapTask message, length delimited. Does not implicitly {@apilink OracleJob.TwapTask.verify|verify} messages.
     * @param message TwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ITwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TwapTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.TwapTask;

    /**
     * Decodes a TwapTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.TwapTask;

    /**
     * Verifies a TwapTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TwapTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TwapTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.TwapTask;

    /**
     * Creates a plain object from a TwapTask message. Also converts values to other types if specified.
     * @param message TwapTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.TwapTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TwapTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TwapTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SerumSwapTask. */
  interface ISerumSwapTask {
    /** The serum pool to fetch swap price for */
    serumPoolAddress?: string | null;
  }

  /** Fetch the latest swap price on Serum's orderbook */
  class SerumSwapTask implements ISerumSwapTask {
    /**
     * Constructs a new SerumSwapTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISerumSwapTask);

    /** The serum pool to fetch swap price for */
    public serumPoolAddress: string;

    /**
     * Creates a new SerumSwapTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SerumSwapTask instance
     */
    public static create(
      properties?: OracleJob.ISerumSwapTask
    ): OracleJob.SerumSwapTask;

    /**
     * Encodes the specified SerumSwapTask message. Does not implicitly {@apilink OracleJob.SerumSwapTask.verify|verify} messages.
     * @param message SerumSwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISerumSwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SerumSwapTask message, length delimited. Does not implicitly {@apilink OracleJob.SerumSwapTask.verify|verify} messages.
     * @param message SerumSwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISerumSwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SerumSwapTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SerumSwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SerumSwapTask;

    /**
     * Decodes a SerumSwapTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SerumSwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SerumSwapTask;

    /**
     * Verifies a SerumSwapTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SerumSwapTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SerumSwapTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SerumSwapTask;

    /**
     * Creates a plain object from a SerumSwapTask message. Also converts values to other types if specified.
     * @param message SerumSwapTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SerumSwapTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SerumSwapTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SerumSwapTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a PowTask. */
  interface IPowTask {
    /** Take the working value to the exponent of value. */
    scalar?: number | null;

    /** Take the working value to the exponent of the aggregators value. */
    aggregatorPubkey?: string | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    big?: string | null;
  }

  /**
   * Round the current running result to an exponential power.
   *
   * _**Input**_: The current running numerical result.
   *
   * _**Returns**_: The input raised to an exponential power.
   *
   * _**Example**_: Raise 2 to the power of 3, 2^3
   *
   * ```json
   * {"tasks":[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}]}
   * ```
   */
  class PowTask implements IPowTask {
    /**
     * Constructs a new PowTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IPowTask);

    /** Take the working value to the exponent of value. */
    public scalar?: number | null;

    /** Take the working value to the exponent of the aggregators value. */
    public aggregatorPubkey?: string | null;

    /** A stringified big.js. `Accepts variable expansion syntax.` */
    public big?: string | null;

    /** PowTask Exponent. */
    public Exponent?: "scalar" | "aggregatorPubkey" | "big";

    /**
     * Creates a new PowTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PowTask instance
     */
    public static create(properties?: OracleJob.IPowTask): OracleJob.PowTask;

    /**
     * Encodes the specified PowTask message. Does not implicitly {@apilink OracleJob.PowTask.verify|verify} messages.
     * @param message PowTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IPowTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PowTask message, length delimited. Does not implicitly {@apilink OracleJob.PowTask.verify|verify} messages.
     * @param message PowTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IPowTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PowTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PowTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.PowTask;

    /**
     * Decodes a PowTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PowTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.PowTask;

    /**
     * Verifies a PowTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PowTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PowTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.PowTask;

    /**
     * Creates a plain object from a PowTask message. Also converts values to other types if specified.
     * @param message PowTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.PowTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PowTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PowTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a LendingRateTask. */
  interface ILendingRateTask {
    /** 01, apricot, francium, jet, larix, mango, port, solend, tulip */
    protocol?: string | null;

    /** A token mint address supported by the chosen protocol */
    assetMint?: string | null;

    /** LendingRateTask field */
    field?: OracleJob.LendingRateTask.Field | null;
  }

  /** Fetch the lending rates for various Solana protocols */
  class LendingRateTask implements ILendingRateTask {
    /**
     * Constructs a new LendingRateTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ILendingRateTask);

    /** 01, apricot, francium, jet, larix, mango, port, solend, tulip */
    public protocol: string;

    /** A token mint address supported by the chosen protocol */
    public assetMint: string;

    /** LendingRateTask field. */
    public field: OracleJob.LendingRateTask.Field;

    /**
     * Creates a new LendingRateTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LendingRateTask instance
     */
    public static create(
      properties?: OracleJob.ILendingRateTask
    ): OracleJob.LendingRateTask;

    /**
     * Encodes the specified LendingRateTask message. Does not implicitly {@apilink OracleJob.LendingRateTask.verify|verify} messages.
     * @param message LendingRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ILendingRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LendingRateTask message, length delimited. Does not implicitly {@apilink OracleJob.LendingRateTask.verify|verify} messages.
     * @param message LendingRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ILendingRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LendingRateTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LendingRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.LendingRateTask;

    /**
     * Decodes a LendingRateTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LendingRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.LendingRateTask;

    /**
     * Verifies a LendingRateTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LendingRateTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LendingRateTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.LendingRateTask;

    /**
     * Creates a plain object from a LendingRateTask message. Also converts values to other types if specified.
     * @param message LendingRateTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.LendingRateTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LendingRateTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LendingRateTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace LendingRateTask {
    /** Field enum. */
    enum Field {
      FIELD_DEPOSIT_RATE = 0,
      FIELD_BORROW_RATE = 1,
    }
  }

  /** Properties of a MangoPerpMarketTask. */
  interface IMangoPerpMarketTask {
    /** Mainnet address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json */
    perpMarketAddress?: string | null;
  }

  /** Fetch the current price for a Mango perpetual market */
  class MangoPerpMarketTask implements IMangoPerpMarketTask {
    /**
     * Constructs a new MangoPerpMarketTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMangoPerpMarketTask);

    /** Mainnet address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json */
    public perpMarketAddress: string;

    /**
     * Creates a new MangoPerpMarketTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MangoPerpMarketTask instance
     */
    public static create(
      properties?: OracleJob.IMangoPerpMarketTask
    ): OracleJob.MangoPerpMarketTask;

    /**
     * Encodes the specified MangoPerpMarketTask message. Does not implicitly {@apilink OracleJob.MangoPerpMarketTask.verify|verify} messages.
     * @param message MangoPerpMarketTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMangoPerpMarketTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MangoPerpMarketTask message, length delimited. Does not implicitly {@apilink OracleJob.MangoPerpMarketTask.verify|verify} messages.
     * @param message MangoPerpMarketTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMangoPerpMarketTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MangoPerpMarketTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MangoPerpMarketTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MangoPerpMarketTask;

    /**
     * Decodes a MangoPerpMarketTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MangoPerpMarketTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MangoPerpMarketTask;

    /**
     * Verifies a MangoPerpMarketTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MangoPerpMarketTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MangoPerpMarketTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.MangoPerpMarketTask;

    /**
     * Creates a plain object from a MangoPerpMarketTask message. Also converts values to other types if specified.
     * @param message MangoPerpMarketTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MangoPerpMarketTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MangoPerpMarketTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MangoPerpMarketTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a JupiterSwapTask. */
  interface IJupiterSwapTask {
    /** The input token address. */
    inTokenAddress?: string | null;

    /** The output token address. */
    outTokenAddress?: string | null;

    /** A list of AMM markets to allow. */
    allowList?: OracleJob.JupiterSwapTask.IFilterList | null;

    /** A list of AMM markets to deny. */
    denyList?: OracleJob.JupiterSwapTask.IFilterList | null;

    /** The amount of `in_token_address` tokens to swap. */
    baseAmount?: number | null;

    /** The amount of `out_token_address` tokens to swap. */
    quoteAmount?: number | null;

    /** The amount of `in_token_address` tokens to swap. */
    baseAmountString?: string | null;

    /** The amount of `out_token_address` tokens to swap. */
    quoteAmountString?: string | null;
  }

  /**
   * Fetch the simulated price for a swap on JupiterSwap.
   *
   * _**Input**_: None
   *
   * _**Returns**_: The swap price on Jupiter for a given input and output token mint address.
   *
   * _**Example**_: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
   *
   * ```json
   * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
   * ```
   *
   * _**Example**_: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
   *
   * ```json
   * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
   * ```
   */
  class JupiterSwapTask implements IJupiterSwapTask {
    /**
     * Constructs a new JupiterSwapTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IJupiterSwapTask);

    /** The input token address. */
    public inTokenAddress: string;

    /** The output token address. */
    public outTokenAddress: string;

    /** A list of AMM markets to allow. */
    public allowList?: OracleJob.JupiterSwapTask.IFilterList | null;

    /** A list of AMM markets to deny. */
    public denyList?: OracleJob.JupiterSwapTask.IFilterList | null;

    /** The amount of `in_token_address` tokens to swap. */
    public baseAmount?: number | null;

    /** The amount of `out_token_address` tokens to swap. */
    public quoteAmount?: number | null;

    /** The amount of `in_token_address` tokens to swap. */
    public baseAmountString?: string | null;

    /** The amount of `out_token_address` tokens to swap. */
    public quoteAmountString?: string | null;

    /** JupiterSwapTask RoutesFilters. */
    public RoutesFilters?: "allowList" | "denyList";

    /** JupiterSwapTask SwapAmount. */
    public SwapAmount?:
      | "baseAmount"
      | "quoteAmount"
      | "baseAmountString"
      | "quoteAmountString";

    /**
     * Creates a new JupiterSwapTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JupiterSwapTask instance
     */
    public static create(
      properties?: OracleJob.IJupiterSwapTask
    ): OracleJob.JupiterSwapTask;

    /**
     * Encodes the specified JupiterSwapTask message. Does not implicitly {@apilink OracleJob.JupiterSwapTask.verify|verify} messages.
     * @param message JupiterSwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IJupiterSwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified JupiterSwapTask message, length delimited. Does not implicitly {@apilink OracleJob.JupiterSwapTask.verify|verify} messages.
     * @param message JupiterSwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IJupiterSwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a JupiterSwapTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JupiterSwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.JupiterSwapTask;

    /**
     * Decodes a JupiterSwapTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JupiterSwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.JupiterSwapTask;

    /**
     * Verifies a JupiterSwapTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a JupiterSwapTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JupiterSwapTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.JupiterSwapTask;

    /**
     * Creates a plain object from a JupiterSwapTask message. Also converts values to other types if specified.
     * @param message JupiterSwapTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.JupiterSwapTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this JupiterSwapTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for JupiterSwapTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace JupiterSwapTask {
    /** Properties of a FilterList. */
    interface IFilterList {
      /** A list of Jupiter AMM labels to allow or deny (e.g. 'Raydium', 'Orca') */
      labels?: string[] | null;
    }

    /** Represents a FilterList. */
    class FilterList implements IFilterList {
      /**
       * Constructs a new FilterList.
       * @param [properties] Properties to set
       */
      constructor(properties?: OracleJob.JupiterSwapTask.IFilterList);

      /** A list of Jupiter AMM labels to allow or deny (e.g. 'Raydium', 'Orca') */
      public labels: string[];

      /**
       * Creates a new FilterList instance using the specified properties.
       * @param [properties] Properties to set
       * @returns FilterList instance
       */
      public static create(
        properties?: OracleJob.JupiterSwapTask.IFilterList
      ): OracleJob.JupiterSwapTask.FilterList;

      /**
       * Encodes the specified FilterList message. Does not implicitly {@apilink OracleJob.JupiterSwapTask.FilterList.verify|verify} messages.
       * @param message FilterList message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: OracleJob.JupiterSwapTask.IFilterList,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified FilterList message, length delimited. Does not implicitly {@apilink OracleJob.JupiterSwapTask.FilterList.verify|verify} messages.
       * @param message FilterList message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: OracleJob.JupiterSwapTask.IFilterList,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a FilterList message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns FilterList
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): OracleJob.JupiterSwapTask.FilterList;

      /**
       * Decodes a FilterList message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns FilterList
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): OracleJob.JupiterSwapTask.FilterList;

      /**
       * Verifies a FilterList message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a FilterList message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns FilterList
       */
      public static fromObject(object: {
        [k: string]: any;
      }): OracleJob.JupiterSwapTask.FilterList;

      /**
       * Creates a plain object from a FilterList message. Also converts values to other types if specified.
       * @param message FilterList
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: OracleJob.JupiterSwapTask.FilterList,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this FilterList to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for FilterList
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of a PerpMarketTask. */
  interface IPerpMarketTask {
    /** Market address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json */
    mangoMarketAddress?: string | null;

    /** Market address for a drift perpetual market. A full list can be found here: https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts */
    driftMarketAddress?: string | null;

    /** Market address for a zeta perpetual market. */
    zetaMarketAddress?: string | null;

    /** Market address for a 01 protocol perpetual market. */
    zoMarketAddress?: string | null;
  }

  /** Fetch the current price of a perpetual market. */
  class PerpMarketTask implements IPerpMarketTask {
    /**
     * Constructs a new PerpMarketTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IPerpMarketTask);

    /** Market address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json */
    public mangoMarketAddress?: string | null;

    /** Market address for a drift perpetual market. A full list can be found here: https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts */
    public driftMarketAddress?: string | null;

    /** Market address for a zeta perpetual market. */
    public zetaMarketAddress?: string | null;

    /** Market address for a 01 protocol perpetual market. */
    public zoMarketAddress?: string | null;

    /** PerpMarketTask MarketAddress. */
    public MarketAddress?:
      | "mangoMarketAddress"
      | "driftMarketAddress"
      | "zetaMarketAddress"
      | "zoMarketAddress";

    /**
     * Creates a new PerpMarketTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PerpMarketTask instance
     */
    public static create(
      properties?: OracleJob.IPerpMarketTask
    ): OracleJob.PerpMarketTask;

    /**
     * Encodes the specified PerpMarketTask message. Does not implicitly {@apilink OracleJob.PerpMarketTask.verify|verify} messages.
     * @param message PerpMarketTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IPerpMarketTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PerpMarketTask message, length delimited. Does not implicitly {@apilink OracleJob.PerpMarketTask.verify|verify} messages.
     * @param message PerpMarketTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IPerpMarketTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PerpMarketTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PerpMarketTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.PerpMarketTask;

    /**
     * Decodes a PerpMarketTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PerpMarketTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.PerpMarketTask;

    /**
     * Verifies a PerpMarketTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PerpMarketTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PerpMarketTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.PerpMarketTask;

    /**
     * Creates a plain object from a PerpMarketTask message. Also converts values to other types if specified.
     * @param message PerpMarketTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.PerpMarketTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PerpMarketTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PerpMarketTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an OracleTask. */
  interface IOracleTask {
    /** Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: https://switchboard.xyz/explorer */
    switchboardAddress?: string | null;

    /** Mainnet address for a Pyth feed. A full list can be found here: https://pyth.network/price-feeds/ */
    pythAddress?: string | null;

    /** Mainnet address for a Chainlink feed. A full list can be found here: https://docs.chain.link/docs/solana/data-feeds-solana */
    chainlinkAddress?: string | null;

    /**
     * Value (as a percentage) that the lower bound confidence interval is of the actual value.
     * Confidence intervals that are larger that this treshold are rejected.
     */
    pythAllowedConfidenceInterval?: number | null;
  }

  /**
   * Fetch the current price of a Solana oracle protocol.
   *
   * _**Input**_: None
   *
   * _**Returns**_: The current price of an on-chain oracle.
   *
   * _**Example**_: The Switchboard SOL/USD oracle price.
   *
   * ```json
   * { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
   * ```
   *
   * _**Example**_: The Pyth SOL/USD oracle price.
   *
   * ```json
   * { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
   * ```
   *
   * _**Example**_: The Chainlink SOL/USD oracle price.
   *
   * ```json
   * { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
   * ```
   */
  class OracleTask implements IOracleTask {
    /**
     * Constructs a new OracleTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IOracleTask);

    /** Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: https://switchboard.xyz/explorer */
    public switchboardAddress?: string | null;

    /** Mainnet address for a Pyth feed. A full list can be found here: https://pyth.network/price-feeds/ */
    public pythAddress?: string | null;

    /** Mainnet address for a Chainlink feed. A full list can be found here: https://docs.chain.link/docs/solana/data-feeds-solana */
    public chainlinkAddress?: string | null;

    /**
     * Value (as a percentage) that the lower bound confidence interval is of the actual value.
     * Confidence intervals that are larger that this treshold are rejected.
     */
    public pythAllowedConfidenceInterval: number;

    /** OracleTask AggregatorAddress. */
    public AggregatorAddress?:
      | "switchboardAddress"
      | "pythAddress"
      | "chainlinkAddress";

    /**
     * Creates a new OracleTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns OracleTask instance
     */
    public static create(
      properties?: OracleJob.IOracleTask
    ): OracleJob.OracleTask;

    /**
     * Encodes the specified OracleTask message. Does not implicitly {@apilink OracleJob.OracleTask.verify|verify} messages.
     * @param message OracleTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IOracleTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified OracleTask message, length delimited. Does not implicitly {@apilink OracleJob.OracleTask.verify|verify} messages.
     * @param message OracleTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IOracleTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an OracleTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns OracleTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.OracleTask;

    /**
     * Decodes an OracleTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns OracleTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.OracleTask;

    /**
     * Verifies an OracleTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an OracleTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns OracleTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.OracleTask;

    /**
     * Creates a plain object from an OracleTask message. Also converts values to other types if specified.
     * @param message OracleTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.OracleTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this OracleTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for OracleTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an AnchorFetchTask. */
  interface IAnchorFetchTask {
    /** Owning program of the account to parse. */
    programId?: string | null;

    /** The account to parse. */
    accountAddress?: string | null;
  }

  /** Load a parse an Anchor based solana account. */
  class AnchorFetchTask implements IAnchorFetchTask {
    /**
     * Constructs a new AnchorFetchTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IAnchorFetchTask);

    /** Owning program of the account to parse. */
    public programId: string;

    /** The account to parse. */
    public accountAddress: string;

    /**
     * Creates a new AnchorFetchTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AnchorFetchTask instance
     */
    public static create(
      properties?: OracleJob.IAnchorFetchTask
    ): OracleJob.AnchorFetchTask;

    /**
     * Encodes the specified AnchorFetchTask message. Does not implicitly {@apilink OracleJob.AnchorFetchTask.verify|verify} messages.
     * @param message AnchorFetchTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IAnchorFetchTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AnchorFetchTask message, length delimited. Does not implicitly {@apilink OracleJob.AnchorFetchTask.verify|verify} messages.
     * @param message AnchorFetchTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IAnchorFetchTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AnchorFetchTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AnchorFetchTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.AnchorFetchTask;

    /**
     * Decodes an AnchorFetchTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AnchorFetchTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.AnchorFetchTask;

    /**
     * Verifies an AnchorFetchTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AnchorFetchTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AnchorFetchTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.AnchorFetchTask;

    /**
     * Creates a plain object from an AnchorFetchTask message. Also converts values to other types if specified.
     * @param message AnchorFetchTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.AnchorFetchTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AnchorFetchTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for AnchorFetchTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a TpsTask. */
  interface ITpsTask {}

  /** Fetch the current transactions per second. */
  class TpsTask implements ITpsTask {
    /**
     * Constructs a new TpsTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ITpsTask);

    /**
     * Creates a new TpsTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TpsTask instance
     */
    public static create(properties?: OracleJob.ITpsTask): OracleJob.TpsTask;

    /**
     * Encodes the specified TpsTask message. Does not implicitly {@apilink OracleJob.TpsTask.verify|verify} messages.
     * @param message TpsTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ITpsTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TpsTask message, length delimited. Does not implicitly {@apilink OracleJob.TpsTask.verify|verify} messages.
     * @param message TpsTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ITpsTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TpsTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TpsTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.TpsTask;

    /**
     * Decodes a TpsTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TpsTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.TpsTask;

    /**
     * Verifies a TpsTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TpsTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TpsTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.TpsTask;

    /**
     * Creates a plain object from a TpsTask message. Also converts values to other types if specified.
     * @param message TpsTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.TpsTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TpsTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TpsTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SplStakePoolTask. */
  interface ISplStakePoolTask {
    /** The pubkey of the SPL Stake Pool. */
    pubkey?: string | null;
  }

  /** Fetch the JSON representation of an SPL Stake Pool account. */
  class SplStakePoolTask implements ISplStakePoolTask {
    /**
     * Constructs a new SplStakePoolTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISplStakePoolTask);

    /** The pubkey of the SPL Stake Pool. */
    public pubkey: string;

    /**
     * Creates a new SplStakePoolTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SplStakePoolTask instance
     */
    public static create(
      properties?: OracleJob.ISplStakePoolTask
    ): OracleJob.SplStakePoolTask;

    /**
     * Encodes the specified SplStakePoolTask message. Does not implicitly {@apilink OracleJob.SplStakePoolTask.verify|verify} messages.
     * @param message SplStakePoolTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISplStakePoolTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SplStakePoolTask message, length delimited. Does not implicitly {@apilink OracleJob.SplStakePoolTask.verify|verify} messages.
     * @param message SplStakePoolTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISplStakePoolTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SplStakePoolTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SplStakePoolTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SplStakePoolTask;

    /**
     * Decodes a SplStakePoolTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SplStakePoolTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SplStakePoolTask;

    /**
     * Verifies a SplStakePoolTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SplStakePoolTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SplStakePoolTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SplStakePoolTask;

    /**
     * Creates a plain object from a SplStakePoolTask message. Also converts values to other types if specified.
     * @param message SplStakePoolTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SplStakePoolTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SplStakePoolTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SplStakePoolTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SplTokenParseTask. */
  interface ISplTokenParseTask {
    /** The publicKey of a token account to fetch the mintInfo for. */
    tokenAccountAddress?: string | null;

    /** The publicKey of the token mint address. */
    mintAddress?: string | null;
  }

  /** Fetch the JSON representation of an SPL token mint. */
  class SplTokenParseTask implements ISplTokenParseTask {
    /**
     * Constructs a new SplTokenParseTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISplTokenParseTask);

    /** The publicKey of a token account to fetch the mintInfo for. */
    public tokenAccountAddress?: string | null;

    /** The publicKey of the token mint address. */
    public mintAddress?: string | null;

    /** SplTokenParseTask AccountAddress. */
    public AccountAddress?: "tokenAccountAddress" | "mintAddress";

    /**
     * Creates a new SplTokenParseTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SplTokenParseTask instance
     */
    public static create(
      properties?: OracleJob.ISplTokenParseTask
    ): OracleJob.SplTokenParseTask;

    /**
     * Encodes the specified SplTokenParseTask message. Does not implicitly {@apilink OracleJob.SplTokenParseTask.verify|verify} messages.
     * @param message SplTokenParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISplTokenParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SplTokenParseTask message, length delimited. Does not implicitly {@apilink OracleJob.SplTokenParseTask.verify|verify} messages.
     * @param message SplTokenParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISplTokenParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SplTokenParseTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SplTokenParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SplTokenParseTask;

    /**
     * Decodes a SplTokenParseTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SplTokenParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SplTokenParseTask;

    /**
     * Verifies a SplTokenParseTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SplTokenParseTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SplTokenParseTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SplTokenParseTask;

    /**
     * Creates a plain object from a SplTokenParseTask message. Also converts values to other types if specified.
     * @param message SplTokenParseTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SplTokenParseTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SplTokenParseTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SplTokenParseTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a DefiKingdomsTask. */
  interface IDefiKingdomsTask {
    /** The RPC provider to use for the swap. */
    provider?: string | null;

    /** The input token of the swap. */
    inToken?: OracleJob.DefiKingdomsTask.IToken | null;

    /** The output token of the swap. */
    outToken?: OracleJob.DefiKingdomsTask.IToken | null;
  }

  /** Fetch the swap price from DefiKingdoms. */
  class DefiKingdomsTask implements IDefiKingdomsTask {
    /**
     * Constructs a new DefiKingdomsTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IDefiKingdomsTask);

    /** The RPC provider to use for the swap. */
    public provider: string;

    /** The input token of the swap. */
    public inToken?: OracleJob.DefiKingdomsTask.IToken | null;

    /** The output token of the swap. */
    public outToken?: OracleJob.DefiKingdomsTask.IToken | null;

    /**
     * Creates a new DefiKingdomsTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DefiKingdomsTask instance
     */
    public static create(
      properties?: OracleJob.IDefiKingdomsTask
    ): OracleJob.DefiKingdomsTask;

    /**
     * Encodes the specified DefiKingdomsTask message. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.verify|verify} messages.
     * @param message DefiKingdomsTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IDefiKingdomsTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified DefiKingdomsTask message, length delimited. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.verify|verify} messages.
     * @param message DefiKingdomsTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IDefiKingdomsTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a DefiKingdomsTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DefiKingdomsTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.DefiKingdomsTask;

    /**
     * Decodes a DefiKingdomsTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DefiKingdomsTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.DefiKingdomsTask;

    /**
     * Verifies a DefiKingdomsTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a DefiKingdomsTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DefiKingdomsTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.DefiKingdomsTask;

    /**
     * Creates a plain object from a DefiKingdomsTask message. Also converts values to other types if specified.
     * @param message DefiKingdomsTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.DefiKingdomsTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this DefiKingdomsTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DefiKingdomsTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace DefiKingdomsTask {
    /** Properties of a Token. */
    interface IToken {
      /** The address of the token. */
      address?: string | null;

      /** The number of decimal places for a token. */
      decimals?: number | null;
    }

    /** Represents a Token. */
    class Token implements IToken {
      /**
       * Constructs a new Token.
       * @param [properties] Properties to set
       */
      constructor(properties?: OracleJob.DefiKingdomsTask.IToken);

      /** The address of the token. */
      public address: string;

      /** The number of decimal places for a token. */
      public decimals: number;

      /**
       * Creates a new Token instance using the specified properties.
       * @param [properties] Properties to set
       * @returns Token instance
       */
      public static create(
        properties?: OracleJob.DefiKingdomsTask.IToken
      ): OracleJob.DefiKingdomsTask.Token;

      /**
       * Encodes the specified Token message. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.Token.verify|verify} messages.
       * @param message Token message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: OracleJob.DefiKingdomsTask.IToken,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified Token message, length delimited. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.Token.verify|verify} messages.
       * @param message Token message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: OracleJob.DefiKingdomsTask.IToken,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a Token message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns Token
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): OracleJob.DefiKingdomsTask.Token;

      /**
       * Decodes a Token message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns Token
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): OracleJob.DefiKingdomsTask.Token;

      /**
       * Verifies a Token message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a Token message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns Token
       */
      public static fromObject(object: {
        [k: string]: any;
      }): OracleJob.DefiKingdomsTask.Token;

      /**
       * Creates a plain object from a Token message. Also converts values to other types if specified.
       * @param message Token
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: OracleJob.DefiKingdomsTask.Token,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this Token to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for Token
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of an UniswapExchangeRateTask. */
  interface IUniswapExchangeRateTask {
    /** The input token address. */
    inTokenAddress?: string | null;

    /** The output token address. */
    outTokenAddress?: string | null;

    /** The amount of tokens to swap. */
    inTokenAmount?: number | null;

    /** The allowable slippage in percent for the swap. */
    slippage?: number | null;

    /** The RPC provider to use for the swap. */
    provider?: string | null;
  }

  /** Fetch the swap price from UniSwap. */
  class UniswapExchangeRateTask implements IUniswapExchangeRateTask {
    /**
     * Constructs a new UniswapExchangeRateTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IUniswapExchangeRateTask);

    /** The input token address. */
    public inTokenAddress: string;

    /** The output token address. */
    public outTokenAddress: string;

    /** The amount of tokens to swap. */
    public inTokenAmount: number;

    /** The allowable slippage in percent for the swap. */
    public slippage: number;

    /** The RPC provider to use for the swap. */
    public provider: string;

    /**
     * Creates a new UniswapExchangeRateTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UniswapExchangeRateTask instance
     */
    public static create(
      properties?: OracleJob.IUniswapExchangeRateTask
    ): OracleJob.UniswapExchangeRateTask;

    /**
     * Encodes the specified UniswapExchangeRateTask message. Does not implicitly {@apilink OracleJob.UniswapExchangeRateTask.verify|verify} messages.
     * @param message UniswapExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IUniswapExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified UniswapExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.UniswapExchangeRateTask.verify|verify} messages.
     * @param message UniswapExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IUniswapExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an UniswapExchangeRateTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UniswapExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.UniswapExchangeRateTask;

    /**
     * Decodes an UniswapExchangeRateTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UniswapExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.UniswapExchangeRateTask;

    /**
     * Verifies an UniswapExchangeRateTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an UniswapExchangeRateTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UniswapExchangeRateTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.UniswapExchangeRateTask;

    /**
     * Creates a plain object from an UniswapExchangeRateTask message. Also converts values to other types if specified.
     * @param message UniswapExchangeRateTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.UniswapExchangeRateTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this UniswapExchangeRateTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UniswapExchangeRateTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SushiswapExchangeRateTask. */
  interface ISushiswapExchangeRateTask {
    /** The input token address. */
    inTokenAddress?: string | null;

    /** The output token address. */
    outTokenAddress?: string | null;

    /** The amount of tokens to swap. */
    inTokenAmount?: number | null;

    /** The allowable slippage in percent for the swap. */
    slippage?: number | null;

    /** The RPC provider to use for the swap. */
    provider?: string | null;
  }

  /** Fetch the swap price from SushiSwap. */
  class SushiswapExchangeRateTask implements ISushiswapExchangeRateTask {
    /**
     * Constructs a new SushiswapExchangeRateTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISushiswapExchangeRateTask);

    /** The input token address. */
    public inTokenAddress: string;

    /** The output token address. */
    public outTokenAddress: string;

    /** The amount of tokens to swap. */
    public inTokenAmount: number;

    /** The allowable slippage in percent for the swap. */
    public slippage: number;

    /** The RPC provider to use for the swap. */
    public provider: string;

    /**
     * Creates a new SushiswapExchangeRateTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SushiswapExchangeRateTask instance
     */
    public static create(
      properties?: OracleJob.ISushiswapExchangeRateTask
    ): OracleJob.SushiswapExchangeRateTask;

    /**
     * Encodes the specified SushiswapExchangeRateTask message. Does not implicitly {@apilink OracleJob.SushiswapExchangeRateTask.verify|verify} messages.
     * @param message SushiswapExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISushiswapExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SushiswapExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.SushiswapExchangeRateTask.verify|verify} messages.
     * @param message SushiswapExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISushiswapExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SushiswapExchangeRateTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SushiswapExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SushiswapExchangeRateTask;

    /**
     * Decodes a SushiswapExchangeRateTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SushiswapExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SushiswapExchangeRateTask;

    /**
     * Verifies a SushiswapExchangeRateTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SushiswapExchangeRateTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SushiswapExchangeRateTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SushiswapExchangeRateTask;

    /**
     * Creates a plain object from a SushiswapExchangeRateTask message. Also converts values to other types if specified.
     * @param message SushiswapExchangeRateTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SushiswapExchangeRateTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SushiswapExchangeRateTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SushiswapExchangeRateTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a PancakeswapExchangeRateTask. */
  interface IPancakeswapExchangeRateTask {
    /** The input token address. */
    inTokenAddress?: string | null;

    /** The output token address. */
    outTokenAddress?: string | null;

    /** The amount of tokens to swap. */
    inTokenAmount?: number | null;

    /** The allowable slippage in percent for the swap. */
    slippage?: number | null;

    /** The RPC provider to use for the swap. */
    provider?: string | null;
  }

  /** Fetch the swap price from PancakeSwap. */
  class PancakeswapExchangeRateTask implements IPancakeswapExchangeRateTask {
    /**
     * Constructs a new PancakeswapExchangeRateTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IPancakeswapExchangeRateTask);

    /** The input token address. */
    public inTokenAddress: string;

    /** The output token address. */
    public outTokenAddress: string;

    /** The amount of tokens to swap. */
    public inTokenAmount: number;

    /** The allowable slippage in percent for the swap. */
    public slippage: number;

    /** The RPC provider to use for the swap. */
    public provider: string;

    /**
     * Creates a new PancakeswapExchangeRateTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PancakeswapExchangeRateTask instance
     */
    public static create(
      properties?: OracleJob.IPancakeswapExchangeRateTask
    ): OracleJob.PancakeswapExchangeRateTask;

    /**
     * Encodes the specified PancakeswapExchangeRateTask message. Does not implicitly {@apilink OracleJob.PancakeswapExchangeRateTask.verify|verify} messages.
     * @param message PancakeswapExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IPancakeswapExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified PancakeswapExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.PancakeswapExchangeRateTask.verify|verify} messages.
     * @param message PancakeswapExchangeRateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IPancakeswapExchangeRateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a PancakeswapExchangeRateTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PancakeswapExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.PancakeswapExchangeRateTask;

    /**
     * Decodes a PancakeswapExchangeRateTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PancakeswapExchangeRateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.PancakeswapExchangeRateTask;

    /**
     * Verifies a PancakeswapExchangeRateTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a PancakeswapExchangeRateTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PancakeswapExchangeRateTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.PancakeswapExchangeRateTask;

    /**
     * Creates a plain object from a PancakeswapExchangeRateTask message. Also converts values to other types if specified.
     * @param message PancakeswapExchangeRateTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.PancakeswapExchangeRateTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this PancakeswapExchangeRateTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PancakeswapExchangeRateTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CacheTask. */
  interface ICacheTask {
    /** A list of cached variables to reference in the job with `${VARIABLE_NAME}`. */
    cacheItems?: OracleJob.CacheTask.ICacheItem[] | null;
  }

  /**
   * Execute a job and store the result in a variable to reference later.
   *
   * _**Input**_: None
   *
   * _**Returns**_: The input
   *
   * _**Example**_: CacheTask storing ${ONE} = 1
   *
   * ```json
   * { "cacheTask": { "cacheItems": [ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } ] } } ] } }
   * ```
   */
  class CacheTask implements ICacheTask {
    /**
     * Constructs a new CacheTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ICacheTask);

    /** A list of cached variables to reference in the job with `${VARIABLE_NAME}`. */
    public cacheItems: OracleJob.CacheTask.ICacheItem[];

    /**
     * Creates a new CacheTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CacheTask instance
     */
    public static create(
      properties?: OracleJob.ICacheTask
    ): OracleJob.CacheTask;

    /**
     * Encodes the specified CacheTask message. Does not implicitly {@apilink OracleJob.CacheTask.verify|verify} messages.
     * @param message CacheTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ICacheTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CacheTask message, length delimited. Does not implicitly {@apilink OracleJob.CacheTask.verify|verify} messages.
     * @param message CacheTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ICacheTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CacheTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CacheTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.CacheTask;

    /**
     * Decodes a CacheTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CacheTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.CacheTask;

    /**
     * Verifies a CacheTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CacheTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CacheTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.CacheTask;

    /**
     * Creates a plain object from a CacheTask message. Also converts values to other types if specified.
     * @param message CacheTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.CacheTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CacheTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CacheTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace CacheTask {
    /** Properties of a CacheItem. */
    interface ICacheItem {
      /** The name of the variable to store in cache to reference later with `${VARIABLE_NAME}`. */
      variableName?: string | null;

      /** The OracleJob to execute to yield the value to store in cache. */
      job?: IOracleJob | null;
    }

    /** Represents a CacheItem. */
    class CacheItem implements ICacheItem {
      /**
       * Constructs a new CacheItem.
       * @param [properties] Properties to set
       */
      constructor(properties?: OracleJob.CacheTask.ICacheItem);

      /** The name of the variable to store in cache to reference later with `${VARIABLE_NAME}`. */
      public variableName: string;

      /** The OracleJob to execute to yield the value to store in cache. */
      public job?: IOracleJob | null;

      /**
       * Creates a new CacheItem instance using the specified properties.
       * @param [properties] Properties to set
       * @returns CacheItem instance
       */
      public static create(
        properties?: OracleJob.CacheTask.ICacheItem
      ): OracleJob.CacheTask.CacheItem;

      /**
       * Encodes the specified CacheItem message. Does not implicitly {@apilink OracleJob.CacheTask.CacheItem.verify|verify} messages.
       * @param message CacheItem message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encode(
        message: OracleJob.CacheTask.ICacheItem,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Encodes the specified CacheItem message, length delimited. Does not implicitly {@apilink OracleJob.CacheTask.CacheItem.verify|verify} messages.
       * @param message CacheItem message or plain object to encode
       * @param [writer] Writer to encode to
       * @returns Writer
       */
      public static encodeDelimited(
        message: OracleJob.CacheTask.ICacheItem,
        writer?: $protobuf.Writer
      ): $protobuf.Writer;

      /**
       * Decodes a CacheItem message from the specified reader or buffer.
       * @param reader Reader or buffer to decode from
       * @param [length] Message length if known beforehand
       * @returns CacheItem
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decode(
        reader: $protobuf.Reader | Uint8Array,
        length?: number
      ): OracleJob.CacheTask.CacheItem;

      /**
       * Decodes a CacheItem message from the specified reader or buffer, length delimited.
       * @param reader Reader or buffer to decode from
       * @returns CacheItem
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      public static decodeDelimited(
        reader: $protobuf.Reader | Uint8Array
      ): OracleJob.CacheTask.CacheItem;

      /**
       * Verifies a CacheItem message.
       * @param message Plain object to verify
       * @returns `null` if valid, otherwise the reason why it is not
       */
      public static verify(message: { [k: string]: any }): string | null;

      /**
       * Creates a CacheItem message from a plain object. Also converts values to their respective internal types.
       * @param object Plain object
       * @returns CacheItem
       */
      public static fromObject(object: {
        [k: string]: any;
      }): OracleJob.CacheTask.CacheItem;

      /**
       * Creates a plain object from a CacheItem message. Also converts values to other types if specified.
       * @param message CacheItem
       * @param [options] Conversion options
       * @returns Plain object
       */
      public static toObject(
        message: OracleJob.CacheTask.CacheItem,
        options?: $protobuf.IConversionOptions
      ): { [k: string]: any };

      /**
       * Converts this CacheItem to JSON.
       * @returns JSON object
       */
      public toJSON(): { [k: string]: any };

      /**
       * Gets the default type url for CacheItem
       * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns The default type url
       */
      public static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }

  /** Properties of a SysclockOffsetTask. */
  interface ISysclockOffsetTask {}

  /** Return the difference between an oracle's clock and the current timestamp at `SYSVAR_CLOCK_PUBKEY`. */
  class SysclockOffsetTask implements ISysclockOffsetTask {
    /**
     * Constructs a new SysclockOffsetTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISysclockOffsetTask);

    /**
     * Creates a new SysclockOffsetTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SysclockOffsetTask instance
     */
    public static create(
      properties?: OracleJob.ISysclockOffsetTask
    ): OracleJob.SysclockOffsetTask;

    /**
     * Encodes the specified SysclockOffsetTask message. Does not implicitly {@apilink OracleJob.SysclockOffsetTask.verify|verify} messages.
     * @param message SysclockOffsetTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISysclockOffsetTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SysclockOffsetTask message, length delimited. Does not implicitly {@apilink OracleJob.SysclockOffsetTask.verify|verify} messages.
     * @param message SysclockOffsetTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISysclockOffsetTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SysclockOffsetTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SysclockOffsetTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SysclockOffsetTask;

    /**
     * Decodes a SysclockOffsetTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SysclockOffsetTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SysclockOffsetTask;

    /**
     * Verifies a SysclockOffsetTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SysclockOffsetTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SysclockOffsetTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SysclockOffsetTask;

    /**
     * Creates a plain object from a SysclockOffsetTask message. Also converts values to other types if specified.
     * @param message SysclockOffsetTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SysclockOffsetTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SysclockOffsetTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SysclockOffsetTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a MarinadeStateTask. */
  interface IMarinadeStateTask {}

  /** Represents a MarinadeStateTask. */
  class MarinadeStateTask implements IMarinadeStateTask {
    /**
     * Constructs a new MarinadeStateTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IMarinadeStateTask);

    /**
     * Creates a new MarinadeStateTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MarinadeStateTask instance
     */
    public static create(
      properties?: OracleJob.IMarinadeStateTask
    ): OracleJob.MarinadeStateTask;

    /**
     * Encodes the specified MarinadeStateTask message. Does not implicitly {@apilink OracleJob.MarinadeStateTask.verify|verify} messages.
     * @param message MarinadeStateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IMarinadeStateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified MarinadeStateTask message, length delimited. Does not implicitly {@apilink OracleJob.MarinadeStateTask.verify|verify} messages.
     * @param message MarinadeStateTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IMarinadeStateTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a MarinadeStateTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MarinadeStateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.MarinadeStateTask;

    /**
     * Decodes a MarinadeStateTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MarinadeStateTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.MarinadeStateTask;

    /**
     * Verifies a MarinadeStateTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a MarinadeStateTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MarinadeStateTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.MarinadeStateTask;

    /**
     * Creates a plain object from a MarinadeStateTask message. Also converts values to other types if specified.
     * @param message MarinadeStateTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.MarinadeStateTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this MarinadeStateTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MarinadeStateTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a SolanaAccountDataFetchTask. */
  interface ISolanaAccountDataFetchTask {
    /** The on-chain account to fetch the account data from. */
    pubkey?: string | null;
  }

  /** Fetch the account data in a stringified buffer format. */
  class SolanaAccountDataFetchTask implements ISolanaAccountDataFetchTask {
    /**
     * Constructs a new SolanaAccountDataFetchTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ISolanaAccountDataFetchTask);

    /** The on-chain account to fetch the account data from. */
    public pubkey: string;

    /**
     * Creates a new SolanaAccountDataFetchTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SolanaAccountDataFetchTask instance
     */
    public static create(
      properties?: OracleJob.ISolanaAccountDataFetchTask
    ): OracleJob.SolanaAccountDataFetchTask;

    /**
     * Encodes the specified SolanaAccountDataFetchTask message. Does not implicitly {@apilink OracleJob.SolanaAccountDataFetchTask.verify|verify} messages.
     * @param message SolanaAccountDataFetchTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ISolanaAccountDataFetchTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified SolanaAccountDataFetchTask message, length delimited. Does not implicitly {@apilink OracleJob.SolanaAccountDataFetchTask.verify|verify} messages.
     * @param message SolanaAccountDataFetchTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ISolanaAccountDataFetchTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a SolanaAccountDataFetchTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SolanaAccountDataFetchTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.SolanaAccountDataFetchTask;

    /**
     * Decodes a SolanaAccountDataFetchTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SolanaAccountDataFetchTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.SolanaAccountDataFetchTask;

    /**
     * Verifies a SolanaAccountDataFetchTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a SolanaAccountDataFetchTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SolanaAccountDataFetchTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.SolanaAccountDataFetchTask;

    /**
     * Creates a plain object from a SolanaAccountDataFetchTask message. Also converts values to other types if specified.
     * @param message SolanaAccountDataFetchTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.SolanaAccountDataFetchTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this SolanaAccountDataFetchTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SolanaAccountDataFetchTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a CronParseTask. */
  interface ICronParseTask {
    /** The cron pattern to parse. */
    cronPattern?: string | null;

    /** The timestamp offset to calculate the next run. */
    clockOffset?: number | null;

    /** Use the TaskRunner's clock or the on-chain SYSCLOCK. */
    clock?: OracleJob.CronParseTask.ClockType | null;
  }

  /**
   * Return a timestamp from a crontab instruction.
   *
   * _**Input**_: None
   *
   * _**Returns**_: A timestamp
   *
   * _**Example**_: Return the unix timestamp for the on-chain SYSCLOCK
   *
   * ```json
   * {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
   * ```
   *
   * _**Example**_: Return the unix timestamp for next friday at 5pm UTC
   *
   * ```json
   * {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
   * ```
   */
  class CronParseTask implements ICronParseTask {
    /**
     * Constructs a new CronParseTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ICronParseTask);

    /** The cron pattern to parse. */
    public cronPattern: string;

    /** The timestamp offset to calculate the next run. */
    public clockOffset: number;

    /** Use the TaskRunner's clock or the on-chain SYSCLOCK. */
    public clock: OracleJob.CronParseTask.ClockType;

    /**
     * Creates a new CronParseTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CronParseTask instance
     */
    public static create(
      properties?: OracleJob.ICronParseTask
    ): OracleJob.CronParseTask;

    /**
     * Encodes the specified CronParseTask message. Does not implicitly {@apilink OracleJob.CronParseTask.verify|verify} messages.
     * @param message CronParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ICronParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CronParseTask message, length delimited. Does not implicitly {@apilink OracleJob.CronParseTask.verify|verify} messages.
     * @param message CronParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ICronParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CronParseTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CronParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.CronParseTask;

    /**
     * Decodes a CronParseTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CronParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.CronParseTask;

    /**
     * Verifies a CronParseTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CronParseTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CronParseTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.CronParseTask;

    /**
     * Creates a plain object from a CronParseTask message. Also converts values to other types if specified.
     * @param message CronParseTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.CronParseTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CronParseTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CronParseTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace CronParseTask {
    /** ClockType enum. */
    enum ClockType {
      ORACLE = 0,
      SYSCLOCK = 1,
    }
  }

  /** Properties of a BufferLayoutParseTask. */
  interface IBufferLayoutParseTask {
    /** The buffer offset to start deserializing from. */
    offset?: number | null;

    /** The endianness of the stored value. */
    endian?: OracleJob.BufferLayoutParseTask.Endian | null;

    /** The type of value to deserialize. */
    type?: OracleJob.BufferLayoutParseTask.BufferParseType | null;
  }

  /** Return the deserialized value from a stringified buffer. */
  class BufferLayoutParseTask implements IBufferLayoutParseTask {
    /**
     * Constructs a new BufferLayoutParseTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IBufferLayoutParseTask);

    /** The buffer offset to start deserializing from. */
    public offset: number;

    /** The endianness of the stored value. */
    public endian: OracleJob.BufferLayoutParseTask.Endian;

    /** The type of value to deserialize. */
    public type: OracleJob.BufferLayoutParseTask.BufferParseType;

    /**
     * Creates a new BufferLayoutParseTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BufferLayoutParseTask instance
     */
    public static create(
      properties?: OracleJob.IBufferLayoutParseTask
    ): OracleJob.BufferLayoutParseTask;

    /**
     * Encodes the specified BufferLayoutParseTask message. Does not implicitly {@apilink OracleJob.BufferLayoutParseTask.verify|verify} messages.
     * @param message BufferLayoutParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IBufferLayoutParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BufferLayoutParseTask message, length delimited. Does not implicitly {@apilink OracleJob.BufferLayoutParseTask.verify|verify} messages.
     * @param message BufferLayoutParseTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IBufferLayoutParseTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BufferLayoutParseTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BufferLayoutParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.BufferLayoutParseTask;

    /**
     * Decodes a BufferLayoutParseTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BufferLayoutParseTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.BufferLayoutParseTask;

    /**
     * Verifies a BufferLayoutParseTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BufferLayoutParseTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BufferLayoutParseTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.BufferLayoutParseTask;

    /**
     * Creates a plain object from a BufferLayoutParseTask message. Also converts values to other types if specified.
     * @param message BufferLayoutParseTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.BufferLayoutParseTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BufferLayoutParseTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BufferLayoutParseTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace BufferLayoutParseTask {
    /** Endian enum. */
    enum Endian {
      LITTLE_ENDIAN = 0,
      BIG_ENDIAN = 1,
    }

    /** BufferParseType enum. */
    enum BufferParseType {
      pubkey = 1,
      bool = 2,
      u8 = 3,
      i8 = 4,
      u16 = 5,
      i16 = 6,
      u32 = 7,
      i32 = 8,
      f32 = 9,
      u64 = 10,
      i64 = 11,
      f64 = 12,
      u128 = 13,
      i128 = 14,
    }
  }

  /** Properties of a HistoryFunctionTask. */
  interface IHistoryFunctionTask {
    /** HistoryFunctionTask method */
    method?: OracleJob.HistoryFunctionTask.Method | null;

    /** HistoryFunctionTask aggregatorAddress */
    aggregatorAddress?: string | null;

    /** HistoryFunctionTask period */
    period?: number | null;
  }

  /** Represents a HistoryFunctionTask. */
  class HistoryFunctionTask implements IHistoryFunctionTask {
    /**
     * Constructs a new HistoryFunctionTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IHistoryFunctionTask);

    /** HistoryFunctionTask method. */
    public method: OracleJob.HistoryFunctionTask.Method;

    /** HistoryFunctionTask aggregatorAddress. */
    public aggregatorAddress: string;

    /** HistoryFunctionTask period. */
    public period: number;

    /**
     * Creates a new HistoryFunctionTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns HistoryFunctionTask instance
     */
    public static create(
      properties?: OracleJob.IHistoryFunctionTask
    ): OracleJob.HistoryFunctionTask;

    /**
     * Encodes the specified HistoryFunctionTask message. Does not implicitly {@apilink OracleJob.HistoryFunctionTask.verify|verify} messages.
     * @param message HistoryFunctionTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IHistoryFunctionTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified HistoryFunctionTask message, length delimited. Does not implicitly {@apilink OracleJob.HistoryFunctionTask.verify|verify} messages.
     * @param message HistoryFunctionTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IHistoryFunctionTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a HistoryFunctionTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns HistoryFunctionTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.HistoryFunctionTask;

    /**
     * Decodes a HistoryFunctionTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns HistoryFunctionTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.HistoryFunctionTask;

    /**
     * Verifies a HistoryFunctionTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a HistoryFunctionTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns HistoryFunctionTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.HistoryFunctionTask;

    /**
     * Creates a plain object from a HistoryFunctionTask message. Also converts values to other types if specified.
     * @param message HistoryFunctionTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.HistoryFunctionTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this HistoryFunctionTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for HistoryFunctionTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace HistoryFunctionTask {
    /** Method enum. */
    enum Method {
      METHOD_MIN = 0,
      METHOD_MAX = 1,
    }
  }

  /** Properties of a VwapTask. */
  interface IVwapTask {
    /** VwapTask priceAggregatorAddress */
    priceAggregatorAddress?: string | null;

    /** VwapTask volumeAggregatorAddress */
    volumeAggregatorAddress?: string | null;

    /** VwapTask period */
    period?: number | null;
  }

  /** Represents a VwapTask. */
  class VwapTask implements IVwapTask {
    /**
     * Constructs a new VwapTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IVwapTask);

    /** VwapTask priceAggregatorAddress. */
    public priceAggregatorAddress: string;

    /** VwapTask volumeAggregatorAddress. */
    public volumeAggregatorAddress: string;

    /** VwapTask period. */
    public period: number;

    /**
     * Creates a new VwapTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns VwapTask instance
     */
    public static create(properties?: OracleJob.IVwapTask): OracleJob.VwapTask;

    /**
     * Encodes the specified VwapTask message. Does not implicitly {@apilink OracleJob.VwapTask.verify|verify} messages.
     * @param message VwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IVwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified VwapTask message, length delimited. Does not implicitly {@apilink OracleJob.VwapTask.verify|verify} messages.
     * @param message VwapTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IVwapTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a VwapTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns VwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.VwapTask;

    /**
     * Decodes a VwapTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns VwapTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.VwapTask;

    /**
     * Verifies a VwapTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a VwapTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns VwapTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.VwapTask;

    /**
     * Creates a plain object from a VwapTask message. Also converts values to other types if specified.
     * @param message VwapTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.VwapTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this VwapTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for VwapTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of an EwmaTask. */
  interface IEwmaTask {
    /** EwmaTask aggregatorAddress */
    aggregatorAddress?: string | null;

    /** EwmaTask period */
    period?: number | null;

    /** EwmaTask lambda */
    lambda?: number | null;
  }

  /** Represents an EwmaTask. */
  class EwmaTask implements IEwmaTask {
    /**
     * Constructs a new EwmaTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IEwmaTask);

    /** EwmaTask aggregatorAddress. */
    public aggregatorAddress: string;

    /** EwmaTask period. */
    public period: number;

    /** EwmaTask lambda. */
    public lambda: number;

    /**
     * Creates a new EwmaTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EwmaTask instance
     */
    public static create(properties?: OracleJob.IEwmaTask): OracleJob.EwmaTask;

    /**
     * Encodes the specified EwmaTask message. Does not implicitly {@apilink OracleJob.EwmaTask.verify|verify} messages.
     * @param message EwmaTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IEwmaTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified EwmaTask message, length delimited. Does not implicitly {@apilink OracleJob.EwmaTask.verify|verify} messages.
     * @param message EwmaTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IEwmaTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an EwmaTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EwmaTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.EwmaTask;

    /**
     * Decodes an EwmaTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EwmaTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.EwmaTask;

    /**
     * Verifies an EwmaTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an EwmaTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EwmaTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.EwmaTask;

    /**
     * Creates a plain object from an EwmaTask message. Also converts values to other types if specified.
     * @param message EwmaTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.EwmaTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this EwmaTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for EwmaTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a ComparisonTask. */
  interface IComparisonTask {
    /** The type of operator to use on the left (lhs) and right (rhs) operand. */
    op?: OracleJob.ComparisonTask.Operation | null;

    /** OracleJob where the executed result is equal to the left hand side operand. */
    lhs?: IOracleJob | null;

    /** String or `${CACHE_KEY}` representing the left hand side operand. */
    lhsValue?: string | null;

    /** OracleJob where the executed result is equal to the right hand side operand. */
    rhs?: IOracleJob | null;

    /** String or `${CACHE_KEY}` representing the right hand side operand. */
    rhsValue?: string | null;

    /** The OracleJob to execute if the condition evaluates to true. */
    onTrue?: IOracleJob | null;

    /** The result to use if the condition evaluates to true. Can be set to a `${CACHE_KEY}`. */
    onTrueValue?: string | null;

    /** The OracleJob to execute if the condition evaluates to false. */
    onFalse?: IOracleJob | null;

    /** The result to use if the condition evaluates to false. Can be set to a `${CACHE_KEY}`. */
    onFalseValue?: string | null;

    /** The OracleJob to execute if the condition fails to evaluate. */
    onFailure?: IOracleJob | null;

    /** The result to use if the condition fails to evaluate. Can be set to a `${CACHE_KEY}`. */
    onFailureValue?: string | null;
  }

  /** Represents a ComparisonTask. */
  class ComparisonTask implements IComparisonTask {
    /**
     * Constructs a new ComparisonTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IComparisonTask);

    /** The type of operator to use on the left (lhs) and right (rhs) operand. */
    public op: OracleJob.ComparisonTask.Operation;

    /** OracleJob where the executed result is equal to the left hand side operand. */
    public lhs?: IOracleJob | null;

    /** String or `${CACHE_KEY}` representing the left hand side operand. */
    public lhsValue?: string | null;

    /** OracleJob where the executed result is equal to the right hand side operand. */
    public rhs?: IOracleJob | null;

    /** String or `${CACHE_KEY}` representing the right hand side operand. */
    public rhsValue?: string | null;

    /** The OracleJob to execute if the condition evaluates to true. */
    public onTrue?: IOracleJob | null;

    /** The result to use if the condition evaluates to true. Can be set to a `${CACHE_KEY}`. */
    public onTrueValue: string;

    /** The OracleJob to execute if the condition evaluates to false. */
    public onFalse?: IOracleJob | null;

    /** The result to use if the condition evaluates to false. Can be set to a `${CACHE_KEY}`. */
    public onFalseValue: string;

    /** The OracleJob to execute if the condition fails to evaluate. */
    public onFailure?: IOracleJob | null;

    /** The result to use if the condition fails to evaluate. Can be set to a `${CACHE_KEY}`. */
    public onFailureValue: string;

    /** ComparisonTask LHS. */
    public LHS?: "lhs" | "lhsValue";

    /** ComparisonTask RHS. */
    public RHS?: "rhs" | "rhsValue";

    /**
     * Creates a new ComparisonTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ComparisonTask instance
     */
    public static create(
      properties?: OracleJob.IComparisonTask
    ): OracleJob.ComparisonTask;

    /**
     * Encodes the specified ComparisonTask message. Does not implicitly {@apilink OracleJob.ComparisonTask.verify|verify} messages.
     * @param message ComparisonTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IComparisonTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ComparisonTask message, length delimited. Does not implicitly {@apilink OracleJob.ComparisonTask.verify|verify} messages.
     * @param message ComparisonTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IComparisonTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ComparisonTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ComparisonTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.ComparisonTask;

    /**
     * Decodes a ComparisonTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ComparisonTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.ComparisonTask;

    /**
     * Verifies a ComparisonTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ComparisonTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ComparisonTask
     */
    public static fromObject(object: {
      [k: string]: any;
    }): OracleJob.ComparisonTask;

    /**
     * Creates a plain object from a ComparisonTask message. Also converts values to other types if specified.
     * @param message ComparisonTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.ComparisonTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ComparisonTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ComparisonTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace ComparisonTask {
    /** Operation enum. */
    enum Operation {
      OPERATION_EQ = 0,
      OPERATION_GT = 1,
      OPERATION_LT = 2,
    }
  }

  /** Properties of a RoundTask. */
  interface IRoundTask {
    /** The rounding method to use. */
    method?: OracleJob.RoundTask.Method | null;

    /** The number of decimals to round to. */
    decimals?: number | null;
  }

  /**
   * Round the current running result to a set number of decimal places.
   *
   * _**Input**_: The current running numerical result.
   *
   * _**Returns**_: The running result rounded to a set number of decimal places.
   *
   * _**Example**_: Round down the running resul to 8 decimal places
   *
   * ```json
   * { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
   * ```
   */
  class RoundTask implements IRoundTask {
    /**
     * Constructs a new RoundTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IRoundTask);

    /** The rounding method to use. */
    public method: OracleJob.RoundTask.Method;

    /** The number of decimals to round to. */
    public decimals: number;

    /**
     * Creates a new RoundTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoundTask instance
     */
    public static create(
      properties?: OracleJob.IRoundTask
    ): OracleJob.RoundTask;

    /**
     * Encodes the specified RoundTask message. Does not implicitly {@apilink OracleJob.RoundTask.verify|verify} messages.
     * @param message RoundTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IRoundTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified RoundTask message, length delimited. Does not implicitly {@apilink OracleJob.RoundTask.verify|verify} messages.
     * @param message RoundTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IRoundTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a RoundTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoundTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.RoundTask;

    /**
     * Decodes a RoundTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoundTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.RoundTask;

    /**
     * Verifies a RoundTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a RoundTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoundTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.RoundTask;

    /**
     * Creates a plain object from a RoundTask message. Also converts values to other types if specified.
     * @param message RoundTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.RoundTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this RoundTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RoundTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  namespace RoundTask {
    /** Method enum. */
    enum Method {
      METHOD_ROUND_UP = 0,
      METHOD_ROUND_DOWN = 1,
    }
  }

  /** Properties of a BoundTask. */
  interface IBoundTask {
    /** The OracleJob to execute for the lower bound value. */
    lowerBound?: IOracleJob | null;

    /** The value to use for the lower bound. Can be set to a `${CACHE_KEY}`. */
    lowerBoundValue?: string | null;

    /** The OracleJob to execute for the upper bound value. */
    upperBound?: IOracleJob | null;

    /** The value to use for the upper bound. Can be set to a `${CACHE_KEY}`. */
    upperBoundValue?: string | null;

    /** The OracleJob to execute if the upper bound is exceeded. */
    onExceedsUpperBound?: IOracleJob | null;

    /** The value to use if the upper bound is exceeded. Can be set to a `${CACHE_KEY}`. */
    onExceedsUpperBoundValue?: string | null;

    /** The OracleJob to execute if the lower bound is exceeded. */
    onExceedsLowerBound?: IOracleJob | null;

    /** The value to use if the lower bound is exceeded. Can be set to a `${CACHE_KEY}`. */
    onExceedsLowerBoundValue?: string | null;
  }

  /**
   * Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
   *
   * _**Input**_: The current running numerical result.
   *
   * _**Returns**_: The running result bounded to an upper or lower bound if it exceeds a given threshold.
   *
   * _**Example**_: Bound the running result to a value between 0.90 and 1.10
   *
   * ```json
   * { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
   * ```
   */
  class BoundTask implements IBoundTask {
    /**
     * Constructs a new BoundTask.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.IBoundTask);

    /** The OracleJob to execute for the lower bound value. */
    public lowerBound?: IOracleJob | null;

    /** The value to use for the lower bound. Can be set to a `${CACHE_KEY}`. */
    public lowerBoundValue: string;

    /** The OracleJob to execute for the upper bound value. */
    public upperBound?: IOracleJob | null;

    /** The value to use for the upper bound. Can be set to a `${CACHE_KEY}`. */
    public upperBoundValue: string;

    /** The OracleJob to execute if the upper bound is exceeded. */
    public onExceedsUpperBound?: IOracleJob | null;

    /** The value to use if the upper bound is exceeded. Can be set to a `${CACHE_KEY}`. */
    public onExceedsUpperBoundValue: string;

    /** The OracleJob to execute if the lower bound is exceeded. */
    public onExceedsLowerBound?: IOracleJob | null;

    /** The value to use if the lower bound is exceeded. Can be set to a `${CACHE_KEY}`. */
    public onExceedsLowerBoundValue: string;

    /**
     * Creates a new BoundTask instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BoundTask instance
     */
    public static create(
      properties?: OracleJob.IBoundTask
    ): OracleJob.BoundTask;

    /**
     * Encodes the specified BoundTask message. Does not implicitly {@apilink OracleJob.BoundTask.verify|verify} messages.
     * @param message BoundTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.IBoundTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified BoundTask message, length delimited. Does not implicitly {@apilink OracleJob.BoundTask.verify|verify} messages.
     * @param message BoundTask message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.IBoundTask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a BoundTask message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BoundTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.BoundTask;

    /**
     * Decodes a BoundTask message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BoundTask
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.BoundTask;

    /**
     * Verifies a BoundTask message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a BoundTask message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BoundTask
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.BoundTask;

    /**
     * Creates a plain object from a BoundTask message. Also converts values to other types if specified.
     * @param message BoundTask
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.BoundTask,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this BoundTask to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BoundTask
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }

  /** Properties of a Task. */
  interface ITask {
    /**
     * The adapter will report the text body of a successful HTTP request to the
     * specified url, or return an error if the response status code is greater
     * than or equal to 400.
     *
     * _**Input**_: None
     *
     * _**Returns**_: String representation of the http response.
     *
     * _**Example**_: Basic HttpTask
     *
     * ```json
     * {"httpTask": {"url": "https://mywebsite.org/path"} }
     * ```
     *
     * _**Example**_: HttpTask example with headers
     *
     * ```json
     * { "httpTask": { "url": "https://mywebsite.org/path", "method": "METHOD_POST", "headers": [ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } ], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
     * ```
     */
    httpTask?: OracleJob.IHttpTask | null;

    /**
     * The adapter walks the path specified and returns the value found at that result. If returning
     * JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
     *
     * _**Input**_: String representation of a JSON object.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Parses the price field from a JSON object
     *
     * ```json
     * {"jsonParse": {"path": "$.price"} }
     * ```
     */
    jsonParseTask?: OracleJob.IJsonParseTask | null;

    /**
     * Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the median numerical result of 3 tasks.
     *
     * ```json
     * {"medianTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the median numerical result of 3 jobs.
     *
     * ```json
     * {"medianTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    medianTask?: OracleJob.IMedianTask | null;

    /**
     * Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the mean numerical result of 3 tasks.
     *
     * ```json
     * {"meanTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the mean numerical result of 3 jobs.
     *
     * ```json
     * {"meanTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    meanTask?: OracleJob.IMeanTask | null;

    /**
     * Opens and maintains a websocket for light speed data retrieval.
     *
     * _**Input**_: None
     *
     * _**Returns**_: String representation of the websocket subscription message.
     *
     * _**Example**_: Opens a coinbase websocket
     *
     * ```json
     * { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":[\"BTC-USD\"],\"channels\":[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"]}]}", "maxDataAgeSeconds": 15, "filter": "$[?(@.type == 'ticker' && @.product_id == 'BTC-USD')]" } }
     * ```
     */
    websocketTask?: OracleJob.IWebsocketTask | null;

    /**
     * This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by dividing by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by dividing by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by dividing by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
     * ```
     */
    divideTask?: OracleJob.IDivideTask | null;

    /**
     * This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by multiplying by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
     * ```
     */
    multiplyTask?: OracleJob.IMultiplyTask | null;

    /**
     * Fetch LP token price info from a number of supported exchanges.
     *
     * See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
     *
     * NOTE**: This is not the swap price but the price of the underlying LP token.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The price of an LP token for a given AMM pool.
     *
     * _**Example**_: Fetch the Orca LP token price of the SOL/USDC pool
     *
     * ```json
     * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
     * ```
     *
     * _**Example**_: Fetch the fair price Orca LP token price of the SOL/USDC pool
     *
     * ```json
     * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": [ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
     * ```
     *
     * _**Example**_: Fetch the fair price Raydium LP token price of the SOL/USDC pool
     *
     * ```json
     * { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": ["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
     * ```
     */
    lpTokenPriceTask?: OracleJob.ILpTokenPriceTask | null;

    /**
     * Fetch the current swap price for a given liquidity pool
     *
     * _**Input**_: None
     *
     * _**Returns**_: The swap price for a given AMM pool.
     *
     * _**Example**_: Fetch the exchange rate from the Orca SOL/USDC pool
     *
     * ```json
     * { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
     * ```
     *
     * _**Example**_: Fetch the exchange rate from the Raydium SOL/USDC pool
     *
     * ```json
     * { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
     * ```
     */
    lpExchangeRateTask?: OracleJob.ILpExchangeRateTask | null;

    /**
     * This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
     *
     * _**Input**_: The current running numerical result output from a task.
     *
     * _**Returns**_: A numerical result, else run `on_failure` subtasks.
     *
     * _**Example**_: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
     *
     * ```json
     * {"conditionalTask":{"attempt":[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}]}],"onFailure":[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}]}}
     * ```
     */
    conditionalTask?: OracleJob.IConditionalTask | null;

    /**
     * Returns a specified value.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the value 10
     *
     * ```json
     * {"valueTask": {"value": 10} }
     * ```
     *
     * _**Example**_: Returns the currentRound result of an aggregator
     *
     * ```json
     * {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
     * ```
     *
     * _**Example**_: Returns the value stored in a CacheTask variable
     *
     * ```json
     * {"valueTask": {"big": "${ONE}"} }
     * ```
     */
    valueTask?: OracleJob.IValueTask | null;

    /**
     * Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the maximum numerical result from 3 tasks.
     *
     * ```json
     * {"maxTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the minimum numerical result from 3 jobs.
     *
     * ```json
     * {"maxTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    maxTask?: OracleJob.IMaxTask | null;

    /** Task regexExtractTask */
    regexExtractTask?: OracleJob.IRegexExtractTask | null;

    /** Task xstepPriceTask */
    xstepPriceTask?: OracleJob.IXStepPriceTask | null;

    /**
     * This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by adding by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
     * ```
     */
    addTask?: OracleJob.IAddTask | null;

    /**
     * This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by subtracting by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
     * ```
     */
    subtractTask?: OracleJob.ISubtractTask | null;

    /**
     * Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The time weighted average of an aggregator over a given time period.
     *
     * _**Example**_: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
     *
     * ```json
     * { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
     * ```
     */
    twapTask?: OracleJob.ITwapTask | null;

    /** Task serumSwapTask */
    serumSwapTask?: OracleJob.ISerumSwapTask | null;

    /**
     * Round the current running result to an exponential power.
     *
     * _**Input**_: The current running numerical result.
     *
     * _**Returns**_: The input raised to an exponential power.
     *
     * _**Example**_: Raise 2 to the power of 3, 2^3
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}]}
     * ```
     */
    powTask?: OracleJob.IPowTask | null;

    /** Task lendingRateTask */
    lendingRateTask?: OracleJob.ILendingRateTask | null;

    /** Task mangoPerpMarketTask */
    mangoPerpMarketTask?: OracleJob.IMangoPerpMarketTask | null;

    /**
     * Fetch the simulated price for a swap on JupiterSwap.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The swap price on Jupiter for a given input and output token mint address.
     *
     * _**Example**_: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
     *
     * ```json
     * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
     * ```
     *
     * _**Example**_: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
     *
     * ```json
     * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
     * ```
     */
    jupiterSwapTask?: OracleJob.IJupiterSwapTask | null;

    /** Task perpMarketTask */
    perpMarketTask?: OracleJob.IPerpMarketTask | null;

    /**
     * Fetch the current price of a Solana oracle protocol.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The current price of an on-chain oracle.
     *
     * _**Example**_: The Switchboard SOL/USD oracle price.
     *
     * ```json
     * { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
     * ```
     *
     * _**Example**_: The Pyth SOL/USD oracle price.
     *
     * ```json
     * { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
     * ```
     *
     * _**Example**_: The Chainlink SOL/USD oracle price.
     *
     * ```json
     * { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
     * ```
     */
    oracleTask?: OracleJob.IOracleTask | null;

    /** Task anchorFetchTask */
    anchorFetchTask?: OracleJob.IAnchorFetchTask | null;

    /** Task defiKingdomsTask */
    defiKingdomsTask?: OracleJob.IDefiKingdomsTask | null;

    /** Task tpsTask */
    tpsTask?: OracleJob.ITpsTask | null;

    /** Task splStakePoolTask */
    splStakePoolTask?: OracleJob.ISplStakePoolTask | null;

    /** Task splTokenParseTask */
    splTokenParseTask?: OracleJob.ISplTokenParseTask | null;

    /** Task uniswapExchangeRateTask */
    uniswapExchangeRateTask?: OracleJob.IUniswapExchangeRateTask | null;

    /** Task sushiswapExchangeRateTask */
    sushiswapExchangeRateTask?: OracleJob.ISushiswapExchangeRateTask | null;

    /** Task pancakeswapExchangeRateTask */
    pancakeswapExchangeRateTask?: OracleJob.IPancakeswapExchangeRateTask | null;

    /**
     * Execute a job and store the result in a variable to reference later.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The input
     *
     * _**Example**_: CacheTask storing ${ONE} = 1
     *
     * ```json
     * { "cacheTask": { "cacheItems": [ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } ] } } ] } }
     * ```
     */
    cacheTask?: OracleJob.ICacheTask | null;

    /** Task sysclockOffsetTask */
    sysclockOffsetTask?: OracleJob.ISysclockOffsetTask | null;

    /** Task marinadeStateTask */
    marinadeStateTask?: OracleJob.IMarinadeStateTask | null;

    /** Task solanaAccountDataFetchTask */
    solanaAccountDataFetchTask?: OracleJob.ISolanaAccountDataFetchTask | null;

    /** Task bufferLayoutParseTask */
    bufferLayoutParseTask?: OracleJob.IBufferLayoutParseTask | null;

    /**
     * Return a timestamp from a crontab instruction.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A timestamp
     *
     * _**Example**_: Return the unix timestamp for the on-chain SYSCLOCK
     *
     * ```json
     * {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
     * ```
     *
     * _**Example**_: Return the unix timestamp for next friday at 5pm UTC
     *
     * ```json
     * {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
     * ```
     */
    cronParseTask?: OracleJob.ICronParseTask | null;

    /**
     * Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the minimum numerical result from 3 tasks.
     *
     * ```json
     * {"minTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the minimum numerical result from 3 jobs.
     *
     * ```json
     * {"minTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    minTask?: OracleJob.IMinTask | null;

    /** Task historyFunctionTask */
    historyFunctionTask?: OracleJob.IHistoryFunctionTask | null;

    /** Task vwapTask */
    vwapTask?: OracleJob.IVwapTask | null;

    /** Task ewmaTask */
    ewmaTask?: OracleJob.IEwmaTask | null;

    /** Task comparisonTask */
    comparisonTask?: OracleJob.IComparisonTask | null;

    /**
     * Round the current running result to a set number of decimal places.
     *
     * _**Input**_: The current running numerical result.
     *
     * _**Returns**_: The running result rounded to a set number of decimal places.
     *
     * _**Example**_: Round down the running resul to 8 decimal places
     *
     * ```json
     * { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
     * ```
     */
    roundTask?: OracleJob.IRoundTask | null;

    /**
     * Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
     *
     * _**Input**_: The current running numerical result.
     *
     * _**Returns**_: The running result bounded to an upper or lower bound if it exceeds a given threshold.
     *
     * _**Example**_: Bound the running result to a value between 0.90 and 1.10
     *
     * ```json
     * { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
     * ```
     */
    boundTask?: OracleJob.IBoundTask | null;
  }

  /** Represents a singular operation performed by an oracle to yield an eventual numerical result. */
  class Task implements ITask {
    /**
     * Constructs a new Task.
     * @param [properties] Properties to set
     */
    constructor(properties?: OracleJob.ITask);

    /**
     * The adapter will report the text body of a successful HTTP request to the
     * specified url, or return an error if the response status code is greater
     * than or equal to 400.
     *
     * _**Input**_: None
     *
     * _**Returns**_: String representation of the http response.
     *
     * _**Example**_: Basic HttpTask
     *
     * ```json
     * {"httpTask": {"url": "https://mywebsite.org/path"} }
     * ```
     *
     * _**Example**_: HttpTask example with headers
     *
     * ```json
     * { "httpTask": { "url": "https://mywebsite.org/path", "method": "METHOD_POST", "headers": [ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } ], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
     * ```
     */
    public httpTask?: OracleJob.IHttpTask | null;

    /**
     * The adapter walks the path specified and returns the value found at that result. If returning
     * JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
     *
     * _**Input**_: String representation of a JSON object.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Parses the price field from a JSON object
     *
     * ```json
     * {"jsonParse": {"path": "$.price"} }
     * ```
     */
    public jsonParseTask?: OracleJob.IJsonParseTask | null;

    /**
     * Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the median numerical result of 3 tasks.
     *
     * ```json
     * {"medianTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the median numerical result of 3 jobs.
     *
     * ```json
     * {"medianTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    public medianTask?: OracleJob.IMedianTask | null;

    /**
     * Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the mean numerical result of 3 tasks.
     *
     * ```json
     * {"meanTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the mean numerical result of 3 jobs.
     *
     * ```json
     * {"meanTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    public meanTask?: OracleJob.IMeanTask | null;

    /**
     * Opens and maintains a websocket for light speed data retrieval.
     *
     * _**Input**_: None
     *
     * _**Returns**_: String representation of the websocket subscription message.
     *
     * _**Example**_: Opens a coinbase websocket
     *
     * ```json
     * { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":[\"BTC-USD\"],\"channels\":[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"]}]}", "maxDataAgeSeconds": 15, "filter": "$[?(@.type == 'ticker' && @.product_id == 'BTC-USD')]" } }
     * ```
     */
    public websocketTask?: OracleJob.IWebsocketTask | null;

    /**
     * This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by dividing by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by dividing by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by dividing by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
     * ```
     */
    public divideTask?: OracleJob.IDivideTask | null;

    /**
     * This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by multiplying by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
     * ```
     */
    public multiplyTask?: OracleJob.IMultiplyTask | null;

    /**
     * Fetch LP token price info from a number of supported exchanges.
     *
     * See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
     *
     * *NOTE**: This is not the swap price but the price of the underlying LP token.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The price of an LP token for a given AMM pool.
     *
     * _**Example**_: Fetch the Orca LP token price of the SOL/USDC pool
     *
     * ```json
     * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
     * ```
     *
     * _**Example**_: Fetch the fair price Orca LP token price of the SOL/USDC pool
     *
     * ```json
     * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": [ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
     * ```
     *
     * _**Example**_: Fetch the fair price Raydium LP token price of the SOL/USDC pool
     *
     * ```json
     * { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": ["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
     * ```
     */
    public lpTokenPriceTask?: OracleJob.ILpTokenPriceTask | null;

    /**
     * Fetch the current swap price for a given liquidity pool
     *
     * _**Input**_: None
     *
     * _**Returns**_: The swap price for a given AMM pool.
     *
     * _**Example**_: Fetch the exchange rate from the Orca SOL/USDC pool
     *
     * ```json
     * { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
     * ```
     *
     * _**Example**_: Fetch the exchange rate from the Raydium SOL/USDC pool
     *
     * ```json
     * { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
     * ```
     */
    public lpExchangeRateTask?: OracleJob.ILpExchangeRateTask | null;

    /**
     * This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
     *
     * _**Input**_: The current running numerical result output from a task.
     *
     * _**Returns**_: A numerical result, else run `on_failure` subtasks.
     *
     * _**Example**_: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
     *
     * ```json
     * {"conditionalTask":{"attempt":[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}]}],"onFailure":[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}]}}
     * ```
     */
    public conditionalTask?: OracleJob.IConditionalTask | null;

    /**
     * Returns a specified value.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the value 10
     *
     * ```json
     * {"valueTask": {"value": 10} }
     * ```
     *
     * _**Example**_: Returns the currentRound result of an aggregator
     *
     * ```json
     * {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
     * ```
     *
     * _**Example**_: Returns the value stored in a CacheTask variable
     *
     * ```json
     * {"valueTask": {"big": "${ONE}"} }
     * ```
     */
    public valueTask?: OracleJob.IValueTask | null;

    /**
     * Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the maximum numerical result from 3 tasks.
     *
     * ```json
     * {"maxTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the minimum numerical result from 3 jobs.
     *
     * ```json
     * {"maxTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    public maxTask?: OracleJob.IMaxTask | null;

    /** Task regexExtractTask. */
    public regexExtractTask?: OracleJob.IRegexExtractTask | null;

    /** Task xstepPriceTask. */
    public xstepPriceTask?: OracleJob.IXStepPriceTask | null;

    /**
     * This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by adding by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
     * ```
     */
    public addTask?: OracleJob.IAddTask | null;

    /**
     * This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
     *
     * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the numerical result by subtracting by a job of subtasks.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by an aggregator.
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
     * ```
     *
     * _**Example**_: Returns the numerical result by multiplying by a big.
     *
     * ```json
     * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
     * ```
     */
    public subtractTask?: OracleJob.ISubtractTask | null;

    /**
     * Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The time weighted average of an aggregator over a given time period.
     *
     * _**Example**_: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
     *
     * ```json
     * { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
     * ```
     */
    public twapTask?: OracleJob.ITwapTask | null;

    /** Task serumSwapTask. */
    public serumSwapTask?: OracleJob.ISerumSwapTask | null;

    /**
     * Round the current running result to an exponential power.
     *
     * _**Input**_: The current running numerical result.
     *
     * _**Returns**_: The input raised to an exponential power.
     *
     * _**Example**_: Raise 2 to the power of 3, 2^3
     *
     * ```json
     * {"tasks":[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}]}
     * ```
     */
    public powTask?: OracleJob.IPowTask | null;

    /** Task lendingRateTask. */
    public lendingRateTask?: OracleJob.ILendingRateTask | null;

    /** Task mangoPerpMarketTask. */
    public mangoPerpMarketTask?: OracleJob.IMangoPerpMarketTask | null;

    /**
     * Fetch the simulated price for a swap on JupiterSwap.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The swap price on Jupiter for a given input and output token mint address.
     *
     * _**Example**_: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
     *
     * ```json
     * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
     * ```
     *
     * _**Example**_: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
     *
     * ```json
     * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
     * ```
     */
    public jupiterSwapTask?: OracleJob.IJupiterSwapTask | null;

    /** Task perpMarketTask. */
    public perpMarketTask?: OracleJob.IPerpMarketTask | null;

    /**
     * Fetch the current price of a Solana oracle protocol.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The current price of an on-chain oracle.
     *
     * _**Example**_: The Switchboard SOL/USD oracle price.
     *
     * ```json
     * { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
     * ```
     *
     * _**Example**_: The Pyth SOL/USD oracle price.
     *
     * ```json
     * { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
     * ```
     *
     * _**Example**_: The Chainlink SOL/USD oracle price.
     *
     * ```json
     * { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
     * ```
     */
    public oracleTask?: OracleJob.IOracleTask | null;

    /** Task anchorFetchTask. */
    public anchorFetchTask?: OracleJob.IAnchorFetchTask | null;

    /** Task defiKingdomsTask. */
    public defiKingdomsTask?: OracleJob.IDefiKingdomsTask | null;

    /** Task tpsTask. */
    public tpsTask?: OracleJob.ITpsTask | null;

    /** Task splStakePoolTask. */
    public splStakePoolTask?: OracleJob.ISplStakePoolTask | null;

    /** Task splTokenParseTask. */
    public splTokenParseTask?: OracleJob.ISplTokenParseTask | null;

    /** Task uniswapExchangeRateTask. */
    public uniswapExchangeRateTask?: OracleJob.IUniswapExchangeRateTask | null;

    /** Task sushiswapExchangeRateTask. */
    public sushiswapExchangeRateTask?: OracleJob.ISushiswapExchangeRateTask | null;

    /** Task pancakeswapExchangeRateTask. */
    public pancakeswapExchangeRateTask?: OracleJob.IPancakeswapExchangeRateTask | null;

    /**
     * Execute a job and store the result in a variable to reference later.
     *
     * _**Input**_: None
     *
     * _**Returns**_: The input
     *
     * _**Example**_: CacheTask storing ${ONE} = 1
     *
     * ```json
     * { "cacheTask": { "cacheItems": [ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } ] } } ] } }
     * ```
     */
    public cacheTask?: OracleJob.ICacheTask | null;

    /** Task sysclockOffsetTask. */
    public sysclockOffsetTask?: OracleJob.ISysclockOffsetTask | null;

    /** Task marinadeStateTask. */
    public marinadeStateTask?: OracleJob.IMarinadeStateTask | null;

    /** Task solanaAccountDataFetchTask. */
    public solanaAccountDataFetchTask?: OracleJob.ISolanaAccountDataFetchTask | null;

    /** Task bufferLayoutParseTask. */
    public bufferLayoutParseTask?: OracleJob.IBufferLayoutParseTask | null;

    /**
     * Return a timestamp from a crontab instruction.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A timestamp
     *
     * _**Example**_: Return the unix timestamp for the on-chain SYSCLOCK
     *
     * ```json
     * {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
     * ```
     *
     * _**Example**_: Return the unix timestamp for next friday at 5pm UTC
     *
     * ```json
     * {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
     * ```
     */
    public cronParseTask?: OracleJob.ICronParseTask | null;

    /**
     * Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
     *
     * _**Input**_: None
     *
     * _**Returns**_: A numerical result.
     *
     * _**Example**_: Returns the minimum numerical result from 3 tasks.
     *
     * ```json
     * {"minTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
     * ```
     *
     * _**Example**_: Returns the minimum numerical result from 3 jobs.
     *
     * ```json
     * {"minTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
     * ```
     */
    public minTask?: OracleJob.IMinTask | null;

    /** Task historyFunctionTask. */
    public historyFunctionTask?: OracleJob.IHistoryFunctionTask | null;

    /** Task vwapTask. */
    public vwapTask?: OracleJob.IVwapTask | null;

    /** Task ewmaTask. */
    public ewmaTask?: OracleJob.IEwmaTask | null;

    /** Task comparisonTask. */
    public comparisonTask?: OracleJob.IComparisonTask | null;

    /**
     * Round the current running result to a set number of decimal places.
     *
     * _**Input**_: The current running numerical result.
     *
     * _**Returns**_: The running result rounded to a set number of decimal places.
     *
     * _**Example**_: Round down the running resul to 8 decimal places
     *
     * ```json
     * { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
     * ```
     */
    public roundTask?: OracleJob.IRoundTask | null;

    /**
     * Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
     *
     * _**Input**_: The current running numerical result.
     *
     * _**Returns**_: The running result bounded to an upper or lower bound if it exceeds a given threshold.
     *
     * _**Example**_: Bound the running result to a value between 0.90 and 1.10
     *
     * ```json
     * { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
     * ```
     */
    public boundTask?: OracleJob.IBoundTask | null;

    /** Task Task. */
    public Task?:
      | "httpTask"
      | "jsonParseTask"
      | "medianTask"
      | "meanTask"
      | "websocketTask"
      | "divideTask"
      | "multiplyTask"
      | "lpTokenPriceTask"
      | "lpExchangeRateTask"
      | "conditionalTask"
      | "valueTask"
      | "maxTask"
      | "regexExtractTask"
      | "xstepPriceTask"
      | "addTask"
      | "subtractTask"
      | "twapTask"
      | "serumSwapTask"
      | "powTask"
      | "lendingRateTask"
      | "mangoPerpMarketTask"
      | "jupiterSwapTask"
      | "perpMarketTask"
      | "oracleTask"
      | "anchorFetchTask"
      | "defiKingdomsTask"
      | "tpsTask"
      | "splStakePoolTask"
      | "splTokenParseTask"
      | "uniswapExchangeRateTask"
      | "sushiswapExchangeRateTask"
      | "pancakeswapExchangeRateTask"
      | "cacheTask"
      | "sysclockOffsetTask"
      | "marinadeStateTask"
      | "solanaAccountDataFetchTask"
      | "bufferLayoutParseTask"
      | "cronParseTask"
      | "minTask"
      | "historyFunctionTask"
      | "vwapTask"
      | "ewmaTask"
      | "comparisonTask"
      | "roundTask"
      | "boundTask";

    /**
     * Creates a new Task instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Task instance
     */
    public static create(properties?: OracleJob.ITask): OracleJob.Task;

    /**
     * Encodes the specified Task message. Does not implicitly {@apilink OracleJob.Task.verify|verify} messages.
     * @param message Task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: OracleJob.ITask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Task message, length delimited. Does not implicitly {@apilink OracleJob.Task.verify|verify} messages.
     * @param message Task message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: OracleJob.ITask,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Task message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): OracleJob.Task;

    /**
     * Decodes a Task message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Task
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): OracleJob.Task;

    /**
     * Verifies a Task message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Task message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Task
     */
    public static fromObject(object: { [k: string]: any }): OracleJob.Task;

    /**
     * Creates a plain object from a Task message. Also converts values to other types if specified.
     * @param message Task
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: OracleJob.Task,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Task to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Task
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
  }
}
