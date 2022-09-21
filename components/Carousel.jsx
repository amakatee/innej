import React, { useEffect, useRef} from 'react'
import { useContext, useState } from 'react'
import TransitionContext from '../context/TransContext'
import  {Swiper, SwiperSlide} from 'swiper/react'
import Image from 'next/image'
import gsap from 'gsap'
import {TweenMax, Power0} from 'gsap'
import Draggable from "gsap/dist/Draggable";
import SwiperCore, {Navigation, Pagination}  from "swiper"
import 'swiper/css/navigation'
SwiperCore.use([Pagination])


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
    



    const [size, setSize] = useState()
    const [slideHeight, setSlideHeight] = useState()
    // useEffect(() => {
  

      
  //     const gallery = mobileGalleryRef.current
  //     const coordContainer = gallery.getBoundingClientRect().height
  //     const slides = [...gallery.children]
  //     let slideHeight
  //      const size = slides.length - 1
  //     setSize(slides.length - 1)
  //     let currentSlide = 0
  //     let height
  //     let lineNode
  //     console.log(size)
  //     console.log(slides[0].getBoundingClientRect())

  //     setParameters(height, lineNode, gallery, slideHeight, slides, coordContainer)
  //     setEvents()
  //     resizeGallery()


     


  //     function setEvents(){
  //       window.addEventListener('resize' , resizeGallery())
   
  //     }

  //     function resizeGallery() {
  //       setParameters(gallery)
        

  //     }

  //   function setParameters(height, lineNode, gallery,coordContainer, slideHeight, slides){
    
  //     // const coordContainer = gallery.getBoundingClientRect().height
    
  //     height = coordContainer
  //     console.log(height)
  //     console.log(size)
  //     lineNode = `${size * height}px`
  //     console.log(lineNode)
  //     setSlideHeight(`${slides[0].getBoundingClientRect().height}px`)
  //     slideHeight = `${slides[0].getBoundingClientRect().height}px`
  //     console.log(slideHeight)
  // }

  //     return () => {
  //       window.removeEventListener('resize' , resizeGallery(gallery))

  //     }
     

 
     

  //   }, [])

  //   function setParameters(height, lineNode, gallery,coordContainer, slideHeight, slides){
    
  //     // const coordContainer = gallery.getBoundingClientRect().height
    
  //     height = coordContainer
  //     console.log(height)
  //     console.log(size)
  //     lineNode = `${size * height}px`
  //     console.log(lineNode)
  //     setSlideHeight(`${slides[0].getBoundingClientRect().height}px`)
  //     slideHeight = `${slides[0].getBoundingClientRect().height}px`
  //     console.log(slideHeight)
  // }
  

 




   
  

    
  
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
        url: "/backimg-min.jpg"
    },

    {
      id: "3",
      url: "/shoes.jpg"
    },
    
     
   ]


  return (
      <>
   
  
            {/* {images.map((img, index) => (
             <div key={index} data-id={index} containeriId={index} className='gallery-container' >
                 <img data-id={index} className='gal-img-mob' width={50} height={50} alt=""    
          src={img.url}/>
             </div>
                
            ))} */}
            <Swiper
            className='gallery'
     
            modules={[Navigation]}
        
            effect
            slidesPerView={1}
            pagination={{
              el: '.swatch',
              clickable:true,
              renderBullet:(index,className ) => {
                return  
                 `<span className="`+ className + ">" +(index+1)+`</span>`

               

              }
            }}
            loop
            speed={800}
            direction="vertical"
            onSlideChange={() => console.log("slide chane")}
            onSwiper={(swiper) => console.log(swiper)}
            

            >
             
              {images.map((img, index) => (
                <SwiperSlide  key={index} className='gallery-container'>
             <div key={index} data-id={index} containeriId={index} className='gallery-container' >
               
                 <img  data-id={index} className='gal-img-mob' width={50} height={50} alt=""    
          src={img.url}/>
             </div>
             </SwiperSlide>
                
            ))}
           

            </Swiper>
         
            
     
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