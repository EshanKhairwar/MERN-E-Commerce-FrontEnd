import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai'
import {BiInfoCircle, BiPhoneCall} from 'react-icons/bi'
import Container from '../components/Container'
const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
             
              <div className="row">
                <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118815.46556615473!2d80.13416458818082!3d21.46917193288789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2baead0a4b0175%3A0x718607d421888196!2sGondia%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1693308346990!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowfullscreen="" loading="lazy" referrerPolicy='no-referrer'></iframe>
                </div>
                <div className="col-12 mt-5">
                  <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title mb-4">Contact Us</h3>   
                    <form action="" className='d-flex flex-column gap-15'>
                      <div>
                        <input type="text" className='form-control' placeholder='Name' />
                      </div>
                      <div>
                        <input type="text" className='form-control' placeholder='Email' />
                      </div>
                      <div>
                        <input type="tel" className='form-control' placeholder='Mobile No.' />
                      </div>
                      <div>
                        <textarea name="" id="" cols="30" rows="4" className='w-100 form-control' placeholder='Comments'></textarea>
                      </div>
                      <div>
                        <button className="button border-0">Submit</button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title mb-4">Get in Touch with Us</h3>  
                    <div>
                      <ul className='ps-0'>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineHome className='fs-5'/> 
                           <address className='mb-0'>Hno 227,ABC road,XYZ apartment,Indore,452014</address>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                         <BiPhoneCall className='fs-5'/>
                         <a href="tel:+91 7588145768">+91 7588145768</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineMail className='fs-5'/>
                          <a href="mailto:eshangpkhairwar@gmail.com">eshangpkhairwar@gmail.com</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiInfoCircle className='fs-5'/>
                          <p className='mb-0'>Monday-Friday 10:00 AM to 9:00 PM</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
             </Container>
    
    </>
  )
}

export default Contact