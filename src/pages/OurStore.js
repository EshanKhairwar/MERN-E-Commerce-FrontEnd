import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ProductCard from '../components/ProductCard'
import ReactStars from "react-rating-stars-component";
import Color from '../components/Color';
import Container from '../components/Container';

const OurStore = () => {
    const [grid,setGrid]=useState(4);
    return <>
        <Meta title="Our Store" />
        <BreadCrumb title="Our Store" />
        <Container class1="store-wrapper py-5 home-wrapper-2">
            
                <div className="row">
                    <div className="col-3">
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Shop By Categories
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Watch</li>
                                    <li>TV</li>
                                    <li>Camera</li>
                                    <li>Laptop</li>
                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Filter By
                            </h3>
                            <div>
                                <h5 className="sub-title">Availability</h5>
                                <div>
                                    <div className="form-check">
                                        <input type="checkbox" value="" id="" className="form-check-input" />
                                        <label htmlFor="" className="form-check-label">In Stock(1)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" value="" id="" className="form-check-input" />
                                        <label htmlFor="" className="form-check-label" >Out of Stock(0)</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" placeholder="From" />
                                        <label htmlFor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput1" placeholder="To" />
                                        <label htmlFor="floatingInput1">To</label>
                                    </div>
                                </div>
                                <h5 className="sub-title">Colors</h5>
                                <div>
                               <Color/>
                                </div>
                                <h5 className="sub-title">Size</h5>
                                <div>
                                    <div className="form-check">
                                        <input type="checkbox" value="" id="color-1" className="form-check-input" />
                                        <label htmlFor="color-1" className="form-check-label">S (2)</label>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" value="" id="color-2" className="form-check-input" />
                                        <label htmlFor="color-2" className="form-check-label">M (2)</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* product tags */}
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Product Tags
                            </h3>
                            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Headphone
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Laptop
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Mobile
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    Wires
                                </span>
                                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                    One Plus Nord
                                </span>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className="filter-title">
                                Random Products
                            </h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className="w-50">
                                        <img src="./images/images/watch.jpg" className='img-fluid' alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids Headphones Bulk 10 Pack Multicolored for Students</h5>
                                        <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />,

                                        <b>₹800</b>
                                    </div>
                                </div>
                                <div className="random-products d-flex">
                                    <div className="w-50">
                                        <img src="./images/images/watch.jpg" className='img-fluid' alt="watch" />
                                    </div>
                                    <div className="w-50">
                                        <h5>Kids Headphones Bulk 10 Pack Multicolored for Students</h5>
                                        <ReactStars count={5} value={3} size={24} edit={false} activeColor="#ffd700" />,

                                        <b>₹1000</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="filter-sort-grid mb-4">
                           <div className="d-flex justify-content-between align-items-center">
                           <div className="d-flex align-items-center gap-10">
                                <p className="mb-0 d-block" style={{"width":"100px"}}>Sort By:</p>
                                <select name="" defaultValue={"manual"} id="" className="form-control form-select">
                                    
                                    <option value="manual">Featured</option>
                                    <option value="best-selling">Best Selling</option>
                                    <option value="title-ascending">Alphabetically, A to Z</option>
                                    <option value="title-descending">Alphabetically, Z to A</option>
                                    <option value="price-ascending">Price, low to high</option>
                                    <option value="price-descending">Price, high to low</option>
                                    <option value="created-ascending">Date, old to new</option>
                                    <option value="created-descending">Price, new to old</option>
                                </select>
                            </div>
                            <div>
                              <div className="d-flex align-items-center gap-10">
                                <p className="totalproducts mb-0">21 products</p>
                                <div className="d-flex gap-10 align-items-center grid">
                                   
                                    <img onClick={()=>{setGrid(3)}} src="./images/images/gr4.svg" alt="grid" className="d-block img-fluid" />
                                    <img onClick={()=>{setGrid(4)}} src="./images/images/gr3.svg" alt="grid" className="d-block img-fluid" />
                                    <img onClick={()=>{setGrid(6)}} src="./images/images/gr2.svg" alt="grid" className="d-block img-fluid" />
                                    <img onClick={()=>{setGrid(12)}} src="./images/images/gr.svg" alt="grid" className="d-block img-fluid" />
                                </div>
                              </div>
                            </div>
                           </div>
                        </div>
                        <div className="products-list pb-5">
                            <div className="d-flex gap-10 flex-wrap">
                            <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
      
    </>
}

export default OurStore