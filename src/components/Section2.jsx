import { FaVoteYea } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { MdGroups3 } from "react-icons/md";
import { MdGroupAdd } from "react-icons/md";
import { BsBarChartFill } from "react-icons/bs";
import { GiPowerLightning } from "react-icons/gi";
const Card = ({ icon, title, subtitle }) => (
  <div className="flex flex-col max-w-xs max-h-44 justify-start p-4 cursor-pointer white-glassmorphism hover:shadow-xl">
    <div className="w-14 h-14 rounded-md flex items-center justify-center bg-black">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h1 className="mt-2 text-white text-2xl font-medium">{title}</h1>
      <p className="mt-2 text-[#EBEBF599] font-extralight">{subtitle}</p>
    </div>
  </div>
);

const Section2 = () => {
  return (
    <div className="flex flex-wrap w-screen my-[20px] gap-[26px] grotesk justify-center items-center">
      <Card
        icon={<FaGift fontSize={21} className="text-white" />}
        title="Winning Rewards"
        subtitle="Earn rewards from NFTs minted succesfully."
      />
      <Card
        icon={<MdGroups3 fontSize={21} className="text-white" />}
        title="Community Engagement"
        subtitle="Unite with others for investment influence."
      />
      <Card
        icon={<GiPowerLightning fontSize={21} className="text-white" />}
        title="Anticipation and Thrill"
        subtitle="Exciting, electrifying NFT investment experience."
      />
    </div>
  );
};
export default Section2;
