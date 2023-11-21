import { NFT } from "../assets";

const Hero = () => {
  return (
    <div className="w-full grotesk flex justify-center md:pt-[30px]">
      <div className="flex flex-col md:flex-row items-center justify-between md:p-5 py-10 px-4">
        <div className="flex flex-col gap-3 sm:items-start items-center">
          <h1 className="font-bold text-center sm:text-left sm:text-6xl text-3xl">
            <span className="green">Banana Zone Club</span>
            <br />
            NFT Collections
            <br /> Minting Page
          </h1>
          <p className="sm:text-2xl sm:text-left text-center text-lg font-medium text-[#EBEBF599]">
            Mint to become a luxury club of the upper millennium. <br />
            Mint Low ⚜, Sell high💹
          </p>
          {/* 
          Buy and join to the luxury club of the upper millennium.
           💎Join and become a Diamond Club member 10/10💎 */}
          <div className="mb-5">
            <a href="#mint">
              <button className="green active:scale-95 transition-all duration-300 border-[#e2b030ff]">Mint Now</button>
            </a>
          </div>
        </div>
        <div className="flex flex-col flex-1 relative justify-start md:ml-10">
          {/* <img src={NFT} alt="logo" width={350} className="glow -z-10 hero-img" /> */}
          <img src={NFT} alt="logo" width={350} />
        </div>
      </div>
    </div>
  );
};
export default Hero;
