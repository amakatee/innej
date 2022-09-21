import React, { useState } from 'react'

const admin = () => {
    const [pass, setPass] = useState() 
    const [showPanel, setShowPanel] = useState(true)

    const handleAdmin = (e) => {
        e.preventDefault()
        console.log(pass)
        if(pass === "192837465") {
            setShowPanel(true)

        } else {
            alert('wrong password')
        }
    }
  return (
    <div className='admin'>
        {!showPanel && <form onSubmit={(e) => handleAdmin(e)} >
            <input onChange={(e) => setPass(e.target.value) } />
            <button type='submit'> submit</button>
            
        </form>}

        {showPanel && <div>
            admin page
            </div>}
    </div>
  )
}

export default admin