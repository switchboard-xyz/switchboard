import { AxiosUtils } from './utils';

import { Buffer } from 'buffer';
import { sha256 } from 'js-sha256';
/**
 *  Default is to expire requests 30 seconds from now.
 */
const getDefaultRequestTimestamp = () => Math.floor(Date.now() / 1000) + 30;

export type SecretsApiUser = {
  ciphersuite: 'ed25519';
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
    this.url = url ?? 'https://api.secrets.switchboard.xyz';
  }

  public async getUser(
    userPubkey: string,
    ciphersuite: string
  ): Promise<SecretsApiUser> {
    const url = `${this.url}/user/${userPubkey}/ciphersuite/${ciphersuite}`;
    const response = await AxiosUtils.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': Buffer.from(
          sha256.create().update('test-sig').digest()
        ).toString('hex'),
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
    /**
     *  The address of the user.
     */
    userPubkey: string,
    /**
     *  'ed25519' for Solana users, 'ethers' for EVM users.
     */
    ciphersuite: string,
    /**
     *  Stringified contact info for the user.
     */
    contactInfo = '',
    /**
     *  The timestamp that this request expires.
     *
     *  Default: now + 30 seconds.
     */
    expiryTimestamp = getDefaultRequestTimestamp()
  ): UpdateUserPayload {
    return new UpdateUserPayload(
      userPubkey,
      ciphersuite,
      contactInfo,
      expiryTimestamp
    );
  }

  public async createOrUpdateUser(
    request: UpdateUserPayload,
    signature: string
  ) {
    const url = `${this.url}/user`;
    const response = await AxiosUtils.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': signature,
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
    const response = await AxiosUtils.fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': Buffer.from(
          sha256.create().update('test-sig').digest()
        ).toString('hex'),
      },
    });
    if (!response.ok) {
      throw new Error(`getUserSecrets failed: ${response.statusText}`);
    }

    const json = await response.json();
    return Array.isArray(json)
      ? json
          .map<SecretsApiSecret>(item => ({
            secret: item.secret,
            secret_name: item.secret_name,
            created_at: new Date(item.created_at),
            updated_at: new Date(item.updated_at),
            whitelist: Array.isArray(item.whitelisted_mrenclaves)
              ? item.whitelisted_mrenclaves.filter((val: string) => !!val)
              : [],
          }))
          .sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime())
      : [];
  }

  public createSecretRequest(
    /**
     *  The address of the user.
     */
    userPubkey: string,
    /**
     *  'ed25519' for Solana users, 'ethers' for EVM users.
     */
    ciphersuite: string,
    /**
     *  The key of the secret.
     *
     *  Keys must be unique per user.
     */
    secretName: string,
    /**
     *  The value of the secret.
     */
    secretValue: string,
    /**
     *  The timestamp that this request expires.
     *
     *  Default: now + 30 seconds.
     */
    expiryTimestamp = getDefaultRequestTimestamp()
  ): CreateSecretPayload {
    return new CreateSecretPayload(
      userPubkey,
      ciphersuite,
      secretName,
      secretValue,
      expiryTimestamp
    );
  }

  public async createSecret(request: CreateSecretPayload, signature: string) {
    const url = `${this.url}/secret`;
    const response = await AxiosUtils.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`createSecret failed: ${response.statusText}`);
    }
  }

  public createAddMrEnclaveRequest(
    /**
     *  The address of the user.
     */
    userPubkey: string,
    /**
     *  'ed25519' for Solana users, 'ethers' for EVM users.
     */
    ciphersuite: string,
    /**
     *  The MrEnclave value to add.
     */
    mrEnclave: string,
    /**
     *  The names of the secrets to whitelist the MrEnclave value for.
     */
    secretNames: string[],
    /**
     *  The timestamp that this request expires.
     *
     *  Default: now + 30 seconds.
     */
    expiryTimestamp = getDefaultRequestTimestamp()
  ): AddMrEnclavePayload {
    return new AddMrEnclavePayload(
      userPubkey,
      ciphersuite,
      mrEnclave,
      secretNames,
      expiryTimestamp
    );
  }

  public async addMrEnclave(request: AddMrEnclavePayload, signature: string) {
    const url = `${this.url}/mrenclave/whitelist`;
    const response = await AxiosUtils.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`addMrEnclave failed: ${response.statusText}`);
    }
  }

  public createRemoveMrEnclaveRequest(
    /**
     *  The address of the user.
     */
    userPubkey: string,
    /**
     *  'ed25519' for Solana users, 'ethers' for EVM users.
     */
    ciphersuite: string,
    /**
     *  The mrEnclave value to remove.
     */
    mrEnclave: string,
    /**
     *  The timestamp that this request expires.
     *
     *  Default: now + 30 seconds.
     */
    expiryTimestamp = getDefaultRequestTimestamp()
  ): RemoveMrEnclavePayload {
    return new RemoveMrEnclavePayload(
      userPubkey,
      ciphersuite,
      mrEnclave,
      expiryTimestamp
    );
  }

  public async removeMrEnclave(
    request: RemoveMrEnclavePayload,
    signature: string
  ) {
    const url = `${this.url}/mrenclave/whitelist`;
    const response = await AxiosUtils.fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': signature,
      },
      body: request.toString(),
    });
    if (!response.ok) {
      throw new Error(`removeMrEnclave failed: ${response.statusText}`);
    }
  }

  public createDeleteSecretRequest(
    /**
     *  The address of the user.
     */
    userPubkey: string,
    /**
     *  'ed25519' for Solana users, 'ethers' for EVM users.
     */
    ciphersuite: string,
    /**
     *  The name fo the secret to delete.
     */
    secretName: string,
    /**
     *  The timestamp that this request expires.
     *
     *  Default: now + 30 seconds.
     */
    expiryTimestamp = getDefaultRequestTimestamp()
  ): DeleteSecretPayload {
    return new DeleteSecretPayload(
      userPubkey,
      ciphersuite,
      secretName,
      expiryTimestamp
    );
  }

  public async deleteSecret(request: DeleteSecretPayload, signature: string) {
    const url = `${this.url}/secret`;
    const response = await AxiosUtils.fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-Signed-Header': signature,
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
    return Buffer.from(sha256.create().update(this.toString()).digest());
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
    return Buffer.from(sha256.create().update(this.toString()).digest());
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
    return Buffer.from(sha256.create().update(this.toString()).digest());
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
    return Buffer.from(sha256.create().update(this.toString()).digest());
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
    return Buffer.from(sha256.create().update(this.toString()).digest());
  }
}
