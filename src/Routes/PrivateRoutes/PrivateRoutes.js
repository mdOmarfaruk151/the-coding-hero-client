import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
     
    if(loading){
       return <Spinner animation="border" variant="success" className='mt-5  ml-96 mr-96' />
    }

    if(!user){
        return <Navigate to='/log-in' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;