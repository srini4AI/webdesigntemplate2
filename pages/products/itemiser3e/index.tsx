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
import ProductList from '../../../components/productList';
const Itemiser3E = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>ITEMISER 3E</h2>
                    <Breadcrumb className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Trace Detection</Breadcrumb.Item>
                        <Breadcrumb.Item active>Itemiser 3E</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6">
          <ProductList products={['/images/products/Itemiser3E-1.jpeg','/images/products/Itemiser3E-2.jpeg']}></ProductList>
            {/* <img src="/images/products/5X.jpg" className="img-fluid pt-5" alt=""/> */}
            </div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>Rapiscan Systems flexible, lightweight desktop detector simultaneously analyzes both positive and negative ions, allowing for advanced explosive and narcotic contraband detection.</p>
            <p  className={styles.productdescr}>
            The Itemiser 3 Enhanced is the first trace detector in the world to simultaneously detect positive and negative ions, enabling the detection of a broad range of explosives and narcotics. Detection of both positive and negative ions allows for effective identification from a single sample. It delivers fast, simultaneous explosives and narcotics detection in a package that is ergonomic and portable.
            </p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> WORLD’S 1ST SIMULTANEOUS DUAL-MODE TRACE DETECTOR</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> CAN DETECT A WIDE RANGE OF TARGETED SUBSTANCES</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> RESULTS IN AS LITTLE AS 8 SECONDS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EASY TO LEARN AND OPERATE</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXPANDABLE LIBRARIES</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> A COMPREHENSIVE ARCHIVE OF SAVED DATA AND ALARM FILES</span></li>
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
                    <div className="offset-md-1 col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"  color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>60 MINUTE<br/> BATTERY BACKUP</p>
                    </div>
                    <div className=" col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PORTABLE &<br/>VERSATILE</p>
                    </div>
                    <div className=" col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>SWIPE OR VACUUM</p>
                    </div>
                    <div className=" col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>EASE OF USE</p>
                    </div>
                    <div className=" col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>RELIABLE<br/></p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SIMULTANEOUS DUAL-MODE DETECTION</h3>
              <ul  className={styles.listPara}>
                <li>Traditional IMS instruments operate in either positive or negative mode, but not both modes simultaneously.</li>
                <li>While negative mode operation detects the majority of explosives, certain explosives are detected in positive mode. Therefore to rule out the presence of all explosives, conventional IMS detectors require operators to sample and test using two separate detectors.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASY-TO-USE OPERATOR INTERFACE</h3>  
              <ul  className={styles.listPara}>
	<li>Results require minimal interpretation, so operators may concentrate on obtaining a good sample. Itemiser® 3 Enhanced’s onboard computer automatically handles all data logging, including time, date, and sample analysis for each alarm. A complete history of saved data and alarm files can be recalled and printed at any time.</li>
</ul>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EASY-TO-USE OPERATOR INTERFACE</h3>  
              <ul  className={styles.listPara}>
                <p>The Itemiser® 3 Enhanced was designed with portability and flexibility in mind. This unit offers a compact footprint, folding touch screen, easy-carrying handle, a 60-minute battery backup, and the potential to be relocated quickly.</p>
                <li> Particle swipe: Reusable sample traps are swiped across a surface and then inserted into the Itemiser® 3 Enhanced for analysis. Typical surfaces include baggage, cargo, vehicles, containers, tickets, and ID cards.</li>
                <li>Optional vacuum sampling: An optional vacuum sampler draws vapors into a sponge-like sample trap, which is then inserted into the Itemiser® 3 Enhanced for analysis. Applications include cargo containers, car trunks, and luggage.</li>
              </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SENSITIVITY/SELECTIVITY</h3>  
              <ul  className={styles.listPara}>
                <li>Patented ITMS™ technology helps increase ion population, enabling detection of microscopic traces of explosives and narcotics.
Patented switching mechanism simultaneously detects positive and negative ions, enabling the detection of a broad range of explosives, while also detecting narcotics.</li>
              </ul>
              <h3 className={styles.aboutH3}>VERSATILE</h3>  
              <ul className={styles.listPara}>
                <li>Remote monitoring capable.</li>
                <li>Detects both explosives and narcotics.</li>
<li>Semi-permeable membrane excludes dust and dirt to allow continued operation in environments that have high traffic, humidity or contamination.</li>
<li>Expandable libraries to accommodate unique user requirements.</li>
<li>Three default user levels (operator, maintenance and administrator) for greater access control.</li>
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

export default Itemiser3E;