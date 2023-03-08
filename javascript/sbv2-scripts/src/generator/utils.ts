/**
 * Parse fields for a given rust struct/enum and handle any unit conversion logic
 */

export const cleanupString = (
  str: string,
  convertSnakeCase = false
): string => {
  const parsedStr = str
    .trim()
    .replace(/([//].*)/g, '') // remove comments
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
