import React from 'react'
import Link from 'next/link'

const ProductIcon = () => {
  return (
    <Link href="/products/product/slug">
    <div className='prodcut-i-cart'>
      <div className='product-i-img'> 
      <img src='https://i.pinimg.com/564x/eb/09/30/eb093021b14dde25083c7b383629e745.jpg'/> 
      </div>
      <div className='product-i-desc'>
        <h1>Платье Паутина</h1>
        <p>P 300</p>
      </div>

    </div>
    </Link>
  )
}

export default ProductIcon