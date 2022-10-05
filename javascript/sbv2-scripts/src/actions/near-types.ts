import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { getAllFiles } from "../utilts";
import { ProgramStructs } from "../rust/generator";

export function nearTypes(nearSourceDir: string, outputDirectory: string) {
  console.log(`Finding input files ...`);

  const inputDirectory =
    nearSourceDir.startsWith("/") ||
    nearSourceDir.startsWith("C:") ||
    nearSourceDir.startsWith("D:")
      ? nearSourceDir
      : path.join(process.cwd(), nearSourceDir);

  if (!fs.existsSync(inputDirectory)) {
    throw new Error(`Failed to find input directory ${inputDirectory}`);
  }

  const sourceFiles = getAllFiles("rs", inputDirectory, []);
  if (sourceFiles.length === 0) {
    throw new Error(`Failed to find source files in ${inputDirectory}`);
  }

  console.log(`Reading ${sourceFiles.length} input files ...`);

  const structs = new ProgramStructs(sourceFiles);
  console.log(`Found ${structs.size} structs ...`);

  structs.write(outputDirectory);

  execSync(`npx prettier --write ${outputDirectory}`);

  process.exit();
}
