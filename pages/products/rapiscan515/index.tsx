import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './rap515.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const rap515 = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>RAP 515</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>RAP 515</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6">
           
            <img  className="img-fluid pt-5" src="/images/products/RAP-515.jpeg"/></div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>The Rapiscan Model 515 is an x-ray security inspection system designed for customers with new and expanding security requirements. The Model 515 has a fully configurable technology menu, which allows the user to choose the best value for their application and budget. Its compact design and removable control panel make the system an excellent choice for numerous security applications. The system offers a tunnel opening of 640mm (25.2 inches) wide by 430mm (16.9 inches) high to accommodate large package sizes.</p>
            <p  className={styles.productdescr}>
            Intel Pentium computer technology is the driving force in all of our developments. The Model 515 base configuration includes multi-energy technology with the following standard features: Crystal Clear™, Density Threat Alert, Edge Enhancement, Variable Gamma, Inverse Video, Organic/Inorganic Stripping, Pseudo Color and Variable Zoom.</p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> Crystal Clear</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Multi Energy Imaging (4 color)</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Density Threat Alert</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> High/Low Penetration</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Full diagnostic built in test facility</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Date/Time display</span></li>
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
              <p  className={styles.listPara}>
                Target and NARCScan are designed to assist operators in the detection of a range of explosives and narcotics respectively in real time during the scanning process by marking a potential threat on the X-ray image. Rapiscan Systems detection algorithms are based on regulatory material analysis techniques.
              </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASE OF USE PROVIDING HIGHEST THROUGHPUT</h3>  
              <p  className={styles.listPara}>
	With over 13 image processing tools and detection alert algorithm functions, the feature rich software allows the operator to more easily and accurately search for contraband.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>REGULATORY COMPLIANCE</h3>
              <p  className={styles.listPara}>All Rapiscan systems comply with applicable international health andsafety regulations including USA FDA X-ray systems (Federal Standard 21-CFR1020.40) and Health and Safety at Work Act 1974-section 6, Amended by theConsumer Protection Act 1987. Maximum leakage radiation less than 0.1mR/hr (1µ Sv/hr) in contact with outer panels. Film Safety: For ISO 1600/33 DIN,guaranteed up to 10 times exposure to radiation.</p>
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

export default rap515;