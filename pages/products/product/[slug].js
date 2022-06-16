import React, { useContext } from 'react'
import MobileNav from '../../../components/MobileNav'
import Navbar from '../../../components/Navbar'
import Carousel from '../../../components/Carousel'
import TransitionContext from '../../../context/TransContext'
import ProductsDesc from '../../../components/ProductsDesc'
import DesktopCarousel from '../../../components/DesktopCarousel'
const ProductDetails = () => {
  const {mobGalCont} = useContext(TransitionContext)

  return (
      <>
     <div className='sp-desc-nav'> <Navbar theme="dark" /> </div>
      <div className='sp-mobile-nav'><MobileNav /></div>


    <div className='single-product'>
        <div ref={mobGalCont} className='sp-carousel'>
            <Carousel   />
            <DesktopCarousel />


        </div>
        <div className='sp-desc' >
          <ProductsDesc />

        </div>
    </div>
    </>
  )
}

export default ProductDetails