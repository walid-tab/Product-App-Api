import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const API='https://fakestoreapi.com/products'
    useEffect(() => {
        axios
        .get(API)
        .then((res)=>{setProducts(res.data); 
            setLoading(false)})
        .catch((err)=>console.log(err))   
        
      },[])
    console.log(products)
  return (
    <div className='listProd'>
        {loading? <div class="ring">Loading  <span></span></div> 
        : products.map((el , index)=><ProductCard el={el} key={index}/>)}
    </div>
  )
}

export default ProductList