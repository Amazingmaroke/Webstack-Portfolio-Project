import { Outlet } from 'react-router-dom';
import Userdasboard from '../components/Userdashboard';
import Usersidebar from '../components/Usersidebar';
import Tableview from './sections/Tableview';
import Viewuseradmin from './sections/Viewusersadmin';



//import logo from './logo.svg';


function User() {
  return (
    <div className="">
      
      <div className="flex  ">
        <div className="basis-[12%] h-[100vh]">
          <Usersidebar />
        </div>
        <div className="basis-[88%] overflow-scroll h-[100vh]">
        <Userdasboard />
        
        
        
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;