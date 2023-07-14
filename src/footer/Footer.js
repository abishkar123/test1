import { button } from 'bootstrap'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Footer.css'

export const Footer = ({children}) => {
  return (
    <div>
        <main className='main'>
          <p className='footerpragraph'> BizVisions Pursue the extoraordinary.</p>
        

            </main>
            <Container className='footer' fluid>


       
            <div className='col py-5'>
                  <div>Company logo</div>
                    <div><i class="fa-solid fa-phone" style={{color:' #3f85fd'}}></i> 02 8005 7003 </div>
                    <div className='gap-3'> <span className='text-center' type='submit'> Sign in </span></div>
                    <div className=''> <Button className='fa-14px' type='submit'> Get Started <i class="fa-solid fa-check"></i> </Button></div>
            
            </div>
            {/* <Col md="7">
            <i class="fa-solid fa-phone"></i> 02 8005 7003  </Col>
            <Col md="1"> <button className='btn btn-primary btn-sm' type='submit'> Sign in </button> </Col>
            <Col md="1"> <button className='btn btn-primary btn-sm' type='submit'> Get Started <i class="fa-light fa-arrow-right"></i></button>
             </Col> */}
       

        <Row className='px-5'>
            <Col className='nav-link' md="3"><div className='col2'>BizVision</div>
            <div className='footertext' >Careers</div>{" "}
            <div className='footertext'>Disclaimer</div> {" "}
            <div className='footertext'>Terms of Condition</div>{" "}
            <div className='footertext'> Privacy Policy</div> {" "}
            
            </Col>
              

          
            <Col className='col2 py-3'md="2"> <div className='col2'>Contact</div>
            <div className='footertext'>L2, 608 Harris Street, Ultimo NSW 2007</div>
            <div className='badge'><i class="fa-brands fa-facebook-f" style={{color:' #2e64c2'}}></i></div>
            <div className='inkedin'>L</div>
            <div className='email'>E</div>
            <div className='insta'>I</div>
            <div className='tww'>T</div>

            
            </Col>

        
            </Row>

            <hr/>

            <div className='footertext mt-4'>© 2010-2023 BizVision. All Rights Reserved </div>


       

        </Container>

    </div>
            




  )
}