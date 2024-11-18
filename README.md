# YGG Arcade
```
Play your favourite arcade games using $ARCADE 
```
-𝙰𝚛𝚌𝚊𝚍𝚎 𝚍𝚎𝚖𝚘 𝚐𝚒𝚏-

### To do list
- [x] Create a fresh new dapp using Scaffold ETH 2 as a base
- [x] Remove .husky because of lint
- [x] Install dependencies
- [x] Plan for ArcadeToken.sol contract
- [x] Update package and use viem to deploy scripts
- [x] Create contracts directory and build ArcadeToken.sol
- [x] Add .env, hardhatconfig.ts, tsconfig.json
- [x] Create scripts directory
- [ ] Create DeployArcadeToken.ts, MintTokens.ts, ArcadeTokens.ts scripts, etc
- [ ] Deploy token to Base Sepolia testnets
- [ ] Mint tokens on Base Sepolia testnets
- [ ] Check token status
- [ ] Watch for events on Sepolia testnets
- [ ] Launch games to Base Sepolia
- [ ] Add frontend to show tokens in Sepolia
- [ ] Add frontend to arcade tokens from Sepolia
- [ ] Deploy

### Getting started
- [ ] Compile the contract first
```
cd yggarcade
npx hardhat compile
```
𝘵𝘩𝘪𝘴 𝘸𝘪𝘭𝘭 𝘨𝘦𝘯𝘦𝘳𝘢𝘵𝘦 𝘵𝘩𝘦 𝘢𝘳𝘵𝘪𝘧𝘢𝘤𝘵𝘴 𝘧𝘰𝘭𝘥𝘦𝘳 𝘵𝘩𝘢𝘵 𝘺𝘰𝘶 𝘤𝘢𝘯 𝘤𝘢𝘭𝘭 𝘪𝘯 𝘺𝘰𝘶𝘳 𝘴𝘤𝘳𝘪𝘱𝘵𝘴 𝘪𝘦:



## Requirements

Before you begin, you need to install the following tools:

- [Node (>= v18.18)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/scaffold-eth-2.git
cd scaffold-eth-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the `Debug Contracts` page. You can tweak the app config in `packages/nextjs/scaffold.config.ts`.

**What's next**:

- Edit your smart contract `YourContract.sol` in `packages/hardhat/contracts`
- Edit your frontend homepage at `packages/nextjs/app/page.tsx`. For guidance on [routing](https://nextjs.org/docs/app/building-your-application/routing/defining-routes) and configuring [pages/layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) checkout the Next.js documentation.
- Edit your deployment scripts in `packages/hardhat/deploy`
- Edit your smart contract test in: `packages/hardhat/test`. To run test use `yarn hardhat:test`
- You can add your Alchemy API Key in `scaffold.config.ts` if you want more reliability in your RPC requests.

## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).

## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
