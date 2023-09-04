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
    <div className="md:text-[16px] text-[10px]">
      <header className="flex justify-between items-center p-4 bg-slate-800">
        <p>Time</p>
        <p>Price (USDT)</p>
        <p>Amount (BTC)</p>
        <p>Total (USDT)</p>
      </header>
      <div className="pb-4">
        {PriceData.map((data) => (
          <div
            className="flex justify-between items-center border-b text-left my-3"
            key={data.id}
          >
            <p>{data.Time}</p>
            <p>{data.Price}</p>
            <p>{data.Amount}</p>
            <p>{data.Total}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TablePriceDeep;
