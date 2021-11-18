import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './920dx.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import { ScrollToTop } from '../../../components/scrolltotop';
const r920dx = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>920DX</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>baggage and parcel inspection</Breadcrumb.Item>
                        <Breadcrumb.Item active>920DX</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6">
           
            <img src="/images/products/920DX.jpg" className="img-fluid pt-5" alt=""/></div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>The new 920DX is a High Performance 640mm by 430mm tunnel dual view checkpoint screening system with excellent threat detection alert capabilities.</p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> INDUSTRY BEST RESOLUTION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> EXPLOSIVES & NARCOTICS DETECTION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> LOW DENSITY IMAGE ENHANCEMENT</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> MATRIXING, NETWORKING & REMOTE VIEWING</span></li>
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
                    <div className="col-2">
                    <div className={`${styles.circleIcon}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"  color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>EXPLOSIVE<br/> THREATS,<br/> NARCOTICS &<br/> DENSITY ALERTS</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>17 IMAGE <br/>PROCESSING <br/>FUNCTIONS</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>SINERGY LOW<br/>DENSITY<br/>ENHANCEMENT</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>REMOTE STATUS<br/>MONITORING</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>MULTIPLEXING<br/>AND MATRIXING</p>
                    </div>
                    <div className="col-2">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>TRAY RETURN<br/>SYSTEM<br/>COMPATIBLE</p>
                    </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>SPECTRUM 4-COLOR IMAGING</h3>
              <p  className={styles.listPara}>920DX can present images to the operator in the Classic 4-color and the new proprietary Spectrum 4-color (SP4) option providing superior image, allowing improved security by quick and accurate identification of threats and increase in throughput.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>DUAL MODE AUTO ZEFF </h3>  
              <p className={styles.listPara}>The Dual Mode Zeff feature aids the operator in the identification of organic materials, either in Range Mode which highlights areas based on operator selected Z-effective values of 7, 8 or 9, or in Interactive Mode which gives the operator the option to display the Z-effective number of a selected pixel.</p>
             </div>    
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EXPLOSIVES AND NARCOTICS DETECTION</h3>
              <p  className={styles.listPara}>
              Target and NARCScan are designed to detect a wide range of explosives and narcotics respectively in real time during the scanning process by marking a potential threat on the X-ray image. Rapiscan Systems detection algorithms are based on regulatory approved material analysis techniques.
              </p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>EUROPEAN AVIATION COMPLIANCE</h3>  
              <p  className={styles.listPara}> 920DX performance is in full compliance with the mandatory regulations (EC) No. 300/2008, (EC) Implementing Regulation 1998/2015 and update 815/2017, EC Implementing Decision 8005/2015 and update 3030/2017 for aviation security in the European Union.</p>
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

export default r920dx;