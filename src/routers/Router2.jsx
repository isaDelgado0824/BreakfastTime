import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Breakfast from '../pages/Breakfast'
import Donuts from '../pages/Donuts'
import MyOrder from '../pages/MyOrder'
import NavBar from '../navbar/NavBar'
import MoreInfo1 from '../pages/MoreInfo1'

const Router2 = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path='Breakfast' element={<Breakfast/>}/>
          <Route path='Special' element={<Donuts/>}/>
          <Route path='MyOrder' element={<MyOrder/>}/>
          <Route path='Breakfast/:name' element={<MoreInfo1/>}/>
          <Route path='/*' element={<Navigate to='Breakfast' />}/>
        </Routes>
    </>
  )
}

export default Router2
