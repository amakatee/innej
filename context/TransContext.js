import {createContext, useRef, useEffect, useState} from "react"

import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useInView } from 'react-intersection-observer';
import {useLayoutEffect} from 'react'
gsap.registerPlugin(ScrollTrigger);

const TransitionContext = createContext()

export const TransContext = ({children}) => {
    const highlite = useRef()
   const jewTitleBox = useRef()
   const darkArrow = useRef()
   const secondVideoOverlayRef = useRef()
   const secondVideoRef = useRef()
    const fairyRef = useRef()
    const hello = useRef()
    const navbarRef = useRef()
    const firsTitleBox = useRef()
    const whiteArrow = useRef()
    const mainVideoRef = useRef()
    const secondText = useRef()
    const q = gsap.utils.selector(secondText)
    const { ref:entireMainRef , inView: entireMainVis, entry: entryEntire } = useInView();
    const { ref:firstSection , inView: firstSecVis, entry } = useInView();
    const { ref:secondSection , inView: secondSecVis, entry:entrySecond } = useInView();

    useLayoutEffect(() => {

      gsap.fromTo(navbarRef.current, {y:'-100%', opacity:0 } , 
      {y:'0%' , opacity: 1, duration:.5, delay: .5, ease: "power3.out"})
    })
 
    

    useLayoutEffect(() => {
       

        if(firstSecVis) {
        
         const tlIntro = gsap.timeline({
           scrollTrigger: {
             trigger: entry.target,
             start: '0%',
             end: '100%',
         
            
            
             pin: true,
             pinSpacing: false,
       
           }
         })

        //  tlIntro.fromTo(mainVideoRef.current, { opacity:0}, {opacity: 1})
         tlIntro.fromTo(firsTitleBox.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.1})
         tlIntro.fromTo(whiteArrow.current, {y:" -100%", opacity:0}, {opacity: 1, y:0, delay:.3})
         tlIntro.fromTo(fairyRef.current, { y: "0%" }, {y: "-50%" , delay:1} )

        
      


        }
        
       
         }, [firstSecVis]) 
         

         useLayoutEffect(() => {
            console.log(jewTitleBox.current)
             if(secondSecVis) {
                 const tlSecond = gsap.timeline({
                     scrollTrigger: {
                         trigger: entrySecond.target,
                    
                         scrub: true,
                         start: "-70%",
                         end: "10%",
                    }

                    
                 })
                //  tlSecond.fromTo(secondText.current, {y: "-100%", opacity: 0}, {y: "y:0%", opacity:1,  stagger: 1, duration: 1})

                 tlSecond.fromTo(q(".highlite"), {color: "rgba(0,100,0, 0.2"}, {color: "rgba(0,100,0, 1", stagger: 1})
                 tlSecond.fromTo(fairyRef.current, { y: "-60%" }, {y: "0%" , delay:.4} )


              
               


               
                 


         
                 const tlRemove= gsap.timeline({
                    scrollTrigger: {
                        trigger: entrySecond.target,
                       
                        scrub: true,
                        start: "-30%",
                        end: "40%",
                   }
                })

               tlRemove.to(q(".highlite"),{color: "rgba(187,219,190, .3", stagger: 1})

               const tlParalax= gsap.timeline({
                scrollTrigger: {
                    trigger: entrySecond.target,
                
                    scrub: true,
                    start: "20%",
                    end: "70%",
               }
            })
        

            tlParalax.fromTo(secondVideoRef.current, { y:0 }, {y: 40 , delay:.4} )
 
            const tlText= gsap.timeline({
                scrollTrigger: {
                    trigger: entrySecond.target,
                    
                  
                    start: "-20%",
                    end: "40%",
               }
            })
            console.log(secondVideoOverlayRef.current)

            tlText.fromTo(jewTitleBox.current, {y:" -100%", opacity: 0}, { y:0, opacity:1, duration: 0.56}, ">30%")
            tlText.fromTo(darkArrow.current, {y:" -100%", opacity: 0}, { y:0, opacity:1, duration: 0.56}, ">20%")

        
           
               

            }

            
          
            
             


             
         }, [secondSecVis])

   
  

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
            secondText,
            highlite,
            fairyRef,
            secondVideoRef,
            darkArrow,
            jewTitleBox

        }}
        
        >
            {children}

        </TransitionContext.Provider>
    )

}


export default TransitionContext