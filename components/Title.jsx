import React from 'react'
import { useContext } from 'react'
import TransitionContext from '../context/TransContext'

const Title = ({title, refer, titleref}) => {
    const {jewTitleBox, darkArrow, thirdArrow,thirdTitle
       } = useContext(TransitionContext)
      
    


  return (
      <>
    <h1 className='title' ><span ref={titleref ==="jewTitleBox" ? jewTitleBox : thirdTitle} className="anim-span"  >{title}</span></h1>
    
    <div className="arrow-cont">
        <span ref={refer === "darkArrow" ? darkArrow : thirdArrow}  className="anim-span"  >
     
        <svg viewBox="0 0 44 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#006400" fillRule="evenodd" clipRule="evenodd" d="M0 5.5H43V6.5H0V5.5Z"></path><path fill="#006400" d="M43.9447 5.90506L35.167 0.914272C35.051 0.848274 34.9381 1.00447 35.0394 1.09088L40.6984 5.91727C40.75 5.96124 40.7492 6.04024 40.6968 6.08323L35.0655 10.7047C34.9624 10.7893 35.0727 10.9477 35.19 10.8835L43.9431 6.09454C44.0182 6.05345 44.0191 5.94737 43.9447 5.90506Z"></path></svg>
       
        </span> 
       </div>
       </>
  )
}

export default Title