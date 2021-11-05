import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './itemiser3e.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import { ScrollToTop } from '../../../components/scrolltotop';
const Itemiser4DX = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>ITEMISER 4DX</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>Itemiser 4DX</Breadcrumb.Item>
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
            <p className={styles.productdescr}>Aviation approved non-radioactive-based explosives and narcotics detection.</p>
            <p  className={styles.productdescr}>
            Using a non-radioactive ionization source and simultaneous, dual-mode detection, Itemiser® 4DX can detect a broad range of current market threat explosives and narcotics without the use of a radioactive source, thereby eliminating the need for annual wipe tests and licensing while reducing shipping challenges.
            </p>
            <p  className={styles.productdescr}>
            The portable, ergonomic desktop unit features automated internal calibration to help decrease consumables cost, optimize ongoing equipment operation and increase detection accuracy.
            </p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> SIMULTANEOUS DETECTION OF EXPLOSIVE AND NARCOTICS IN EIGHT SECONDS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> NON-RADIOACTIVE IONIZATION SOURCE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> INCREASED USABILITY, IMPROVED OPERATIONAL AND DETECTION ACCURACY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> REMOTE MONITORING CAPABILITY VIA REMOTE CONNECT™</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> PUSH-BUTTON, SCHEDULABLE AUTOMATED MAINTENANCE</span></li>
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
                    <div className="offset-md-1  col-2">
                    <div className={`${styles.circleIcon}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"  color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>INTERNAL <br/> CALIBRATION</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PATENTED <br/>REGENERATIVE <br/>DRYER</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>NON-<br/>RADIOACTIVE<br/>IONIZATION<br/>SOURCE</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PORTABLE &<br/>VERSATILE</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>EASE OF USE<br/></p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                
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

export default Itemiser4DX;