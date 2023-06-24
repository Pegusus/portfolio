import React, { forwardRef } from 'react'
import './AboutMe.css'

const AboutMe = forwardRef((props, ref) => {
  return (
    <div className='about-me' ref={ref}>About Me</div>
  )
})

export default AboutMe