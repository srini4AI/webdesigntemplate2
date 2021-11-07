import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './metor6e.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const metor6e = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>METOR 6E</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>people screening</Breadcrumb.Item>
                        <Breadcrumb.Item active>METOR 6E</Breadcrumb.Item>
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
            <p className={styles.productdescr}>Exceptional operational performance and versatile capabilities for high-security checkpoints.</p>
            <p  className={styles.productdescr}>
            Metor 6E is a state-of- the-art walk-through metal detector developed for the most demanding high profile security screening applications.
            </p>
            <p  className={styles.productdescr}>
            Developed using the latest technology to meet the strictest requirements set by the international civil aviation authorities.
            </p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> INTERNATIONALLY RECOGNIZED REGULATORY COMPLIANT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EASY TO INSTALL & OPERATE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> POWERFUL SCREENING OF LARGE CROWDS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> REGULATED LEVEL OF DETECTION RELIABILITY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> FAST, ACCURATE ALARM RESOLUTION WITH A 2D LOCATION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> IP 55 PROTECTION CLASS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXCELLENT ELECTRICAL & MULTIPLE WTMD IMMUNITY</span></li>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}> 60 SEGMENT <br/> INDICATION FOR <br/> ALARM <br/> RESOLUTION</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>INDEPENDENTLY <br/> ADJUSTABLE <br/> DETECTION ZONES</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}> ALARM <br/> DISTRIBUTION <br/> DATA FOR <br/> ANALYSES OF <br/> RESULTED ALARMS</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>BUILT-IN <br/> ADVANCED <br/> FEATURES</p>
                    </div>
                    <div className="offset-md-1  col-2">
                    <div className={`${styles.circleIcon}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"  color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/> INTERACTIVE <br/> SENSITIVITY <br/> ADJUSTMENT</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/> FREQUENCY <br/> SELECTION</p>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>SYSTEM READY <br/> VIOLATION <br/> MONITORING</p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>RADIATION DETECTION</h3>
              <p className={styles.listPara}>
              Metor 6E can be integrated with radiation detection capability to combine multi threat detection of both metal and radioactive materials.</p>
              <p className={styles.listPara}>The configuration enables either gamma or gamma/neutron detection options and is available as a field upgradeable kit.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ALARM DISTRIBUTION DATA</h3>  
              <p  className={styles.listPara}>
              Allows for more in-depth analysis of alarm locations and assisting in optimization of unit’s passenger flow.</p>
                </div>
                
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ADJUSTABLE DETECTION ZONES</h3>
              <p className={styles.listPara}> Metor 6E has multiple independently adjustable detection zones to ensure uniform detection throughout the aperture.</p>
              <p className={styles.listPara}> The Metor 6E uses a unique multi-channel technology combined with powerful processing capacity. This allows for fast collection of information from multiple metal items passing through simultaneously and accurate threat resolution based on the characteristics of the items.</p>
              <p className={styles.listPara}> Metor 6E is capable of a throughput rate of over 50 persons per minute only influenced by individual concept of operations.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EXCELLENT INTERFERENCE IMMUNITY</h3>  
              <p  className={styles.listPara}>
              The carefully selected operating frequencies together with effective digital filtering allow excellent immunity to electromagnetic interference. Furthermore the coil design of the Metor 6E is optimized to minimize external electromagnetic interference. Metor 6E meets with the requirements of applicable standards for Electromagnetic Compatibility. Two or more Metor 6E metal detectors can be operated in close proximity. Side-by-side use does not require synchronization cables.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>2-DIMENSIONAL LOCATION FUNCTION</h3>
              <p  className={styles.listPara}>
              The Metor 6E has an integrated 2-dimensional location display on the exit side of the coil panels. The display indicates the location of the detected metal object(s) by pinpointing either left, right or center position of the height where the item(s) passed through the metal detector. The location display has 20 vertical and 3 horizontal segments resulting in a total resolution of 60 pinpointing segments within the unit’s aperture.</p>
              <p  className={styles.listPara}>The location display has two user selectable modes: 2-dimensional or vertical. In vertical mode the vertical location of the detected item within the unit’s aperture is indicated. Timing of the location display is adjustable and the display can be enabled or disabled through the user interface.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>AUTOMATIC INTERACTIVE SENSITIVITY CALIBRATION</h3>  
              <p  className={styles.listPara}>
              An automatic interactive sensitivity calibration function enables the detector’s sensitivity to be automatically selected for a specific test object. The user can simply start the “Auto Sensitivity” function and walk through the unit with each test object one at the time. At the end of the process Metor 6E indicates the correct sensitivity level for detecting all the items that were passed through during this process. Additionally, Metor 6E has an automatic interactive floor sensitivity calibration program to help floor level calibration.</p>
<h3 className={styles.aboutH3}>AUTOMATED FREQUENCY SEARCH</h3>  
              <p  className={styles.listPara}>
              Metor 6E searches automatically suitable operating frequency during start-up or when the feature is activated from the user interface. This feature can be switched On or Off.</p>
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

export default metor6e;