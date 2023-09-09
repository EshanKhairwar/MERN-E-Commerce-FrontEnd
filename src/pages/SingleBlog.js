import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import BlogCard from '../components/BlogCard'
import blog from "../images/blog-1.jpg"
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi';
import Container from '../components/Container'
const SingleBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1="blog-wrapper home-wrapper-2 py-5">
                
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to="/blogs" className='d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'/> Go back to Blogs</Link>
                                <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                                <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et, nulla fugit cum provident ducimus nostrum natus, vel adipisci sequi inventore non quis tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur et, nulla fugit cum provident ducimus nostrum natus, vel adipisci sequi inventore non quis tempore.Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dolore, repellendus ducimus, deserunt ad ea nihil voluptatem assumenda voluptatum excepturi sed vero? Natus voluptatibus quo beatae et vel sit repellat.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            

        </>
    )
}

export default SingleBlog