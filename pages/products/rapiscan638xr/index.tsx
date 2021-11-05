import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './rap638xr.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const rap638xr = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>638XR</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>638XR</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-4">
           
            <img src="/images/products/5X.jpg" className="img-fluid pt-5" alt=""/></div>
          
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>Easy loading conveyor and large tunnel for screening of ULD type freight and ISO standard pallets.</p>
            <p  className={styles.productdescr}>
            The 638XR is an advanced X-ray system for screening of ULD type, ISO standard, lower deck and large cargo pallet type freight. It has a large tunnel opening of 1,837  mm x 1,800 mm and uses innovative screening technology with explosives and narcotics detection alert, to generate an outstanding high resolution view of the object under inspection.</p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> ADVANCED CARGO SCREENING</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> LARGE PALLET CARGO</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXPLOSIVES AND NARCOTICS DETECTION ALERT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> E.U. AVIATION COMPLAINT</span></li>
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
              <h3 className={styles.aboutH3}>REGULATORY COMPLIANCE</h3>
              <p  className={styles.listPara}>638XR performance is in full compliance with the European Union regulations (EC) No. 300/2008, (EU) No. 2015/1998 and Commissions Decision C (2015)8005 for aviation security.</p>
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
        
        </>)
};

export default rap638xr;