import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './rap620dv.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle,faDownload } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import ProductList from '../../../components/productList';
import { ScrollToTop } from '../../../components/scrolltotop';
const rap620dv = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>RAP 620DV</h2>
                    <Breadcrumb className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>RAP 620DV</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6 text-center">
           
          <ProductList products={['/images/products/Rapiscan_620DV.png','/images/products/Rapiscan620DVAT-TSA.jpg']}></ProductList>
         <br/> <a href="/images/productDataSheet/Rapiscan-620DV-Datasheet.pdf" style={{"margin":"0 auto"}} className="btn btn-primary btn-lg" download><FontAwesomeIcon icon={faDownload}  /> Download</a>
            </div> 
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>Carry-on baggage checkpoint screening solution approved by U.S. Transportation Security Administration (TSA), European Civil Aviation Conference (ECAC), France Civil Aviation Authority (STAC) and U.K. Department for Transport (DfT).</p>

            <p className={styles.productdescr}>The 620DV is an advanced checkpoint screening solution, designed for aviation and high security applications. It uses innovative dual view technology to generate a horizontal and vertical view of the object under inspection.</p>

            <p className={styles.productdescr}>620DV has been approved and included on the qualified list applicable to the U.S. TSA Advanced Technology (AT) checkpoint program as well as the qualified list applicable to E.U. ECAC Liquid Explosive Detection System (LEDS) Common Evaluation Process (CEP) for security equipment.</p>

            <p className={styles.productdescr}>620DV provides unsurpassed image quality, regulatory approved detection alert of solid explosive software (Target) and Liquid Explosive Identification Software (aLEXis) with the largest global approvals and certifications.</p>
            
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> HIGH PERFORMANCE ADVANCED CHECKPOINT SCREENING</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> DUAL VIEW TECHNOLOGY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> LARGEST GLOBAL REGULATORY APPROVALS</span></li>
  </ul>    
 
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
              <p  className={styles.listPara}>The 620DV meets the most rigorous detection and image quality requirements as set by the U.K. Department of Transport (DfT), European Union, and French civil aviation authority (STAC).</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>DUAL VIEW ADVANCED TECHNOLOGY</h3>  
              <p  className={styles.listPara}>As mandated by US and EU regulators, the 620DV utilizes a dual view technology which produces two simultaneous images (vertical and horizontal views) of the scanned object. It provides a more complete image, thereby reducing the need for repositioning and rescanning and enabling rapid, accurate and comprehensive threat detection.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>REGULATORY COMPLIANCE</h3>
              <p  className={styles.listPara}>620DV performance is in full compliance with the European Union regulations (EC) No. 300/2008, (EU) No. 2015/1998 and Commissions Decision C (2015)8005 for aviation security.</p>
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

export default rap620dv;