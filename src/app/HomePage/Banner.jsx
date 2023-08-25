import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <article className="w-1/2 p-6">
        <h1 className="text-5xl font-bold">One broker, countless trading opportunities</h1>
        <p className="mt-5 text-xl font-semibold">Get the widest range of markets, trades and platforms</p>
        <div className="text-2xl mt-6 font-bold">
      
        <TypeAnimation className="mt-5 text-slate-400 "
  sequence={[
     
    'Cryptocurrencies',
    1000,
    'Stocks & indices',
    1000,
    'Commodities',
    1000,
    'Exchenge Balance',
    1000,
    'Todays Price Trading',
    1000,
  ]}
  speed={50}
  style={{ fontSize: '2em' }}
  repeat={Infinity}
/>   
        </div>
      </article>
      <article>
        {/* <img src="" /> */}
        <Image width={500} height={500} src='https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt=''></Image>
      </article>
    </div>
  );
};

export default Banner;