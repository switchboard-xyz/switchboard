import { isBase64, isBytes, isHex, parseSecretString } from '../src';

import { expect } from 'chai';

// all the same 
// byte length = 64
const byteString =
  '[ 77, 212,236,155  ,5,  116,54,46,64,18,87,98,  126,127,24,53,31,253,30,97,  55,227,68,125,82,123,56,81,213,83,115,20,100,108,126,23,4,137,94,239,9,192,65,  3,130,124,30,49,247,228,210,192,34,166,37,6,10,191,177,223,134,83,206,192]';
const hexString =
  '0x4dd4ec9b0574362e401257627e7f18351ffd1e6137e3447d527b3851d5537314646c7e1704895eef09c04103827c1e31f7e4d2c022a625060abfb1df8653cec0';
const base64String =
  'TdTsmwV0Ni5AEldifn8YNR/9HmE340R9Uns4UdVTcxRkbH4XBIle7wnAQQOCfB4x9+TSwCKmJQYKv7HfhlPOwA==';

describe('Secret Parsing Tests', () => {
  describe('Bytes', () => {
    it('it should parse a valid byteString', () => {
      expect(isBytes(byteString)).to.equal(true);

      const secretBuffer = parseSecretString(byteString);
      if (secretBuffer === undefined) {
        throw new Error(`Failed to parse byte string`);
      }

      expect(secretBuffer).to.not.be.undefined;
      expect(secretBuffer.byteLength).to.be.equal(64);
    });

    it('it should parse a valid byteString with a trailing newline', () => {
      const byteStringWithNewLine = byteString + '\n';

      const secretBuffer = parseSecretString(byteStringWithNewLine);
      if (secretBuffer === undefined) {
        throw new Error(`Failed to parse byte string`);
      }

      expect(secretBuffer).to.not.be.undefined;
      expect(secretBuffer.byteLength).to.be.equal(64);
    });

    it('it should fail to parse the byteString if theres not enough bytes', () => {
      expect(isBytes(byteString, 72)).to.be.false;
    });
  });

  describe('Hex', () => {
    it('it should parse a valid hexString', () => {
      expect(isHex(hexString)).to.equal(true);

      const secretBuffer = parseSecretString(hexString);
      if (secretBuffer === undefined) {
        throw new Error(`Failed to parse hex string`);
      }

      expect(secretBuffer).to.not.be.undefined;
      expect(secretBuffer.byteLength).to.be.equal(64);
    });

    it('it should parse a valid hexString with a trailing newline', () => {
      const hexStringWithNewLine = hexString + '\n';

      const secretBuffer = parseSecretString(hexStringWithNewLine);
      if (secretBuffer === undefined) {
        throw new Error(`Failed to parse hex string`);
      }

      expect(secretBuffer).to.not.be.undefined;
      expect(secretBuffer.byteLength).to.be.equal(64);
    });
  });
  describe('Base64', () => {
    it('it should parse a valid base64String', () => {
      expect(isBase64(base64String)).to.equal(true);

      const secretBuffer = parseSecretString(base64String);
      if (secretBuffer === undefined) {
        throw new Error(`Failed to parse base64 string`);
      }

      expect(secretBuffer).to.not.be.undefined;
      expect(secretBuffer.byteLength).to.be.equal(64);
    });

    it('it should parse a valid base64String with a trailing newline', () => {
      const base64StringWithNewLine = base64String + '\n';

      const secretBuffer = parseSecretString(base64StringWithNewLine);
      if (secretBuffer === undefined) {
        throw new Error(`Failed to parse base64 string`);
      }

      expect(secretBuffer).to.not.be.undefined;
      expect(secretBuffer.byteLength).to.be.equal(64);
    });
  });
});
