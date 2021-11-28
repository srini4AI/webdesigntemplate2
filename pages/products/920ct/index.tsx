import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../../components/navbar';
import styles from './920ct.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble, faCircle, faDownload } from '@fortawesome/free-solid-svg-icons';
import { FooterWeb } from '../../../components/footer';
import styles1 from '../../../components/footer/footer.module.css';
import { ScrollToTop } from '../../../components/scrolltotop';
const r920ct = () =>{
    return(<><NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>920CT</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Products</Breadcrumb.Item>
                        <Breadcrumb.Item active>BAGGAGE AND PARCEL INSPECTION</Breadcrumb.Item>
                        <Breadcrumb.Item active>920CT</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section id="about" className="about">
      <div className="container aos-init aos-animate" data-aos="fade-up">

   

        <div className="row my-4">
          <div className="col-lg-6 text-center">
           
            <img src="/images/products/920ct.jpg" className="img-fluid pt-5" alt=""/>
            <br/><br/><a href="/images/productDataSheet/Rapsican-920CT-182402.pdf" style={{"margin":"0 auto"}} className="btn btn-primary btn-lg" download><FontAwesomeIcon icon={faDownload}  /> Download</a>
            </div>
          
          <div className="col-lg-6 pt-4 pt-lg-0 content">
            <p className={styles.productdescr}>We believe in a future that is safe for everyone, which is why at Rapiscan Systems we are committed to providing the best possible solutions to meet your needs.</p>

<p className={styles.productdescr}>As a leader in security screening we are proud to introduce the 920CT.</p>

<p className={styles.productdescr}>The 920CT is designed to advance aviation cabin baggage screening into the future. It improves passenger experience while increasing their safety.</p>
   
          </div>
        </div>

      </div>
    </section>
    <section>
        <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>INTELLIGENT SCREENING</h3>
              <p  className={styles.listPara}>920CT is intelligent. It can detect threats quickly and make decisions based on what it sees. It’s intuitive and simple-to-use touch screen paired with its 360-degree image view, makes inspection easier and faster.</p>
              <p  className={styles.listPara}>It provides the highest resolution 3D image allowing the highest degree of On Screen Inspection and Resolution (OSIR) for the operator reducing the need to open and manually search bags for both explosives and other contraband.</p>
                </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>BEAUTY & BRAINS </h3>  
              <p className={styles.listPara}>With ever-increasing global threats and new regulations being introduced, the 920CT gives you state of the art technology designed to meet the strictest of current and future regulations all within a contemporary design.</p>
              <p className={styles.listPara}>920CT utilizes cutting-edge Dual-Energy technology and sophisticated algorithms to provide the highest level of automatic detection of explosives and the detection of densely shielded areas meeting stringent global standards.</p>
              <p className={styles.listPara}>The software and detection algorithms have been designed to be easily upgraded in the future to meet new standards and requirements as they are developed.</p>
             </div>    
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>STAY IN THE BAG</h3>
              <p  className={styles.listPara}>Our system causes less stress for passengers as they will be able to leave their large electronics and ultimately their liquids in the bag, meaning they spend less time at the checkpoint and more time utilizing the rest of the airport.</p>
              <p  className={styles.listPara}>The system architecture is based on proven medical Computed Tomography (CT) technology that resolves today’s and tomorrow’s challenges facing regulators and airports.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>THE PERFECT COUPLE</h3>  
              <p  className={styles.listPara}>920CT can easily integrate with Rapiscan Systems security checkpoint Tray Return System (TRS™). The harmonious combination of 920CT and TRS creates a seamless experience for airports by strengthening security, increasing passenger throughput and staff efficiency.</p>
              <p  className={styles.listPara}>In conjunction with an optimal layout it provides the best passenger experience, therefore keeping the checkpoint flowing quickly and efficiently. It is a proven design for maximum passenger throughput with the lowest number of rejected passenger bags.</p>
                </div>
            </div>
             <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
              <h3 className={styles.aboutH3}>GLOBAL PEACE OF MIND</h3>
              <p  className={styles.listPara}>With our experienced customer service team, that reaches every corner of the globe, you can be confident your project runs smoothly from design to installation and beyond to continued support.</p>
              <p  className={styles.listPara}>The 920CT has a contactless gantry by using cutting-edge bearing free and inductive coupling technology. This offers friction-free, non-contact operation, alongside higher speeds, better reliability, and less noise resulting in reduced maintenance costs and higher operational availability.</p>
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

export default r920ct;