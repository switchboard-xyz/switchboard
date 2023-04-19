import fs from 'fs';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, format, join, parse } from 'node:path';
/**
 * Merge a dist-cjs directory into a dist directory
 * @param {string} source - the absolute path to the source directory (Ex. /home/runner/dist-cjs)
 * @param {string} dest - the absolte path to the destination directory (Ex. /home/runner/dist)
 */
export async function moveCjsFiles(source, dest) {
  const files = await readdir(source, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      await moveCjsFiles(join(source, file.name), join(dest, file.name));
    } else if (file.isFile()) {
      const parsed = parse(file.name);
      // Ignore anything that's not a .js file
      if (parsed.ext !== '.js') {
        continue;
      }
      // Rewrite any require statements to use .cjs
      const content = await readFile(join(source, file.name), 'utf8');
      const rewritten = content.replace(/require\("(\..+?).js"\)/g, (_, p1) => {
        return `require("${p1}.cjs")`;
      });
      // Rename the file to .cjs
      const renamed = format({ name: parsed.name, ext: '.cjs' });
      // console.log(renamed);
      await writeFile(join(dest, renamed), rewritten, 'utf8');
    }
  }
}
const updateJsonFile = async (relativePath, updateFunction) => {
  const contents = await readFile(relativePath, 'utf8');
  const res = updateFunction(JSON.parse(contents));
  await writeFile(relativePath, JSON.stringify(res, null, 2) + '\n');
};
const generateFiles = (entrypoints, dir) => {
  const files = [
    ...Object.entries(entrypoints),
    ['index', 'src/index'],
  ].flatMap(([key, value]) => {
    const nrOfDots = key.split('/').length - 1;
    const relativePath = '../'.repeat(nrOfDots) || './';
    const outFile = relativePath + value.replaceAll('src', dir);
    return [
      [`${key}.cjs`, `module.exports = require('${outFile}.cjs');`],
      [`${key}.js`, `export * from '${outFile}.js'`],
      [`${key}.d.ts`, `export * from '${outFile}.js'`],
    ];
  });
  return Object.fromEntries(files);
};
/**
 * Generates the package.json and tsconfig entrypoints for an ESM/CJS build
 * @param {string} projectDir - the absolute path to a directory containing a package.json and tsconfig.json
 * @param {string} dir - the name of the output directory (Ex. dist)
 * @param {object} entrypoints - a list of entrypoints to their file location, relative to the projectDir
 * @param {boolean} includeSrcDir - whether to include the src directory in the package.json files
 */
export function generateEntrypoints(
  projectDir,
  dir,
  entrypoints,
  includeSrcDir
) {
  // Update tsconfig.json `typedocOptions.entryPoints` field
  updateJsonFile(join(projectDir, 'tsconfig.json'), json => ({
    ...json,
    typedocOptions: {
      ...json.typedocOptions,
      entryPoints: [...Object.keys(entrypoints)].map(
        key => `${entrypoints[key]}.ts`
      ),
    },
  }));
  const generatedFiles = generateFiles(entrypoints, dir);
  const filenames = Object.keys(generatedFiles);
  const baseFiles = [`${dir}/`];
  if (includeSrcDir) {
    baseFiles.push('src/');
  }
  // Update package.json `exports` and `files` fields
  updateJsonFile(join(projectDir, 'package.json'), json => ({
    ...json,
    exports: Object.assign(
      Object.fromEntries(
        ['index', ...Object.keys(entrypoints)].map(key => {
          const entryPoint = {
            types: `./${key}.d.ts`,
            import: `./${key}.js`,
            require: `./${key}.cjs`,
          };
          return [key === 'index' ? '.' : `./${key}`, entryPoint];
        })
      ),
      { './package.json': './package.json' }
    ),
    files: [...baseFiles, 'package.json', ...filenames],
  }));
  // Write generated files
  Object.entries(generatedFiles).forEach(([filename, content]) => {
    fs.mkdirSync(dirname(filename), { recursive: true });
    fs.writeFileSync(filename, content);
  });
  // Update .gitignore
  fs.writeFileSync(join(projectDir, '.gitignore'), filenames.join('\n') + '\n');
}
//# sourceMappingURL=build.js.map
