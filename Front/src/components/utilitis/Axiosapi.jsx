import axios from 'axios';
import { useAuth } from './Authcontextprovider';
import { useEffect } from 'react';

const BASE_URL = 'http://localhost:3000';

export const axiosall = axios.create({
  baseURL: BASE_URL
});
const axiosprotected = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});


export  const useAxiosPrivatehook = () => {
    const { authcons } = useAuth();

    useEffect(() => {
        const requestIntercept = axiosprotected.interceptors.request.use(
            (config) => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${authcons?.accessToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const responseIntercept = axiosprotected.interceptors.response.use(
            (response) => response,
            (error) => Promise.reject(error)
        );

        return () => {
            axiosprotected.interceptors.request.eject(requestIntercept);
            axiosprotected.interceptors.response.eject(responseIntercept);
        };
    }, [authcons]);

    return axiosprotected ;
};


  

