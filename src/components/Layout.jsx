import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div>
        <div className="w-screen h-screen flex">
            <div className='hidden md:block md:w-3/12 xl:w-2/12'>
                <Sidebar />
            </div>
            <div className='w-screen md:w-9/12 xl:w-10/12'>
                <Outlet />
            </div>
        </div>
    </div>
  );
}

export default Layout;