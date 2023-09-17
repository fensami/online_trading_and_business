
import PriceTable from './PriceTable';
// import dataget from '@/utils/dataget';

const PriceData = () => {

  const prices = [
    {
      "coin_name": "Bitcoin(BTC)",
      "id": 1,
      "order": 476.98,
      "available_balance": 245.5,
      "total_balance": 554.0,
      "market": "+53.44",
      "price": "768.097",
      "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
      "coin_name": "Ethereum (BNB)",
      "id": 2,
      "order": 77.445,
      "available_balance": 70.07,
      "total_balance": 80.0,
      "market": "+33.45",
      "price": "468.097",
      "image": "https://images.unsplash.com/photo-1666034948846-ab8bd8f71d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
      "coin_name": "Cardano(DTC)",
      "id": 3,
      "order": 55.63,
      "available_balance": 10.0,
      "total_balance": 70.0,
      "market": "+53.44",
      "price": "648.39",
      "image": "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
      "coin_name": "Solana(BTC)",
      "id": 4,
      "order": 45.04,
      "available_balance": 50.0,
      "total_balance": 20.0,
      "market": "-08.78",
      "price": "098.09",
      "image": "https://images.unsplash.com/photo-1651054558996-03455fe2702f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
    },
    {
      "coin_name": "Binance Coin",
      "id": 5,
      "order": 54.85,
      "available_balance": 92.0,
      "total_balance": 26.0,
      "market": "+53.44",
      "price": "768.097",
      "image": "https://images.unsplash.com/photo-1657525641283-76b45d0534ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80"
    },
    {
      "coin_name": "XRP(DOGE)",
      "id": 6,
      "order": 45.6,
      "available_balance": 50.0,
      "total_balance": 80.0,
      "market": "-74.05",
      "price": "908.09",
      "image": "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
    },
    {
      "coin_name": "Polkadot(DGB)",
      "id": 7,
      "order": 76.99,
      "available_balance": 75.76,
      "total_balance": 55.70,
      "market": "+53.44",
      "price": "768.097",
      "image": "https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
    },
    {
      "coin_name": "Dogecoin(DOGE)",
      "id": 8,
      "order": 67.78,
      "available_balance": 50.0,
      "total_balance": 75.0,
      "market": "+53.44",
      "price": "707.76",
      "image": "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
    },
    {
      "coin_name": "Avalanche(TRN)",
      "id": 9,
      "order": 46.99,
      "available_balance": 46.0,
      "total_balance": 79.0,
      "market": "+40.09",
      "price": "568.09",
      "image": "https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
    },
    {
      "coin_name": "Chainlink(DGB)",
      "id": 10,
      "order": 77.10,
      "available_balance": 20.0,
      "total_balance": 70.0,
      "market": "43.94",
      "price": "768.097",
      "image": "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
    }
  ]


  return (
    <div className='bg-[#171f2a] md:px-10 ml-8 py-8'>
      <div className='md:flex justify-between items-center mb-8'>
        <div className='text-2xl font-bold'>Crytocurrency Prices</div>
        <div className='flex justify-start md:gap-6'>
          <div className="form-control">
            <div className="input-group mr-5">
              <input type="text" placeholder="Search…" className="bg-[#171f2a] input input-bordered border border-gray-500" />
              <button className="btn text-white bg-[#171f2a]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
          </div>

          <select className="select select-info w-32 bg-[#171f2a] max-w-xs">
            <option >All Time</option>
            <option>This Week</option>
            <option>This Month</option>
            <option>This Year</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className='text-white font-bold'>
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
            {
              prices.map((pricedata, index) => <PriceTable key={pricedata.id}
                pricedata={pricedata}
                index={index}
              ></PriceTable>)
            }
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default PriceData;