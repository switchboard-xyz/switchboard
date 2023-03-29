// templateProcessor.ts

import fs from "fs";
import path from "path";
import shell from "shelljs";

interface TemplateReplacement {
  placeholder: string;
  filePath: string;
}

const replacePlaceholders = (
  template: string,
  replacements: TemplateReplacement[]
): string => {
  let updatedTemplate = template;

  for (const replacement of replacements) {
    const fileContent = fs.readFileSync(replacement.filePath, "utf-8");
    updatedTemplate = updatedTemplate.replace(
      replacement.placeholder,
      fileContent
    );
  }

  return updatedTemplate;
};

const main = () => {
  const nearJsDirectory = path.join(
    __dirname,
    "..",
    "..",
    "..",
    "sbv2-near",
    "javascript",
    "near.js"
  );
  if (
    !fs.existsSync(nearJsDirectory) ||
    !fs.statSync(nearJsDirectory).isDirectory()
  ) {
    throw new Error(`Failed to find sbv2-near/javascript/near.js`);
  }

  const nearJsTemplate = path.join(nearJsDirectory, "README.template.md");
  const nearJsReadme = path.join(nearJsDirectory, "README.md");

  const nearJsTemplates = getAllFiles(
    path.join(__dirname, "..", "data", "near", "js"),
    [],
    [".md"]
  ).map((file): TemplateReplacement => {
    const filename = path.parse(file).base;
    console.log(filename);
    return {
      placeholder: `{{ ${filename} }}`,
      filePath: file,
    };
  });

  if (nearJsTemplates.length === 0) {
    throw new Error(`Failed to find any near.js templates`);
  }

  const readmeTemplate = fs.readFileSync(nearJsTemplate, "utf-8");

  const updatedReadme = replacePlaceholders(readmeTemplate, nearJsTemplates);
  fs.writeFileSync(nearJsReadme, updatedReadme);
  shell.exec(`npx prettier --write ${nearJsReadme}`);
};

main();

export function getAllFiles(
  dirPath: string,
  arrayOfFiles: string[],
  extensions?: string[]
): string[] {
  const files = fs.readdirSync(dirPath, "utf8");

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file: string) => {
    if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
      arrayOfFiles = getAllFiles(
        path.join(dirPath, file),
        arrayOfFiles,
        extensions
      );
    } else {
      const ext = path.extname(file);
      if (!extensions === undefined || extensions?.includes(ext)) {
        arrayOfFiles.push(path.join(path.join(dirPath, file)));
      }
    }
  });

  return arrayOfFiles;
}
