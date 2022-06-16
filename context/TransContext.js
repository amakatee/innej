


import {createContext, useRef, useEffect, useState} from "react"



import { gsap,  Power3, TweenMax } from "gsap"
import Draggable from "gsap/dist/Draggable";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useInView } from 'react-intersection-observer';
import {useLayoutEffect} from 'react'







const TransitionContext = createContext()

export const TransContext = ({children}) => {

  /* desktop ref*/
  const desctopGalleryRef = useRef()
  const desctopGalSwatchesRef = useRef()
  const slideD = gsap.utils.selector(desctopGalleryRef)
  const sDesk = gsap.utils.selector(desctopGalSwatchesRef)
  /*  desktop ref*/
   /* Products Page Refs*/
   const mobGalCont = useRef()
   const [currentImgIndex, setCurrenImgIndex] = useState(0)
   const swatchRef = useRef()
   const sw = gsap.utils.selector(swatchRef)
   const mobileGalleryRef = useRef()
   const galMobRef = useRef()

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

    // const [progress, setProgress] = useState(0)

   

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

         const s = (index) => {
          console.log(index)
        setCurrenImgIndex(index )
    
      }

   const [slide, setCurrentSlide] = useState()
   const [swatch, setCurrentSwatch] = useState()
      useLayoutEffect(() => {
        const swatches = sw('.swatch', '.active-swatch')
        const slides = galleryCont('.gallery-container')
        const slideHeight = slides[0].getBoundingClientRect().height
         console.log(slides)
        let nextSwatch
        let prevSwatch     
        let offSetStartY
        let progress = 0 
        console.log(swatches,slides)

        // swatches.forEach((swatch, index) => {
        //    const coord = slides[index].getBoundingClientRect().top
           
        //    console.log(coord)

          


        // })

       const scrollHeight = mobGalCont.current.scrollHeight
       const offSetHeight = mobGalCont.current.offsetHeight
       const height = scrollHeight - offSetHeight

        gsap.registerPlugin(Draggable);
        Draggable.create(mobileGalleryRef.current, {
          bounds: {maxY: 0, minY: -1600},
          type: 'y',
          onPress: function(e) {
              offSetStartY = -this.y
         
           },

          onDragEnd: function(e) {
            const dir = this.getDirection("velocity")
            console.log(dir)
            let slideId = e.target.dataset.id
            const currentSlide = slides.find(slide => slide.dataset.id === slideId)
            console.log(currentSlide)
            const currentSwatch = swatches.find(swatch => swatch.getAttribute('swatch') === slideId)
            nextSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) === parseInt(slideId) + 1)
            prevSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) === parseInt(slideId) - 1)
            console.log(nextSwatch)
            console.log(currentSwatch)
            setCurrentSlide(slideId)
            setCurrentSwatch(currentSwatch)
           
              
            console.log(height, offSetHeight)
           
            console.log(scrollHeight)


           console.log(slideId)
            if(dir === "up" && nextSwatch != undefined) {
             
              progress = offSetStartY + slideHeight
       
          
              nextSwatch.classList.add('active-swatch')
              currentSwatch.classList.remove('active-swatch')

              TweenMax.to(mobileGalleryRef.current, {y: -progress, duration: .35})
              

            }
            console.log(progress)

            if(dir === "down" && prevSwatch != undefined) {
              progress = progress - slideHeight

              prevSwatch.classList.add('active-swatch')
              currentSwatch.classList.remove('active-swatch')

              TweenMax.to(mobileGalleryRef.current, {y: -progress, duration: .35 })

            }

          }
        })
         
      }, [])


      useLayoutEffect(() => {
       
        console.log(slideD('.gal-img'))
        console.log(sDesk('.desc-swatch'))
        const deskSwatches = sDesk('.desc-swatch')
        const slidesDesk = slideD('.gal-img')
        console.log(deskSwatches)
        let currentSwatch
        let topIndex = 2

        deskSwatches.forEach((swatch, index) => {
          console.log(slidesDesk[index])

          swatch.addEventListener("click", (e) => {
            console.log(swatch)
            let swatchName = swatch.getAttribute("swatch")
            console.log(swatchName)
            let closeUp = slidesDesk.find( slide => slide.dataset.index === swatchName)
            console.log(closeUp)
            if(currentSwatch === swatchName) return
            gsap.set(closeUp, {zIndex:topIndex})
            gsap.fromTo(closeUp, {opacity: 0}, {opacity: 1, duration: 1})
            topIndex++
            currentSwatch = swatchName

          })
        })
       

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
           desctopGalleryRef, desctopGalSwatchesRef,
     
           s
    
     

            
        

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


/* 

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



*/






//         onDragEnd: function(){
  
//             const dir = this.getDirection("velocity")
            
        
  
//            const sliderContainer = galCont.getBoundingClientRect().height
         
  
//            console.log(parseFloat(progress.toFixed(4)))
           
          
//          let currentSlideId = this.target.getAttribute('containeriId')
  
//          const swatchesIds = swatches.map(s => s.getAttribute('swatch'))
//          console.log(currentSlide, swatchesIds)

//          let currentSwatchId = swatchesIds.find(id => id === currentSlideId)
//          currentSwatch = swatches.find(s => s.getAttribute('swatch') === currentSwatchId)
//          console.log(parseInt(currentSwatchId) + 1)
//          console.log(currentSlide)

//          currentSlide = slides.find(slide => slide.getAttribute('containeriId') === currentSwatchId)
//          console.log(currentSlide)
//          nextSlide = slides.find(slide => parseInt(slide.getAttribute('containeriId')) === parseInt(currentSwatchId) + 1)
//          console.log(nextSlide)
//          prevSlide = slides.find(slide => parseInt(slide.getAttribute('containeriId')) === parseInt(currentSwatchId) - 1)

//          nextSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) === parseInt(currentSwatchId) + 1)
//          console.log(nextSwatch)
//          prevSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) === parseInt(currentSwatchId) - 1)
          
         

//          if(dir === "up" && nextSlide != undefined) {
//            console.log(offsetStartY)
//            progress = offsetStartY + slideHeight
             
//               nextSwatch.classList.add("active-swatch") 
//               currentSwatch.classList.remove("active-swatch") 
//               console.log(currentSwatch)
//               console.log(nextSwatch)
//                gsap.to(currentSlide, {y: -progress, duration: .85,  ease: Power3.easeOut})
//                gsap.to(nextSlide, {y: -progress, duration: .85,  ease: Power3.easeOut})
            
//           }
//           if(dir === "down" && prevSlide != undefined) {
//             currentSwatch.classList.remove("active-swatch") 
//             prevSwatch.classList.add("active-swatch") 
//             progress = offsetStartY - slideHeight
//             console.log(currentSwatch)
//             console.log(prevSwatch)
//             gsap.to(currentSlide, {y: -progress, duration: .85,  ease: Power3.easeOut})
//             gsap.to(prevSlide, {y: -progress, duration: .85,  ease: Power3.easeOut})
           



//           }

         

         

          
           
           
            


// },
 

