import { createHash } from "crypto";
import _ from "lodash";

export type SecretsApiUser = {
  ciphersuite: "ed25519";
  user_pubkey: string;
  created_at: Date;
  updated_at: Date;
  contact_info: string;
};

export type SecretsApiSecret = {
  created_at: Date;
  updated_at: Date;
  secret: string;
  secret_name: string;
  whitelist: string[];
};

export class SwitchboardSecrets {
  readonly url: string;
  public constructor(url?: string) {
    this.url = url ?? "https://api.secrets.switchboard.xyz";
  }

  public async getUser(
    userPubkey: string,
    ciphersuite: string
  ): Promise<SecretsApiUser> {
    const url = `${this.url}/user/${userPubkey}/ciphersuite/${ciphersuite}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": Buffer.from(
          createHash("sha256").update("test-sig").digest("hex")
        ).toString("hex"),
      },
    });
    if (!response.ok) {
      throw new Error(`getUser failed: ${response.statusText}`);
    }

    const json = await response.json();
    return {
      ciphersuite: json.ciphersuite,
      user_pubkey: json.user_pubkey,
      created_at: new Date(json.created_at),
      updated_at: new Date(json.updated_at),
      contact_info: json.contact_info,
    };
  }

  public createOrUpdateUserRequest(
    userPubkey: string,
    ciphersuite: string,
    contactInfo: string,
    timestamp: number = Math.floor(Date.now() / 1000)
  ): UpdateUserPayload {
    return new UpdateUserPayload(
      userPubkey,
      ciphersuite,
      contactInfo,
      timestamp
    );
  }

  public async createOrUpdateUser(
    request: UpdateUserPayload,
    signature: string
  ) {
    const url = `${this.url}/user`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`createOrUpdateUser failed: ${response.statusText}`);
    }
  }

  public async getUserSecrets(
    userPubkey: string,
    ciphersuite: string
  ): Promise<SecretsApiSecret[]> {
    const url = `${this.url}/user/${userPubkey}/ciphersuite/${ciphersuite}/secrets`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": Buffer.from(
          createHash("sha256").update("test-sig").digest("hex")
        ).toString("hex"),
      },
    });
    if (!response.ok) {
      throw new Error(`getUserSecrets failed: ${response.statusText}`);
    }

    const json = await response.json();
    return _.isArray(json)
      ? json
          .map<SecretsApiSecret>((item) => ({
            secret: item.secret,
            secret_name: item.secret_name,
            created_at: new Date(item.created_at),
            updated_at: new Date(item.updated_at),
            whitelist: _.isArray(item.whitelisted_mrenclaves)
              ? item.whitelisted_mrenclaves.filter((val: string) => !!val)
              : [],
          }))
          .sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime())
      : [];
  }

  public createSecretRequest(
    userPubkey: string,
    ciphersuite: string,
    secret_name: string,
    secret: string,
    timestamp: number = Math.floor(Date.now() / 1000)
  ): CreateSecretPayload {
    return new CreateSecretPayload(
      userPubkey,
      ciphersuite,
      secret_name,
      secret,
      timestamp
    );
  }

  public async createSecret(request: CreateSecretPayload, signature: string) {
    const url = `${this.url}/secret`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`createSecret failed: ${response.statusText}`);
    }
  }

  public createAddMrEnclaveRequest(
    userPubkey: string,
    ciphersuite: string,
    mrEnclave: string,
    secretNames: string[],
    timestamp: number = Math.floor(Date.now() / 1000)
  ): AddMrEnclavePayload {
    return new AddMrEnclavePayload(
      userPubkey,
      ciphersuite,
      mrEnclave,
      secretNames,
      timestamp
    );
  }

  public async addMrEnclave(request: AddMrEnclavePayload, signature: string) {
    const url = `${this.url}/mrenclave/whitelist`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`addMrEnclave failed: ${response.statusText}`);
    }
  }

  public createRemoveMrEnclaveRequest(
    userPubkey: string,
    ciphersuite: string,
    mrEnclave: string,
    timestamp: number = Math.floor(Date.now() / 1000)
  ): RemoveMrEnclavePayload {
    return new RemoveMrEnclavePayload(
      userPubkey,
      ciphersuite,
      mrEnclave,
      timestamp
    );
  }

  public async removeMrEnclave(
    request: RemoveMrEnclavePayload,
    signature: string
  ) {
    const url = `${this.url}/mrenclave/whitelist`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`removeMrEnclave failed: ${response.statusText}`);
    }
  }

  public createDeleteSecretRequest(
    userPubkey: string,
    ciphersuite: string,
    secretName: string,
    timestamp: number = Math.floor(Date.now() / 1000)
  ): DeleteSecretPayload {
    return new DeleteSecretPayload(
      userPubkey,
      ciphersuite,
      secretName,
      timestamp
    );
  }

  public async deleteSecret(request: DeleteSecretPayload, signature: string) {
    const url = `${this.url}/secret`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Signed-Header": signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`deleteSecret failed: ${response.statusText}`);
    }
  }
}

export interface IUpdateUserPayload {
  user_pubkey: string;
  ciphersuite: string;
  contact_info: string;
  timestamp: number;
}

export class UpdateUserPayload implements IUpdateUserPayload {
  public constructor(
    readonly user_pubkey: string,
    readonly ciphersuite: string,
    readonly contact_info: string,
    readonly timestamp: number
  ) {}

  public static from(obj: IUpdateUserPayload): UpdateUserPayload {
    return new UpdateUserPayload(
      obj.user_pubkey,
      obj.ciphersuite,
      obj.contact_info,
      obj.timestamp
    );
  }

  public toJSON(): IUpdateUserPayload {
    return {
      user_pubkey: this.user_pubkey,
      ciphersuite: this.ciphersuite,
      contact_info: this.contact_info,
      timestamp: this.timestamp,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toJSON());
  }

  public toEncodedMessage(): Buffer {
    return Buffer.from(
      createHash("sha256").update(this.toString()).digest("hex")
    );
  }
}

export interface ICreateSecretPayload {
  user_pubkey: string;
  ciphersuite: string;
  secret_name: string;
  secret: string;
  timestamp: number;
}

export class CreateSecretPayload implements ICreateSecretPayload {
  public constructor(
    readonly user_pubkey: string,
    readonly ciphersuite: string,
    readonly secret_name: string,
    readonly secret: string,
    readonly timestamp: number
  ) {}

  public static from(obj: ICreateSecretPayload): CreateSecretPayload {
    return new CreateSecretPayload(
      obj.user_pubkey,
      obj.ciphersuite,
      obj.secret_name,
      obj.secret,
      obj.timestamp
    );
  }

  public toJSON(): ICreateSecretPayload {
    return {
      user_pubkey: this.user_pubkey,
      ciphersuite: this.ciphersuite,
      secret: this.secret,
      secret_name: this.secret_name,
      timestamp: this.timestamp,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toJSON());
  }

  public toEncodedMessage(): Buffer {
    return Buffer.from(
      createHash("sha256").update(this.toString()).digest("hex")
    );
  }
}

export interface IAddMrEnclavePayload {
  user_pubkey: string;
  ciphersuite: string;
  mr_enclave: string;
  secret_names: string[];
  timestamp: number;
}

export class AddMrEnclavePayload implements IAddMrEnclavePayload {
  public constructor(
    readonly user_pubkey: string,
    readonly ciphersuite: string,
    readonly mr_enclave: string,
    readonly secret_names: string[],
    readonly timestamp: number
  ) {}

  public static from(obj: IAddMrEnclavePayload): AddMrEnclavePayload {
    return new AddMrEnclavePayload(
      obj.user_pubkey,
      obj.ciphersuite,
      obj.mr_enclave,
      obj.secret_names,
      obj.timestamp
    );
  }

  public toJSON(): IAddMrEnclavePayload {
    return {
      user_pubkey: this.user_pubkey,
      ciphersuite: this.ciphersuite,
      mr_enclave: this.mr_enclave,
      secret_names: this.secret_names,
      timestamp: this.timestamp,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toJSON());
  }

  public toEncodedMessage(): Buffer {
    return Buffer.from(
      createHash("sha256").update(this.toString()).digest("hex")
    );
  }
}

export interface IRemoveMrEnclavePayload {
  user_pubkey: string;
  ciphersuite: string;
  mr_enclave: string;
  timestamp: number;
}

export class RemoveMrEnclavePayload implements IRemoveMrEnclavePayload {
  public constructor(
    readonly user_pubkey: string,
    readonly ciphersuite: string,
    readonly mr_enclave: string,
    readonly timestamp: number
  ) {}

  public static from(obj: IRemoveMrEnclavePayload): RemoveMrEnclavePayload {
    return new RemoveMrEnclavePayload(
      obj.user_pubkey,
      obj.ciphersuite,
      obj.mr_enclave,
      obj.timestamp
    );
  }

  public toJSON(): IRemoveMrEnclavePayload {
    return {
      user_pubkey: this.user_pubkey,
      ciphersuite: this.ciphersuite,
      mr_enclave: this.mr_enclave,
      timestamp: this.timestamp,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toJSON());
  }

  public toEncodedMessage(): Buffer {
    return Buffer.from(
      createHash("sha256").update(this.toString()).digest("hex")
    );
  }
}

export interface IDeleteSecretPayload {
  user_pubkey: string;
  ciphersuite: string;
  secret_name: string;
  timestamp: number;
}

export class DeleteSecretPayload implements IDeleteSecretPayload {
  public constructor(
    readonly user_pubkey: string,
    readonly ciphersuite: string,
    readonly secret_name: string,
    readonly timestamp: number
  ) {}

  public static from(obj: IDeleteSecretPayload): DeleteSecretPayload {
    return new DeleteSecretPayload(
      obj.user_pubkey,
      obj.ciphersuite,
      obj.secret_name,
      obj.timestamp
    );
  }

  public toJSON(): IDeleteSecretPayload {
    return {
      user_pubkey: this.user_pubkey,
      ciphersuite: this.ciphersuite,
      secret_name: this.secret_name,
      timestamp: this.timestamp,
    };
  }

  public toString(): string {
    return JSON.stringify(this.toJSON());
  }

  public toEncodedMessage(): Buffer {
    return Buffer.from(
      createHash("sha256").update(this.toString()).digest("hex")
    );
  }
}
