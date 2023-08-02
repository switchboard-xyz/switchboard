import { OracleJob, parseMrEnclave } from "../src";

import { assert, expect } from "chai";

const rawMrEnclave1 =
  "569e8cdae29c7e4b1431dc572387f897511782314c54993e6447e3895789b0d6";
const parsedMrEnclave1 = new Uint8Array([
  86, 158, 140, 218, 226, 156, 126, 75, 20, 49, 220, 87, 35, 135, 248, 151, 81,
  23, 130, 49, 76, 84, 153, 62, 100, 71, 227, 137, 87, 137, 176, 214,
]);

describe("MrEnclave Tests", () => {
  it("Parses a valid MrEnclave w/o 0x prefix", () => {
    expect(parseMrEnclave(rawMrEnclave1)).deep.equal(parsedMrEnclave1);
  });

  it("Parses a valid MrEnclave with 0x prefix", () => {
    expect(parseMrEnclave(`0x${rawMrEnclave1}`)).deep.equal(parsedMrEnclave1);
    console.log(`0X${rawMrEnclave1}`);
    expect(parseMrEnclave(`0X${rawMrEnclave1}`)).deep.equal(parsedMrEnclave1);
  });

  it("Throws when a MrEnclave is not a hex string", () => {
    // not hex encoded
    assert.throws(() => {
      parseMrEnclave(`NOT_A_MR_ENCLAVE`);
    }, `Not a valid hex string representation of a MRENCLAVE measurement`);

    // not 32 bytes
    assert.throws(() => {
      parseMrEnclave(rawMrEnclave1.slice(0, rawMrEnclave1.length - 4));
    }, `Not a valid hex string representation of a MRENCLAVE measurement`);
  });
});
