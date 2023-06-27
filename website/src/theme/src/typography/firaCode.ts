import FiraCodeRegular from "../../../../../static/fonts/Fira_Code/FiraCode-400.woff2";
import FiraCodeBold from "../../../../../static/fonts/Fira_Code/FiraCode-700.woff2";

export const firaCodeFamily = "Fira Code";

const firaCode = `
  @font-face {
    font-family: "${firaCodeFamily}";
    font-style: normal;
    font-weight: 400;
    src: local('Fira_Code'), local('Fira_Code-Regular'), url(${FiraCodeRegular}) format('woff2');
  }
  @font-face {
    font-family: "${firaCodeFamily}";
    font-style: bold;
    font-weight: 700;
    src: local('Fira_Code'), local('Fira_Code-Bold'), url(${FiraCodeBold}) format('woff2');
  }
`;
export default firaCode;
