import React from 'react'
import './Navigation.css'

import GitIcon from '../../Assets/Icons/GitIcon'
import Watch from '../../Assets/Buttons/WatchButton'
import Fork from '../../Assets/Buttons/ForkButton'
import Star from '../../Assets/Buttons/StarButton'

import Code from '../../Assets/TransparentButtons/CodeButton';
import Issues from '../../Assets/TransparentButtons/IssuesButton';
import Pull from '../../Assets/TransparentButtons/PullButton';
import Actions from '../../Assets/TransparentButtons/ActionsButtons';
import Security from '../../Assets/TransparentButtons/SecurityButton';
import Insights from '../../Assets/TransparentButtons/InsightButton';
import Projects from '../../Assets/TransparentButtons/Projects'

function Navigation() {
  return (
    <div>
      <div id='LogoSection'>
        <div id='GitRepo'>
          <GitIcon/> &nbsp;&nbsp;&nbsp;&nbsp;
        <p id='gitTitle'> github / hub </p>
        </div>
        <div id='ButtonsSection'>
        <Watch />
        <Fork/>
        <Star/>
        </div>
      </div>
      <div id='NaviDiv'>
        <Code/>
        <Issues/>
        <Pull/>
        <Actions/>
        <Projects/>
        <Security/>
        <Insights/>
      </div>
      <hr style={{opacity:".1px"}} />
    </div>
  )
}

export default Navigation
