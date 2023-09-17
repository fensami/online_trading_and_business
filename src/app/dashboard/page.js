import UsingChart from './UsingChart';
import DashboardCard from './dashboardCard';
import DashboardUserTotal from './dashboardUserTotal';
import PieChartExample from './exchange/RoundCharts';
import RecentTransaction from './recentTransaction';
import TableDashboard from './tableDashboard';

export const metadata = {
  title: 'Dashboard/User | OTAB',
  // description: 'Generated by create next app',
}


const DashboardPage = () => {

  return (
    <>

      <DashboardCard></DashboardCard>

      <div className='grid md:grid-cols-2 grid-cols-1  my-3 md:px-5 px-3  gap-5'>
        <UsingChart></UsingChart>
        <DashboardUserTotal ></DashboardUserTotal>
      </div>

      <div className='mb-8 px-5'>
        <TableDashboard></TableDashboard>
        {/* <RecentTransaction></RecentTransaction> */}
      </div>


    </>
  );
};

export default DashboardPage;