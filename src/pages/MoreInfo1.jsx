import React, { useContext } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { products } from '../data/data';
import Context from '../context/Context';

const MoreInfo1 = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { addProduct, removeProduct, myProducts } = useContext(Context);

    const productFound = products.find(product => product.name === name);

    if (!productFound) {
      return (
        <Navigate to='Breakfast' />
      )
    }

    const { type, price, icon, benefits, origin, fact} = productFound;
    const imgLink = `/img/Icons/${icon}`
    const fixedPrice = price.toFixed(2);
    const isOnCart = myProducts.find(myProduct => myProduct.productName === productFound.name);

    const goBack = () => {
      navigate(-1);
    }


  return (
    <div className='page-container'>
      <div className='more-info-container'> 
        <img className='' src={imgLink} alt={name} />
        <div className='purchase-info'>
          <div>
            <h1>{name}</h1>
            <h2>${fixedPrice}</h2>
            <label htmlFor='category'>Category</label>
            <p className='description' id='category'>{type}</p>

            <label htmlFor='benefits'>Benefits</label>
            <p className='description' id='benefits'>{benefits}</p>

            <label htmlFor='origin'>Origin</label>
            <p className='description' id='origin'>{origin}</p>

            <label htmlFor='fun-fact'>Fun fact</label>
            <p className='description' id='fun-fact'>{fact}</p>
          </div>
          
          <div className='button-container'>
            {isOnCart ? (
              <button className='button-container-button' id='button-container-remove' onClick={() => removeProduct(name)}>REMOVE FROM CART</button>
            ):(
              <button className='button-container-button' id='button-container-add' onClick={() => addProduct({productName: name, productPrice: fixedPrice})}>ADD TO CART</button>
            )}
            <button className='button-container-button' id='button-container-back' onClick={goBack}>BACK TO PRODUCTS</button>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default MoreInfo1
