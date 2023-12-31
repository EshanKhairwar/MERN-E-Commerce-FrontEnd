import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import Container from '../components/Container'
const Login = () => {
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <Container class1="login-wrapper py-5 home-wrapper-2">
               
               <div className="row">
                    <div className="col-12">
                        <div className="auth-card">
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action="" className='d-flex flex-column gap-15'>
                               
                               <CustomInput type="email" name='email' placeholder='Email'/>
                               <CustomInput className='mt-1' type="password" placeholder='Password' name='password'/>
                                
                              
                                <div>
                                    <Link to="/forgot-password">Forgot Password?</Link>
                                    <div className=' mt-3 d-flex justify-content-center align-items-center gap-15'>
                                      <button className='button border-0' type='submit'>Login</button>
                                      <Link to="/signup" className='button signup'>Sign Up</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
               </Container>
            

        </>
    )
}

export default Login