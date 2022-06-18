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


    //  useEffect(() => {

    //   let isDragging = false
    //   let startPos = 0
    //   let currentTranslate = 0
    //   let prevTranslate = 0 
    //   let animationID
    //   let currentIndex = 0 
      
    //   const gallery = mobileGalleryRef.current
    //   const slides = [...mobileGalleryRef.current.children]
    //   console.log(slides)

    //   slides.forEach((slide, index) => {

    //     //Touch
    //     gallery.addEventListener('touchstart', touchStart(index))
    //     gallery.addEventListener('touchend', touchEnd)
    //     gallery.addEventListener('touchmove', touchMove)

    //     //Move
    //     gallery.addEventListener('mousedown', touchStart(index))
    //     gallery.addEventListener('mouseup', touchEnd)
    //     gallery.addEventListener('mouseleave', touchEnd)
    //     gallery.addEventListener('mousemove', touchMove)


       
    //   })

    //   // window.oncontextmenu = function(e) {
    //   //   e.preventDefault()
    //   //   e.stopPropagation()
    //   //   return false

    //   // }

    //   function touchStart(index){
    //     return function(e) {
    //       currentIndex = index
    //       startPos =  getcurrentPositionY(e)
    //       console.log(startPos)
    //       isDragging = true

    //       animationID = requestAnimationFrame(animation)
    //     }
    //   }
    //   function touchEnd(){
   
    //     isDragging = false
    //     cancelAnimationFrame(animationID)

    //     const movedBy = currentTranslate - prevTranslate
    //     if(movedBy < -100 && currentIndex < slides.length - 1)
    //     currentIndex += 1 

    //     if(movedBy > 100 && currentIndex > 0)
    //     currentIndex -= 1 

    //     setPositionByIndex()

    //   }
    //   function touchMove(e){
  
    //     if(isDragging){
    //      const currentPosition = getcurrentPositionY(e)
    //      currentTranslate = prevTranslate + currentPosition - startPos
    //     }

    //   }
    //   function animation() {
    //     setSliderPosition()
    //     if(isDragging) requestAnimationFrame(animation)

    //   }

    //   function setSliderPosition() {
    //     console.log(currentTranslate)
    //     console.log(prevTranslate)
    //     gallery.style.transform = `translateY(${currentTranslate}px)`

    //   }
    //   function getcurrentPositionY(e){
    //     return e.type.includes('mouse') ? e.pageY : e.clientY

    //   }

    //   function setPositionByIndex(){
    //     currentTranslate = currentIndex * -window.innerHeight
    //     prevTranslate = currentTranslate
    //     setSliderPosition()
    //   }


    //   return () => gallery.removeEventListener('touchstart', touchStart)

     
    //  }, [])

    const [resizedGallery , setResize] = useState()
    
    useEffect(() => {
   
      const slider = mobileGalleryRef.current

      const slides = gsap.utils.selector(mobileGalleryRef)('.gallery-container')

      const slideHeight = slides[0].getBoundingClientRect().height

     function setParameters() {
      slides.forEach(slide => {
        slide.style.height = `${slideHeight}px`
      })

     }
    
      resizeGallery()

      function setEvents() {
        setResize(debounce(resizeGallery))
        window.addEventListener('resize', debounce(resizeGallery))

      }
     
     
      

      function resizeGallery() {
        console.log("11")
        setParameters()
      }



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
            this.startY = this.y
         
      
            velocity = this.getDirection("velocity")

  
          },
          onDrag:function() {
        

         

            if(velocity === "up" && nextSwatch != undefined) {
          
              // currentPos = this.y - slideHeight
              this.y = this.startY
              currentPos = -this.y  + slideHeight

              console.log(this.y)
              console.log(this.startY)
              console.log(this)
        
              console.log(currentPos)
           
               
               TweenMax.to(slider, {y: -currentPos , duration: .6})
               currentIndex++
               swatches.forEach(swatch => swatch.classList.remove('active-swatch'))
               nextSwatch?.classList.add('active-swatch')
               
           }
          
 
           if(velocity === 'down') {
             this.y = this.startY
             currentPos = this.y + slideHeight
             TweenMax.to(slider, {y: currentPos , duration: 0.6})
             currentIndex--
             
             
             swatches.forEach(swatch => swatch.classList.remove('active-swatch'))
             prevSwatch?.classList.add('active-swatch')
 
           }
            
      
           
     
  
          },
          onDragEnd: function(e){
            console.log('end')
           

           
           
          }
          
        })

        return () => {
          window.removeEventListener('resize', debounce(resizeGallery))

        }

        function debounce(func, time =100){
          let timer
          return function (event) {
            clearTimeout(timer)
            timer = setTimeout(func, time, event)
          }
  
        }
         
      
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
   
      
        <div  id="gallery" ref={mobileGalleryRef} draggable="true" className='gallery'>
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