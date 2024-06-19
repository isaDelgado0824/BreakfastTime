import { products } from '../data/data'
import { Link } from 'react-router-dom'

const Breakfast = () => {
  const breakfastProducts = products.map(product => {
    const imgLink = `/img/Breakfast/${product.img}`
    const fixedPrice = product.price.toFixed(2)
    const moreInfoLink = `/Breakfast/${product.name}`

    return (
      <div className='product' key={product.name}>
        <img src={`${process.env.PUBLIC_URL}/${imgLink}`} alt={product.name} />
        <div className='product-info'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${fixedPrice}</p>
          <div className='link-container'>
            <Link to={moreInfoLink}>MORE INFO</Link>
          </div>   
        </div>
      </div>
    )
  })
  return (
    <div className='main-container'>
      <h1 className='main-title'>Breakfast Time</h1>
      <div className='products-container'>
        {breakfastProducts}
      </div>
    </div>
  )
}

export default Breakfast
