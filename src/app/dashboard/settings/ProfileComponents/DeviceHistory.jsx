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
    <div className="md:text-[16px] text-[10px]">
      <header className="flex justify-between items-center p-4 bg-slate-800 ">
        <p> Time</p>
        <p> Device List</p>
        <p> Country</p>
        <p> IP Address</p>
        <p> Status</p>
      </header>
      <div className="p-4">
        {DeviceHistory.map((device) => (
          <div
            className="flex justify-between items-center border-b text-left my-3"
            key={device.ipAddress}
          >
            <p>{device.timestamp}</p>
            <p>{device.device}</p>
            <p>{device.country}</p>
            <p>{device.ipAddress}</p>
            <p>{device.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceHistory;
