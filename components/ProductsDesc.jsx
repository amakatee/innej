import React from 'react'

const ProductsDesc = () => {
  return (
    <div className='desk-main'>
        <div className='product-desk-title'>
            <h1>Dress</h1>
            <p>$30</p>

        </div>
        <div className='product-desc'>
            <p>every day dress</p>
        </div>

        <div className='color-size'>
            <div className='color'>
                <h3>Color:</h3>
                <div className='color-span'>
                   <span className='c-span'></span>
                   <span className='c-span'></span>
                </div>
            </div>
            <div className='size'>
                <h3>Size:</h3>
                <div className='size-span'>
                  <span className='s-span'>XS</span>
                  <span className='s-span'>S</span>
                </div>

            </div>
        </div>
        <div className='add-to-cart-desc'>Add To Cart</div>


        <div className='care-section'>
        <div className='care-info'>
            <h1>Material</h1>
            <p>kjdksjfe</p>
        </div>
        <div className='care-info'>
        <h1>Size</h1>
        <p>kjdksjfe</p>

        </div>
        </div>
    </div>
  )
}

export default ProductsDesc