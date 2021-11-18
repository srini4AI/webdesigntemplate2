import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './metor6s.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const metor6s = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>METOR 6S</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>people screening</Breadcrumb.Item>
                        <Breadcrumb.Item active>METOR 6S</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-4">
           
            <img src="/images/products/Metor_6S.jpg" className="img-fluid pt-5" alt=""/></div>
          
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>High sensitivity Walk-Through Metal Detector (WTMD) for prisons and facility asset protection.</p>
            <p  className={styles.productdescr}>
            The Metor 6S High Sensitivity Walk-Through Metal Detector (WTMD) is designed specifically for detecting small ferrous and non-ferrous items, such as disposable prison razors, a piece of razor blade, metal shanks, handcuff keys, detonator caps, jewelry, coins, microprocessor and memory chips.
            </p>
            <p  className={styles.productdescr}>
            The Metor 6S can accruately and efficiently detect small metal objects that can be used as weapons, even when they are hidden in body cavities in prisong and jails. When used in manufacturing and distribution facilities to protect small, valuable assets, the Metor® 6S raises profitability by deterring employee theft.
            </p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> NIJ-STANDARD 0601.02 COMPLIANT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> VERSATILE HIGH SENSITIVITY APPLICATIONS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> HIGINTELLIGENT TRAFFIC COUNTERS - RELIABLE STATISTICS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> DETECTS SMALL METAL OBJECTS USED AS WEAPONS, EVEN HIDDEN IN BODY CAVITIES</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXCEPTIONAL SENSITIVITY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> SUPERIOR IMMUNITY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EASY TO INSTALL & OPERATE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> IP55 PROTECTION RATING</span></li>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}>INDEPENDENTLY <br/>ADJUSTABLE <br/> DETECTION ZONES</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}> AUTOMATIC<br/> INTERACTIVE<br/>SENSITIVITY<br/> ADJUSTMENT</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>FREQUENCY <br/>SELECTION</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>POWER GUARD</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC<br/>SYSTEM READY<br/>VIOLATION<br/>MONITORING</p>
                    </div>
                    <div className="offset-md-4 col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>ACCURATE 20<br/>SEGMENT<br/>LOCATION DISPLAY</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>RANDOM ALARM<br/>FUNCTIONALITY</p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>NIJ STANDARD 0601.02</h3>
                <p className={styles.listPara}>The Metor 6S complies with NIJ Standard 0601.02, fulfilling the requirements for corrections and law enforcement agencies. Preset programs which meet the different security levels defined by NIJ are immediately available.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>RANDOM ALARM FUNCTION</h3>  
              <p className={styles.listPara}>The Metor 6S has a random alarm function that enables security personnel to randomly choose individuals for an additional security check.</p>
                
                <p className={styles.listPara}>With the new dual random alarm feature, people who cause a normal alarm are also subject to a random alarm.</p></div>
                
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>RADIATION DETECTION</h3>
              <p className={styles.listPara}>
              Metor 6S can be integrated with radiation detection capability to combine multi threat detection of both metal and radioactive materials. The configuration enables either gamma or gamma/neutron detection options and is available as a field upgradeable kit.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>INTELLIGENT TRAFFIC COUNTERS FOR RELIABLE STATISTICS</h3>  
              <p  className={styles.listPara}>
              Metor 6S is built with intelligent and virtually invisible traffic counters which are integrated inside the coil panels. Counters are bi-directional with a decrease mode. Alarms, people and alarm rates can all be counted.</p>

                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ENHANCED SECURITY</h3>
              <p  className={styles.listPara}>
              The latest features for advanced security are available on the Metor 6S. Calibration guard, power guard and ready-state violation all protect against unwanted tampering to the machine. Fully configurable user levels allow for unprecedented control over who can view and change settings on the Metor® 6S.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>LOCATION DISPLAY</h3>  
              <p className={styles.listPara}>20 segment zone display locates the alarmed item(s) on a person quickly enhancing the screening process and throughput.</p></div>
              <div className="row">
              <div className="col-lg-6 col-md-6 col-12"><h3 className={styles.aboutH3}>ENHANCED FEATURES FOR EASIER USABILITY</h3>  
              <p className={styles.listPara}> Automated sensitivity and floor sensitivity functions make the calibration process easy, eliminating the time consuming trial and error method.</p>
              <p className={styles.listPara}> Automated frequency function selects the optimum operating frequency for the installation environment or in case of side-by-side use of more than one unit.</p>
              <p className={styles.listPara}>Preset Detection Programs – The Metor 6S is delivered with multiple preset detection programs for the different levels of NIJ-0601.02 as well as for the detection of small magnetic or non-magnetic items and objects made of mixed alloys, ready to use immediately.</p>
                 </div>
              <div className="col-lg-6 col-md-6 col-12">  <h3 className={styles.aboutH3}> EASY TO INSTALL AND OPERATE</h3>
              <p className={styles.listPara}>With its immunity to electromagnetic interference and vibration, the Metor 6S is easy to install in the most demanding environments. Several units can be placed in close proximity to one another, increasing the level of flexibility when planning an installation site.</p>
               </div>
       </div></div></div>
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

export default metor6s;