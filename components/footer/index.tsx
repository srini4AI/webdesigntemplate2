import React from 'react';
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
export const FooterWeb = () =>{
return (
<React.Fragment>
        <div className="col-lg-4 col-md-12 col-12 ">
            <div className={styles.footerInfo}>
                <h4 className={styles.logo}>
                    <div className={styles.logoNav}><img src="/images/rapiscan_ltd_1ss.png" width="75" /><h4> ECIL - Rapiscan Ltd</h4></div>
                </h4>
                <p>
                    8-1-305 & 306, 6th Floor,  <br />
                    Unit-2, Anand Silicon Chip,<br />
                    Shaikpet, Tolichowki,<br /> Hyderabad – 500 008, Telengana,<br /><br />
                    <strong>Phone:</strong> 040 6700 0800<br />
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

        <div className={`${'col-lg-4 col-md-6 d-none d-lg-block px-5'} ${styles.footerLinks}`}>
            <h4>Useful Links</h4>
            <ul>
                <li>     <FontAwesomeIcon icon={faChevronRight} size="2x" /> <Link  href="/"><a>Home</a></Link></li>
                <li>     <FontAwesomeIcon icon={faChevronRight} size="2x" /> <Link href="/about"><a>About us</a></Link></li>
                <li>     <FontAwesomeIcon icon={faChevronRight} size="2x" /> <Link href="/maintenance"><a>Maintenance</a></Link></li>
                <li>     <FontAwesomeIcon icon={faChevronRight} size="2x" /> <Link href="/contactus"><a>Contact Us</a></Link></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <Link href="/management"><a>Management</a></Link></li>
                                            </ul>
                                        </div>

                                        <div className={`${'col-lg-4 col-md-6 d-none d-lg-block'} ${styles.footerLinks}`}>
                                            <h4>Our Services</h4>
                                            <ul>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <Link href= "/category/xray-baggage" ><a className={styles.productA}>X-Ray Baggage Scanners</a></Link></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <Link href= "/category/exp-trace-detectors" ><a className={styles.productA}>Explosive Trace Detectors</a></Link></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <Link href= "/category/door-frame-metal-detectors" ><a className={styles.productA}>Door Frame Metal Detectors</a></Link></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <Link href= "/category/hand-held-metal-detectors" ><a className={styles.productA}>Hand Held Metal Detectors</a></Link></li>
                                                <li>     <FontAwesomeIcon icon={faChevronRight}  size="2x" /> <Link href= "/category/vehicle-mounted-x-Ray-baggage-scanners" ><a className={styles.productA}>Vehicle Mounted X-Ray Baggage Scanners</a></Link></li>
                                            </ul>
                                        </div>

                                        {/* <div className={`${'col-lg-4 col-md-6 d-none d-lg-block'} ${styles.footerNewsletter}`}>
                                            <h4>Our Newsletter</h4>
                                            <p>Subscribe to our Newsletter</p>
                                            <form action="" method="post">
                                            <input type ="email" name="email"/><input style={{"textAlign":"left"}} type ="submit" value="Subscribe"/>
                                            </form>

                                            </div> */}

                                            </React.Fragment>

                     

                            );
};