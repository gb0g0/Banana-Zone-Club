import { NFT3, x } from "../assets";
import { FaTelegram } from "react-icons/fa";
const twitter = "https://twitter.com/Banana_Zone_Nft";
const telegram = "https://t.me/+Ow2gtNSAYwg0NDBk";
const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-between py-[5px] md:px-32 px-10 w-screen mt-[5px] mb-[25px] gap-3 grotesk">
      <div className="flex items-center justify-center">
        <img src={NFT3} alt="Logo" width="40px" height="40px" />
        <p className="font-semibold ml-[5px]">🍌Banana Zone Club🍌</p>
      </div>
      <div className="flex items-center justify-center gap-1">
        <a href={twitter}>
          <img src={x} alt="Logo" width="50px" height="50px" />
        </a>
        <a href={telegram}>
        <FaTelegram fontSize={29} className="text-white" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
