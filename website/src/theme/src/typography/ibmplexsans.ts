/* eslint-disable */
import IBMPlexSansRegular from "@site/static/fonts/IBM_Plex_Sans/IBMPlexSans-Regular.woff2";
/* eslint-enable */

export const IBMPlexSansFamily = "IBMPlexSans";

const ibmplexsans = `
  @font-face {
    font-family: "${IBMPlexSansFamily}";
    src: local('Geist'), local('Geist-SemiBold'), url(${IBMPlexSansRegular}) format('woff2');
  }
`;
export default ibmplexsans;
