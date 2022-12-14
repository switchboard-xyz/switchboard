import shell from "shelljs";
import fs from "fs";
import path from "path";

function generateTypedoc(
  entryPoint: string,
  relativeOutputPath: string,
  fileManager: "yarn" | "npm" = "yarn"
) {
  if (fileManager === "yarn") {
    if (
      shell.exec(
        `yarn install && typedoc ${entryPoint} --out ${relativeOutputPath} --githubPages --cleanOutputDir`
      ).code !== 0
    ) {
      shell.echo(
        `Error: Typedoc failed to generate documentation for ${relativeOutputPath}`
      );
      shell.exit(1);
    }
  } else {
    if (
      shell.exec(
        `npm install && typedoc ${entryPoint} --out ${relativeOutputPath} --githubPages --cleanOutputDir`
      ).code !== 0
    ) {
      shell.echo(
        `Error: Typedoc failed to generate documentation for ${relativeOutputPath}`
      );
      shell.exit(1);
    }
  }
}

export function generateGenericApiTypedocs(
  projectRoot: string,
  modulePaths: string[],
  outputPaths: string[],
  fileManager: "yarn" | "npm" = "yarn",
  entry = "./src/index.ts"
) {
  const currentWorkingDir = process.cwd();

  const sdkPath = path.join(projectRoot, ...modulePaths);

  const sdkDocsOutputPath = path.join(
    projectRoot,
    "website",
    "static",
    "api",
    ...outputPaths
  );
  const sdkDocsRelativeOutputPath = path.relative(sdkPath, sdkDocsOutputPath);

  shell.cd(sdkPath);

  generateTypedoc(entry, sdkDocsRelativeOutputPath, fileManager);

  shell.cd(currentWorkingDir);
}
