import React from 'react'
import Navbar from './Navbar'
import Navigation from './Navigation'


const ProductsLayout = ({children}) => {
  return (
    <div>
        <Navbar  theme='dark'/>
        <div className='products-area'>
            <Navigation />
            <div className='products-container'>
               {children}
            </div>

        </div>
    </div>
  )
}

export default ProductsLayout