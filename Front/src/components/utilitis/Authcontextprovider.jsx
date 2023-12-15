import { createContext, useState ,useContext} from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
 const AuthCons = createContext({});

export const AuthProvider= ({ children }) => {
    


    const [authcons, setAuthcons] = useState({});

    return (
        <AuthCons.Provider value={{ authcons, setAuthcons }}>
            {children}
        </AuthCons.Provider>
    );
};


export const useAuth = () => {
    
    return useContext(AuthCons);
}





export const RequireAuth = ({ allowedRoles }) => {
    const { authcons,setAuthcons } = useAuth();
  
    // Retrieve data from localStorage
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRoles = JSON.parse(localStorage.getItem("roles"));
    const storedId = localStorage.getItem("id");
  
    // If authcons is not set and localStorage contains valid data, set authcons
    if (!authcons && storedAccessToken && storedRoles && storedId) {
      const dataFromStorage = {
        accessToken: storedAccessToken,
        roles: storedRoles,
        id: storedId,
      };
      // Set authcons with data from localStorage
      setAuthcons(dataFromStorage);
    }
  
    console.log("Allowed Roles:", allowedRoles);
    console.log("Authcons:", authcons);
  
    return (
      authcons?.roles === allowedRoles ? (
        <Outlet />
      ) : authcons?.accessToken ? (
        <Navigate to="/unauthorized" />
      ) : (
        <Navigate to="/login" />
      )
    );
  };
