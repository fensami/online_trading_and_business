import React from 'react';

const TableDashboard = () => {
  return (
    <div className='bg-[#171f2a] p-2'>
      <div>
  <table className="table table-xs">
    <thead className='text-white'>
      <tr>
        {/* <th></th>  */}
        <th>Type</th> 
        <th>Asset</th> 
        <th>Date</th> 
        <th>IP Address	</th> 
        <th>Status List	</th> 
        <th>Amount</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        {/* <th>1</th>  */}
        <td>Exchange</td> 
        <td>Bitcoin</td> 
        <td>Apr 14, 2023</td> 
        <td>140.91.94.219</td> 
        <td>Success</td> 
        <td>11,250 BTC</td>
      </tr>
      <tr>
        {/* <th>1</th>  */}
        <td>Exchange</td> 
        <td>Bitcoin</td> 
        <td>Apr 14, 2023</td> 
        <td>140.91.94.219</td> 
        <td>Success</td> 
        <td>11,250 BTC</td>
      </tr>
      <tr>
        {/* <th>1</th>  */}
        <td>Exchange</td> 
        <td>Bitcoin</td> 
        <td>Apr 14, 2023</td> 
        <td>140.91.94.219</td> 
        <td>Success</td> 
        <td>11,250 BTC</td>
      </tr>
      <tr>
        {/* <th>1</th>  */}
        <td>Exchange</td> 
        <td>Bitcoin</td> 
        <td>Apr 14, 2023</td> 
        <td>140.91.94.219</td> 
        <td>Success</td> 
        <td>11,250 BTC</td>
      </tr>
    
    </tbody> 
    
  </table>
</div>
    </div>
  );
};

export default TableDashboard;