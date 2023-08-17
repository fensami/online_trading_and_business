

const TablePriceDeep = () => {

    const PriceData = [
        {
            "id": 1,
            "Time": "21:00",
            "Price": "$247.68",
            "Amount": "2573 BTC",
            "Total": "$66826.67"
        },
        {
            "id": 2,
            "Time": "12:00",
            "Price": "$211.68",
            "Amount": "24,9753 BTC",
            "Total": "$1586.67"
        },
        {
            "id": 3,
            "Time": "21:00",
            "Price": "$278.68",
            "Amount": "2473 BTC",
            "Total": "$166.67"
        },
        {
            "id": 4,
            "Time": "10:00",
            "Price": "$241.68",
            "Amount": "75,973 BTC",
            "Total": "$7486.67"
        },
        {
            "id": 5,
            "Time": "13:00",
            "Price": "$224.68",
            "Amount": "5473 BTC",
            "Total": "$1286.67"
        }
    ]



    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* <!-- head --> */}
                <thead className="bg-gray-700">
                    <tr className="text-white">
                        <th>Time</th>
                        <th>Price (USDT)</th>
                        <th>Amount (BTC)</th>
                        <th>Total (USDT)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        PriceData.map((PD) => <tr key={PD.id}>
                            <td>{PD.Time}</td>
                            <td>{PD.Price}</td>
                            <td>{PD.Amount}</td>
                            <td>{PD.Total}</td>
                        </tr>
                        )}

                </tbody>
            </table>
        </div>
    );
};

export default TablePriceDeep;