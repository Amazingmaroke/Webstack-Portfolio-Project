import { Outlet } from 'react-router-dom';
import Dashboardview from './Dashboardview';
import Sidebar from './Sidebar';
import Tableview from './sections/Tableview';
import Viewuseradmin from './sections/Viewusersadmin';
import { useAxiosPrivatehook} from '../utilitis/Axiosapi';
import { useEffect } from 'react';


//import logo from './logo.svg';


function Account() {
  
  return (
    <div className="">
      
      <div className="flex  ">
        <div className="basis-[12%] h-[100vh]">
          <Sidebar />
        </div>
        <div className="basis-[88%] overflow-scroll h-[100vh]">
        <Dashboardview />
        
        <Viewuseradmin />
        
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;