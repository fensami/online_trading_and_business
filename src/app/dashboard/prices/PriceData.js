import PriceTable from "./PriceTable";
import { BiSearch } from "react-icons/bi";

const PriceData = () => {
  const prices = [
    {
      coin_name: "Bitcoin(BTC)",
      id: 1,
      order: 476.98,
      available_balance: 245.5,
      total_balance: 554.0,
      market: "+53.44",
      price: "768.097",
      image:
        "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    },
    {
      coin_name: "Ethereum (BNB)",
      id: 2,
      order: 77.445,
      available_balance: 70.07,
      total_balance: 80.0,
      market: "+33.45",
      price: "468.097",
      image:
        "https://images.unsplash.com/photo-1666034948846-ab8bd8f71d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    },
    {
      coin_name: "Cardano(DTC)",
      id: 3,
      order: 55.63,
      available_balance: 10.0,
      total_balance: 70.0,
      market: "+53.44",
      price: "648.39",
      image:
        "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
    },
    {
      coin_name: "Solana(BTC)",
      id: 4,
      order: 45.04,
      available_balance: 50.0,
      total_balance: 20.0,
      market: "-08.78",
      price: "098.09",
      image:
        "https://images.unsplash.com/photo-1651054558996-03455fe2702f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    },
    {
      coin_name: "Binance Coin",
      id: 5,
      order: 54.85,
      available_balance: 92.0,
      total_balance: 26.0,
      market: "+53.44",
      price: "768.097",
      image:
        "https://images.unsplash.com/photo-1657525641283-76b45d0534ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80",
    },
  ];

  return (
    <div className="bg-[#171f2a] md:px-10 ml-8 py-8">
      <div className="md:flex justify-between items-center mb-8">
        <div className="text-2xl font-bold">Crytocurrency Prices</div>
        <div className="flex justify-start md:gap-6">
          <div className="form-control">
            <div className="search-container flex justify-center items-center ">
              <input
                type="text"
                className="bg-transparent border outline-none h-8 px-2 rounded-tl-full rounded-bl-full"
                placeholder="Search..."
              />
              <button className="border h-8 px-4  rounded-tr-full rounded-br-full bg-red-400">
                <BiSearch className="text-black" size={24} />
              </button>
            </div>
          </div>
          <select className="select select-bordered select-sm w-full max-w-xs">
            <option disabled selected>
              All Time
            </option>
            <option>All Time</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-white font-bold">
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h %</th>
              <th>Market Cap</th>
              <th>Volume</th>
              <th>Charts</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((pricedata, index) => (
              <PriceTable
                key={pricedata.id}
                pricedata={pricedata}
                index={index}
              ></PriceTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceData;
