const shell = require('shelljs');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

const projectRoot = __dirname;

const binPath = path.relative(
  process.cwd(),
  path.join(__dirname, 'node_modules', '.bin')
);

function insertStringBeforeSync(file, searchStr, insertStr) {
  try {
    const data = fs.readFileSync(file, 'utf8');

    const index = data.indexOf(searchStr);
    if (index === -1) {
      throw new Error(`failed to find searchStr in file ${file}`);
    }

    const updatedData =
      data.slice(0, index) + '\n' + insertStr + '\n' + data.slice(index);

    fs.writeFileSync(file, updatedData);

    console.log(`Successfully updated ${file}`);
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  shell.cd(projectRoot);

  // Create protos in the src/protos directory
  execSync(
    `${binPath}/shx mkdir -p src/protos; ${binPath}/pbjs --root sbv2Protos -t static-module -o src/protos/index.js ./protos/*.proto && ${binPath}/pbts -o src/protos/index.d.ts src/protos/index.js;`,
    { encoding: 'utf-8' }
  );
  insertStringBeforeSync(
    path.join(projectRoot, 'src', 'protos', 'index.js'),
    `OracleJob.HttpTask = (function() {`,
    `
  /**
   * Creates an OracleJob message from a YAML string.
   */
  OracleJob.fromYaml = function fromYaml(yamlString) {
    return OracleJob.fromObject(require("yaml").parse(yamlString));
  };

  /**
   * Converts this OracleJob to YAML.
   */
  OracleJob.prototype.toYaml = function toYaml() {
    return require("yaml").stringify(this.toJSON());
  };
`
  );
  insertStringBeforeSync(
    path.join(projectRoot, 'src', 'protos', 'index.d.ts'),
    `public static create(properties?: IOracleJob): OracleJob;`,
    `
  /**
   * Creates a new OracleJob instance from a stringified yaml object.
   * @param [yamlString] stringified yaml object
   * @returns OracleJob instance
   */
  public static fromYaml(yamlString: string): OracleJob;

  /**
   * Converts an OracleJob instance to a stringified yaml object.
   * @returns stringified yaml object
   */
  public toYaml(): string;
`
  );
  execSync(`${binPath}/prettier ./src/protos --write`, { encoding: 'utf-8' });

  // Create protos in the lib/cjs/protos
  execSync(`${binPath}/tsc -p tsconfig.cjs.json`, { encoding: 'utf-8' });
  execSync(
    `${binPath}/shx rm -rf lib/cjs/protos; ${binPath}/shx mkdir -p lib/cjs/protos; ${binPath}/pbjs --root sbv2Protos -t static-module -o lib/cjs/protos/index.js ./protos/*.proto && ${binPath}/pbts -o lib/cjs/protos/index.d.ts lib/cjs/protos/index.js`,
    { encoding: 'utf-8' }
  );
  insertStringBeforeSync(
    path.join(projectRoot, 'lib', 'cjs', 'protos', 'index.js'),
    `OracleJob.HttpTask = (function() {`,
    `
    /**
     * Creates an OracleJob message from a YAML string.
     */
    OracleJob.fromYaml = function fromYaml(yamlString) {
      return OracleJob.fromObject(require("yaml").parse(yamlString));
    };
  
    /**
     * Converts this OracleJob to YAML.
     */
    OracleJob.prototype.toYaml = function toYaml() {
      return require("yaml").stringify(this.toJSON());
    };
  `
  );
  insertStringBeforeSync(
    path.join(projectRoot, 'lib', 'cjs', 'protos', 'index.d.ts'),
    `public static create(properties?: IOracleJob): OracleJob;`,
    `
    /**
     * Creates a new OracleJob instance from a stringified yaml object.
     * @param [yamlString] stringified yaml object
     * @returns OracleJob instance
     */
    public static fromYaml(yamlString: string): OracleJob;
  
    /**
     * Converts an OracleJob instance to a stringified yaml object.
     * @returns stringified yaml object
     */
    public toYaml(): string;
  `
  );
  execSync(`${binPath}/prettier ./lib/cjs/protos --write`, {
    encoding: 'utf-8',
  });

  // Create protos in the lib/esm/protos
  execSync(`${binPath}/tsc`, { encoding: 'utf-8' });
  execSync(
    `${binPath}/shx rm -rf lib/esm/protos; ${binPath}/shx mkdir -p lib/esm/protos; ${binPath}/pbjs --root sbv2Protos -t static-module --es6 -w \"es6\" -o lib/esm/protos/index.js ./protos/*.proto && ${binPath}/pbts -o lib/esm/protos/index.d.ts lib/esm/protos/index.js && ${binPath}/shx --silent sed  -i 'protobufjs/minimal' 'protobufjs/minimal.js' lib/esm/protos/index.js > '/dev/null' 2>&1 && ${binPath}/shx --silent sed -i 'import \\* as' 'import' lib/esm/protos/index.js > '/dev/null' 2>&1`,
    { encoding: 'utf-8' }
  );
  insertStringBeforeSync(
    path.join(projectRoot, 'lib', 'esm', 'protos', 'index.js'),
    `OracleJob.HttpTask = (function() {`,
    `
      /**
       * Creates an OracleJob message from a YAML string.
       */
      OracleJob.fromYaml = function fromYaml(yamlString) {
        return OracleJob.fromObject(require("yaml").parse(yamlString));
      };
    
      /**
       * Converts this OracleJob to YAML.
       */
      OracleJob.prototype.toYaml = function toYaml() {
        return require("yaml").stringify(this.toJSON());
      };
    `
  );
  insertStringBeforeSync(
    path.join(projectRoot, 'lib', 'esm', 'protos', 'index.d.ts'),
    `public static create(properties?: IOracleJob): OracleJob;`,
    `
      /**
       * Creates a new OracleJob instance from a stringified yaml object.
       * @param [yamlString] stringified yaml object
       * @returns OracleJob instance
       */
      public static fromYaml(yamlString: string): OracleJob;
    
      /**
       * Converts an OracleJob instance to a stringified yaml object.
       * @returns stringified yaml object
       */
      public toYaml(): string;
    `
  );
  execSync(`${binPath}/prettier ./lib/esm/protos --write`, {
    encoding: 'utf-8',
  });
}

main()
  .then(() => {
    // console.log("Executed successfully");
  })
  .catch(err => {
    console.error(err);
  });
