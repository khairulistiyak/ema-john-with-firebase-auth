import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <div><h2>Loading...</h2></div>
    }
    if (user) {
        return children
    }
    return <Navigate to={"/login"}></Navigate >;
};

export default PrivateRoute;