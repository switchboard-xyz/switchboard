import { ProgramStructs } from '../move/generator';
import { getAllFiles } from '../utilts';

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const projectDir = path.join(__dirname, '..', '..', '..', '..');

export function aptosTypes(aptosSourceDir: string, outputDirectory: string) {
  console.log(`Finding input files ...`);

  const inputDirectory =
    aptosSourceDir.startsWith('/') ||
    aptosSourceDir.startsWith('C:') ||
    aptosSourceDir.startsWith('D:')
      ? aptosSourceDir
      : path.join(process.cwd(), aptosSourceDir);

  if (!fs.existsSync(inputDirectory)) {
    throw new Error(`Failed to find input directory ${inputDirectory}`);
  }

  const sourceFiles = getAllFiles('move', inputDirectory, []);
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

export function aptosIdl(aptosSourceDir: string) {
  console.log(`Finding input files ...`);

  const inputDirectory =
    aptosSourceDir.startsWith('/') ||
    aptosSourceDir.startsWith('C:') ||
    aptosSourceDir.startsWith('D:')
      ? aptosSourceDir
      : path.join(process.cwd(), aptosSourceDir);

  if (!fs.existsSync(inputDirectory)) {
    throw new Error(`Failed to find input directory ${inputDirectory}`);
  }

  const sourceFiles = getAllFiles('move', inputDirectory, []);
  if (sourceFiles.length === 0) {
    throw new Error(`Failed to find source files in ${inputDirectory}`);
  }

  console.log(`Reading ${sourceFiles.length} input files ...`);

  const structs = new ProgramStructs(sourceFiles);
  console.log(`Found ${structs.size} structs ...`);

  // TODO: Fix this path
  const idlDir = path.join(
    projectDir,
    'website',
    'docs',
    'aptos',
    'idl',
    '_generated'
  );
  structs.writeMarkdown(idlDir);
  execSync(`npx prettier --write ${path.join(idlDir, '..')}`);

  process.exit();
}
