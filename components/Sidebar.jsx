import React, { useContext, useEffect, useRef } from 'react'
import {GrClose} from 'react-icons/gr'
import ProductsContext from '../context/StateContext'
import gsap from 'gsap'


const Sidebar = () => {
    const sidebarRef = useRef()
    const { setSideBar} = useContext(ProductsContext)
    useEffect(() => {
        gsap.fromTo(sidebarRef.current, {x: "-200%"}, {x:0, duration: 0.8})

    }, [])
    
  return (
    <div className='sidebar' ref={sidebarRef}>
        <GrClose size={27}  className='sidebar-close' onClick={() => setSideBar(false)} />
        <div className='sidebar-cont'> 
        <h1>Все товары</h1>
        <h1>Доставка и возврат</h1>
        </div>
        
    </div>
  )
}

export default Sidebar