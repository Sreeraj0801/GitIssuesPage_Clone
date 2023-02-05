import React from 'react';
import InsightIcon from '../Icons/InsightIcon';

function InsightButton() {
  return (
    <div>
      <button id='codeButton'>
        {<InsightIcon/>} &nbsp;&nbsp;&nbsp;
        <p id='CodeText'>Insights</p>
        </button>
    </div>
  )
}

export default InsightButton
