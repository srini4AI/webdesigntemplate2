import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './itemiser5x.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle,faDownload } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import { ScrollToTop } from '../../../components/scrolltotop';
const Itemiser = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>Itemiser 5X</h2>
                    <Breadcrumb className="d-none d-sm-block">
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>Itemiser 5X</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-4 text-center">
           
            <img src="/images/products/5X.jpg" className="img-fluid pt-5" alt=""/>
            <a href="/images/productDataSheet/LS-Itemiser-5X-Trace-Detection.pdf" style={{"margin":"0 auto"}} className="btn btn-primary btn-lg" download><FontAwesomeIcon icon={faDownload}  /> Download</a>
            </div>
          
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>New for 2021. The Itemiser 5X uses optimized detection libraries and advanced software algorithms, making it the ideal solution for detecting trace amounts of explosive and narcotic threats.</p>
            <div className="row">
              <div className="col-lg-12">
              <ul className={`${styles.productslist} list-group list-group-flush`}>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span>NEW SUBSYSTEMS FOR GREATER RELIABILITY & ADVANCED SOFTWARE ALGORITHMS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> FAST CLEAR DOWNS</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> NEW DESORBER DESIGN MAKES FOR MORE EFFICIENT SAMPLE INTRODUCTION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> NEW SAMPLE WAND WITH GREATER ERGONOMICS AND SAMPLE INTRODUCTION</span></li>
    <li className="list-group-item"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> REMOTE MONITORING VIA REMOTE CONNECT CONSOLE</span></li>
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
                    <p className={`${styles.circleIconp} text-center mt-3`}>INCREASED USER <br/> EXPERIENCE</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>COST EFFECTIVE</p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>RELIABLE<br/></p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>PORTABILITY<br/></p>
                    </div>
                    <div className="col-lg-2 col-sm-4  col-12">
                    <div className={`${styles.circleIcon} ${styles.circleIconp}`}>
                
                        <FontAwesomeIcon icon={faCheck} className="text-center"   color="white" size="2x"  />
                        
                    </div>
                    <p className={`${styles.circleIconp} text-center mt-3`}>EASE OF USE<br/></p>
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

export default Itemiser;