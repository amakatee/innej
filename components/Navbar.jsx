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
                <Image src={IconLight.src} width={23} height={23} />
                <span className={styles.shop__span}>(3)</span>
             </div>


        </div>
    </div>
  )
}

export default Navbar