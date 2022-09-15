import shell from "shelljs";
import fs from "fs";
import path from "path";

function generateTypedoc(entryPoint: string, relativeOutputPath: string) {
  if (
    shell.exec(
      `typedoc --entryPoints ${entryPoint} --out ${relativeOutputPath} --githubPages --cleanOutputDir`
    ).code !== 0
  ) {
    shell.echo(
      `Error: Typedoc failed to generate documentation for ${relativeOutputPath}`
    );
    shell.exit(1);
  }
}

export function generateAptosDocs(projectRoot: string) {
  const currentWorkingDir = process.cwd();

  const sdkPath = path.join(projectRoot, "sdks", "aptos");

  const sdkDocsOutputPath = path.join(
    projectRoot,
    "website",
    "static",
    "api",
    "js",
    "aptos.js"
  );
  const sdkDocsRelativeOutputPath = path.relative(sdkPath, sdkDocsOutputPath);

  shell.cd(sdkPath);

  generateTypedoc("./src/index.ts", sdkDocsRelativeOutputPath);

  shell.cd(currentWorkingDir);
}

export function generateNearDocs(projectRoot: string) {
  const currentWorkingDir = process.cwd();

  const sdkPath = path.join(projectRoot, "sdks", "near", "client");

  const sdkDocsOutputPath = path.join(
    projectRoot,
    "website",
    "static",
    "api",
    "js",
    "near.js"
  );
  const sdkDocsRelativeOutputPath = path.relative(sdkPath, sdkDocsOutputPath);

  shell.cd(sdkPath);

  generateTypedoc("./src/index.ts", sdkDocsRelativeOutputPath);

  shell.cd(currentWorkingDir);
}

export function generateSolanaDocs(projectRoot: string) {
  const currentWorkingDir = process.cwd();

  const sdkPath = path.join(projectRoot, "sdks", "solana", "libraries", "ts");

  const sdkDocsOutputPath = path.join(
    projectRoot,
    "website",
    "static",
    "api",
    "js",
    "solana.js"
  );
  const sdkDocsRelativeOutputPath = path.relative(sdkPath, sdkDocsOutputPath);

  shell.cd(sdkPath);

  generateTypedoc("./src/index.ts", sdkDocsRelativeOutputPath);

  shell.cd(currentWorkingDir);
}

export function generateCommonDocs(projectRoot: string) {
  const currentWorkingDir = process.cwd();

  const sdkPath = path.join(projectRoot, "javascript", "common");

  const sdkDocsOutputPath = path.join(
    projectRoot,
    "website",
    "static",
    "api",
    "js",
    "common"
  );
  const sdkDocsRelativeOutputPath = path.relative(sdkPath, sdkDocsOutputPath);

  shell.cd(sdkPath);

  generateTypedoc("./src/index.ts", sdkDocsRelativeOutputPath);

  shell.cd(currentWorkingDir);
}
