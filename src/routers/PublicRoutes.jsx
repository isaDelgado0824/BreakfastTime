import React, { useContext } from 'react';
import Context from '../context/Context';
import { Navigate } from 'react-router-dom';

const PublicRoutes = ({children}) => {
  const { logstate } = useContext(Context);
  return (!logstate) 
  ? children
  : <Navigate to='/Breakfast' /> 
}

export default PublicRoutes
