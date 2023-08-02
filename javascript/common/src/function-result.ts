import * as borsh from "@coral-xyz/borsh";
import BN from "bn.js";

export type ChainResultInfoKind = None | Solana | Evm;
export type ChainResultInfoJSON = NoneJSON | SolanaJSON | EvmJSON;

export interface NoneJSON {
  kind: "None";
}

export class None {
  static readonly discriminator = 0;
  static readonly kind = "None";
  readonly discriminator = 0;
  readonly kind = "None";

  toJSON(): NoneJSON {
    return {
      kind: "None",
    };
  }

  toEncodable() {
    return {
      None: {},
    };
  }
}

export type SolanaFields = [SOLFunctionResultFields];
export type SolanaValue = [SOLFunctionResult];

export interface SolanaJSON {
  kind: "Solana";
  value: [SOLFunctionResultJSON];
}

export class Solana {
  static readonly discriminator = 1;
  static readonly kind = "Solana";
  readonly discriminator = 1;
  readonly kind = "Solana";
  readonly value: SolanaValue;

  constructor(value: SolanaFields) {
    this.value = [new SOLFunctionResult({ ...value[0] })];
  }

  toJSON(): SolanaJSON {
    return {
      kind: "Solana",
      value: [this.value[0].toJSON()],
    };
  }

  toEncodable() {
    return {
      Solana: {
        _0: SOLFunctionResult.toEncodable(this.value[0]),
      },
    };
  }
}

export type EvmFields = [EVMFunctionResultFields];
export type EvmValue = [EVMFunctionResult];

export interface EvmJSON {
  kind: "Evm";
  value: [EVMFunctionResultJSON];
}

export class Evm {
  static readonly discriminator = 2;
  static readonly kind = "Evm";
  readonly discriminator = 2;
  readonly kind = "Evm";
  readonly value: EvmValue;

  constructor(value: EvmFields) {
    this.value = [new EVMFunctionResult({ ...value[0] })];
  }

  toJSON(): EvmJSON {
    return {
      kind: "Evm",
      value: [this.value[0].toJSON()],
    };
  }

  toEncodable() {
    return {
      Evm: {
        _0: EVMFunctionResult.toEncodable(this.value[0]),
      },
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function chainResultInfoFromDecoded(obj: any): ChainResultInfoKind {
  if (typeof obj !== "object") {
    throw new Error("Invalid enum object");
  }

  if ("None" in obj) {
    return new None();
  }
  if ("Solana" in obj) {
    const val = obj["Solana"];
    return new Solana([SOLFunctionResult.fromDecoded(val["_0"])]);
  }
  if ("Evm" in obj) {
    const val = obj["Evm"];
    return new Evm([EVMFunctionResult.fromDecoded(val["_0"])]);
  }

  throw new Error("Invalid enum object");
}

export function chainResultInfofromJSON(
  obj: ChainResultInfoJSON
): ChainResultInfoKind {
  switch (obj.kind) {
    case "None": {
      return new None();
    }
    case "Solana": {
      return new Solana([SOLFunctionResult.fromJSON(obj.value[0])]);
    }
    case "Evm": {
      return new Evm([EVMFunctionResult.fromJSON(obj.value[0])]);
    }
  }
}

export function chainResultLayout(property?: string) {
  const ret = borsh.rustEnum([
    borsh.struct([], "None"),
    borsh.struct([SOLFunctionResult.layout("_0")], "Solana"),
    borsh.struct([EVMFunctionResult.layout("_0")], "Evm"),
  ]);
  if (property !== undefined) {
    return ret.replicate(property);
  }
  return ret;
}

export interface EVMFunctionResultFields {
  txs: Array<EvmTransactionFields>;
  signatures: Array<Uint8Array>;
}

export interface EVMFunctionResultJSON {
  txs: Array<EvmTransactionJSON>;
  signatures: Array<Array<number>>;
}

export class EVMFunctionResult {
  readonly txs: Array<EvmTransaction>;
  readonly signatures: Array<Uint8Array>;

  constructor(fields: EVMFunctionResultFields) {
    this.txs = fields.txs.map((item) => new EvmTransaction({ ...item }));
    this.signatures = fields.signatures;
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.vec(EvmTransaction.layout(), "txs"),
        borsh.vec(borsh.vecU8(), "signatures"),
      ],
      property
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new EVMFunctionResult({
      txs: obj.txs.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => EvmTransaction.fromDecoded(item)
      ),
      signatures: obj.signatures.map(
        (
          item: any /* eslint-disable-line @typescript-eslint/no-explicit-any */
        ) => new Uint8Array(item.buffer, item.byteOffset, item.length)
      ),
    });
  }

  static toEncodable(fields: EVMFunctionResultFields) {
    return {
      txs: fields.txs.map((item) => EvmTransaction.toEncodable(item)),
      signatures: fields.signatures.map((item) =>
        Buffer.from(item.buffer, item.byteOffset, item.length)
      ),
    };
  }

  toJSON(): EVMFunctionResultJSON {
    return {
      txs: this.txs.map((item) => item.toJSON()),
      signatures: this.signatures.map((item) => Array.from(item.values())),
    };
  }

  static fromJSON(obj: EVMFunctionResultJSON): EVMFunctionResult {
    return new EVMFunctionResult({
      txs: obj.txs.map((item) => EvmTransaction.fromJSON(item)),
      signatures: obj.signatures.map((item) => Uint8Array.from(item)),
    });
  }

  toEncodable() {
    return EVMFunctionResult.toEncodable(this);
  }
}

export interface EvmTransactionFields {
  expirationTimeSeconds: BN;
  gasLimit: string;
  value: string;
  to: Uint8Array;
  from: Uint8Array;
  data: Uint8Array;
}

export interface EvmTransactionJSON {
  expirationTimeSeconds: string;
  gasLimit: string;
  value: string;
  to: Array<number>;
  from: Array<number>;
  data: Array<number>;
}

export class EvmTransaction {
  readonly expirationTimeSeconds: BN;
  readonly gasLimit: string;
  readonly value: string;
  readonly to: Uint8Array;
  readonly from: Uint8Array;
  readonly data: Uint8Array;

  constructor(fields: EvmTransactionFields) {
    this.expirationTimeSeconds = fields.expirationTimeSeconds;
    this.gasLimit = fields.gasLimit;
    this.value = fields.value;
    this.to = fields.to;
    this.from = fields.from;
    this.data = fields.data;
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.u64("expirationTimeSeconds"),
        borsh.str("gasLimit"),
        borsh.str("value"),
        borsh.vecU8("to"),
        borsh.vecU8("from"),
        borsh.vecU8("data"),
      ],
      property
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new EvmTransaction({
      expirationTimeSeconds: obj.expirationTimeSeconds,
      gasLimit: obj.gasLimit,
      value: obj.value,
      to: new Uint8Array(obj.to.buffer, obj.to.byteOffset, obj.to.length),
      from: new Uint8Array(
        obj.from.buffer,
        obj.from.byteOffset,
        obj.from.length
      ),
      data: new Uint8Array(
        obj.data.buffer,
        obj.data.byteOffset,
        obj.data.length
      ),
    });
  }

  static toEncodable(fields: EvmTransactionFields) {
    return {
      expirationTimeSeconds: fields.expirationTimeSeconds,
      gasLimit: fields.gasLimit,
      value: fields.value,
      to: Buffer.from(fields.to.buffer, fields.to.byteOffset, fields.to.length),
      from: Buffer.from(
        fields.from.buffer,
        fields.from.byteOffset,
        fields.from.length
      ),
      data: Buffer.from(
        fields.data.buffer,
        fields.data.byteOffset,
        fields.data.length
      ),
    };
  }

  toJSON(): EvmTransactionJSON {
    return {
      expirationTimeSeconds: this.expirationTimeSeconds.toString(),
      gasLimit: this.gasLimit,
      value: this.value,
      to: Array.from(this.to.values()),
      from: Array.from(this.from.values()),
      data: Array.from(this.data.values()),
    };
  }

  static fromJSON(obj: EvmTransactionJSON): EvmTransaction {
    return new EvmTransaction({
      expirationTimeSeconds: new BN(obj.expirationTimeSeconds),
      gasLimit: obj.gasLimit,
      value: obj.value,
      to: Uint8Array.from(obj.to),
      from: Uint8Array.from(obj.from),
      data: Uint8Array.from(obj.data),
    });
  }

  toEncodable() {
    return EvmTransaction.toEncodable(this);
  }
}

export interface FunctionResultFields {
  version: number;
  quote: Uint8Array;
  fnKey: Uint8Array;
  signer: Uint8Array;
  fnRequestKey: Uint8Array;
  fnRequestHash: Uint8Array;
  chainResultInfo: ChainResultInfoKind;
}

export interface FunctionResultJSON {
  version: number;
  quote: Array<number>;
  fnKey: Array<number>;
  signer: Array<number>;
  fnRequestKey: Array<number>;
  fnRequestHash: Array<number>;
  chainResultInfo: ChainResultInfoJSON;
}

export class FunctionResult {
  readonly version: number;
  readonly quote: Uint8Array;
  readonly fnKey: Uint8Array;
  readonly signer: Uint8Array;
  readonly fnRequestKey: Uint8Array;
  readonly fnRequestHash: Uint8Array;
  readonly chainResultInfo: ChainResultInfoKind;

  constructor(fields: FunctionResultFields) {
    this.version = fields.version;
    this.quote = fields.quote;
    this.fnKey = fields.fnKey;
    this.signer = fields.signer;
    this.fnRequestKey = fields.fnRequestKey;
    this.fnRequestHash = fields.fnRequestHash;
    this.chainResultInfo = fields.chainResultInfo;
  }

  static layout(property?: string) {
    return borsh.struct(
      [
        borsh.u32("version"),
        borsh.vecU8("quote"),
        borsh.vecU8("fnKey"),
        borsh.vecU8("signer"),
        borsh.vecU8("fnRequestKey"),
        borsh.vecU8("fnRequestHash"),
        chainResultLayout("chainResultInfo"),
      ],
      property
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new FunctionResult({
      version: obj.version,
      quote: new Uint8Array(
        obj.quote.buffer,
        obj.quote.byteOffset,
        obj.quote.length
      ),
      fnKey: new Uint8Array(
        obj.fnKey.buffer,
        obj.fnKey.byteOffset,
        obj.fnKey.length
      ),
      signer: new Uint8Array(
        obj.signer.buffer,
        obj.signer.byteOffset,
        obj.signer.length
      ),
      fnRequestKey: new Uint8Array(
        obj.fnRequestKey.buffer,
        obj.fnRequestKey.byteOffset,
        obj.fnRequestKey.length
      ),
      fnRequestHash: new Uint8Array(
        obj.fnRequestHash.buffer,
        obj.fnRequestHash.byteOffset,
        obj.fnRequestHash.length
      ),
      chainResultInfo: chainResultInfoFromDecoded(obj.chainResultInfo),
    });
  }

  static toEncodable(fields: FunctionResultFields) {
    return {
      version: fields.version,
      quote: Buffer.from(
        fields.quote.buffer,
        fields.quote.byteOffset,
        fields.quote.length
      ),
      fnKey: Buffer.from(
        fields.fnKey.buffer,
        fields.fnKey.byteOffset,
        fields.fnKey.length
      ),
      signer: Buffer.from(
        fields.signer.buffer,
        fields.signer.byteOffset,
        fields.signer.length
      ),
      fnRequestKey: Buffer.from(
        fields.fnRequestKey.buffer,
        fields.fnRequestKey.byteOffset,
        fields.fnRequestKey.length
      ),
      fnRequestHash: Buffer.from(
        fields.fnRequestHash.buffer,
        fields.fnRequestHash.byteOffset,
        fields.fnRequestHash.length
      ),
      chainResultInfo: fields.chainResultInfo.toEncodable(),
    };
  }

  toJSON(): FunctionResultJSON {
    return {
      version: this.version,
      quote: Array.from(this.quote.values()),
      fnKey: Array.from(this.fnKey.values()),
      signer: Array.from(this.signer.values()),
      fnRequestKey: Array.from(this.fnRequestKey.values()),
      fnRequestHash: Array.from(this.fnRequestHash.values()),
      chainResultInfo: this.chainResultInfo.toJSON(),
    };
  }

  static fromJSON(obj: FunctionResultJSON): FunctionResult {
    return new FunctionResult({
      version: obj.version,
      quote: Uint8Array.from(obj.quote),
      fnKey: Uint8Array.from(obj.fnKey),
      signer: Uint8Array.from(obj.signer),
      fnRequestKey: Uint8Array.from(obj.fnRequestKey),
      fnRequestHash: Uint8Array.from(obj.fnRequestHash),
      chainResultInfo: chainResultInfofromJSON(obj.chainResultInfo),
    });
  }

  toEncodable() {
    return FunctionResult.toEncodable(this);
  }
}

export interface SOLFunctionResultFields {
  serializedTx: Uint8Array;
}

export interface SOLFunctionResultJSON {
  serializedTx: Array<number>;
}

export class SOLFunctionResult {
  readonly serializedTx: Uint8Array;

  constructor(fields: SOLFunctionResultFields) {
    this.serializedTx = fields.serializedTx;
  }

  static layout(property?: string) {
    return borsh.struct([borsh.vecU8("serializedTx")], property);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static fromDecoded(obj: any) {
    return new SOLFunctionResult({
      serializedTx: new Uint8Array(
        obj.serializedTx.buffer,
        obj.serializedTx.byteOffset,
        obj.serializedTx.length
      ),
    });
  }

  static toEncodable(fields: SOLFunctionResultFields) {
    return {
      serializedTx: Buffer.from(
        fields.serializedTx.buffer,
        fields.serializedTx.byteOffset,
        fields.serializedTx.length
      ),
    };
  }

  toJSON(): SOLFunctionResultJSON {
    return {
      serializedTx: Array.from(this.serializedTx.values()),
    };
  }

  static fromJSON(obj: SOLFunctionResultJSON): SOLFunctionResult {
    return new SOLFunctionResult({
      serializedTx: Uint8Array.from(obj.serializedTx),
    });
  }

  toEncodable() {
    return SOLFunctionResult.toEncodable(this);
  }
}
