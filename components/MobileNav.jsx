import React from 'react'
import Link from 'next/link'
import {IoIosArrowRoundBack} from 'react-icons/io'

const MobileNav = () => {
  return (
    <div className="mob-nav">
    <div className='mob-nav-cont'>
        
      
        <div className=''>
           <Link  href='/products'>
            <IoIosArrowRoundBack color='#434343' size={30} />
            </Link>
        </div>
       
        
        <div className='mob-nav-sc' >
        <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#434343" strokeMiterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
        <span className='mob-nav-span'>(10)</span>
        </div>
     
     </div>
     {/* {shoppingCart && 
       <ShoppingCartMini setShoppingCart={setShoppingCart} />
      } */}

</div>
  )
}

export default MobileNav