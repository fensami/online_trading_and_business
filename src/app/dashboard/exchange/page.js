import Dropdown from "./Dropdown";
import PriceDropdown from "./PriceDropdown";
import RoundCharts from "./RoundCharts";
import ChartSection from "./chartSection";
import TablePriceDeep from "./TablePriceDeep";

export const metadata = {
  title: 'Exchange | OTAB'}


const ExchangePage = () => {

  return (
    <div className="m-6 text-gray-300">
      <header className="
       w-full grid lg:grid-cols-3 grid-cols-2  gap-4 items-center justify-between lg:justify-around p-4 font-semibold  md:text-center rounded-md shadow-md">
        <div className=" md:border-r  border-gray-700 pr-20  md:bg-transparent bg-gray-700 py-4 px-2 rounded-sm">
          <Dropdown />
          <div className="mt-6">
            <h2 className="text-[18px] font-bold">24h high</h2>
            <p className="text-orange-500">21,264.95 </p>
          </div>
        </div>

        <div className=" md:border-r  border-gray-700 pr-20">
          <div className="my-6">
            <h2 className="text-[18px] font-bold">Price</h2>
            <p className="text-green-500">21,264.95 </p>
          </div>
          <div className="">
            <h2 className="text-[18px] font-bold">24h low</h2>
            <p className="text-green-500">21,264.95 </p>
          </div>
        </div>

        <div className=" ">
          <div className="my-6  ">
            <h2 className="text-[18px] font-bold">24h Change</h2>
            <p className="text-green-500">21,264.95 </p>
          </div>
          <div className="">
            <h2 className="text-[18px] font-bold">24h Volume</h2>
            <p >21,264.95 </p>
          </div>
        </div>
      </header>
      {/* header part end */}
      <main className="my-6 rounded-md shadow-md">
        {/* chart section */}
        <div className="grid md:flex  gap-6">
          <div className="md:w-7/12 w-auto bg-[#171f2a] rounded-md shadow-md p-4">
           <ChartSection/>
          </div>
          <div className="md:w-5/12  w-[100%] bg-[#171f2a] rounded-md shadow-md p-4">
            <RoundCharts />
            <div className="text-center">
              <h3 className="text-1xl font-semibold text-gray-300 mb-4">Total Balance</h3>
              <h1 className="text-[28px] font-semibold">0.3475948</h1>
              <p className="text-[#10b981]">11,032.24 USD</p>
              <button className="btn btn-success btn-xs text-white my-2">WithDraw</button>
            </div>
          </div>
        </div>
        {/* table section */}
        <div className="grid md:flex  gap-6 mt-6">
          <div className="md:w-7/12 bg-[#171f2a] rounded-md shadow-md p-4">
            <div className=" mb-4 md:flex justify-between items-center">
              <span>
                <h1 className="md:text-[28px] text-[20px] text-center font-semibold">Market trades</h1>
              </span>
              {/* <span className="flex gap-4 justify-center mt-2">
                <button className="btn btn-success btn-sm text-white ">Deep Chart</button>
                <button className="btn btn-success btn-sm text-white btn-outline">Price Chart</button>
              </span> */}
            </div>
            <TablePriceDeep />
          </div>
          <div className="md:w-5/12 bg-[#171f2a] rounded-md shadow-md p-4">
            <div className=" grid grid-cols-2 gap-4">
              <button className="btn btn-success btn-sm text-white ">Buy</button>
              <button className="btn btn-success btn-sm text-white btn-outline">Sell</button>
              <button className="btn btn-success btn-sm text-white btn-outline">Exchange</button>
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-2">Coin</h2>
            <div className="rounded-md px-6 py-1 bg-black">
              <Dropdown />
            </div>
            <h2 className="text-xl font-semibold mt-6 mb-2">Amount</h2>
            <div className="rounded-md px-6 py-1 bg-black">
              <PriceDropdown />
            </div>
            <span className="flex justify-between my-4">
              <span>Total :</span>
              <span>$1342.00</span>
            </span>
            <div className="text-center">
              <button className="btn btn-success btn-xs text-white my-2">Buy Bitcoin</button>
            </div>
          </div>
        </div>
      </main >
    </div>
  );
};

export default ExchangePage;