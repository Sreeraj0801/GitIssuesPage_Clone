import React from 'react'
import './Medium.css';

import GreenPoint from '../../Icons/GreenPoint';
import MessageIcon from '../../Icons/MessageIcon';
function Medium() {
  return (
    <div>
        <div class="cardHeading">
        <div>
        <p className="cardHeader">Unable to authorize with my GitHub password (Unathorized/Not ...</p>
      </div>
      <p id="CardText">
      #2655 opened on Nov 28, 2020 by flyingduck92
      </p>
      <div id="MessageDiv">
        <p className='PointText'><GreenPoint/> &nbsp;&nbsp;Open</p>
        <p className='PointText'><MessageIcon/>&nbsp;&nbsp;40</p>
      </div>
    </div>
    </div>
  )
}

export default Medium
