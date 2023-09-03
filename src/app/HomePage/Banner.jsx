import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const metadata = {
  title: "Home",
  // description: 'Generated by create next app',
};

const Banner = () => {
  return (
    <div className="md:flex justify-between">
      <article className="md:w-1/2 p-6">
        <h1 className="md:text-5xl text-2xl font-bold ">
          One broker, countless trading opportunities
        </h1>
        <p className="mt-5 md:text-xl font-semibold">
          Get the widest range of markets, trades and platforms
        </p>
        <div className="md:text-2xl mt-5 font-semibold">
          <TypeAnimation
            className="text-orange-700"
            sequence={[
              // Same substring at the start will only be typed once,
              "Crypto Exchange",
              1000,
              "Transaction ID",
              1000,
              "Stocks & indices",
              1000,
              "Commodities & Forex",
              1000,
              "Cryptocurency Prices",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
        </div>
      </article>
      <article>
        {/* <img src="" /> */}
        <Image
          width={500}
          height={500}
          src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
          alt=""
        ></Image>
      </article>
    </div>
  );
};

export default Banner;
