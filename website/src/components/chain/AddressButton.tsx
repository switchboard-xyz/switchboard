import type { IChainNetworkConfig } from "@switchboard-xyz/common";
import {
  type ChainType,
  getSupportedChain,
  type NetworkType,
} from "@switchboard-xyz/common";
import React from "react";

import AddressButton from "../AddressButton";

interface AddressButtonProps {
  chain: ChainType;
  network?: NetworkType;
  field?: string;
  trim?: number;
  sx?: any;
}

function getAddress(
  chain: ChainType,
  network?: NetworkType,
  field?: string
): string {
  try {
    const chainConfig = getSupportedChain(chain);
    const config: IChainNetworkConfig = chainConfig[network ?? "mainnet"];
    const addressField = field ?? "address";
    if (addressField in config) {
      return config[addressField];
    }
  } catch {}
  return "";
}

export default function ChainAddressButton(props: AddressButtonProps) {
  return (
    <AddressButton
      address={getAddress(props.chain, props.network, props.field)}
      trim={props.trim}
      sx={props.sx}
    />
  );
}
