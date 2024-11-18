// npx ts-node --files ./scripts/DeployArcadeToken.ts TOKEN_NAME TOKEN_SYMBOL NETWORK

import { createPublicClient, http, createWalletClient, formatEther } from "viem";

import { privateKeyToAccount } from "viem/accounts";
import { sepolia, baseSepolia } from "viem/chains";
import { abi, bytecode } from "../artifacts/contracts/ArcadeToken.sol/ArcadeToken.json";
import * as dotenv from "dotenv";
dotenv.config();