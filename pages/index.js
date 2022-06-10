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
    highlite,
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
          
             <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path><path fill="#fff" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path></svg>
              {/* <Image src={WhiteArrow.src}  width={70} height={15} /> */}
             </span> 
            </div>

          </div>
          

      </section>
      <section ref={secondSection} className={styles.second__section}>
        <p ref={secondText} className={styles.second__text}>
          <span ref={highlite} className={styles.highlite}>Украшения из серебра. </span>
          <span ref={highlite} className={styles.highlite}>Противоалергенные и водостойкие </span>
          
         </p>
     
        
    </section>
     

    
    </div>
    </div>
  )
}
