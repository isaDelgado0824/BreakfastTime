import React, { useReducer, useState } from 'react'
import Context from './Context'
import reducer from './reducer'
import reducer2 from './reducer2'
import types from './types'

const init = () => {
  const user = localStorage.getItem('name')
  return {
    logstate: !!user,
    userName: user
  }
}

const initialValue2 = []

const Provider = ({children}) => {
  const [authentication, dispatch] = useReducer(reducer, {}, init);
  const [myProducts, dispatch2] = useReducer(reducer2, initialValue2);
  const [user, setUser] = useState('');

  const log = (user='') => {
    const action = {
      type: types.logged,
      payload: user
    }
    localStorage.setItem('name', user)
    dispatch(action)
  }

  const unlog = () => {
    setUser('')
    const action = {
      type: types.unlogged
    }
    localStorage.removeItem('name')
    dispatch(action)
  }

  const addProduct = (product) => {
    const action = {
      type: types.add,
      payload: product
    }
    dispatch2(action)
  }

  const removeProduct = (productName) => {
    const action = {
      type: types.remove,
      payload: productName
    }
    dispatch2(action)
  }


  return (
    <div>
      <Context.Provider value={{ ...authentication, myProducts, dispatch2, log, unlog, addProduct, removeProduct, user, setUser }}>
        {children}
      </Context.Provider>
    </div>
  )
}

export default Provider
