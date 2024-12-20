"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { TokenBalances } from "~~/components/TokenBalances";
import Image from 'next/image';

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-1xl mb-2">Welcome to</span>
            <span className="block text-2xl font-bold">YGG Arcade</span>
          </h1>
          


          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
          
          <p className="text-center text-lg">
            Play your favourite arcade games and win prizes and rewards $ARCADE{" "}
            {/*<code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/nextjs/app/page.tsx
            </code>*/}
          </p>
          <p className="text-center text-lg">
            {/*Edit your smart contract{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.sol
            </code>{" "}
            in{" "}
            <code className="italic bg-base-300 text-base font-bold max-w-full break-words break-all inline-block">
              packages/hardhat/contracts
            </code>*/}
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-1 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <div className="relative flex w-[401px] h-[300px]">
              <Link href="/ammoarcade" passHref>
                <Image
                  src="/yggarcade-ammo.png"
                  alt="Ammo Arcade"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>  
            </div>
              {/*<BugAntIcon className="h-8 w-8 fill-secondary" />*/}
              <p>
                Play onchain multiplayer Ammo Arcade with your friends. pick multiple weapons and ammos and shoot your way through different levels{" "}
                {/*<Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}*/}
                
              </p>
              <div className="flex relative w-20 h-20">
                <Link href="/ammoarcade" passHref>
                  <Image
                    src="/enter_0034-new.gif"
                    alt="enter"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <div className="relative flex w-[401px] h-[300px]">
              <Link href="/undead" passHref>
                <Image
                  src="/yggarcade-undead.png"
                  alt="Undead Rampage"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>  
            </div>
              {/*<BugAntIcon className="h-8 w-8 fill-secondary" />*/}
              <p>
              Survive the apocalypse in your armored van, collect repairs and fuel to keep going, smash through hordes of zombies and avoid deadly obstacles! {" "}
                {/*<Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}*/}
                
              </p>
              <div className="flex relative w-20 h-20">
                <Link href="/undead" passHref>
                  <Image
                    src="/enter_0034-new.gif"
                    alt="enter"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>

            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
            <div className="relative flex w-[401px] h-[300px]">
              <Link href="/math" passHref>
                <Image
                  src="/yggarcade-math.png"
                  alt="Math is mathing"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Link>  
            </div>         
              <p>
              Solve math challenges under time pressure, rack up points, and climb the leaderboard. Compete with others to become the ultimate math champion! {" "}
              </p>
              <div className="flex relative w-20 h-20">
                <Link href="/math" passHref>
                  <Image
                    src="/enter_0034-new.gif"
                    alt="enter"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </Link>
              </div>
            </div>

            {/*<div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
              <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>*/}
            
          </div>
          <div className="px-5">
          <TokenBalances />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
