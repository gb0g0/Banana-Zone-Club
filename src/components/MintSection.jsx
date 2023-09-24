import { FaVoteYea } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { NFT1, NFT2, NFT3, NFT4, NFT5, NFT6 } from "../assets";

const Card = ({ img, title, subtitle }) => (
  <div className="flex relative flex-col max-w-xs h-fit justify-start gap-2 p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-full  top-0 right-0 rounded-md flex items-center justify-center">
      <img src={img} alt="" srcset="" className="rounded-[16px]  " />
    </div>
    <div className="flex flex-col flex-1 gap-2 ">
      <h1 className="mt-2 text-white text-2xl font-bold text-center ">
        {title}
      </h1>
      {/* <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p> */}
      <button className="green border-[#e2b030ff] cursor-not-allowed">
        Minting is Not live Yet
      </button>
    </div>
  </div>
);

const MintSection = () => {
  return (
    <div className="flex flex-wrap w-screen my-[20px] gap-[26px] grotesk justify-center items-center">
      <Card
        img={NFT4}
        title="Diamond"
        subtitle="Use tokens to vote on future value winners."
      />
      <Card
        img={NFT6}
        title="VIP"
        subtitle="Earn rewards from voted-on successful tokens."
      />
      <Card
        img={NFT2}
        title="Regular"
        subtitle="Unite with others for investment influence."
      />
    </div>
  );
};
export default MintSection;
