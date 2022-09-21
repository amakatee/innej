import React, { useState } from 'react'

const Admin = () => {
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
            <div className='admin-orders'>
                
            </div>
            </div>}
    </div>
  )
}

export default Admin