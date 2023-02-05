import React from 'react'
import IssuesIcon from '../Icons/IssuesIcon'
function IssuesButton() {
  return (
    <div>
        <button id='codeButton'>
        {<IssuesIcon/>} &nbsp;&nbsp;&nbsp;
        <p id='CodeText'>Issues</p>
        <button className='countButton'>235</button>
        </button>
    </div>
  )
}

export default IssuesButton
