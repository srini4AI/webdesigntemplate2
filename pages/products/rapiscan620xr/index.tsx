import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './rap620xr.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const rap620xr = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>620XR</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>620XR</Breadcrumb.Item>
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
            <p className={styles.productdescr}>Advanced single view checkpoint screening system with outstanding features and innovative options.</p>
            <p  className={styles.productdescr}>
            The 620XR provides outstanding threat detection and a low total cost of ownership.</p>
            <p  className={styles.productdescr}>
            The 620XR holds the most and the largest number of aviation global regularly approvals including the Italian Civil Aviation Authority (ENAC), U.K. Department of Transport (DfT), French Civil Aviation Authority (STAC) and Canadian Transport of Canada.
            </p>
            
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> PROVEN CHECKPOINT SCREENING PERFORMANCE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> APPROVED BY MAJOR AVIATION REGULATORY AUTHORITIES</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span>EXPLOSIVE AND NARCOTICS DETECTION ALERT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> ERGONOMIC DESIGN</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> NETWORK ENABLED</span></li>
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
              <ul  className={styles.listPara}>
                <li>Target and NARCScan are designed to assist operators in the detection of a range of explosives and narcotics respectively in real time during the scanning process by marking a potential threat on the X-ray image. Rapiscan® Systems detection algorithms are based on regulatory material analysis techniques.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASE OF USE PROVIDING HIGHEST THROUGHPUT</h3>  
              <ul  className={styles.listPara}>
	<li>With over 13 image processing tools and detection alert algorithm functions, the feature rich software allows the operator to more easily and accurately search for contraband.</li>
</ul>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>REGULATORY COMPLIANCE</h3>
              <ul  className={styles.listPara}>
                <li>620XR performance is in full compliance with the European Union regulations (EC) No. 300/2008, (EU) No. 2015/1998 and Commissions Decision C (2015)8005 for aviation security.</li>
              </ul>
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

export default rap620xr;