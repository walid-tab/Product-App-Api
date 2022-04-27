import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard({el}) {
   
  return (
    <div>
        <div className="card">
    <div className="imgBox">
      <img
        src={el.image}
        alt="mouse corsair"
        className="mouse"
      />
    </div>
    <div className="contentBox">
      <h3>{el.title}</h3>
      <h2 className="price">
        {el.price} €
      </h2>
      <Link to={`/products/${el.id}`}><button className="buy"> Details</button></Link>
    </div>
    
  </div>
    </div>
  )
}

export default ProductCard