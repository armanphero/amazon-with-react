import React, { useContext } from 'react';
import { AuthContext } from '../../authprovider/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation();

    if(user){
        return children;
    }
    else if(loading){
        return <h1>loading.....</h1>
    }

    return (
        <Navigate to='/login' state={{from: location}} replace></Navigate>
    );
};

export default ProtectedRoute;