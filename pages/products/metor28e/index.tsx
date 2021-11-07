import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './metor28e.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const metor28e = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>METOR 28E</h2>
                    <Breadcrumb className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>metor metal detectors</Breadcrumb.Item>
                        <Breadcrumb.Item active>METOR 28E</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6">
           
            <img src="/images/products/Metor-6M.jpeg" className="img-fluid pt-5" alt=""/></div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>Metor 28e is a unique hand-held metal detector with enhanced capabilities, detecting objects made of all metal, both ferrous and non-ferrous.</p>
            <p  className={styles.productdescr}>
            Hand-held metal detectors are an integral part of the physical security screening process. With the Metor 28e, we have designed a unit that benefits security personnel as well as the person being scanned. Our unique angled design allows you to thoroughly scan an individual, while keeping your hand away from their body.
            </p>

            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span>DETECTS ALL METAL TYPES</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> CALIBRATION FREE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> AUDIBLE & VIBRATION ALARMS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> PACEMAKER SAFE</span></li>
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
                    <div className="offset-md-2  col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"  color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>DIGITALLY <br/>ADJUSTABLE <br/> SENSITIVITY LEVELS</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>LONG BATTERY LIFE <br/> & FAST USB <br/> CHARGING</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>LOCKABLE<br/>SETTINGS</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>LIGHTWEIGHT<br/>DESIGN</p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>MICROCONTROLLER TECHNOLOGY</h3>
              <p  className={styles.listPara}>Fully digital design guarantees consistent calibration-free operation and provides versatile programmable functionalities.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SECURE AND ADJUSTMENTS</h3>  
              <p  className={styles.listPara}>
              All settings can be locked to prevent unauthorized parameter changes by operators. </p>
                </div>
                
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SENSITIVITY </h3>
              <ul  className={styles.listPara}>
              <li>Programmable sensitivity levels:</li>
                <li>Level 1: Small handguns and knives </li>
                <li>Level 2: Razor blades, handcuff keys </li>
                <li>Level 3: 22 cal. bullet, metal shanks</li></ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>UNIQUE DESIGN, RUGGED AND LIGHTWEIGHT</h3>  
              <p  className={styles.listPara}>
              Highly impact resistant ABS case provides excellent durability and light weight. The circular opening assists in pointing metal objects. Comfortable handle and wrist strap for easy control and grip.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ALARM INDICATION MODES</h3>
              <p  className={styles.listPara}>
              Audible-visual and Vibration/Silent-visual with adjustable alarm tone, vibration strength. The alarm tone proportional to the size of the detected object.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>LONG BATTERY LIFE</h3>  
              <p  className={styles.listPara}>
              Very long operating time with two AA-batteries, (rechargeable NiMH, disposable alkaline or lithium battery). Low battery and empty battery warnings.

              </p></div>
              <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>FAST CHARGING</h3>  
              <p  className={styles.listPara}>Fast charging capability allows recharging batteries fully between work shifts.</p>
                              </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <h3 className={styles.aboutH3}>UNIFORM DETECTION</h3>  
                            <p  className={styles.listPara}>Metor 28e detects objects made of all metals, both ferrous and non-ferrous.</p></div>
                              
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

export default metor28e;