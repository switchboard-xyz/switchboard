import SnasmRegular from "../../../../../static/fonts/Snasm/Snasm-400.woff2";

export const snasmFamily = "Snasm";

const snasm = `
  @font-face {
    font-family: "${snasmFamily}";
    font-style: normal;
    font-weight: 400;
    src: local('Snasm'), local('Snasm-Regular'), url(${SnasmRegular}) format('woff2');
  }
`;
export default snasm;
