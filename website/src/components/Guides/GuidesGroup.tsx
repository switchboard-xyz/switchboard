import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";

// Assuming the data is imported from a JSON file.
import guides from "../../../guides.json";
import { SupportedChain } from "../Addresses/types";
import { capitalizeFirstLetterOfEachWord } from "../Addresses/utils";

interface IGuide {
  label: string;
  link: string;
  tooltip: string;
  language?: string;
  tags?: string | Array<string>;
  chain?: string | Array<string>;
}
interface GuideJson {
  chains: Array<string>;
  languages: Array<string>;
  categories: Array<string>;
  guides: Array<IGuide>;
}

const ALL_GUIDES = guides.chains ?? [];
const ALL_CHAINS = guides.chains ?? [];
const ALL_TAGS = guides.categories ?? [];
const ALL_LANGUAGES = guides.languages ?? [];

export default function GuidesGroup() {
  const [selectedChain, setSelectedChain] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  const [jsxElement, setJsxElement] = useState<JSX.Element>(<></>);

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  useEffect(() => {
    // setJsxElement(getNetworkTable(selectedChain, selectedTag));
  }, [selectedChain, selectedTag]);

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item sm={3} xs={5}>
          <div>
            <FormControl>
              <FormLabel>Chains</FormLabel>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={handleChainChange}
                defaultValue=""
              >
                {ALL_CHAINS.map((chain) => (
                  <FormControlLabel
                    value={chain}
                    control={<Radio />}
                    label={capitalizeFirstLetterOfEachWord(chain)}
                    checked={selectedChain === chain}
                    className={`navbar_icon__${chain}`}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </Grid>
        <Grid item sm={3} xs={7}>
          <div>
            <FormControl>
              <FormLabel>Category</FormLabel>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                onChange={handleChainChange}
                defaultValue=""
              >
                {ALL_TAGS.map((chain) => (
                  <FormControlLabel
                    value={chain}
                    control={<Radio />}
                    label={capitalizeFirstLetterOfEachWord(chain)}
                    checked={selectedChain === chain}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </Grid>
        {/* <Grid item xs={12} sm={8}>
          {tableElement}
        </Grid> */}
      </Grid>
    </div>
  );
}
