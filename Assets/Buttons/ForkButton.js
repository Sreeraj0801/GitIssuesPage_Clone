import React from 'react'
import Fork from '../Icons/Fork'
import './Button.css'
function ForkButton() {
  return (
    <div style={{display:"flex"}}>
      <button id='ForkButton'>
        {<Fork/>}
        <p id='ForkText'>Fork</p>
        <button id='forkCount'>2.3k</button>
      </button>
        <button className='dropDown'> ^ </button>
    </div>
  )
}

export default ForkButton
