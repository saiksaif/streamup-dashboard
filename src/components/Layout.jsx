import { Outlet } from 'react-router-dom';

import MobileSidebar from "./MobileSidebar";
import Sidebar from './Sidebar';
import HeaderBar from './HeaderBar';

import styles from "./styles/layout.module.css";

function Layout() {
  return (
    <div>
        <div className="w-screen h-screen flex flex-col md:flex-row">
            <div className='block md:hidden'>
              <MobileSidebar />
            </div>
            <div className='hidden md:block md:w-3/12 xl:w-2/12 p-0'>
                <Sidebar />
            </div>
            <div className={'w-screen md:w-9/12 xl:w-10/12 flex flex-col  overflow-y-scroll ' + styles.pageBgColor}>
              <div className='hidden md:block w-100 p-5'>
                <HeaderBar />
              </div>
              <div className='w-100'>
                <Outlet />
              </div>
            </div>
        </div>
    </div>
  );
}

export default Layout;