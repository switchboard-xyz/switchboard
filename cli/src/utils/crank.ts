import { PublicKey } from "@solana/web3.js";
import { HexString } from "aptos";
import assert from "assert";
import { BN } from "@switchboard-xyz/common";

export interface ICrankRow {
  nextTimestamp: BN;
}

export function pqPop<T extends ICrankRow>(crankData: Array<T>): T | null {
  if (crankData.length === 0) {
    return null;
  }
  const ret = crankData[0];
  crankData[0] = crankData.at(-1)!;
  crankData.pop();
  let current = 0;
  while (true) {
    const leftChildIdx = current * 2 + 1;
    const rightChildIdx = current * 2 + 2;
    let swapIdx = rightChildIdx;
    if (rightChildIdx < crankData.length) {
      const leftChild = crankData[leftChildIdx];
      const rightChild = crankData[rightChildIdx];
      if (leftChild.nextTimestamp < rightChild.nextTimestamp) {
        swapIdx = leftChildIdx;
      }
    }
    if (swapIdx >= crankData.length) {
      swapIdx = leftChildIdx;
    }
    if (swapIdx >= crankData.length) {
      break;
    }
    const currentItem = crankData[current];
    const swapItem = crankData[swapIdx];
    if (currentItem.nextTimestamp < swapItem.nextTimestamp) {
      break;
    }
    crankData[current] = swapItem;
    crankData[swapIdx] = currentItem;
    current = swapIdx;
  }
  return ret;
}

export function pqSort<
  T extends ICrankRow &
    ({ pubkey: PublicKey } | { uuid: Uint8Array } | { aggregatorAddr: string })
>(pqData: Array<T>): Array<T> {
  const sorted: T[] = [];

  let rows = [...pqData];

  while (rows.length > 0) {
    const popped = pqPop(rows);
    if (popped) {
      sorted.push(popped);
    }
  }

  assert(sorted.length === pqData.length, "SortFailure");

  return sorted;
}
