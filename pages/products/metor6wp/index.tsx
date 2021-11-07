import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './metor6wp.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const metor6wp = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>METOR 6WP</h2>
                    <Breadcrumb  className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>people screening</Breadcrumb.Item>
                        <Breadcrumb.Item active>METOR 6WP</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6">
           
            <img src="/images/products/Metor-6WP.jpg" className="img-fluid pt-5" alt=""/></div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>Uncompromised detection for fast people screening of large crowds.</p>
            <p  className={styles.productdescr}>
            The Metor 6WP is a versatile, outdoor weatherproof state-of-the-art Walk-Through Metal Detector (WTMD) that combines advanced metal detection technology with an appealing, but practical design..
            </p>
            <p  className={styles.productdescr}>
            The Metor 6WP is an excellent choice for temporary and permanent installations depending.
            </p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> IP65 PROTECTION – FULLY WATERPROOF</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> NCS4 (NATIONAL CENTER FOR SPECTATOR SPORTS SAFETY & SECURITY) TESTED</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> ENHANCED DISCRIMINATION FOR LARGE GROUPS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> HIGH ACCURACY LOCATION DISPLAY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> ENDURANCE FOR MULTIPLE INSTALLATIONS & TRANSPORTATION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> HIGH-PERFORMANCE, COMPACT & DURABLE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> LIGHTWEIGHT, ROBUST, MULTI-ZONE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> ASSEMBLY IN 5 MINUTES - NO TOOLS REQUIRED</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXCELLENT IMMUNITY</span></li>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>INTERACTIVE <br/> SENSITIVITY <br/> ADJUSTMENT</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>FREQUENCY<br/>SELECTION</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC<br/>POWER GUARD</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>AUTOMATIC <br/>SYSTEM READY <br/> VIOLATION<br/> MONITORING</p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SECURITY FOR LARGE CROWDS</h3>
              <p  className={styles.listPara}>
              Due to enhanced discrimination features, the Metor 6WP is well suited for fast security screening of large groups of people. To assist security personnel in locating threat objects accurately and consistently, the Metor® 6WP is equipped with two zone displays.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>USER FRIENDLY</h3>  
              <p className={styles.listPara}>
              The Metor 6WP has a menu-based user interface that enables fast and easy programming. The user can calibrate the unit using pre-set detection programs and automated frequency / sensitivity adjustments or operate the unit with pre-defined calibration that is saved in the unit’s memory.</p>
              <p className={styles.listPara}>As a safety feature, the Metor® 6WP incorporates a calibration guard that monitors parameter settings. In addition, the unit’s cables and connectors are locked inside the crosspiece. The Metor® 6WP is equipped with a power guard that alarms when the unit loses power, (e.g., if the power cord becomes disconnected).</p>
                </div>
                
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>WIDE RANGE OF APPLICATIONS</h3>
              <p  className={styles.listPara}>
              The Metor 6WP combines a high performance metal detector with compact and durable mechanics as well as a stylish appearance that is suitable for even the most architecturally demanding environments. An IP65 protection class makes the Metor 6WP ideal for outdoor use.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>TROUBLE-FREE OPERATION</h3>  
              <p  className={styles.listPara}>
              With its immunity to electromagnetic interference, the Metor 6WP is easy to install in the most demanding environments. Several units can be placed in close proximity to one another, increasing the level of flexibility when planning an installation site.</p>

                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>MOBILE SECURITY</h3>
              <p  className={styles.listPara}>
              The mechanics of the Metor 6WP are specifically designed to endure multiple installations in various locations. The unit is simple to install and can be set up by one person in five minutes. Due to its compact structure and light weight design, the Metor® 6WP can easily be transported from location to location without any tools for set up or dismantle. As an extra benefit for temporary applications, the unit can be transported while fully assembled. The Metor 6WP comes with ground stabilizers standard and optional carrying cases.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>TRUE TRAFFIC COUNTERS</h3>  
              <p  className={styles.listPara}>
              The Metor 6WP features intelligent traffic and alarm counters that calculate traffic flow and resultant alarms. Counters are integrated inside the zone display, counting both increment and decrement, thereby giving a true traffic count.</p>
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

export default metor6wp;