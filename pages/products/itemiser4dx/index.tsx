import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './itemiser4dx.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import { ScrollToTop } from '../../../components/scrolltotop';
import ProductList from '../../../components/productList';
const Itemiser4DX = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>ITEMISER 4DX</h2>
                    <Breadcrumb className="d-none d-sm-block">
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
          <div className="col-lg-6">
           
          <ProductList products={['/images/products/Itemiser-4DX-1.jpg','/images/products/Itemiser-4DX-2.jpeg']}></ProductList></div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
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
                    <div className="offset-md-1  col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"  color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>INTERNAL <br/> CALIBRATION</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PATENTED <br/>REGENERATIVE <br/>DRYER</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>NON-<br/>RADIOACTIVE<br/>IONIZATION<br/>SOURCE</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PORTABLE &<br/>VERSATILE</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>EASE OF USE<br/></p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>COST EFFECTIVE</h3>
              <ul  className={styles.listPara}>
                <li>Automated internal calibration eliminates cost of purchasing and managing calibration traps.</li>
                <li>Folding monitor screen automatically shuts off backlight to extend life of display.</li>
                <li>Regenerative dryer increases uptime and eliminates cost of monthly dryer material replacements.</li>
                <li>Decreases labor required to initiate and manage maintenance.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASE OF USE</h3>  
              <ul  className={styles.listPara}>
	<li>Non-radioactive ionization source removes shipping restrictions and licensing requirements.</li>
	<li>Built in printer for fast hard copy results or printing later.</li>
	<li>Quick analysis and results in approximately 8 seconds.</li>
	<li>On-board software keypad and help files.</li>
	<li>Automated, push-button maintenance can be scheduled.</li>
	<li>Easily accessible maintenance items.</li>
	<li>Ability to create custom substance libraries.</li>
</ul>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>RELIABLE</h3>
              <ul  className={styles.listPara}>
                <li>Simultaneous dual mode detection by using one detector significantly decreases the possibility of mechanical failure associated with two detector systems.</li>
                <li>Maintains a low, stable humidity level in the detector, allowing for consistent and reliable detection results.</li>
                <li>Automatically saves test results, preventing deletions.</li>
                <li>Robust internal solid-state hard drive for reliable data storage.</li>
                <li>Optional maintenance reminders for all preventive requirements.</li>
                <li>Advanced diagnostics to ensure maximum availability and performance.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASY-TO-USE OPERATOR INTERFACE</h3>  
              <ul  className={styles.listPara}>
                <li>Results require minimal interpretation, allowing operators to concentrate on sample acquisition.</li>
                <li>Onboard computer automatically logs all data, including time, date, sample analysis and system status.</li>
                <li>A comprehensive history of saved data and alarm files can be recalled and printed.</li>
              </ul>
              <h3 className={styles.aboutH3}>PORTABILITY</h3>  
              <ul className={styles.listPara}>
                <li>Lightweight (28.65 lb/12.99 kg) with built-in handle for easy transport.</li>
                <li>Internal, one-hour battery allows instrument relocation without shut off, eliminating warmup time.</li>
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
        
      <ScrollToTop></ScrollToTop>
        </>)
};

export default Itemiser4DX;