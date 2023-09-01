const DeviceHistory = () => {
  const DeviceHistory = [
    {
      timestamp: "Dec 2, 1:30pm",
      device: "iMac Pro",
      country: "United States",
      ipAddress: "179.122.37.231",
      status: "Active",
    },
    {
      timestamp: "Dec 2, 1:30pm",
      device: "iMac Pro",
      country: "United States",
      ipAddress: "179.122.37.231",
      status: "Unactive",
    },
  
  ];

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* <!-- head --> */}
        <thead className="bg-gray-700">
          <tr className="text-white">
            <th>Date/Time</th>
            <th>Device List</th>
            <th>Location</th>
            <th>IP Address</th>
            <th>Active Device</th>
          </tr>
        </thead>
        <tbody>
          {DeviceHistory.map((DH) => (
            <tr key={DH.ipAddress}>
              <td>{DH.timestamp}</td>
              <td>{DH.device}</td>
              <td>{DH.country}</td>
              <td>{DH.ipAddress}</td>
              <td>{DH.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeviceHistory;
