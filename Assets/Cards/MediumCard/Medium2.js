import React from 'react'
import './Medium.css';

import GreenPoint from '../../Icons/GreenPoint';
import MessageIcon from '../../Icons/MessageIcon';
function Medium2() {
  return (
    <div>
        <div class="cardHeading" >
        <p className="cardHeader">Long-term status of the hub project?</p>
      <p id="CardText">
      #2470 opened on Feb 12, 2020 by dsifford
      </p>
      <div id="MessageDiv">
        <p className='PointText'><GreenPoint/> &nbsp;&nbsp;Open</p>
        <p className='PointText'><MessageIcon/>&nbsp;&nbsp;4</p>
      </div>
    </div>
    </div>
  )
}

export default Medium2
