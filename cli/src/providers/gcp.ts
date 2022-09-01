import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

export class GcpProvider {
  private constructor() {}

  static async getSecret<T>(
    googleSecretPath: string | undefined,
    fileParser: (fileString: string) => T
  ): Promise<T> {
    if (!googleSecretPath || googleSecretPath.length === 0) {
      throw new Error(`Failed to provide a googleSecretPath`);
    }

    const client = new SecretManagerServiceClient();

    const [accessResponse] = await client.accessSecretVersion({
      name: googleSecretPath,
    });

    const secrets = accessResponse?.payload?.data;
    if (!secrets) {
      throw new Error("GCP Secret not found.");
    }

    return fileParser(secrets.toString());
  }
}
