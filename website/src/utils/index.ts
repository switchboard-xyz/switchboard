export function capitalizeFirstLetterOfEachWord(str: string): string {
  const titleCase = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  if (titleCase.endsWith("dao")) {
    return titleCase.slice(0, titleCase.length - 3) + "DAO";
  }
  return titleCase;
}
