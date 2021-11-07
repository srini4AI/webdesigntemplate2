import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './training.module.css';
import styles1 from '../../components/footer/footer.module.css';
import { FooterWeb } from '../../components/footer';
import { ScrollToTop } from '../../components/scrolltotop';
const Training = () =>{
    return(<React.Fragment>
      <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
        <div className="container">
 
 <div className="d-flex justify-content-between align-items-center">
     <h2 className={styles.headingH2}>Training</h2>
     <Breadcrumb>
         <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
         <Breadcrumb.Item active>Training</Breadcrumb.Item>
     </Breadcrumb>
 </div>

</div>

        </section>
        <section >
            <div className="container  mb-4">
                <div className="row">
                    <div className="col-lg-12 pb-5">
                    <h3 className={styles.aboutH3}>Training</h3>
                        {/* <p className={styles.aboutp}><b>ECIL Rapiscan Ltd,</b> incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise)</p> */}
                        <ul>
                            <li>We will conduct periodic and refreshment training sessions for our Field Service engineers on all our products by experienced trainers.</li>
                            <li>We also provide operational training to the end-user on the use of equipment as a Standard practice during the installation.</li>
                            <li>We have a separate training room at our Head Office, Hyderabad, equipped with several machine models and necessary components / accessories to provide theoretical and practical training.</li>
                        </ul>
                    </div>
                
                </div>
            </div>
        </section>
        <br/><br/><br/><br/><br/><br/><br/><br/>
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
    </React.Fragment>);
}

export default Training;