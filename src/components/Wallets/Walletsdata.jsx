 
import React from 'react';
import WalletTable from './WalletTable';
import getWalletsData from '@/utils/getWalletsData';
 
 

const Walletsdata = async () => {
        const walletsdata = await getWalletsData()
        return (
                <>

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
        walletsdata.map((wallete, i) => <WalletTable key={i}
        walletedata = {wallete}
        ></WalletTable>)
      } 
    </tbody>
  </table>
</div>   
                        
                </>
        );
};

export default Walletsdata;