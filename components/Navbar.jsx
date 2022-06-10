import React from 'react'
import styles from '../styles/Home.module.scss'
import IconLight from '../assets/lightbag.svg'
import Image from 'next/image'
import { useContext } from 'react'
import TransitionContext from '../context/TransContext'

const Navbar = () => {
    const {navbarRef} = useContext(TransitionContext)

  return (
    <div ref={navbarRef} className={styles.navbar}>
        <div className={styles.navbar__content}>
            <div className={styles.burger}>
                    <span className={styles.b_line}></span>
                    <span className={styles.b__line}></span>
             </div>

             <h1 className={styles.logo}>И́ней</h1>
         
            <div className={styles.shop__bag}>
                {/* <Image src={IconLight.src} width="23" height="23" /> */}
                <svg id="bag" className="icon-bag" xmlns="http://www.w3.org/2000/svg" 
                width="23" height="23" viewBox="0 0 24 24">
               <polygon points="18.78 20.82 5.22 20.82 5.22 9.39 18.78 9.39 18.78 20.82" fill="none" stroke="#fff" strokeMiterlimit="10">
               </polygon><path d="M8.79,11.35V6.89a3.21,3.21,0,0,1,6.42,0v4.46" fill="none" stroke="#fff" strokeMiterlimit="10" vectorEffect="non-scaling-stroke"></path></svg>
                <span className={styles.shop__span}>(3)</span>
             </div>


        </div>
    </div>
  )
}

export default Navbar