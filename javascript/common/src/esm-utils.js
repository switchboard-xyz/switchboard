import fs from 'fs';
import fsPromises from 'fs/promises';
import { dirname, format, join, parse } from 'node:path';

/**
 * Merge a dist-cjs directory into a dist directory
 * @param {string} source - the absolute path to the source directory (Ex. /home/runner/dist-cjs)
 * @param {string} dest - the absolte path to the destination directory (Ex. /home/runner/dist)
 */
export function moveCjsFiles(source, dest) {
  const files = fs.readdirSync(source, { withFileTypes: true });
  for (const file of files) {
    if (file.isDirectory()) {
      fs.mkdirSync(join(source, file.name), { recursive: true });
      moveCjsFiles(join(source, file.name), join(dest, file.name));
    } else if (file.isFile()) {
      const parsed = parse(file.name);
      // Ignore anything that's not a .js file
      if (parsed.ext !== '.js') {
        continue;
      }
      // Rewrite any require statements to use .cjs
      const content = fs.readFileSync(join(source, file.name), 'utf8');
      const rewritten = content.replace(/require\("(\..+?).js"\)/g, (_, p1) => {
        return `require("${p1}.cjs")`;
      });
      // Rename the file to .cjs
      const renamed = format({ name: parsed.name, ext: '.cjs' });
      // console.log(renamed);
      fs.writeFileSync(join(dest, renamed), rewritten, 'utf8');
    }
  }
}

/**
 * Merge a dist-cjs directory into a dist directory
 * @param {string} source - the absolute path to the source directory (Ex. /home/runner/dist-cjs)
 * @param {string} dest - the absolte path to the destination directory (Ex. /home/runner/dist)
 */
export async function moveCjsFilesAsync(source, dest) {
  const files = await fsPromises.readdir(source, { withFileTypes: true });
  await Promise.all(
    files.map(async file => {
      if (file.isDirectory()) {
        return await moveCjsFiles(
          join(source, file.name),
          join(dest, file.name)
        );
      }
      // its a file
      const parsed = parse(file.name);
      if (parsed.ext !== '.js') {
        return;
      }

      return await fsPromises
        .readFile(join(source, file.name), 'utf-8')
        .then(async content => {
          const rewritten = content.replace(
            /require\("(\..+?).js"\)/g,
            (_, p1) => {
              return `require("${p1}.cjs")`;
            }
          );
          const renamed = format({ name: parsed.name, ext: '.cjs' });
          return await fsPromises.writeFile(
            join(dest, renamed),
            rewritten,
            'utf-8'
          );
        });
    })
  );
}

const updateJsonFile = (relativePath, updateFunction) => {
  const contents = fs.readFileSync(relativePath, 'utf8');
  const res = updateFunction(JSON.parse(contents));
  fs.writeFileSync(relativePath, JSON.stringify(res, null, 2) + '\n');
};

const generateFiles = (entrypoints, dir) => {
  const files = [...Object.entries(entrypoints), ['index', 'index']].flatMap(
    ([key, value]) => {
      const nrOfDots = key.split('/').length - 1;
      const relativePath = '../'.repeat(nrOfDots) || './';
      const compiledPath = `${relativePath}${dir}/${value}.js`;
      return [
        [
          `${key}.cjs`,
          `module.exports = require('${relativePath}${dir}/${value}.cjs');`,
        ],
        [`${key}.js`, `export * from '${compiledPath}'`],
        [`${key}.d.ts`, `export * from '${compiledPath}'`],
      ];
    }
  );
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
        key => `src/${entrypoints[key]}.ts`
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
