import React, { useContext } from 'react'

import TransitionContext from '../context/TransContext'
const DesktopCarousel = () => {
    const {desctopGalleryRef, desctopGalSwatchesRef} = useContext(TransitionContext)
  const images = [
      {
          id:"1",
          url:"/backimg-min.jpg"
      },
      {
        id:"2",
        url:"/shoes.jpg"
    },
    {
        id:"3",
        url:"/backimg-min.jpg"
    },
  ]

  return (
<div className='gal-desc-cont'>     
<div ref={desctopGalleryRef} className='gallery-desktop'>{
    images.map((image,index) => (
        <img data-index={index} key={image} width={100} height={100}  alt='' className='first-desk gal-img' src={image.url}/>

    ))
}
  

</div>

<div ref={desctopGalSwatchesRef} className='desk-swatches'>
    {images.map((image, index) => (
         <div key={image.id} swatch={index} className='desc-swatch'>
         <div className='desk-overlay'></div>
         <img  width={30} height={30}  alt=''  src={image.url}/>
        
  
      </div>

    ))}
  

</div>
</div> 
  )
}

export default DesktopCarousel