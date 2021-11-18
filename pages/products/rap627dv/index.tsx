import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './rap627dv.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import ProductList from '../../../components/productList';
import { ScrollToTop } from '../../../components/scrolltotop';
const rap627dv = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>RAP 627DV</h2>
                    <Breadcrumb className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>RAP 627DV</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6">
           
          <ProductList products={['/images/products/RAPISCAN_627DV.png']}></ProductList>
            
            </div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}> Large tunnel with dual view technology for comprehensive X-ray screening of large baggage and parcels.</p>

            <p className={styles.productdescr}> With a wide tunnel opening of 1,000 mm x 1,000 mm, the 627DV is designed for screening small cargo and parcels for customs, air cargo and infrastructure protection screening applications.</p>

            <p className={styles.productdescr}> The 627DV has been approved and included on the U.S. TSA Air Cargo Screening Technology List (ACSTL) and the Transport Canada (TC) Air Cargo Security Program (ACS).</p>
            
            
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> LARGE PARCEL & SMALL CARGO SCREENING</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> DUAL VIEW TECHNOLOGY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> COMPLEX PARCELS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> 1000 X 1000 MM TUNNEL OPENING</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> E.U. COMPLAINT AND APPROVED BY U.S. TSA & TRANSPORT CANADA</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> COST EFFECTIVE</span></li></ul>    
 
              </div>
    
            </div>
   
          </div>
        </div>

      </div>
    </section>
    <section>
        <div className="container">
            
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>DETECTION OF EXPLOSIVES AND NARCOTICS ALERT</h3>
              <p  className={styles.listPara}>Target and NARCScan are designed to assist operators in the detection of a range of explosives and narcotics respectively in real time during the scanning process by marking a potential threat on the X-ray image. Rapiscan Systems detection algorithms are based on regulatory material analysis techniques.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASE OF USE PROVIDING HIGHEST THROUGHPUT</h3>  
              <p  className={styles.listPara}>With over 13 image processing tools and detection alert algorithm functions, the feature rich software allows the operator to more easily and accurately search for contraband.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>MEETING TODAY’S MOST STRINGENT GLOBAL REQUIREMENTS</h3>
              <p  className={styles.listPara}>627DV meets the most rigorous detection and image quality requirements as set by the U.S. Transportation Security Administration (TSA) and Transport Canada (TC).</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>DUAL VIEW ADVANCED TECHNOLOGY</h3>  
              <p  className={styles.listPara}>As mandated by US and EU regulators, the 627DV utilizes a Dual View technology which produces two simultaneous images (vertical and horizontal views) of the scanned object. It provides a more complete image, thereby reducing the need for repositioning and rescanning and enabling rapid, accurate and comprehensive threat detection.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>REGULATORY COMPLIANCE</h3>
              <p  className={styles.listPara}>627DV performance is in full compliance with the European Union regulations (EC) No. 300/2008, (EU) No. 2015/1998 and Commissions Decision C (2015)8005 for aviation security.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>DARC ALARM</h3>  
              <p  className={styles.listPara}>Rapiscan Systems proprietary detection algorithm that detects areas of high density while screening air cargo. Rapiscan Systems collaborated closely with the U.K. Department for Transport to create DARC alarm and jointly executed the necessary test trials to verify the effectiveness of the DARC Alarm algorithm.</p>
                </div>
              
            </div>
        </div>
    </section>
    <footer id={styles1.footer}>
        <div className={styles1.footerTop}>
          <div className="container">
            <div className="row">
              <FooterWeb></FooterWeb>
              <div className={styles1.container}>
                <div className={styles1.copyright}>
                  © 2021 <strong><span>ECIL Rapiscan Limited.</span></strong> All Rights Reserved
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
        
      <ScrollToTop></ScrollToTop>
        </>)
};

export default rap627dv;