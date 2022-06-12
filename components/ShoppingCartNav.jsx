import React, {useRef, useEffect} from 'react'
import gsap from 'gsap'
import { GrClose } from 'react-icons/gr'

const ShoppingCartNav = ({setShoppingCartNav}) => {
    const shoppingCartRef = useRef()
   
    useEffect(() => {
        gsap.fromTo(shoppingCartRef.current, {x: "200%"}, {x:0, duration: 0.8})

    }, [])
  return (
    <div className='nav-shopping-cart' ref={shoppingCartRef}>
         <div className='desk-cont'>
           <div className='sc-header ' >
               <GrClose className='pointer' size={15} onClick={() => setShoppingCartNav(false) } />
              <h1 className='nav-in-bag-text'>В корзине</h1>
       <div className='nav-svg-cont'>
        <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82"
         fill="none" stroke="#434343" stroke-miterlimit="10"></polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#434343" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
        <span className='nav-shop-total'>(13)</span>
        </div>
    </div>
    {0 < 1 ?  <div className='empty-text mini-proucts-cont'>В корзине пусто :(</div> :
     <div className=' mini-proucts-cont'>
     {/* { cartItems.map(cart =>  <ShoppingCartItem cart={cart} />)} */}
    

  </div>
    }
   


    </div>
    <div className='total-mini '>
        <div className='subtotal-mini'>
            <p >Суммарно</p>
            <p>P 50</p>
        </div>
        <div className='grid content-center'>
     <button className='checkout-btn'>
                Перейти к оплате
            </button>
       
        </div>
    </div>

    </div>
  )
}

export default ShoppingCartNav
//onClick={() => cartItems.length >= 1 ? tocheckout('/checkout') : alert("Корзина пуста")}  className='checkout-btn'