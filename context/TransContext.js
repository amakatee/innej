


import {createContext, useRef, useEffect, useState} from "react"



import { gsap } from "gsap"
import Draggable from "gsap/dist/Draggable";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useInView } from 'react-intersection-observer';
import {useLayoutEffect} from 'react'






const TransitionContext = createContext()

export const TransContext = ({children}) => {
   /* Products Page Refs*/
   const mobGalCont = useRef()
   const [currentImgIndex, setCurrenImgIndex] = useState(0)
   const swatchRef = useRef()
   const sw = gsap.utils.selector(swatchRef)
   const mobileGalleryRef = useRef()

   const galleryCont =  gsap.utils.selector(mobileGalleryRef)



 

   /* Product Page Refs */


    const sidebarRef = useRef()
    const thirdVideoRef = useRef()
    const highlite = useRef()
    const thirdTitle = useRef()
    const thirdArrow = useRef()
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
    const thirdVideoText = useRef()
    const t = gsap.utils.selector(thirdVideoText)
    const secondText = useRef()
    const q = gsap.utils.selector(secondText)
    const { ref:entireMainRef , inView: entireMainVis, entry: entryEntire } = useInView();
    const { ref:firstSection , inView: firstSecVis, entry } = useInView();
    const { ref:secondSection , inView: secondSecVis, entry:entrySecond } = useInView();
    const { ref:thirdSectionRef , inView: thirdSecVis, entry:entryThird } = useInView();

    useLayoutEffect(() => {

      gsap.fromTo(navbarRef.current, {y:'-100%', opacity:0 } , 
      {y:'0%' , opacity: 1, duration:.5, delay: .5, ease: "power3.out"})

      console.log(sidebarRef)
     gsap.fromTo(sidebarRef.current, {x: "-200%"}, {x: 0 , duration: 0.8})
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
        //  tlIntro.fromTo(fairyRef.current, { y: "0%" }, {y: "-50%" , delay:1} )

        
      


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

               tlRemove.to(q(".highlite"),{color: "rgba(0,100,0, .2", stagger: 1})

               const tlParalax= gsap.timeline({
                scrollTrigger: {
                    trigger: entrySecond.target,
                
                    scrub: true,
                    start: "20%",
                    end: "70%",
               }
            })
        

            tlParalax.fromTo(secondVideoRef.current, { y:0 }, {y: 50 , delay:.4} )
 
            const tlText= gsap.timeline({
                scrollTrigger: {
                    trigger: entrySecond.target,
                    
                  
                    start: "-50%",
                    end: "60%",

               }
            })
            console.log(secondVideoOverlayRef.current)

            tlText.fromTo(jewTitleBox.current, {y:" -100%", opacity: 0}, { y:0, opacity:1, duration: 0.56}, ">30%")
            tlText.fromTo(darkArrow.current, {y:" -100%", opacity: 0}, { y:0, opacity:1, duration: 0.56}, ">20%")

        
           
               

            }

            

            
          
            
             


             
         }, [secondSecVis])


    useLayoutEffect(() => {
      console.log(thirdVideoRef.current)
       

        if(thirdSecVis) {
        
         const tlVideo = gsap.timeline({
           scrollTrigger: {
             trigger: entryThird.target,
             start: '0%',
             end: '150%',
             scrub: true,
             pin:true,
         
            
       
           }
           
         })

         console.log(t(".video-h3"))

         tlVideo.fromTo(thirdVideoRef.current, {currentTime: 0}, {currentTime: 3, duration:2})
         tlVideo.fromTo(t(".video-h3"), {opacity: 0}, {opacity: 1, stagger: 0.28}, "<")
       
        

   

        
      


        }
        
       
         }, [thirdSecVis]) 

       
    useLayoutEffect(() => {
      
      let currentSwatch = 0
      const swatches = sw('.swatch, .active-swatch')
      const slides = galleryCont('.gallery-container')
      console.log(slides)
      console.log(swatches)

      swatches.forEach((swatch, index) => {
         const coord = slides[index].getBoundingClientRect().top
         console.log(coord)
         
         swatch.addEventListener("click", e => {
           let swatchName = parseInt(e.target.getAttribute('swatch'))
           console.log(e)
           console.log(swatchName)
           currentSwatch = swatchName

           gsap.to(mobileGalleryRef.current, {y: -coord, duration: .75})
         })

       
        let move = slides[0].getBoundingClientRect().y
        console.log(move)      

       
    
        let coordy = 0
        // let move = 0 
        gsap.registerPlugin(Draggable);
      Draggable.create(mobileGalleryRef.current, {
        bounds:mobGalCont.current,
        type:'y',
        throwProps:true,
        inertia: true,
        onPress: function(e) {
          coordy = -this.y
          

        },
      
        onDragEnd: function(){
         
             console.log(swatch,index)
             
            
            const dir = this.getDirection("velocity")

           
            
   
            let coordone = slides[0].getBoundingClientRect().height
            let entirecoords = coordone * slides.length
           
            if(dir === "up" ) {
              move = coordy + coordone
              
              gsap.to(mobileGalleryRef.current, {y: -move, duration: .55})  
              setCurrenImgIndex(currentSwatch)
            } else if (dir === "down" ){
              move = coordy - coordone
            
             gsap.to(mobileGalleryRef.current, {y: -move, duration: .55})  
         
            


            }
            


},
 
        // liveSnap: {
          
        // y: function(endValue){
        //     const coordone = slides[0].getBoundingClientRect().height
            
        //     console.log(entirecoords)
        //     console.log(endValue)
        //     return Math.round(endValue/ 100) * 100

        //   }
         
        // }

       
      })

      })
  
     
     
     
     
      console.log(mobileGalleryRef.current)
    }, [])
   
  

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
            jewTitleBox,
            thirdArrow,
            thirdTitle,
            thirdVideoRef,
            thirdSectionRef,
            thirdVideoText,
            sidebarRef,
            swatchRef, 
            mobileGalleryRef, 
            currentImgIndex,
           setCurrenImgIndex,
           mobGalCont,
     

            
        

        }}
        
        >
            {children}

        </TransitionContext.Provider>
    )

}


export default TransitionContext


/*
   gsap.registerPlugin(Draggable);
      Draggable.create(mobileGalleryRef.current, {
        bounds:mobGalCont.current,
        type:'y',
        throwProps:true,
        inertia: true,
        onPress: function() {
          coordy = this.y
        },
      
        onDragEnd: function(){
  
          
            const dir = this.getDirection("velocity")
            console.log(dir)
            console.log(coordy)
            
            // let entirecoords = contcoord.getBoundingClientRect().height
            let coordone = slides[0].getBoundingClientRect().height
            let entirecoords = coordone * slides.length
            console.log(entirecoords)
            
            console.log(move)
            if(dir === "up" ) {
              move = move + coordone
              
              gsap.to(mobileGalleryRef.current, {y: -move, duration: .75})  
            } else if (dir === "down" &&  move !== entirecoords){
              move = move - coordone
            
             gsap.to(mobileGalleryRef.current, {y: move, duration: .75})  


            }
            


},
 
        // liveSnap: {
          
        // y: function(endValue){
        //     const coordone = slides[0].getBoundingClientRect().height
            
        //     console.log(entirecoords)
        //     console.log(endValue)
        //     return Math.round(endValue/ 100) * 100

        //   }
         
        // }

       
      })
*/