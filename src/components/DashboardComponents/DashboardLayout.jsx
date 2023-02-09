import { Outlet } from 'react-router-dom';
import { DashboardNavbar } from '../DashboardComponents/DashboardNavbar';

const dashboardLayout = () => {
  return (
    <div className="flex relative bg-main-dark-bg">
      <div className="bg-gray-200 w-full min-h-screen flex-2">
        <div className="fixed md:static bg-blue-600 navbar w-full">
        {/* <div className="fixed md:static navbar w-full" style={{backgroundColor: '#0d6efd'}}> */}
          <DashboardNavbar />
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default dashboardLayout;
