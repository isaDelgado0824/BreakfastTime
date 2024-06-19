import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Router2 from './Router2'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'

const Router1 = () => {
  return (
    <>
      <Routes>
        <Route path='Login' element={
          <PublicRoutes>
            <Login/>
          </PublicRoutes>
        }/>  
        <Route path='/*' element={
          <PrivateRoutes>
            <Router2/>
          </PrivateRoutes>
        }/>  
      </Routes>
    </>
  )
}

export default Router1
