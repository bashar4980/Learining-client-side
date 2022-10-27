import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../userContext/AuthProvider';




const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <h2>Loading</h2>
    }

    if(!user){
        return <Navigate to="/signin" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;