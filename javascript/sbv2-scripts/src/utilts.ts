import fs from 'fs';
import path from 'path';

export const getAllFiles = (
  extension: string,
  dirPath: string,
  arrayOfFiles: string[]
): string[] => {
  const files = fs.readdirSync(dirPath, 'utf8');

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file: string) => {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(extension, dirPath + '/' + file, arrayOfFiles);
    } else {
      if (file.endsWith(`.${extension}`)) {
        arrayOfFiles.push(path.join(dirPath, '/', file));
      }
    }
  });

  return arrayOfFiles;
};

export const cleanupString = (
  str: string,
  convertSnakeCase = false
): string => {
  const parsedStr = str
    .trim()
    .replace(/([//].*)/g, '') // remove comments
    // .replace(/[\s]/g, "") // remove whitespace
    .replace(/(^,)|(,$)/g, ''); // remove leading and trailing commas
  if (!convertSnakeCase) {
    return parsedStr;
  }
  return toCamelCase(parsedStr);
};

export const toCamelCase = (str: string): string => {
  if (str.startsWith('_')) {
    return str;
  }
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, group =>
      group.toUpperCase().replace('-', '').replace('_', '')
    );
};

export const toUpperSnakeCase = (str: string): string => {
  return str;
};
