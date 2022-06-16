import React from 'react'
import { useContext, useState } from 'react'
import TransitionContext from '../context/TransContext'
import Image from 'next/image'

const Carousel = () => {
    const { s, swatchRef, mobileGalleryRef ,setCurrenImgIndex, currentImgIndex} = useContext(TransitionContext)

   
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
    {/* <div ref={galMobRef} className='gallery-mobile'> */}
   
      
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