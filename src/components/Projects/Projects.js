import React, { forwardRef } from 'react'
import './Projects.css'

const Projects = forwardRef((props, ref) => {
  return (
    <div className='projects' ref={ref}>Projects</div>
  )
})

export default Projects