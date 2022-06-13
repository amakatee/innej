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
             <div className='gallery-container first-img'>
                 <Image layout='fill' alt=""  key={img}   src={img.url}/>
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
        <img className='first-desk' src="https://i.pinimg.com/564x/ad/1e/a8/ad1ea8f65e145b4e928b584748f664a0.jpg"/>
        <img className='second-desk'  src="https://i.pinimg.com/564x/ad/1e/a8/ad1ea8f65e145b4e928b584748f664a0.jpg"/>
        <img className='third-desk' src="https://i.pinimg.com/564x/ad/1e/a8/ad1ea8f65e145b4e928b584748f664a0.jpg"/>

    </div>
    </div>
  )
}

export default Carousel