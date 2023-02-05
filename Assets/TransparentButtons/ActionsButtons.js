import React from 'react'
import ActionIcon from '../Icons/ActionIcon'

function ActionsButtons() {
  return (
    <div>
      <button id='codeButton'>
        {<ActionIcon/>} &nbsp;&nbsp;&nbsp;
        <p id='CodeText'>Actions </p>
        </button>
    </div>
  )
}

export default ActionsButtons
