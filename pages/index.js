import styles from '../styles/Home.module.scss'
import Image from 'next/image';
import { useContext } from 'react';
import TransitionContext from '../context/TransContext';
import Navbar from '../components/Navbar';
import { useRef, useEffect, useState } from 'react'
// import { gsap } from "gsap"
import WhiteArrow from '../assets/whitearrow.svg'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useInView } from 'react-intersection-observer';
import {useLayoutEffect} from 'react'
// gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  console.log(WhiteArrow)
  const {firstSection,
    firstSecVis,
    entry,
    secondSection,
    entireMainRef,
    firsTitleBox,
    mainVideoRef,
    whiteArrow,
    secondText,
    hello,
    secondSecVisv} = useContext(TransitionContext)

  

  
  return (
    <div ref={entireMainRef}>
    <Navbar />
    <div className={styles.main__container}>
      <section ref={ firstSection} className={styles.first__section}>
   
        <div className={styles.first__secMain}>
        {/* <div className={styles.first__image}>
           <img  src='/backimg-min.JPG'></img>
        </div> */}
        <video ref={mainVideoRef} loop={true} muted={true} autoPlay={true} playsInline controls={false} className={styles.first__secVid}>
            <source
            src='/backvideo.mp4'
            type='video/mp4'
            >
            </source>
          </video>
         
          </div>
          <div className={styles.first__title}>
          <h1 className={styles.first__text}><span ref={firsTitleBox}  className={styles.animation__span}  >СМОТРЕТЬ</span></h1>
            <div className={styles.white__arrow} >
             <span ref={whiteArrow} className={styles.animation__span} >
              <Image src={WhiteArrow.src}  width={70} height={15} />
             </span> 
            </div>

          </div>
          

      </section>
      <section ref={secondSection} className={styles.second__section}>
        <h1 ref={secondText} className={styles.second__text}>hello hello </h1>
     
        
    </section>
     

    
    </div>
    </div>
  )
}
