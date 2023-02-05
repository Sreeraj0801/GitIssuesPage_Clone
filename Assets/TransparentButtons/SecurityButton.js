import React from 'react'
import SecurityIcon from '../Icons/SecurityIcon'

function SecurityButton() {
  return (
    <div>
      <button id='codeButton'>
        {<SecurityIcon/>} &nbsp;&nbsp;&nbsp;
        <p id='CodeText'>Security</p>
        </button>
    </div>
  )
}

export default SecurityButton
