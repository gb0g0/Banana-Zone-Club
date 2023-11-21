import { NFT1, NFT2, NFT3, NFT4, NFT5, NFT7 } from "../assets";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
const Modal = () => {
  const targetTime = new Date("2023-11-22T12:00:00");
  return (
    <>
      <div
        // onClick={() => setFundModal(false)}
        className="w-screen h-screen grotesk text-white bg-op rounded-none flex items-center justify-center z-10 top-0 left-0 right-0 bottom-0 absolute font-epilogue"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="rounded-xl p-5 bg-[#191a1aff] flex flex-col gap-6 relative"
        >
          <div className="flex  items-center justify-center">
            {/* <div></div> */}
            <label className="text-white flex gap-1">
              Minted Succesfully
              <div className="h-7 w-7 cursor-pointer bg-[#00cb2c] rounded-full border-2 border-[#00cb2c] flex items-center justify-center">
                <FaCheck />
              </div>
            </label>
            {/* <div
              className="h-7 w-7 cursor-pointer bg-[#CB0000] rounded-full border-2 border-[#CB0000] flex top-0 right-0 absolute mr-2 mt-2 items-center justify-center"
            >
              <RxCross2 /> */}
            {/* </div> */}
          </div>

          <div className="w-full top-0 right-0 rounded-md flex items-center justify-center">
            <img
              src={NFT2}
              alt={NFT2}
              srcset=""
              className="rounded-[16px] w-96"
            />
          </div>
          <a href="http://" target="_blank" rel="noopener noreferrer" className="">
            <button className="bg-[#e2b030ff] w-full border-[#e2b030ff] text-white flex items-center justify-center active:scale-95 transition-all duration-300">
              Check OpenSea
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Modal;
