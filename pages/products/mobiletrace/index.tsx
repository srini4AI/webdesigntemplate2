import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './mobiletrace.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const Itemiser4DX = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>Mobiletrace</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Trace Detection</Breadcrumb.Item>
                        <Breadcrumb.Item active>MOBILETRACE</Breadcrumb.Item>
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
            <p className={styles.productdescr}>To help keep ahead of the growing challenges of explosives and narcotics detection, the MobileTrace handheld packs the advanced capabilities of simultaneous dual-mode detection into a powerful, user-friendly trace detector.

</p>
<p className={styles.productdescr}> MobileTrace, the first simultaneous dual-mode detector, expands the range of target explosives that can be identified in a single sample for faster, more comprehensive security screening. Rapiscan Systems patented  Ion Trap Mobility Spectrometry (ITMS™) technology offers the detection, sensitivity and reliability proven at military bases, border crossings, airports, and other critical security checkpoints around the world.
</p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> SIMULTANEOUS, DUAL-MODE DETECTION OF EXPLOSIVE & NARCOTICS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> RESULTS IN LITTLE AS 8 SECONDS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> NETWORK READY/USB COMPLIANT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> 3-D VIEW AND INTENSITY MAP FOR ANALYTICAL INTERPRETATION</span></li>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}>FLEXIBLE USER<br/>INTERFACE</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>HOT SWAPPABLE,<br/>STATE-OF-THE-ART <br/>BATTERY FOR LONG </p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>ERGONOMIC<br/>DESIGN FOR GRAB-<br/>DESIGN FOR GRAB-<br/>PORTABILITY</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PARTICLE AND <br/>VAPOR DETECTION</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PORTABLE<br/></p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASY OPERATION, RICH DISPLAYS</h3>
              <ul  className={styles.listPara}>
                <li>MobileTrace graphical interface is intuitive and easy to learn for new operators.</li>
                <li>Data is evaluated on a 800 NIT 3.5 in. (8.9 cm) color screen using five display options:</li>
                <li>Peaks view for a tabular form of time-of-flight and height of peaks detected.</li>
                <li>Plasmagram for a graphical representation of peaks detected.</li>
                <li>3-D view and Intensity Map for analytical interpretation (not shown).</li>
                <li>DeTo accommodate a range of lighting situations, MobileTrace is designed with adjustable display brightness.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>PARTICLE AND VAPOR SAMPLING</h3>  
              <ul  className={styles.listPara}>
	<li>MobileTrace gives you the flexibility to swipe surfaces for trace particles or to analyze vapors.</li>
	<li>Particle swipe: MobileTrace conveniently uses standard Rapiscan Systems sample traps. The Teflon-coated traps are swiped across a surface and inserted into the system for analysis. Typical sampling objects include clothing, skin, baggage, cargo, vehicles, containers, tickets and ID cards.</li>
	<li>Vapor sampling: Vapors are drawn through a nozzle directly into the system for analysis. Typical sampling objects.</li>
</ul>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>VERSATILE</h3>
              <ul  className={styles.listPara}>
                <li>Three default user levels (operator, maintenance and administrator) for access control.</li>
                <li>State-of-the-art networking capability and USB connectivity.</li>
                <li>ITMS™ desktop software enables file management, analysis and printing.</li>
                <li>Option to use substance codes instead of substance names for privacy and security.</li>
                <li>Expandable libraries accommodate unique user requirements.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASY TO USE</h3>  
              <ul  className={styles.listPara}>
                <li>Touch screen with text or icon menus, 800 NIT 3.5 in. (8.9 cm) color, glare resistant display.</li>
                <li>Navigation pad, touch screen keypad and optional keyboard.</li>
                <li>Easy-to-learn graphical interface.</li>
                <li>Semi-automated or manual calibration.</li>
                <li>Easy access to components for efficient maintenance.</li>
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

export default Itemiser4DX;