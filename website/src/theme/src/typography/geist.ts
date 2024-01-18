/* eslint-disable */
import GeistSemiBold from "@site/static/fonts/Geist/Geist-SemiBold.woff2";
/* eslint-enable */

export const geistFamily = "Geist";

const geist = `
  @font-face {
    font-family: "${geistFamily}";
    src: local('Geist'), local('Geist-SemiBold'), url(${GeistSemiBold}) format('woff2');
  }
`;
export default geist;
