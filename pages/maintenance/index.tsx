import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './maintenance.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../components/footer';
import styles1 from '../../components/footer/footer.module.css';
import { ScrollToTop } from '../../components/scrolltotop';
const Maintenance = () =>{
    return (<>
        <NavBarHeader></NavBarHeader>
         <section className={styles.breadcrumbs}>
             <div className="container">
 
                 <div className="d-flex justify-content-between align-items-center">
                     <h2 className={styles.headingH2}>Maintenance</h2>
                     <Breadcrumb>
                         <Breadcrumb.Item href="#">Service Support</Breadcrumb.Item>
                         <Breadcrumb.Item active>Maintenance</Breadcrumb.Item>
                     </Breadcrumb>
                 </div>
 
             </div>
         </section>
         <section className={styles.resume}>
            <div className="container  mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className={styles.aboutH3}>Maintenance</h3>
                        <p className={styles.aboutp}>It is essential to maintain the machines properly to ensure a good life.ECIL Rapiscan Ltd provides a standard one-year manufacturer’s warranty on the products and offers maintenance contracts, standard and tailored to meet customer needs.In addition, we have service support in every corner of our country, currently 27 branches but not limited to, with highly skilled field service engineers to respond quickly and repair accurately to minimize the downtime.</p>

                        <div className="row m-4">
          <div className="col-lg-6">
 
  

            {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Customer Service:	</h4>
              <ul>
                <li>Dedicated service staff of 225+ with 27 service branches PAN India.</li>
                <li>On-site service support </li>
                <li>Guaranteed Response/resolution time</li>
                <li>Preventive Maintenance</li>
                <li>Corrective Maintenance / Break-Down Calls</li>
                <li>Operational Training</li>
                <li>Capable of meeting  customer-specified SLA’s</li>
              </ul>
            </div>
            
          </div>
          <div className="col-lg-6">
          {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Field Service:</h4>
            
              <ul>
                <li>Dedicated service staff of 225+ with 27 service branches PAN India.</li>
                <li>On-site service support </li>
                <li>Guaranteed Response/resolution time</li>
                <li>Preventive Maintenance</li>
                <li>Corrective Maintenance / Break-Down Calls</li>
                <li>Operational Training</li>
                <li>Capable of meeting  customer-specified SLA’s</li>
              </ul>
            </div>

          </div>
        </div>
                        {/* <p className={styles.aboutp}><b>ECIL Rapiscan Ltd,</b> incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise)</p> */}
                        {/* <ul className={styles.ulList}>
                  <li>
                  <FontAwesomeIcon icon={faCheckDouble}  /> 25+ Years of experience in service operations. 
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheckDouble}  /> Highly appreciated service organization by customers in India with customer satisfactions levels of over 99%. 
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheckDouble}  /> With our entire service network, we provide services to every corner of our country, including remote locations. 
                  </li>
                  </ul> */}
          </div>
          <div className="col-lg-12">
          <h3 className={styles.aboutH3}>Maintenance Contracts:</h3>
          <p className={styles.aboutp}>ECIL Rapiscan Ltd offers after-sales service with three standard levels of contracts according to the needs and budget. The service contracts are available for purchase during the purchase of the machine or when the equipment&apos;s warranty is expiring. </p>
          <p className={styles.aboutp}>We can also customize any Contract to meet a customer’s specific requirements.  </p>
        </div>
        </div>
        </div>
          </section>

          <section id="pricing" className={styles.pricing}>
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className={styles.sectionTitle}>
          <h2>SERVICES</h2>
        </div>

        <div className="row">

          <div className="col-lg-4">
            <div className={styles.box}>
              <h3>PLATINUM</h3>
              <h4><span className="mx-4">(Available in Delhi, Mumbai, Chennai, Bangalore, Kochi, Hyderabad & Kolkata)</span></h4>
              <ul>
                <li><div style={{"display":"inline-block","height":"25px", "width":"25px"}}><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> </div><span> Technical Support - 24 Hours / 7 Days  / 365 Days a Year</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Service Engineer attending Complaint – 24 Hours / 7 Days  / 365 Days a Year</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Response Time – 6 Hrs. from the time of complaint.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Resolution Time - 24 Hrs. from the time of complaint.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Resolution Time (Failure of major components) - 48 Hrs. from the time of complaint.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Quarterly Preventive Maintenance.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> All necessary spares Including consumables.</span></li>
              </ul>
              <a href="#" className={`${styles.buybbtn}`}>Get Started</a>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className={`${styles.box} ${styles.featured}`}>
              <h3 className={styles.featuredHead}>GOLD</h3>
              <h4><span>(Available at all Service Branch locations)</span></h4>
              <ul>
              <li><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> Technical Support - 24 Hours / 7 Days  / 365 Days a Year</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Service Engineer attending Complaint – Monday to Friday (9.00AM to 6.00PM)</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Response Time – 12 Hrs. (Local) & 36 Hrs. (Out-station) from the time of complaint.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Resolution Time - 36 Hrs. (Local) & 72 Hrs. (Out-station) from the time of complaint.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Resolution Time (Failure of significant components) - 96 Hrs. from the time of complaint.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Quarterly Preventive Maintenance.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> All necessary Spares excluding Consumables </span></li>
              </ul>
              <a href="#" className={`${styles.buybbtn}`}>Get Started</a>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className={styles.box}>
              <h3>SILVER</h3>
              <h4><span>(Available at all ERL Service Branch locations)</span></h4>
              <ul>
              <li><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> Response Time – 24 Hrs. (Local) & 48 Hrs. (Out-station) from the time the Complaint is lodged</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Resolution Time (Spares not Required) – 36 Hrs. (Local) & 72 Hrs. (Out-station) from the time the Complaint is lodged</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Resolution Time depends on receipt of the spare order.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Quarterly Preventive Maintenance.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> All Spares excluded.</span></li>
              </ul>
              <a href="#" className={`${styles.buybbtn}`}>Get Started</a>
            </div>
          </div>
          <div className="col-lg-12">
          <h3 className={`${styles.aboutH3} my-4`}>Tailored made Contracts:</h3>
          <ul className={styles.tailMade}>
              <li><FontAwesomeIcon icon={faCheckDouble} className="text-primary"  /> <span> Technical Support - 24 Hours / 7 Days  / 365 Days a Year</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Service Engineer attending Complaint – As agreed upon</span></li>
                <li><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /><span> Response Time – As agreed upon.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Resolution Time – As agreed upon.</span></li>
                <li className="na"><FontAwesomeIcon icon={faCheckDouble}  className="text-primary" /> <span> Preventive Maintenance.</span></li>
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
         </>);
};


export default Maintenance;