import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './metor6m.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
const metor6m = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>METOR 6M</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>people screening</Breadcrumb.Item>
                        <Breadcrumb.Item active>METOR 6M</Breadcrumb.Item>
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
            <p className={styles.productdescr}>Enhanced security features integrated for people screening at checkpoints and access controlled entries.</p>
            <p  className={styles.productdescr}>
            The Metor 6M is a versatile multi-purpose multi-zone Walk-Through Metal Detector (WTMD) used for various threat items and contraband detection.
            </p>
            <p  className={styles.productdescr}>
            Typical applications include passenger screening at airports and seaports, visitor screening at courthouses, federal buildings and prisons, access control in conferences, public buildings, sporting or other special events, stadiums and concerts, employee and visitor screening in power plants or factories as well as screening in hotels, restaurants, casinos, and night clubs.
            </p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> SUPERIOR DISCRIMINATION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> RELIABLE DETECTION OF THREAT ITEMS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> HIGH TRAFFIC THROUGHPUT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> HIGH EFFICIENCY SCREENING CAPABILITY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> SUITABILITY FOR VERSATILE APPLICATIONS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> SUPERIOR IMMUNITY</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EASY TO INSTALL & OPERATE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> BUILT-IN ADVANCED FEATURES FOR ENHANCED SECURITY & USABILITY</span></li>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}>ACCURATE 20 <br/>SEGMENT <br/>LOCATION DISPLAY</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>RANDOM ALARM<br/>FUNCTIONALITY</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>INTELLIGENT<br/>TRAFFIC COUNTERS</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>IP55 PROTECTION<br/>AGAINST<br/>INTRUSION OF<br/>FOREIGN OBJECTS<br/>& WATER</p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>RADIATION DETECTION</h3>
              <p  className={styles.listPara}>Metor 6M can be integrated with radiation detection capability to combine multi threat detection of both metal and radioactive materials. The configuration enables either gamma or gamma/neutron detection options and is available as a field upgradeable kit.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>RANDOM ALARM FUNCTION</h3>  
              <ul  className={styles.listPara}>
	<li>The Metor 6M has a random alarm function that enables security personnel to randomly choose individuals for an additional security check.</li>
	<li>With the new dual random alarm feature, people who cause a normal alarm are also subject to a random alarm.</li>
</ul>
                </div>
                
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ENHANCED SECURITY</h3>
              <p  className={styles.listPara}>
              The latest features for advanced security are available on the Metor 6M. Calibration guard, power guard and ready-state violation all protect against unwanted tampering to the unit. Fully configurable user levels allow for unprecedented control over who can view and change settings on the Metor 6M.
              </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>INTELLIGENT TRAFFIC COUNTERS FOR RELIABLE STATISTICS</h3>  
              <p  className={styles.listPara}>
                Metor 6M is built with intelligent and virtually invisible traffic counters which are integrated inside the coil panels. Counters are bi-directional with a decrease mode. Alarms, passengers and alarm rates can all be counted.</p>
                </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ENHANCED FEATURES FOR EASIER USABILITY</h3>
              <ul  className={styles.listPara}>
                <li>Automated sensitivity and floor sensitivity functions make the calibration process easy, eliminating the time consuming trial and error method.</li>
                <li>Automated frequency function selects the optimum operating frequency for the installation environment or in case of side-by-side use of more than one unit.</li>
                <li>Preset Detection Programs – The Metor® 6M is delivered with multiple preset detection programs based on international standards, ready to use immediately.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>ZONE DISPLAY</h3>  
              <p  className={styles.listPara}>
	Accurate 20 segment zone display locates the alarmed item(s) on a person quickly making the screening process effective and improving the throughput.

</p>
<h3 className={styles.aboutH3}>EASY TO INSTALL AND OPERATE</h3>  
<p  className={styles.listPara}>With its immunity to electromagnetic interference and vibration, the Metor 6M is easy to install in the most demanding environments. Several units can be placed in close proximity to one another, increasing the level of flexibility when planning an installation site.
</p>
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

export default metor6m;