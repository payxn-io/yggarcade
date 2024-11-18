// npx ts-node --files ./scripts/BurnTokens.ts CONTRACT_ADDRESS AMOUNT NETWORK

import { createPublicClient, http, createWalletClient } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia, sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/ArcadeToken.sol/ArcadeToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const minterPrivateKey = process.env.PRIVATE_KEY || "";