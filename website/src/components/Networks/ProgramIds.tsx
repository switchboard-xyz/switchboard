import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import networks from "./const";
import type { IChainConfig } from "@switchboard-xyz/common/networks";
import PublicKeyButton from "../PublicKeyButton";
import { SupportedChain } from "./types";

const prefixCategories = ["mainnet", "testnet", "devnet"];

export interface IProgramIds {
  chain: SupportedChain;
}

export default function ProgramIds({ chain }: IProgramIds) {
  const { colorMode } = useColorMode();

  const getNetwork = (chain: SupportedChain): IChainConfig => {
    return networks[chain];
  };

  const networkConfig = getNetwork(chain);
  const programIds = Object.keys(networks[chain])
    .map((k) => [k, networks[chain][k].programId])
    .sort((a, b) => {
      const aPrefixIndex = prefixCategories.findIndex((prefix) =>
        a[0].startsWith(prefix)
      );
      const bPrefixIndex = prefixCategories.findIndex((prefix) =>
        b[0].startsWith(prefix)
      );

      if (aPrefixIndex === bPrefixIndex) {
        return a[0].localeCompare(b[0]); // default comparison if prefixes are the same
      }

      return aPrefixIndex - bPrefixIndex;
    });

  return (
    <>
      <table>
        <tr>
          <th>Network</th>
          <th>Program ID</th>
        </tr>
        {programIds.map(([label, programId]) => {
          return (
            <tr key={label}>
              <td>{capitalizeWords(label)}</td>
              <td>
                <PublicKeyButton publicKey={programId} />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
