import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './spares.module.css';
import styles1 from '../../components/footer/footer.module.css';
import { FooterWeb } from '../../components/footer';
import { ScrollToTop } from '../../components/scrolltotop';
const Spares = () =>{
    return(<React.Fragment>
      <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
        <div className="container">
 
 <div className="d-flex justify-content-between align-items-center">
     <h2 className={styles.headingH2}>Spares</h2>
     <Breadcrumb>
         <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
         <Breadcrumb.Item active>Spares</Breadcrumb.Item>
     </Breadcrumb>
 </div>

</div>

        </section>
        <section>
            <div className="container  mb-4">
                <div className="row">
                    <div className="col-lg-12 ">
                    <h3 className={styles.aboutH3}>Spares and Consumables</h3>
                        {/* <p className={styles.aboutp}><b>ECIL Rapiscan Ltd,</b> incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise)</p> */}
                        <ul>
                            <li>Availability of adequate spares and consumables in our centralized stores as well as service branches.</li>
                            <li>Replenishing the stock levels upon immediate consumption.</li>
                            <li>To increase the life of our products, we always recommend that our customers always use genuine spare parts and use services of authorized personnel only.</li>
                        </ul>
                    </div>
                    <div className="col-lg-12  mb-4">
                    <h3 className={styles.aboutH3}>In-house Repair Shop</h3>
                        {/* <p className={styles.aboutp}><b>ECIL Rapiscan Ltd,</b> incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise)</p> */}
                        <ul>
                            <li>We have developed an In-house repair shop to repair electrical/electronic components, PCB’s, computers and electro-mechanical modules etc.</li>
                            <li>Carry out the upgradation of the systems in regards to hardware, firmware and software.</li>
                            <li>You can rely on ECIL Rapiscan Limited to make all necessary repairs as quickly and efficiently as possible.</li>
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
    </React.Fragment>);
}

export default Spares;