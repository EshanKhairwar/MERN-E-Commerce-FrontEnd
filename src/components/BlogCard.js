import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return <>
 
    <div className="blog-card w-100">
        <div className="card-image">
            <img className='img-fluid ' src="./images/images/blog-1.jpg" alt="blog" />
        </div>
        <div className="blog-content">
            <p className='date'>1 Jan 2023</p>
            <h5 className='title fw-bold'>A Beautiful Sunday Morning Renaissance</h5>
            <p className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et, nulla fugit cum provident ducimus nostrum natus, vel adipisci sequi inventore non quis tempore.</p>
            <Link to='/blogs/:id' className='button'>Read More</Link>
        </div>
    </div>
 
  </>
}

export default BlogCard