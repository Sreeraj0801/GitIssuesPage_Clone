import React from 'react'
import PullIcon from '../Icons/PullIcon'
function PullButton() {
  return (
    <div>
    <button id='codeButton'style={{width:'11.7rem'}}>
    {<PullIcon/>} &nbsp;&nbsp;&nbsp;
    <p id='CodeText' >Pull request</p>
    <button className='countButton'>45</button>
    </button>
    </div>
  )
}

export default PullButton
