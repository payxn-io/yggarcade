// npx ts-node --files ./scripts/TokenStatus.ts CONTRACT_ADDRESS ACCOUNT_ADDRESS NETWORK

import { createPublicClient, http } from "viem";
import { baseSepolia, sepolia } from "viem/chains";
import { abi } from "../artifacts/contracts/ArcadeToken.sol/ArcadeToken.json";
import * as dotenv from "dotenv";
dotenv.config();

const providerApiKey = process.env.ALCHEMY_API_KEY || "";

function validateParameters(parameters: string[]) {
    if (!parameters || parameters.length < 3)
      throw new Error("Parameters not provided");
  
    const contractAddress = parameters[0] as `0x${string}`;
    if (!contractAddress) throw new Error("Contract address not provided");
    if (!/^0x[a-fA-F0-9]{40}$/.test(contractAddress))
      throw new Error("Invalid contract address");
  
    const accountAddress = parameters[1] as `0x${string}`;
    if (!accountAddress) throw new Error("Account address not provided");
    if (!/^0x[a-fA-F0-9]{40}$/.test(accountAddress))
      throw new Error("Invalid account address");
  
    const network = parameters[2];
    if (!network) throw new Error("Network not provided");
  
    return { contractAddress, accountAddress, network };
  }

  async function main() {
    console.log("\n");
    const { contractAddress, accountAddress, network } = validateParameters(process.argv.slice(2));
  
    const chain = network === "base" ? baseSepolia : sepolia;
    const subdomain = network === "base" ? "base-sepolia" : "eth-sepolia";
    const transport = http(`https://${subdomain}.g.alchemy.com/v2/${providerApiKey}`);
  
    const publicClient = createPublicClient({
      chain: chain,
      transport: transport,
    });
    const balance = (await publicClient.readContract({
      address: contractAddress,
      abi,
      functionName: "balanceOf",
      args: [accountAddress],
    })) as BigInt;
  
    console.log(
      `Account: ${accountAddress}\n`,
      `Tokens: ${balance.toString()}`
    );
  
    process.exit();
  }
