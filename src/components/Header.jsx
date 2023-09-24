import { useState } from "react";
import { NFT3 } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const twitter = "https://twitter.com/Banana_Zone_Nft";
const telegram = "https://t.me/+Ow2gtNSAYwg0NDBk";
const discord = "https://discord.gg/Bdgdm8Zwgg";
const insta = "https://instagram.com/banana_zone_club";

const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="flex md:flex-row justify-between py-[5px] md:px-28 px-10 sm:px- w-screen mt-[5px] mb-[25px] gap-6 grotesk">
      <div className="flex items-center justify-center">
        <img src={NFT3} alt="Logo" width="40px" height="40px" />
        <p className="font-semibold ml-[5px]">🍌Banana Zone Club🍌</p>
      </div>
      <div className="md:flex hidden items-center justify-center gap-10">
        <a href={twitter}>Twitter</a>
        <a href={discord}>Discord</a>
        <a href={telegram}>Telegram</a>
        <a href={insta}>Instagram</a>
      </div>
      <button className="md:flex green hidden">Connect Wallet</button>
      {toogleMenu ? (
        <RxCross2
          fontSize={40}
          className="cursor-pointer md:hidden flex z-20"
          onClick={() => setToogleMenu(false)}
        />
      ) : (
        <HiMenuAlt3
          fontSize={40}
          className="cursor-pointer md:hidden z-20"
          onClick={() => setToogleMenu(true)}
        />
      )}
      {toogleMenu && (
        <div
          onClick={() => setToogleMenu(false)}
          className="h-screen w-screen z-10 top-0 right-0 flex absolute"
        >
          <div className="gap-4 z-10 justify-center flex flex-col items-center flex-initial w-[200px] absolute top-12 right-0 rounded-xl glass-effect md:hidden py-5 ">
            <a href={twitter}>Twitter</a>
            <a href={twitter}>Discord</a>
            <a href={telegram}>Telegram</a>
            <a href={twitter}>Instagram</a>
            <button className="green">Connect Wallet</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
