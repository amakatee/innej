import {createContext, useRef, useEffect, useState} from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import {useLayoutEffect} from 'react'
gsap.registerPlugin(ScrollTrigger);

const TransitionContext = createContext()

export const TransContext = ({children}) => {
    const hello = useRef()
    const navbarRef = useRef()
    const firsTitleBox = useRef()
    const whiteArrow = useRef()
    const mainVideoRef = useRef()
    const secondText = useRef()
    const { ref:entireMainRef , inView: entireMainVis, entry: entryEntire } = useInView();
    const { ref:firstSection , inView: firstSecVis, entry } = useInView();
    const { ref:secondSection , inView: secondSecVis, entry:entrySecond } = useInView();

    useLayoutEffect(() => {

      gsap.fromTo(navbarRef.current, {y:'-100%', opacity:0 } , 
      {y:'0%' , opacity: 1, duration:.5, delay: .5, ease: "power3.out"})
    })
 
    

    useLayoutEffect(() => {
        console.log(firsTitleBox)

        if(firstSecVis) {
        
         const tlIntro = gsap.timeline({
           scrollTrigger: {
             trigger: entry.target,
             start: '0%',
             end: '100%',
             markers: true,
            
            
             pin: true,
       
           }
         })

         tlIntro.fromTo(mainVideoRef.current, { opacity:0}, {opacity: 1})
         tlIntro.fromTo(firsTitleBox.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.1})
         tlIntro.fromTo(whiteArrow.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.3})
        
      


        }
        
       
         }, [firstSecVis]) 
         

         useLayoutEffect(() => {
             if(secondSecVis) {
                 const tlSecond = gsap.timeline({
                     scrollTrigger: {
                         trigger: entrySecond.target,
                         markers: true,
                         scrub: true,
                         start: "-40%",
                         end: "40%",
                    }
                 })
                 tlSecond.fromTo(secondText.current, {color: "rgba(255,255,255, 0.4"}, {color: "rgba(255,255,255, 0.4", stagger: 1})
             }
         })
  

    return (
        <TransitionContext.Provider
        value={{
            firstSection,
            firstSecVis,
            entry,
            secondSection,
            secondSecVis,
            hello,
            navbarRef,
            entireMainRef,
            firsTitleBox,
            whiteArrow,
            mainVideoRef,
            secondText

        }}
        
        >
            {children}

        </TransitionContext.Provider>
    )

}


export default TransitionContext