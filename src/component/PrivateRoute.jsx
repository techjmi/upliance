import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const currentUser= localStorage.getItem('currentUser')

    return currentUser ? <Outlet /> : <Navigate to='/login'/>
};

export default PrivateRoute;
