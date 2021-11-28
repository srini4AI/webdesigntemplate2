import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './rapiscan618xrh.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle, faDownload} from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import ProductList from '../../../components/productList';
import { ScrollToTop } from '../../../components/scrolltotop';
const rapiscan618xrh = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>RAP 618XRH</h2>
                    <Breadcrumb className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>RAP 618XRH</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6 text-center">
           
          <ProductList products={['/images/products/Rapiscan_618XRH.jpg']}></ProductList>
            
          <br/><br/><a href="/images/productDataSheet/LS-Rapiscan-618XR-HP-X-Ray-Screening.pdf" style={{"margin":"0 auto"}} className="btn btn-primary btn-lg" download><FontAwesomeIcon icon={faDownload}  /> Download</a>
            </div>
          
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>A versatile, mobile X-ray inspection system with outstanding image quality.</p>
            <p className={styles.productdescr}>The new 618XR hp is a high performance compact and versatile 540 mm by 360 mm tunnel X-ray system with exceptional image quality and excellent threat detection alert capabilities.</p>
            <p className={styles.productdescr}>The 618XR hp complies with European commission aviation screening requirements.</p>
            
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /><span> EUROPEAN COMMISSION AVIATION COMPLIANT </span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> SUPERIOR RESOLUTION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> LOW DENSITY IMAGE ENHANCEMENT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> COMPACT DESIGN, PORTABLE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXPLOSIVES AND NARCOTICS DETECTION</span></li>
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
              <p  className={styles.listPara}>With over 14 image processing tools and detection alert algorithm functions, the feature rich software allows the operator to more easily and accurately search for contraband.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>GOVERNMENT REGULATORY COMPLIANCE</h3>
              <p  className={styles.listPara}>618XR hp performance is in full compliance with the mandatory regulations (EC) No. 300/2008, (EU) No. 185/2010 and Commissions Decision C(2010)774 for aviation security in the European Union.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SINERGY</h3>
              <p  className={styles.listPara}>Rapiscan Systems latest proprietary image enhancement tool, utilizes the new Dual- Mode X-ray imaging Technique (DMxT) to emphasize the detail in specific regions of images by enhancing the visibility of thin metal therefore increasing operator recognition of potential threats in cluttered images.</p>
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

export default rapiscan618xrh;