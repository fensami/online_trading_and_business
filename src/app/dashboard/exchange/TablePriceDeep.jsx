const TablePriceDeep = () => {
  const PriceData = [
    {
      id: 1,
      Time: "21:00",
      Price: "$247.68",
      Amount: "2573 BTC",
      Total: "$66826.67",
    },
    {
      id: 2,
      Time: "12:00",
      Price: "$211.68",
      Amount: "24,9753 BTC",
      Total: "$1586.67",
    },
    {
      id: 3,
      Time: "21:00",
      Price: "$278.68",
      Amount: "2473 BTC",
      Total: "$166.67",
    },
   
  ];

  return (
    <div className="table-responsive">
      <table className="table w-full  text-left ">
        {/* Head */}
        <thead className="text-[18px] font-bold">
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Price (USDT)</th>
            <th scope="col">Amount (BTC)</th>
            <th scope="col">Total (USDT)</th>
          </tr>
        </thead>
        <tbody>
          {PriceData.map((PD) => (
            <tr key={PD.id}>
              <td>{PD.Time}</td>
              <td>{PD.Price}</td>
              <td>{PD.Amount}</td>
              <td>{PD.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePriceDeep;
