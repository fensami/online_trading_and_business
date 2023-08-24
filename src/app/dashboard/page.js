import UsingChart from './UsingChart';
import DashboardCard from './dashboardCard';
import DashboardUserTotal from './dashboardUserTotal';
import PieChartExample from './exchange/RoundCharts';
import RecentTransaction from './recentTransaction';
import TableDashboard from './tableDashboard';

const DashboardPage = () => {
  return (
    <>
      
      <DashboardCard></DashboardCard>
     
      <div className='grid md:grid-cols-2  my-3  gap-5'>
      <UsingChart></UsingChart>
      <DashboardUserTotal ></DashboardUserTotal>
      </div>

      <div className='grid gap-5 md:grid-cols-2  mb-8 grid-row-2'>
      <TableDashboard></TableDashboard>
      <RecentTransaction></RecentTransaction>
      </div>
      

    </>
  );
};

export default DashboardPage;