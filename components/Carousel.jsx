import React from 'react'
import { useContext, useState } from 'react'
import TransitionContext from '../context/TransContext'
import Image from 'next/image'

const Carousel = () => {
    const { swatchRef, mobileGalleryRef } = useContext(TransitionContext)

    const [currentImgIndex, setCurrenImgIndex] = useState()
  const images = [
      {
          id: "0",
          url: "/backimg-min.jpg"
      },
      {
        id: "1",
        url: "/backimg-min.jpg"
      },
      {
        id: "2",
        url: "/backimg-min.jpg"
      },
     
  ]

  return (
      <div>
    <div className='gallery-mobile'>
   
      
        <div ref={mobileGalleryRef}  className='gallery'>
            {images.map(img => (
             <div key={img} className='gallery-container first-img'>
                 <Image layout='fill' alt=""     src={img.url}/>
             </div>
                
            ))}
            
        </div>
        <div className='swatch-cont'>
            <div ref={swatchRef} className='swatches'>
                {images.map((img, index) => (
                  <span key={index} onClick={() => setCurrenImgIndex(index)}  className={currentImgIndex === index ? 'active-swatch' : 'swatch' } swatch={currentImgIndex}></span>

                ))}
                    
                
            </div>

        </div>
    </div>
    

    <div className='gallery-desktop'>
        <Image layout='fill' alt='' className='first-desk' src="/backimg-min.jpg"/>
        <Image layout='fill' alt='' className='second-desk'  src="/backimg-min.jpg"/>
        <Image layout='fill' alt='' className='third-desk' src="/backimg-min.jpg"/>

    </div>
    </div>
  )
}

export default Carousel