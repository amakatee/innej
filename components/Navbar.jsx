import React from 'react'
import styles from '../styles/Home.module.scss'
import IconLight from '../assets/lightbag.svg'
import Image from 'next/image'
import { useContext } from 'react'
import TransitionContext from '../context/TransContext'
import ProductsContext from '../context/StateContext'
import Sidebar from './Sidebar'
import ShoppingCartNav from './ShoppingCartNav'
import Link from 'next/link'

const Navbar = ({theme}) => {
    const {navbarRef} = useContext(TransitionContext)
    const {sidebar, setSideBar, shoppingCartNav, setShoppingCartNav} =  useContext(ProductsContext)


  return (
    <>
    <div ref={navbarRef} className={theme === "dark" ? "navbar n-dark " : "navbar"}>
        <div className="navbar__content">
            <div className={"burger"} onClick={() => setSideBar(true)}>
                    <span className={theme === "dark" ? "b_line n-b-dark" : "b_line" }></span>
                    <span className={theme === "dark" ? "b_line n-b-dark" : "b_line" }></span>
             </div>

             <Link href='/'>

             <h1 className={theme === "dark" ? "logo n-logo":  "logo" }>И́ней</h1>
             </Link>
         
            <div className="shop__bag" onClick={() => setShoppingCartNav(true)}>
                {/* <Image src={IconLight.src} width="23" height="23" /> */}
                {theme === "dark" ? 
                <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" 
                width="23" height="23" viewBox="0 0 24 24">
               <polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#343434" strokeMiterlimit="10">
               </polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#343434" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg> :
               <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" 
               width="23" height="23" viewBox="0 0 24 24">
              <polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#fff" strokeMiterlimit="10">
              </polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#fff" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>}
                
                <span className={theme === "dark" ? "shop__span dark" : "shop__span"}>(3)</span>
             </div>


        </div>
    </div>
    {sidebar && <Sidebar />}
    {shoppingCartNav && <ShoppingCartNav setShoppingCartNav={setShoppingCartNav} />}
    </>
  )
}

export default Navbar