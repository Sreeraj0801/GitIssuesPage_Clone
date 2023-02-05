import React from 'react'
import Eye from '../Icons/Eye'
import './Button.css'
function WatchButton() {
  return (
    <div>
      <button id='watchButton' style={{marginRight:"1rem"}} >
        {< Eye />} 
        <p id='textWatch'>Watch</p>
        <button id='watchCount'>583</button>
        <p></p>
      </button>
    </div>
  )
}

export default WatchButton;
