 
import React from 'react';
import WalletTable from './WalletTable';
// import dataget from '@/utils/dataget';



 
 

const Walletsdata = async () => {
        // const walletsdata = await dataget();

       const wallets = [
          {
            "coin_name": "Bitcoin(BTC)",
            "id":1,
            "order": 476.98,
            "available_balance": 245.5,
            "total_balance": 554.0,
            "market": "+53.44",
            "price": "768.097",
            "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          },
          {
            "coin_name": "Ethereum (BNB)",
            "id":2,
            "order": 77.445,
            "available_balance": 70.07,
            "total_balance": 80.0,
            "market": "+33.45",
            "price": "468.097",
            "image": "https://images.unsplash.com/photo-1666034948846-ab8bd8f71d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          },
          {
            "coin_name": "Cardano(DTC)",
            "id":3,
            "order": 55.63,
            "available_balance": 10.0,
            "total_balance": 70.0,
            "market": "+53.44",
            "price": "648.39",
            "image": "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          },
          {
            "coin_name": "Solana(BTC)",
            "id":4,
            "order": 45.04,
            "available_balance": 50.0,
            "total_balance": 20.0,
            "market": "-08.78",
            "price": "098.09",
            "image": "https://images.unsplash.com/photo-1651054558996-03455fe2702f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
          },
          {
            "coin_name": "Binance Coin",
            "id":5,
            "order": 54.85,
            "available_balance": 92.0,
            "total_balance": 26.0,
            "market": "+53.44",
            "price": "768.097",
            "image": "https://images.unsplash.com/photo-1657525641283-76b45d0534ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80"
          },
          {
            "coin_name": "XRP(DOGE)",
            "id":6,
            "order": 45.6,
            "available_balance": 50.0,
            "total_balance": 80.0,
            "market": "-74.05",
            "price": "908.09",
            "image": "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
          },
          {
            "coin_name": "Polkadot(DGB)",
            "id":7,
            "order": 76.99,
            "available_balance": 75.76,
            "total_balance": 55.70,
            "market": "+53.44",
            "price": "768.097",
            "image": "https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
          },
          {
            "coin_name": "Dogecoin(DOGE)",
            "id":8,
            "order": 67.78,
            "available_balance": 50.0,
            "total_balance": 75.0,
            "market": "+53.44",
            "price": "707.76",
            "image": "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
          },
          {
            "coin_name": "Avalanche(TRN)",
            "id":9,
            "order": 46.99,
            "available_balance": 46.0,
            "total_balance": 79.0,
            "market": "+40.09",
            "price": "568.09",
            "image": "https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
          },
          {
            "coin_name": "Chainlink(DGB)",
            "id":10,
            "order": 77.10,
            "available_balance": 20.0,
            "total_balance": 70.0,
            "market": "43.94",
            "price": "768.097",
            "image": "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
          }
        ]

        return (
                <div>

<div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr className='text-white text-xl'>
        <th>Asset</th>
        <th>On Order</th>
        <th>Available Balance</th>
        <th>Total balance</th>
        <th>24h Market</th>
      </tr>
    </thead>
    <tbody>
      {
        wallets.map((wallete, i) => <WalletTable key={i}
        walletedata = {wallete}
        ></WalletTable>)
      } 
    </tbody>
  </table>
</div>                  
         </div>
        );
};

export default Walletsdata;