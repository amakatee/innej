import React, { useContext } from 'react'
import MobileNav from '../../../components/MobileNav'
import Navbar from '../../../components/Navbar'
import Carousel from '../../../components/Carousel'
import TransitionContext from '../../../context/TransContext'
const ProductDetails = () => {

  return (
      <>
     <div className='sp-desc-nav'> <Navbar theme="dark" /> </div>
      <div className='sp-mobile-nav'><MobileNav /></div>


    <div className='single-product'>
        <div className='sp-carousel'>
            <Carousel   />


        </div>
        <div className='sp-desc' >

        </div>
    </div>
    </>
  )
}

export default ProductDetails