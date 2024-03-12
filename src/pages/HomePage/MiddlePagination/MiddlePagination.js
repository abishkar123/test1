import React, { useState } from 'react';
import './middlePagination.css';
import { Tabs, TabList, Tab, TabPanel} from 'react-tabs'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MiddlePagination = () => {
    const bringToTop = ()=>{
        window.scrollTo(0,0);
      }


    return (

        <Tabs className="tab-main ">
            <TabList className="tab-list-container">
                <Tab className="tab-button">About BizVision</Tab>
                <Tab className="tab-button">For Business buying & Investing </Tab>
                <Tab className="tab-button">For Selling</Tab>
                <Tab className="tab-button">Our preminum Business Buyer Services </Tab>
            </TabList>

            <TabPanel>
                <div className='p-5'>
                <h2 className='p-3 h-2'>What is BizVision</h2>
                {/* Content for About Axial tab */}
               
                <Row > 
                    <Col>
                    <p className='p-3 col1'>BizVision is a business buyer agency serving investors 
                    (including Business Innovation and Investment visa holders subclass 188, and subclass 888) 
                    assisting in sourcing businesses, business valuation and due diligence, lease agreement and 
                    franchise agreement negotiations. BizVision’s  deal-sourcing and deal structuring tools are used
                     to facilitate the discovery and execution of transactions that meet the following criteria:

                
                    </p></Col>


                    <Col md className='col1'>
                    <p>
                    	<p><span className='bold'>  • Geography: </span> Australian based businesses</p>
                     	<p> <span className='bold'> • Revenue:</span> $500K – $8M</p>
                     	<p> <span className='bold'> • EBITDA: </span>$50K to $2.5M</p>
                     	<p> <span className='bold'> • Transaction Types:</span> SME Business Sales, Franchises, Master franchises & Co-Investments, Vendor Financed</p>
                     	<p> <span className='bold'> • Industry Verticals:</span>  Tech, Industrials, Consumer, Business Services, Food & Beverage, Transportation & Logistics, Commercial Real Estate, Education</p>


                    </p>
                    
                    </Col>
                    
                   
                </Row>

                <Row>
                    
                    <Col></Col>

                <Col md className='col1'>
                        <p>
                        <h2>How Buying Acquisition Process Works</h2>
                            BizVision’s platform reflects how small business sales transactions get done — privately and confidentially.
                         Unlike traditional business brokerage firms with public deal listing, 
                        BizVision’s buy-side members gain access to insights about businesses on the market utilizing our proprietary AI-powered analytics lab to predict and forecast business sales figures 
                        and overall circumstances of the business environment in our specialized industry verticals

                        <ol className='custome p-3'>

                        <li> The buyer granularly describes their criteria and interests to create their initial roadmap and buyer profile.</li>	
                        <li> 	The seller inputs details of their business or transaction they’re bringing to market
                         [through a confidential, private research tool].</li>
                        <li> 	BizVision’s algorithms analyze each buyer member’s deal criteria, and privately recommends 
                        matching parties for the seller to approach, ordered by relevance.</li>
                        <li> BizVision associates initiate due diligence, liaise between sellers, 
                        solicitors, franchisors, and landlords to achieve best possible outcome for buyers.</li>



                        </ol>
                        
                        
                        
                        
                        
                        </p>

                    </Col>
                </Row>

                <Row>
                    <h2 className='p-3'> Virtual and In-Person Events and Workshops</h2>
                    <Col>
                    <p className='col1'> 
                    BizVisions events are rated as some of the most productive networking events in the industry. Through national, 
                    regional, industry-specific, and virtual events, we focus on having a calculated ratio of buyers, sellers, 
                    intermediaries, and companies, while curating meetings between attendees beforehand.
                    <br/> <br/>The statistics speak for themselves. Here are some numbers from our one-day Sydney'
                     held events and workshops:

                     <p>
                        <ol> •	104+ meetings held</ol>
                        <ol> •	35+ workshops facilitated</ol>
                        <ol> •	65% buyer attendees, 35% seller attendees</ol>
                     </p>



                    </p>
                    </Col>
                    <Col md></Col>
                </Row>

                <Row>
                    
                    <Col></Col>
                    
                    <Col md>
                        <p className='p-3'>
                    <h2>Reputation Data and AI-Powered insights</h2>
                         BizVision shines a light on the small business market like never before.
                          Our analytics tools gather commercial sales, demographics, social media, 
                          ATO, ABS, Google, IBISWORLD, Statista, Geospatial data to help our clients 
                          make an informed and data-driven decision on their business acquisition with
                           the appropriate levels of trust and confidence unmatched in the industry.
                          <br/><br/>
                           <Link to="/request-information"><Button>Join BizVision</Button></Link>
                           </p>
                           </Col>

                           
                </Row>
                <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP </div>



                </div>
          
            </TabPanel>

            <TabPanel>
                <div className='p-5'>
                <h2 className='p-3 h-2'>Our 4-Step Business buying Process</h2>

                <Row className='mt-3'> 
                    <Col>
                    <p className='p-3 col1'><h2 className='h-2'> Personalised Business Buying Roadmap</h2>
                    Begin with a bespoke strategy. Our dedicated BizVision Associate crafts 
                        a tailored profile and establishes a clear 
                        roadmap based on your unique buying preferences and objectives. </p>
                    </Col>
                    <Col md>
                        Image
                    
                    </Col>

                </Row>

                <Row className='mt-4'>

                    <Col className='p-4'>
                        Image
                    </Col>

                    <Col md>
                    <p className='col1 p-3'> <h2 className='h-2'>Comprehensive Business Search & Match </h2>
                    Discover the ideal business opportunity. Leveraging an expansive database,
                     your Associate scours both off-market deals
                     and exclusive listings, ensuring you find businesses that resonate perfectly with your profile.
                    </p>
                    </Col>

                    
                </Row>

                <Row className='mt-4'>
                    <Col>
                    <p className='p-3 col1'> <h2 className='h-2'>Expert Deal Initiation & Negotiation </h2>
                    Navigate intricate transaction details with confidence. Your BizVision Associate is adept at anticipating deal complexities. They facilitate seamless communication between sellers, solicitors, 
                    and landlords, striving for an advantageous outcome on your behalf.
                    </p>
                    </Col>

                    <Col md>
                        Image
                    </Col>
                </Row>

                <Row className='mt-4'>
                    <Col>
                        Image
                    </Col>
                    <Col md>
                    <p className='p-3 col1'> <h2 className='h-2'>Seamless Settlement & Tailored Support Network</h2>
                    Transition smoothly into your new venture. Post-contract finalisation, your BizVision Associate connects you with a curated network of
                    industry-leading accountants, marketers, designers, and suppliers, equipping you for immediate success.
                    </p>
                    </Col>

                    
                </Row>
                
                <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP </div>
                

                </div>
               
            </TabPanel>

            
            <TabPanel>
                <div className='p-5'>
                <h2 className='p-3 h-2'>Elevating the Business Transaction Experience for Sellers </h2>
                <Row>
                    <Col> 
                    <p className='p-3 col1'>Selling a business is no small feat. It's a culmination of years, if not decades, of hard work, dedication, and vision. 
                    While BizVision primarily serves the buye- side of the equation, we believe in empowering the 
                    entire business community with insights that can make this transition 
                    smoother. Our approach with buyers inadvertently benefits the sellers.

                   <br/><br/>

                    <p> <span className='bold'> Prepared Buyers:</span> We work tirelessly to ensure our buyers are educated, prepared, and serious. 
                    This translates to more efficient interactions for sellers, with potential matches being genuinely interested and financially ready.
                    <br/> <br/>


                    
                    <p className=''>
                    	<ol><span className='bold'>  • Geography: </span> International buyers with Australian presence.</ol>
                        <ol> <span className='bold'> • Business Type:</span> Brick and mortar, Online businesses including SAS businesses, startups</ol>
                     	<ol> <span className='bold'> • Revenue:</span> $500K – $8M</ol>
                     	<ol> <span className='bold'> • EBITDA: </span>$50K to $2.5M</ol>
                     	<ol> <span className='bold'> • Transaction Types:</span> SME Business Sales, Franchises, Master franchises & Co-Investments, Vendor Financed</ol>
                     	<ol> <span className='bold'> • Industry Verticals:</span>  Tech, Industrials, Consumer, Business Services, Food & Beverage, Transportation & Logistics, Commercial Real Estate, Education</ol>


                    </p>
                    </p> </p>
                    </Col>
                    <Col md>
                    </Col>
                </Row>
                </div>
            </TabPanel>

            
            <TabPanel>
            <div className='p-5'>
            <Row className='mt-3'> 
                    <Col>
                    <p className='p-3 col1'><h2 className='h-2'> Precision Business Search</h2>
                    Dive into a plethora of opportunities with BizVision. 
                    Our Associates excel in unearthing the perfect business 
                    match based on your specific criteria. With insider access 
                    to rare off-market listings and exclusive guild offerings,
                     we specialise in connecting you with hidden gems, such as 
                     coveted pharmacies. </p>
                    </Col>

                    <Col md>
                        Image
                    
                    </Col>

                </Row>

            <Row className='mt-4'>

                    <Col className='p-4'>
                        Image
                    </Col>

                    <Col md>
                    <p className='col1 p-3'> <h2 className='h-2'>Expert Lease Negotiations</h2>
                    Ensure your business thrives on a foundation of financial stability.
                    Recognising rent as a pivotal cost in businesses, our seasoned team 
                    negotiates leases that harmonise with the business's revenue and offer 
                    extended terms. Benefit from our vast insights on leasing trends in neighbouring businesses.
                    </p>
                    </Col>

                    
             </Row>

            <Row className='mt-4'>
                    <Col>
                    <p className='p-3 col1'> <h2 className='h-2'>Seamless Transaction Management</h2>
                    Strike the ideal balance for a win-win deal. With emotions running high and 
                    stakes increasing, allow your BizVision Associate to orchestrate fluid 
                    communications amongst all parties—be it solicitors, brokers, or 
                    landlords—ensuring a smooth and beneficial transaction.
                    </p>
                    </Col>

                    <Col md>
                        Image
                    </Col>
            </Row>

            <Row className='mt-4'>
                    <Col>
                        Image
                    </Col>
                    <Col md>
                    <p className='p-3 col1'> <h2 className='h-2'>Innovative Financing Solutions</h2>
                    Navigate the complex financial landscape with ease. With stricter bank lending 
                    criteria, our Associates shine by unlocking vendor finance opportunities, 
                    a boon when upfront cash payments seem daunting or unfeasible. We're here to expand your purchasing potential.
                    </p>
                    </Col>

                    
            </Row>

            <Row className='mt-4'>
                    <Col>
                    <p className='p-3 col1'> <h2 className='h-2'>Comprehensive Business Valuations</h2>

                   Make informed decisions with our impartial business valuation reports. Crafted meticulously 
                   by our Associates, these evaluations uncover true business earnings, gauge sector appeal, 
                   and pinpoint potential risks—empowering you, the buyer, with a strategic advantage.
                    </p>
                    </Col>

                    <Col md>
                        Image
                    </Col>
            </Row>

            <Row className='mt-4'>
                    <Col>
                        Image
                    </Col>
                    <Col md>
                    <p className='p-3 col1'> <h2 className='h-2'>Accurate Business Performance Verification</h2>
                    Cut through the noise and get the real picture. While some business owners might overstate their 
                    performance, BizVision employs innovative strategies like mystery shopping, expert investigators, 
                    industry benchmarks, and advanced data analytics to authenticate a business's true sales range.
                    </p>
                    </Col>

                    
            </Row>
            </div>

            <div onClick={bringToTop} className='text-center bringtotop p-4'> ↕  BRING TO TOP </div>

            </TabPanel>

        </Tabs>
        

    );
}


export default MiddlePagination