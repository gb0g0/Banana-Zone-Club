import { useState } from "react";
import { NFT3 } from "../assets";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";

const twitter = "https://twitter.com/Banana_Zone_Nft";
const telegram = "https://t.me/+Ow2gtNSAYwg0NDBk";
const discord = "https://discord.gg/Bdgdm8Zwgg";
const insta = "https://instagram.com/banana_zone_club";

const ConnectButton = ({ props }) => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  if (isConnected)
    return (
      <div>
        <button className={props} onClick={() => open()}>
          {address.slice(0, 5)}....{address.slice(address.length - 4)}
        </button>
      </div>
    );
  return (
    <button className={props} onClick={() => open()}>
      Connect Wallet
    </button>
  );
};

const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  return (
    <div className="flex md:flex-row justify-between py-[5px] md:px-28 px-4 sm:px- w-screen mt-[5px] mb-[25px] gap-6 grotesk">
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
      <ConnectButton props="md:flex green hidden active:scale-95 transition-all duration-300" />
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
            <a href={discord}>Discord</a>
            <a href={telegram}>Telegram</a>
            <a href={insta}>Instagram</a>
            {/* <button className="green" onClick={() => open()}>
              Connect Wallet
            </button> */}
            <ConnectButton props="green" />
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;
