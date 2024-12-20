// This file was autogenerated by hardhat-viem, do not edit it.
// prettier-ignore
// tslint:disable
// eslint-disable

import "hardhat/types/artifacts";
import type { GetContractReturnType } from "@nomicfoundation/hardhat-viem/types";

import { ArcadeToken$Type } from "./ArcadeToken";

declare module "hardhat/types/artifacts" {
  interface ArtifactsMap {
    ["ArcadeToken"]: ArcadeToken$Type;
    ["contracts/ArcadeToken.sol:ArcadeToken"]: ArcadeToken$Type;
  }

  interface ContractTypesMap {
    ["ArcadeToken"]: GetContractReturnType<ArcadeToken$Type["abi"]>;
    ["contracts/ArcadeToken.sol:ArcadeToken"]: GetContractReturnType<ArcadeToken$Type["abi"]>;
  }
}
