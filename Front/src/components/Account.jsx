import { Outlet } from 'react-router-dom';
import Dashboardview from '../components/Dashboardview';
import Sidebar from '../components/Sidebar';
//import logo from './logo.svg';


function Account() {
  return (
    <div className="">
      <div><h1>Account page</h1></div>
      <div className="flex overflow-scroll ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] border overflow-scroll h-[100vh]">
          <Dashboardview />
          <div>
            <Outlet></Outlet>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Account;