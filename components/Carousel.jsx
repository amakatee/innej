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
             <div key={index} containeriId={index} className='gallery-container' >
                 <img className='gal-img-mob' width={50} height={50} alt=""    
          src={img.url}/>
             </div>
                
            ))}
         
            
        </div>
        <div className='swatch-cont'>
            <div ref={swatchRef} className='swatches'>
                {images.map((img, index) => (
                  <span key={index} onClick={() => s(index)}  className={currentImgIndex === index ? 'active-swatch swatch' : 'swatch' } swatch={index}>{index}</span>

                ))}
                    
                
            </div>

        </div>
  
    

    {/* <div className='gallery-desktop'>
        <Image layout='fill' alt='' className='first-desk gal-img' src="/backimg-min.jpg"/>
        <Image layout='fill' alt='' className='second-desk gal-img'  src="/backimg-min.jpg"/>
        <Image layout='fill' alt='' className='third-desk gal-img' src="/backimg-min.jpg"/>

    // </div> */}
   </>
  )
}

export default Carousel