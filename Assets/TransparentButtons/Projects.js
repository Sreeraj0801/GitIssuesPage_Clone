import React from 'react'
import ProjectsIcon from '../Icons/ProjectsIcon'
function Projects() {
  return (
    <div>
    <button id='codeButton'>
    {<ProjectsIcon/>} &nbsp;&nbsp;&nbsp;
    <p id='CodeText' >Projects</p>
    <button className='countButton'>1</button>
    </button>
    </div>
  )
}

export default Projects
