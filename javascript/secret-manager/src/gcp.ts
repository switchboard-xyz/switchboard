import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

export class GcpProvider {
  private constructor() {}

  // TODO: Create service account
  // TODO: Add service account to secret IAMM
  // TODO: Rotate service account keys ??

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

  static async createSecret(
    projectName: string,
    secretName: string,
    secretData: string
  ): Promise<string> {
    const client = new SecretManagerServiceClient();

    const [secret] = await client.createSecret({
      parent: `projects/${projectName}`,
      secret: {
        name: secretName,
        replication: {
          automatic: {},
        },
      },
      secretId: secretName,
    });

    const [version] = await client.addSecretVersion({
      parent: secret.name,
      payload: {
        data: Buffer.from(secretData, "utf8"),
      },
    });

    const [accessResponse] = await client.accessSecretVersion({
      name: version.name,
    });

    const secrets = accessResponse?.payload?.data;
    if (!secrets) {
      throw new Error("GCP Secret not found.");
    }

    if (Buffer.from(secrets).toString() !== secretData) {
      throw new Error(
        `Failed to parse correct secret from gcp, expected: ${secretData}, received: ${Buffer.from(
          secrets
        ).toString()}`
      );
    }

    return version.name;
  }
}
