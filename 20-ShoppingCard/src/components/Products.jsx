import React from 'react'
import { products } from '../data/products'
import Product from './Product'


const Products = () => {
   
  return (
    <div>
        {products.map(product=>(<Product key={product.id} {...product}/>))}
    </div>
  )
}

export default Products