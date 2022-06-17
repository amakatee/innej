import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const ProductIcon = () => {
  const router = useRouter()
  return (

    <div onClick={() => router.push('/products/product/slug')} className='prodcut-i-cart'>
      <div className='product-i-img'> 
      <Image layout='fill' alt='' src='/backimg-min.jpg'/> 
      </div>
      <div className='product-i-desc'>
        <h1>Платье Паутина</h1>
        <p>P 300</p>
      </div>

    </div>
   
  )
}

export default ProductIcon