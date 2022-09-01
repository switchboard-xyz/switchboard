import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

export class AwsProvider {
  private constructor() {}

  static async getSecret<T>(
    amazonSecretPath: string | undefined,
    fileParser: (fileString: string) => T
  ): Promise<T> {
    if ((amazonSecretPath ?? "").length === 0) {
      throw new Error(`Failed to provide a amazonSecretPath`);
    }

    const credentials = fromNodeProviderChain();
    const awsClient = new SecretsManagerClient({ credentials });
    const data = await awsClient.send(
      new GetSecretValueCommand({ SecretId: amazonSecretPath })
    );
    let secret: string;
    if ("SecretString" in data) {
      // AWS secrets are a key-value pair
      // First attempt to load the key with the same name as the secret
      // Fall back to using the first key
      const secretObject: Record<string, string> = JSON.parse(
        data.SecretString!
      );
      const secretName =
        data.Name! in secretObject
          ? data.Name!
          : process.env.AMAZON_PAYER_SECRET_NAME ||
            process.env.AWS_SECRET_NAME ||
            "oracle_payer_secret" ||
            Object.keys(secretObject)[0];
      if (!(secretName in secretObject)) {
        throw new Error(`secret ${secretName} does not exist`);
      }
      secret = secretObject[secretName];
    } else if ("SecretBinary" in data) {
      let buff = Buffer.from(data.SecretBinary!);
      secret = buff.toString("ascii");
    } else {
      throw new Error("AWS Secret not found");
    }

    if (!secret) {
      throw new Error("AWS Secret not found");
    }

    return fileParser(secret);
  }
}
