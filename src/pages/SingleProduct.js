import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Color from '../components/Color';
import {TbGitCompare} from 'react-icons/tb'
import {AiFillCopy, AiOutlineHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Container from '../components/Container'
const SingleProduct = () => {
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = { width: 400, height: 250, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=500&hei=500&fmt=jpeg&qlt=95&.v=1661626552013" }
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <TransformWrapper>
                    <TransformComponent>
                      <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=400&hei=250&fmt=jpeg&qlt=95&.v=1661626552013" alt="" />
                    </TransformComponent>
                  </TransformWrapper>
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=400&hei=250&fmt=jpeg&qlt=95&.v=1661626552013" alt="" className='img-fluid'/>
                </div>
                <div>
                  <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=400&hei=250&fmt=jpeg&qlt=95&.v=1661626552013" alt="" className='img-fluid'/>
                </div>
                <div>
                  <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=400&hei=250&fmt=jpeg&qlt=95&.v=1661626552013" alt="" className='img-fluid'/>
                </div>
                <div>
                  <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=400&hei=250&fmt=jpeg&qlt=95&.v=1661626552013" alt="" className='img-fluid'/>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
               <div className='border-bottom'>
               <h3 className='title'>Kids Headphones Bulk 10 Pack Multi Colored For Students</h3>
               </div>
               <div className="border-bottom py-3">
                <p className="price">₹5000</p>
               <div className="d-flex align-items-center gap-10">
               <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />
               <p className='mb-0 t-review'>(2 reviews)</p>
               </div>
               <a className='review-btn' href="#review">Write a Review</a>
              </div>
              <div className="py-3">
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Type :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Brand :</h3>
                  <p className='product-data'>NoiseFit</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Category :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Tags :</h3>
                  <p className='product-data'>Watch</p>
                </div>
                <div className='d-flex gap-10 align-items-center my-2'>
                  <h3 className='product-heading'>Availability :</h3>
                  <p className='product-data'>In Stocks</p>
                </div>
                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                  <h3 className='product-heading'>Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border-1 border bg-white text-dark border-secondary">S</span>
                    <span className="badge border-1 border bg-white text-dark border-secondary">M</span>
                    <span className="badge border-1 border bg-white text-dark border-secondary">XL</span>
                    <span className="badge border-1 border bg-white text-dark border-secondary">XXL</span>
                  </div>
                </div>
                <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                  <h3 className='product-heading'>Color :</h3>
                  <Color/>
                </div>
                <div className='d-flex gap-15 flex-row align-items-center mt-2 mb-3'>
                  <h3 className='product-heading'>Quantity :</h3>
                  <div className=''>
                    <input className='form-control' type="number" min={1} max={10} name="" style={{"width":"70px"}} id="" />
                  </div>
                  <div className='d-flex align-items-center gap-30 ms-5'>
                  <button className='button border-0' type='submit'>Add To Cart</button>
                  <button className='button signup'>Buy it Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div><a href=""><TbGitCompare className='fs-5 me-2'/> Add to Compare</a></div>
                  <div><a href=""><AiOutlineHeart className='fs-5 me-2'/> Add to Wishlist</a></div>

                </div>
                <div className='d-flex gap-10 flex-column mt-4 my-3'>
                  <h3 className='product-heading'>Shipping  & Returns :</h3>
                  <p className='product-data'>Free Shipping and returns Available on all orders!<br/> We ship all Domestic Orders within <b>5-10 buisiness Days</b>.</p>
                </div>
                <div className='d-flex gap-10 align-items-center mt-4 my-3'>
                  <h3 className='product-heading'>Copy Product Link :</h3>
                  <a href="javascript:void(0);" onClick={()=>{
                    copyToClipboard("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/49-cell-titanium-alpine-orange-ultra_GEO_IN?wid=400&hei=250&fmt=jpeg&qlt=95&.v=1661626552013");
                  }}><AiFillCopy className='fs-5'/></a>
                </div>
              </div>
               </div>
            </div>
          </div>
        </Container>
    
      <Container class1="description-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className='bg-white p-3'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolores, exercitationem molestiae deserunt aut maiores! Nobis iste ab est perspiciatis perferendis, earum voluptates sequi animi delectus ipsum! Nulla vero doloremque impedit voluptatem dignissimos non! Nulla, magni? Repudiandae sint commodi voluptates provident totam veniam similique incidunt accusantium quaerat, architecto odio rem aliquid perferendis eius quae sunt officia? Aut assumenda corporis similique sequi voluptatum id culpa fugiat adipisci ad, velit autem. Sed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      
      <Container class1="reviews-wrapper home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h3  id='review'>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className='mb-2'>Customer Reviews</h4>
                    <div className='d-flex gap-10 align-items-center'>
                      <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />
                      <p className='mb-0'>Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (<div>
                    <a className='text-dark text-decoration-underline' href="">Write a Review</a>
                  </div>)}
                </div>
                <div  className="review-form py-4">
                  <h4 className='mb-2'>Write a Review</h4>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <ReactStars count={5} value={3} size={24} edit={true} activeColor="#ffd700" />
                    </div>
                    <div>
                      <textarea name="" id="" cols="30" rows="4" className='w-100 form-control' placeholder='Comments'></textarea>
                    </div>
                    <div className='d-flex justify-content-end'>
                      <button className="button border-0">Submit Review</button>
                    </div>

                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className='mb-0'>Eshan</h6>
                      <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />
                    </div>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ullam, nesciunt accusamus magni earum voluptatibus sit harum recusandae tempora eveniet?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Popular Products
              </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
       
      </Container>
    </>
  )
}

export default SingleProduct