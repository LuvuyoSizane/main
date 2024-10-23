import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = ()=>{
    const { user,setUser } = useContext(UserContext);

    return user ? <Outlet/> : <Navigate to = "/Login"/>
}

export default ProtectedRoutes