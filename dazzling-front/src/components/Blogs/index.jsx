import React from 'react'
import "./index.scss";
import BlogsCards from '../BlogsCards';
const Blogs = () => {
  return (
    <>
    <section id='blogs'>
        <div className='blogs_container'>
            <div className='blogs_content'>
                <BlogsCards/>
            </div>
        </div>
    </section>
    </>
  )
}

export default Blogs