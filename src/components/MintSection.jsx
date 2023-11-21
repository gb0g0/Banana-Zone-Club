import { FaVoteYea } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { NFT1, NFT2, NFT3, NFT4, NFT5, NFT7 } from "../assets";
import { useState, useEffect } from "react";
import { formatEther, parseEther } from "viem";
import {
  useContractWrite,
  useNetwork,
  useAccount,
  useContractReads,
  useContractRead,
} from "wagmi";
import { contractAddress, contractAbi } from "../utils/index";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { readContract } from "@wagmi/core";

const Card = ({
  img,
  title,
  amount,
  maxAmount,
  decreaseAmount,
  increaseAmount,
}) => (
  <div className="flex relative flex-col max-w-xs h-fit justify-start gap-2 p-4 white-glassmorphism hover:shadow-xl">
    <div className="w-full top-0 right-0 rounded-md flex items-center justify-center">
      <img src={img} alt={img} srcset="" className="rounded-[16px]" />
    </div>
    <div className="flex flex-col flex-1 gap-2 ">
      <h1 className="mt-2 text-white text-2xl font-bold text-center ">
        {title}
      </h1>
      <div className="flex items-center justify-center gap-5">
        <div
          onClick={decreaseAmount}
          className={`w-7 h-7 rounded-md flex items-center justify-center bg-black ${
            0 == amount
              ? "cursor-not-allowed active:100"
              : "active:scale-50 cursor-pointer"
          } transition-all duration-300`}
        >
          -
        </div>
        <div>{amount}</div>
        <div
          onClick={increaseAmount}
          data-custom-property={title}
          className={`w-7 h-7 rounded-md flex items-center justify-center bg-black ${
            maxAmount.Diamond == amount
              ? "cursor-not-allowed active:100"
              : "active:scale-50 cursor-pointer"
          } transition-all duration-300`}
        >
          +
        </div>
      </div>
      {/* <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p> */}
      <button className="green border-[#e2b030ff] active:scale-95 transition-all duration-300 cursor-not-allowed">
        Minting is Not live Yet
      </button>
    </div>
  </div>
);
//
const MintSection = () => {
  const maxAmount = 5;

  const [diamondAmount, setDiamondAmount] = useState(1);
  const [VIPAmount, setVIPAmount] = useState(1);
  const [regularAmount, setRegularAmount] = useState(1);
  const [price, setPrice] = useState([]);

  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { open } = useWeb3Modal();
  const ca =
    chain?.id in contractAddress ? contractAddress[chain?.id][0] : null;
  const { data, isLoading, isSuccess, error, write } = useContractWrite({
    address: ca,
    abi: contractAbi,
    functionName: "publicMint",
    value: parseEther("0.01") * BigInt(regularAmount),
  });

  const {
    data: PriceData,
    isLoading: priceLoading,
    status,
  } = useContractRead({
    address: ca,
    abi: contractAbi,
    functionName: "getPrice",
  });

  useEffect(() => {
    console.log(PriceData);
    setPrice(PriceData);
  }, []);
  console.log(isSuccess);
  const increaseAmount = (event) => {
    // if (type == "Diamond") {
    // setDiamondAmount(diamondAmount + 1);
    // } else if (type == "VIP") {
    //   setVIPAmount(VIPAmount++);
    // console.log(event.target.dataset.customProperty);
    // } else if (type == "Regular") {
    setRegularAmount(regularAmount + 1);
    // }
  };
  const decreaseAmount = () => {
    // if (type == "Diamond") {
    // setDiamondAmount(diamondAmount - 1);
    // } else if (type == "VIP") {
    //   setVIPAmount(VIPAmount--);
    // } else if (type == "Regular") {
    setRegularAmount(regularAmount - 1);
    // }
  };

  const timeRemaining = 0;
  
  const BtnStyle =
    "green border-[#e2b030ff] flex items-center justify-center active:scale-95 transition-all duration-300";

  const mint = async () => {
    const _to = address;
    const _amount = regularAmount;
    const _type = 2;
    const fee = BigInt(price[2].toString()) * BigInt(regularAmount);
    console.log("MdCallEnd");
    console.log(formatEther(fee));
    write({ args: [_to, _amount, _type], value: fee });
  };
  return (
    <div className="flex flex-wrap w-screen my-[20px] gap-[26px] grotesk justify-center items-center">
      {/* <Card
        img={NFT1}
        title="Diamond"
        amount={diamondAmount}
        maxAmount={maxAmount}
        decreaseAmount={decreaseAmount}
        increaseAmount={increaseAmount}
      />
      <Card img={NFT7} title="VIP" amount={VIPAmount} maxAmount={maxAmount} /> 
      <Card
        img={NFT2}
        title="Regular NFTs ⚡"
        amount={regularAmount}
        maxAmount={maxAmount}
      />  */}
      <div className="flex relative flex-col max-w-xs h-fit justify-start gap-2 p-4 white-glassmorphism hover:shadow-xl">
        <div className="w-full top-0 right-0 rounded-md flex items-center justify-center">
          <img src={NFT2} alt={NFT2} srcset="" className="rounded-[16px]" />
        </div>
        <div className="flex flex-col flex-1 gap-2 ">
          <h1 className="mt-2 text-white text-2xl font-bold text-center ">
            {"Regular NFTs ⚡"}
          </h1>
          <div className="flex items-center justify-center gap-5">
            <div
              onClick={regularAmount == 0 ? "" : decreaseAmount}
              className={`w-7 h-7 rounded-md flex items-center justify-center bg-black ${
                0 == regularAmount
                  ? "cursor-not-allowed active:100"
                  : "active:scale-50 cursor-pointer"
              } transition-all duration-300`}
            >
              -
            </div>
            <div>{regularAmount}</div>
            <div
              onClick={maxAmount != regularAmount && increaseAmount}
              data-custom-property={NFT2}
              className={`w-7 h-7 rounded-md flex items-center justify-center bg-black ${
                maxAmount == regularAmount
                  ? "cursor-not-allowed active:100"
                  : "active:scale-50 cursor-pointer"
              } transition-all duration-300`}
            >
              +
            </div>
          </div>
          {/* <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p> */}
          {address == null ? (
            <button
              type="button"
              className={`${BtnStyle}`}
              onClick={() => open()}
            >
              Connect Wallet
            </button>
          ) : (
            <button
              className={`${BtnStyle} ${
                timeRemaining != 0 && "cursor-not-allowed"
              } ${isLoading && "cursor-not-allowed"}`}
              onClick={() => {
                if (timeRemaining == 0 && !isLoading) mint();
              }}
            >
              {timeRemaining != 0 ? (
                "Minting is Not live Yet"
              ) : isLoading ? (
                <div className="flex gap-2">
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status"
                  ></div>
                  Minting...
                </div>
              ) : (
                "Mint"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default MintSection;
