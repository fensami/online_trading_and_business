// import Chart from './chart';
import UsingChart from './UsingChart';
import DashboardCard from './dashboardCard';
import DashboardTotalBalance from './dashboardTotalBalance';
import RecentTransaction from './recentTransaction';
import TableDashboard from './tableDashboard';

const DashboardPage = () => {
  return (
    <div className='p-3 container'>
      
      <DashboardCard></DashboardCard>
      {/* <Chart></Chart> */}
      <div className='md:flex gap-5'>
      <UsingChart></UsingChart>
      {/* <dashboardTotalBalance></dashboardTotalBalance> */}
      <DashboardTotalBalance></DashboardTotalBalance>
      

      </div>

      <div className='flex gap-5'>
      <TableDashboard></TableDashboard>
      <RecentTransaction></RecentTransaction>
      </div>
      

    </div>
  );
};

export default DashboardPage;