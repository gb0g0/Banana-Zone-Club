import { useState } from "react";
import { Header } from "./components";
import { Hero } from "./components";
import { Section1, MintSection } from "./components";
import { Section2 } from "./components";
import { Footer } from "./components";
import { Modal } from "./components";
import {
  useContractWrite,
  useNetwork,
  useAccount,
  useContractReads,
  useContractRead,
} from "wagmi";
import { contractAddress, contractAbi } from "./utils/index";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function App() {
  return (
    <div>
      {/* <Modal/> */}
      <Header />
      <Hero />
      <Section1 />
      <MintSection />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
