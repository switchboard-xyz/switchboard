// import React, { useEffect, useState } from "react";
// import {
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
//   Grid,
//   Checkbox,
// } from "@mui/material";

// import { SupportedChain } from "./Networks/types";
// import PublicKeyButton from "./PublicKeyButton";
// import NetworkTable from "./Networks/Networks";

// // Assuming the data is imported from a JSON file.
// import guides from "../../guides.json";

// interface IGuide {
//   label: string;
//   link: string;
//   tooltip: string;
//   language?: string;
//   tags?: string | Array<string>;
//   chain?: string | Array<string>;
// }
// interface GuideJson {
//   chains: Array<string>;
//   languages: Array<string>;
//   categories: Array<string>;
//   guides: Array<IGuide>;
// }

// function capitalizeFirstLetterOfEachWord(str: string): string {
//   const titleCase = str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
//   if (titleCase.endsWith("dao")) {
//     return titleCase.slice(0, titleCase.length - 3) + "DAO";
//   }
//   return titleCase;
// }

// const ALL_GUIDES = guides.chains ?? [];
// const ALL_CHAINS = guides.chains ?? [];
// const ALL_TAGS = guides.categories ?? [];
// const ALL_LANGUAGES = guides.languages ?? [];

// const GuidesGroup = () => {
//   const [selectedChain, setSelectedChain] = useState<string>("");
//   const [selectedTag, setSelectedTag] = useState<string>("");

//   const [jsxElement, setJsxElement] = useState<JSX.Element>(
//     getNetworkTable(selectedChain, selectedTag)
//   );

//   const handleChainChange = (event) => {
//     setSelectedChain(event.target.value);
//     setSelectedTag("mainnet");
//   };

//   const handleTagChange = (event) => {
//     setSelectedTag(event.target.value);
//   };

//   useEffect(() => {
//     setJsxElement(getNetworkTable(selectedChain, selectedTag));
//   }, [selectedChain, selectedTag]);

//   return (
//     <div>
//       <Grid container spacing={2}>
//         <Grid item sm={2} xs={5}>
//           <div>
//             <FormControl>
//               <FormLabel>Chains</FormLabel>
//               <RadioGroup
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 onChange={handleChainChange}
//                 defaultValue=""
//               >
//                 {ALL_CHAINS.map((chain) => (
//                   <FormControlLabel
//                     value={chain}
//                     control={<Radio />}
//                     label={capitalizeFirstLetterOfEachWord(chain)}
//                     checked={selectedChain === chain}
//                   />
//                 ))}
//               </RadioGroup>
//             </FormControl>
//           </div>
//         </Grid>
//         <Grid item sm={2} xs={7}>
//           <div>
//             <FormControl>
//               <FormLabel>Chains</FormLabel>
//               <RadioGroup
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 onChange={handleChainChange}
//                 defaultValue=""
//               >
//                 {ALL_TAGS.map((chain) => (
//                   <FormControlLabel
//                     value={chain}
//                     control={<Radio />}
//                     label={capitalizeFirstLetterOfEachWord(chain)}
//                     checked={selectedChain === chain}
//                   />
//                 ))}
//               </RadioGroup>
//             </FormControl>
//           </div>
//         </Grid>
//         {/* <Grid item xs={12} sm={8}>
//           {tableElement}
//         </Grid> */}
//       </Grid>
//     </div>
//   );
// };

// export default GuidesGroup;

export default {};
