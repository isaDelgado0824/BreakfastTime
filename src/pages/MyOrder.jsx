import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { faFaceFrownOpen, faFaceLaughBeam, faFaceKissWinkHeart } from '@fortawesome/free-regular-svg-icons'
import Context from '../context/Context'
import types from '../context/types'

const MyOrder = () => {
  const { myProducts, dispatch2 } = useContext(Context)
  const [ isPurchased, setIsPurchased] = useState(false);
  const user = localStorage.getItem('name')
  const calcTotal = () => {
    const total = myProducts.reduce((acc, product) => acc + Number(product.productPrice), 0);
    return total.toFixed(2);
  }

  const emptyCart = () => {
    const action = {
      type: types.empty,
      payload: null
    }
    dispatch2(action);
  }

  const buy = () => {
    if (myProducts.length > 0) {
      setIsPurchased(true);
       const action = {
        type: types.empty,
        payload: null
      }
      dispatch2(action);
    }
  }

  const showProducts = () => {
    return (
      <>
      {myProducts.map(product => (
        <div className='my-product' key={product.productName}>
          <img src={`${process.env.PUBLIC_URL}/img/gift.png`} alt="Finn Muffin" />
          <div>
            <p>Name</p>
            <h3>{product.productName}</h3>
          </div>
          <div>
            <p>Price</p>
            <h3>${product.productPrice}</h3>
          </div>
          <button className='remove-from-cart' onClick={()=> {
            dispatch2({
              type: types.remove,
              payload: product.productName
            })
          }}><FontAwesomeIcon icon={faTrashCan} /></button>
        </div>
      ))}
      <button onClick={emptyCart} className='button-container-button empty-button'>EMPTY CART</button>     
      </>
    )
  }

  return (
    <div className='cart'>
      <div className='left-content'>
        <h1>{user}'s PRODUCTS </h1>
        <div className='my-products-container'>
          {(myProducts.length < 1) ?
          <div className='dynamic-sign'>
            <p>You haven't add anything yet <FontAwesomeIcon icon={faFaceFrownOpen} /></p>
          </div>
          :
          showProducts()}
        </div>
      </div>
      <div className='right-content'>
        {(isPurchased === true) ?
          <div className='Thanks-sign'>
            <h1>MY ORDER</h1>
            <h4>¡Thank you for your purchase! <FontAwesomeIcon icon={faFaceLaughBeam} /></h4>
            <p>Cinnamon Bun will be delivering your order as soon as possible. <br />
            Just a heads-up: Some items might have wandered off on the way  <FontAwesomeIcon icon={faFaceKissWinkHeart} /></p>
          </div>
        :
          <>
          <div className='order-info'>
            <h1>MY ORDER</h1>
            <p>
              Remember, every breakfast order comes with a copy of "Making Bacon Pancakes" by 
              our special chef Jake. ¡Bestseller in Ooo!
            </p>
            <img src={`${process.env.PUBLIC_URL}/img/bestseller.jpg`} alt="Jake's poster" />
            <h3>TOTAL COST: ${calcTotal()}</h3> 
          </div>
          <button onClick={buy} className='button-container-button buy-button' >BUY</button>
        </>
        }       
      </div>
    </div>    
  )
}

export default MyOrder