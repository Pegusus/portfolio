import React, { forwardRef } from 'react'
import './Blog.css'

const Blog = forwardRef((props, ref) => {
  return (
    <div className='blog' ref={ref}>Blog</div>
  )
})

export default Blog