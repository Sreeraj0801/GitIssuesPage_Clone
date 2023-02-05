import React from 'react'
import Star from '../Icons/Star';
import './Button.css'
function StarButton() {
  return (
    <div style={{display:"flex"}}>
      <button id='StarButton'>
        {<Star/>}
        <p id='StarText'>Star</p>
        <button id='starCount'>22.3k</button>
      </button>
        <button className='dropDown'> ^ </button>
    </div>
  )
}

export default StarButton
