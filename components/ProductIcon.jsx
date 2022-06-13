import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProductIcon = () => {
  return (
    <Link href="/products/product/slug">
    <div className='prodcut-i-cart'>
      <div className='product-i-img'> 
      <Image layout='fill' alt='' src='/backimage-min.jpg'/> 
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