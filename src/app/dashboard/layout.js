import Sidebar from './Sidebar';

export const metadata = {
  title: 'Dashboard Next App',
  description: 'Generated by create next app',
}

const DashboardLayout = ({children}) => {
  return (
    <div className='flex gap-10 container mx-auto border bg-[#131720] text-white'>
      <Sidebar></Sidebar>
      {children}
    </div>
  );
};

export default DashboardLayout;