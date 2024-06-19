import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Context from '../context/Context'

const NavBar = () => {
  const navigation = useNavigate();
  const { unlog } = useContext(Context);

  const logout = () => {
    navigation('/Login', {replace: true})
    unlog();
  }

  return (
    <>
    <nav>
      <div className='menu'>
        <NavLink to='Breakfast'>Prepare your breakfast</NavLink>
        <NavLink to='Special'>Limited Edition</NavLink>
        <NavLink to='MyOrder'>My Order </NavLink>
      </div>
      <button onClick={logout}>Log out</button>
    </nav>
    </>
  )
}

export default NavBar
