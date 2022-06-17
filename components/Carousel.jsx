import React, { useEffect, useRef} from 'react'
import { useContext, useState } from 'react'
import TransitionContext from '../context/TransContext'
import Image from 'next/image'
import gsap from 'gsap'
import {TweenMax, Power0} from 'gsap'
import Draggable from "gsap/dist/Draggable";

const Carousel = () => {
    const { mobGalCont, currentImgIndex} = useContext(TransitionContext)
    const [slide, setSlide] = useState(true)
    const mobileGalleryRef = useRef()
    const swatchRef = useRef()

    
    useEffect(() => {
   
      const slider = mobileGalleryRef.current
      console.log(slider)
      const slides = gsap.utils.selector(mobileGalleryRef)('.gallery-container')
      console.log(slides)
      const slideHeight = slides[0].getBoundingClientRect().height
      

      const swatches = gsap.utils.selector(swatchRef)('.swatch')
      console.log(swatches)
    
   
      let height = slides[0].getBoundingClientRect().height * slides.length
      console.log(height)

      let mainGalleryContHeight = mobGalCont.current.scrollHeight - mobGalCont.current.offsetHeight
      
      let isDragging = false,
      startPos = 0,
      currentTranslate = 0,
      prevTranslate = 0,
      animationID = 0,
      currentSwatch ,
      currentSlide,
      currentIndex = 0,
      velocity,
      nextSwatch,
      prevSwatch,
      currentPos

     
        gsap.registerPlugin(Draggable) 
        Draggable.create(slider, {
          type: 'y',
          bounds: {maxY: 0, minY:-mainGalleryContHeight },
          onPress:function(e) {

         
            console.log(this)
            currentIndex = parseInt(e.target.dataset.id)
            console.log(currentIndex)


            const slidesId = slides.map(slide => parseInt(slide.dataset.id))
            let currentSlideIndex = slidesId.find(id => id === currentIndex)
            currentSlide = slides.find(slide => parseInt(slide.dataset.id) === currentSlideIndex )
            console.log(currentSlide)
            
             const swatchAttributes = swatches.map(swatch => parseInt(swatch.getAttribute('swatch'))) 
             let currentSwatchIndex = swatchAttributes.find(index=> index === currentIndex)
      
             currentSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) ===currentSwatchIndex )
             console.log(currentSwatch)
             nextSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) === currentSwatchIndex + 1 )
             prevSwatch = swatches.find(swatch => parseInt(swatch.getAttribute('swatch')) === currentSwatchIndex - 1 )

            // currentSwatch = currentIndex


            // console.log(e.clientY)


          },
          onDragStart: function() {
            console.log('dragStart')

            velocity = this.getDirection("velocity")
            console.log(velocity)
            if(velocity === "up" && nextSwatch != undefined) {
          
             currentPos = this.y - slideHeight
             console.log(this.y)
             console.log(currentPos)
          
              
              TweenMax.to(slider, {y: currentPos , duration: 0.45, ease:Power0.easeInOut})
              currentIndex++
              swatches.forEach(swatch => swatch.classList.remove('active-swatch'))
              nextSwatch?.classList.add('active-swatch')
              
          }
         

          if(velocity === 'down') {
            currentPos = this.y + slideHeight
            TweenMax.to(slider, {y: currentPos , duration: 0.45, ease: Power0.easeInOut})
            currentIndex--
            
            
            swatches.forEach(swatch => swatch.classList.remove('active-swatch'))
            prevSwatch?.classList.add('active-swatch')

          }

          
          

  
          },
          onDrag:function() {
       
            console.log('onDrug')
            console.log(this)
            
      
           
     
  
          },
          onDragEnd: function(e){
            console.log('end')
           

           
           
          }
          
        })
         
      
     }, [])
  

    
  
   const images = [
      {
          id: "0",
          url: "/backimg-min.jpg"
      },
  
      {
        id: "1",
        url: "/shoes.jpg"
      },
      {
        id: "2",
        url: "/shoes.jpg"
      },
      {
        id: "3",
        url: "/backimg-min.jpg"
    },
     
   ]






 


 

  return (
      <>
   
      
        <div  id="gallery" ref={mobileGalleryRef}  className='gallery'>
            {images.map((img, index) => (
             <div key={index} data-id={index} containeriId={index} className='gallery-container' >
                 <img data-id={index} className='gal-img-mob' width={50} height={50} alt=""    
          src={img.url}/>
             </div>
                
            ))}
         
            
        </div>
        <div className='swatch-cont'>
            <div ref={swatchRef} className='swatches'>
                {images.map((img, index) => (
                  <span key={index}   className={currentImgIndex === index ? 'active-swatch swatch' : 'swatch' } swatch={index}></span>

                ))}
                    
                
            </div>

        </div>
  
    

    
   </>
  )
}

export default Carousel