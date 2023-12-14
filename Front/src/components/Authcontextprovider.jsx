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
    const { authcons } = useAuth();
    console.log(allowedRoles);
    console.log("hello", authcons);

    return (
        authcons?.roles === allowedRoles
            ? <Outlet />
            : authcons?.accessToken 
                ? <Navigate to="/unauthorized" />
                : <Navigate to="/login" />
    );
};
