// npx ts-node --files ./scripts/TokenStatus.ts CONTRACT_ADDRESS ACCOUNT_ADDRESS NETWORK

import { createPublicClient, http } from "viem";
import { baseSepolia, sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/ArcadeToken.sol/ArcadeToken.json";
import * as dotenv from "dotenv";
