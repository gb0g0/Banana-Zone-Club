import { CountdownTimer } from "./";

const Section1 = () => {
  const targetTime = new Date("2023-11-22T12:00:00");
  return (
    <div
      id="mint"
      className="flex flex-col items-center justify-center w-screen my-10 sm:px-32 px-10 grotesk"
    >
      <div className="p-5 w-full flex flex-col justify-center items-center white-glassmorphism text-center">
        <h1>Mint Section</h1>
        Mint Start in:
        <div>
          <CountdownTimer targetTime={targetTime} />
        </div>
      </div>
    </div>
  );
};
export default Section1;
