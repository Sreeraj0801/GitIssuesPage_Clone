import React from 'react'
import Code from '../Icons/Code'

import '../TransparentButtons/Transparent.css'
function CodeButton() {
  return (
    <div>
      <button id='codeButton'>
        {<Code/>} &nbsp;&nbsp;&nbsp;
        <p id='CodeText'>Code</p>
        </button>
    </div>
  )
}

export default CodeButton
