import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex justify-between">
      <article className="w-1/2 p-6">
        <h1 className="text-5xl font-bold">One broker, countless trading opportunities</h1>
        <p className="mt-5 text-xl font-semibold">Get the widest range of markets, trades and platforms</p>
        <div className="text-2xl font-semibold">
        <p>Cryptocurrencies</p>
        <p>Stocks & indices|</p>
        <p>Commodities</p>
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