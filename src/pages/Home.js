import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";


const Home = () => {
  return (
    <>
      {/* banner section  */}
      <Container class1="home-wrapper-1 py-5">
      <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="./images/images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+Pro.</h5>
                  <p>From ₹1,00,000 or ₹25,000/mo. </p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="./images/images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptop Max.</h5>
                    <p>
                      From ₹1,00,000 <br />
                      or ₹25,000/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="./images/images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS</h4>
                    <h5>Buy IPad Air.</h5>
                    <p>
                      From ₹1,00,000 <br />
                      or ₹25,000/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="./images/images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS</h4>
                    <h5>Buy IPad Air.</h5>
                    <p>
                      From ₹1,00,000 <br />
                      or ₹25,000/mo.{" "}
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="./images/images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVALS</h4>
                    <h5>Buy IPad Air.</h5>
                    <p>
                      From ₹1,00,000 <br />
                      or ₹25,000/mo.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>


      {/*services section */}
      <Container class1="home-wrapper-2 py-5">      
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {
                  services?.map((i,j)=>{
                    return (
                      <div className="d-flex align-items-center gap-15" key={j}>
                      <img src={i.image} alt="services" />
                      <div>
                        <h6 className="fw-bold">{i.title}</h6>
                        <p className="mb-0">{i.tagline}</p>
                      </div>
                    </div>
                    );
                  })
                }
              </div>
            </div>
        </div>
      </Container>

      {/*categories section  */}
      <Container class1="home-wrapper-2 py-5">

      <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/tv.jpg" alt="smarttv" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/headphone.jpg" alt="headphones" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/laptop.jpg" alt="music&gaming" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/tv.jpg" alt="smarttv" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/headphone.jpg" alt="headphones" />
                </div>

                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 items</p>
                  </div>
                  <img src="./images/images/laptop.jpg" alt="music&gaming" />
                </div>
              </div>
            </div>
          </div>
      </Container>
     

      {/* Product Section  */}
       <Container class1="featured-wrapper py-5 home-wrapper-2">

       <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Featured Collection
              </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

       </Container>
   

      {/*Famous Card Section  */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                  <img className="img-fluid" src="./images/images/famous-1.jpg" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From ₹3000 to ₹10000</p>
                  </div>
              </div>
              
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                  <img className="img-fluid" src="./images/images/famous-2.avif" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className="text-dark">Studio Display</h5>
                  <h6 className="text-dark">600 nits of Brightness</h6>
                  <p className="text-dark">27-inch Retina display</p>
                  </div>
              </div>
              
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                  <img className="img-fluid" src="./images/images/famous-3.jpg" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className="text-dark">SmartPhones</h5>
                  <h6 className="text-dark">SmartPhone 13 Pro</h6>
                  <p className="text-dark">Now in Green From ₹10000 or ₹2000/mo for 23 mo Footnote*</p>
                  </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                  <img className="img-fluid" src="./images/images/famous-4.jpg" alt="famous" />
                  <div className="famous-content position-absolute">
                  <h5 className="text-dark">Home Speakers</h5>
                  <h6 className="text-dark">Room Filling Sounds</h6>
                  <p className="text-dark">From ₹5000 or ₹500/mo for 10 mo</p>
                  </div>
              </div>
            </div>
          </div>
      </Container>
    

      {/*Special Product section  */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Special Products
              </h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
            <SpecialProduct/>
          
        </div>
      </Container>

      {/*Popular Product section  */}
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
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        
      </Container>

      {/* marquee section */}
      <Container class1="marque-wrapper py-5">
        
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="./images/images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          
        </div>
      </Container>


      {/* blog section */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">
                Our Latest Blogs
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
            <div className="col-3">
            <BlogCard />
            </div>
          </div>
    
      </Container>


    </>
  );
};

export default Home;
