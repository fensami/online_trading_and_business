
export const metadata = {
    title: 'Market | OTAB',
    // description: 'Generated by create next app',
  }
  

const MarketPage = () => {
    return (
        <div className="bg-[#131720] py-5 ">

<div className="grid md:grid-cols-4 grid-cols-1 gap-5  md:mx-5">
            
            <article className="bg-[#171f2a] px-4 py-3 rounded-lg">
             <h1 className="text-3xl font-bold mb-2 text-slate-500">Forex</h1>
             <p>Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events.</p>
            </article>

            <article className="bg-[#171f2a] px-4 py-3 rounded-lg">
             <h1 className="text-3xl font-bold mb-2">Commodities</h1>
             <p>Trade popular assets in the commodities market such as silver, gold, oil, and more without owning the underlying asset. Speculate on the price movements and benefit from our high leverage and competitive spreads.</p>
            </article>

            <article className="bg-[#171f2a] px-4 py-3 rounded-lg">
             <h1 className="text-3xl font-bold mb-2">Derived indices</h1>
             <p>Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetics, derived FX, and baskets.</p>
            </article>

            <article className="bg-[#171f2a] px-4 py-3 rounded-lg">
             <h1 className="text-3xl font-bold mb-2">Cryptocurrencies</h1>
             <p>Take advantage of a highly liquid market with round-the-clock trading. Profit from correctly predicting the movement of the world s most popular cryptocurrencies.</p>
            </article>


            <article className="bg-[#171f2a] px-4 py-3 rounded-lg">
             <h1 className="text-3xl font-bold mb-2">Stocks & indices</h1>
             <p>Trade global stocks of your favourite household brands and international stock market indices on Deriv. Expand your trading opportunities with access to a wide range of stocks and indices at competitive prices, and the convenience to trade indices beyond standard market hours.</p>
            </article>


            <article className="bg-[#171f2a] px-4 py-3 rounded-lg">
             <h1 className="text-3xl font-bold mb-2">Exchange-traded funds</h1>
             <p>Exchange-traded funds (ETFs) allow you to diversify your portfolio with assets that track bonds, commodities, and indices, without the high cost of owning the underlying assets.</p>
            </article>


           
         </div>
        </div>
    );
};

export default MarketPage;