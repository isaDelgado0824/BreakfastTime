import React, { useContext } from 'react'
import { donuts } from '../data/data'
import Context from '../context/Context'

const Donuts = () => {
  const { addProduct, removeProduct, myProducts } = useContext(Context);
  const limitedProducts = donuts.map(product => {
    const imgLink = `img/Donuts/${product.img}`;
    const fixedPrice = product.price.toFixed(2);
    const isOnCart = myProducts.find(myProduct => myProduct.productName === product.name);


    return (
      <div key={product.name} className='product'>
        <img src={`${process.env.PUBLIC_URL}/${imgLink}`} alt={product.name} />
        <div className='product-info'>
          <h2>{product.name}</h2>
          <p><span style={{fontWeight: 300}}>Fill: </span> {product.fill}</p>
          <p>${fixedPrice}</p>

          {isOnCart ? (
            <button className='button-container-button' id='button-container-remove' onClick={() => removeProduct(product.name)}>REMOVE FROM CART</button>
          ):(
            <button className='button-container-button' id='button-container-add' onClick={() => addProduct({productName: product.name, productPrice: fixedPrice})}>ADD TO CART</button>
          )}
        </div>
      </div>
    )
  })

  return (
    <div className='main-container'>
      <h1 className='main-title'>Limited Edition Donuts</h1>
      <div className='products-container'>
        {limitedProducts}
      </div>
    </div>
  )
}

export default Donuts
