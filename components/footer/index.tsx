import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
export const FooterWeb = () =>{
return (
    <footer id={styles.footer}>
        <div className={styles.footerTop}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6 ">
                        <div className={styles.footerInfo}>
                            <h3>
                            <div className={styles.logoNav}><img src="/images/rapiscan_ltd_1.png" width="75"/><h4> ECIL - Rapiscan Ltd</h4></div>
                            </h3>
                            <p>
                            8-1-305 & 306, 6th Floor,  <br/>
                            Unit-2, Anand Silicon Chip,<br/>
                            Shaikpet, Tolichowki,<br/> Hyderabad – 500 008, Telengana,<br/><br/>
                                        <strong>Phone:</strong> 040 6700 0800<br/>
                                            {/* <strong>Email:</strong> info@example.com<br/> */}
                                            </p>
                                            <div className="social-links mt-3">
                                                <a href="#" className="twitter"> <FontAwesomeIcon icon="coffee" /></a>
                                                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                                                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                                                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                                                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                        <div className={`${'col-lg-2 col-md-6 d-none d-lg-block'} ${styles.footerLinks}`}>
                                            <h4>Useful Links</h4>
                                            <ul>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Home</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Who we are</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Clients</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Careers</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Management</a></li>
                                            </ul>
                                        </div>

                                        <div className={`${'col-lg-2 col-md-6 d-none d-lg-block'} ${styles.footerLinks}`}>
                                            <h4>Our Services</h4>
                                            <ul>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">X-Ray Baggage Scanners</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Explosive Trace Detectors</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Door Frame Metal Detectors</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Hand Held Metal Detectors</a></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <a href="#">Vehicle Mounted X-Ray Baggage Scanners</a></li>
                                            </ul>
                                        </div>

                                        <div className={`${'col-lg-4 col-md-6 d-none d-lg-block'} ${styles.footerNewsletter}`}>
                                            <h4>Our Newsletter</h4>
                                            <p>Subscribe to our Newsletter</p>
                                            <form action="" method="post">
                                            <input type ="email" name="email"/><input type ="submit" value="Subscribe"/>
                                            </form>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className={styles.container}>
                                    <div className={styles.copyright}>
                                        © 2021 <strong><span>ECIL Rapiscan Limited.</span></strong> All Rights Reserved
                                    </div>
           
                                </div>

                            </footer>);
};