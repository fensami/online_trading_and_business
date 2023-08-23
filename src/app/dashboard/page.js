import UsingChart from './UsingChart';
import DashboardCard from './dashboardCard';
import PieChartExample from './exchange/RoundCharts';
import RecentTransaction from './recentTransaction';
import TableDashboard from './tableDashboard';

const DashboardPage = () => {
  return (
    <div className='p-3'>
      
      <DashboardCard></DashboardCard>
     
      <div className='md:flex w-full my-3  gap-5'>
      <UsingChart></UsingChart>
      {/* <div className="md:w-5/12 bg-[#171f2a] rounded-md shadow-md p-4">
            <PieChartExample />
            <div className="text-center">
              <h3 className="text-1xl font-semibold text-gray-300 mb-4">Total Balance</h3>
              <h1 className="text-[28px] font-semibold">0.3475948</h1>
              <p className="text-[#10b981]">11,032.24 USD</p>
              <button className="btn btn-success btn-xs text-white my-2">WithDraw</button>
            </div>
          </div> */}
     
      

      </div>

      <div className='grid gap-5 md:grid-cols-2'>
      <TableDashboard></TableDashboard>
      <RecentTransaction></RecentTransaction>
      </div>
      

    </div>
  );
};

export default DashboardPage;