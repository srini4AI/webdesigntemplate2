import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarHeader } from '../../components/navbar';
import styles from './service.module.css';
import { Breadcrumb } from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import { GoogleMap, Marker } from "react-google-maps";
import { MyMap } from '../../components/myMap';
import styles1 from '../../components/footer/footer.module.css';
import { FooterWeb } from '../../components/footer';
import { ScrollToTop } from '../../components/scrolltotop';
 const Service = () =>{
     const [marker,setIsMarker] = useState<boolean>(true);
     
    useEffect(()=>{
        AOS.init({
          duration : 500
        });
      },[])
    return (<>
       <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>Service Network & Our Strengths</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
                        <Breadcrumb.Item active>Service Network & Our Strengths</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section>
            <div className="container  mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className={styles.aboutH3}>Our Strengths</h3>
                        {/* <p className={styles.aboutp}><b>ECIL Rapiscan Ltd,</b> incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise)</p> */}
                        <ul className={styles.ulList}>
                  <li>
                  <FontAwesomeIcon icon={faCheckDouble}  /> 25+ Years of experience in service operations. 
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheckDouble}  /> Highly appreciated service organization by customers in India with customer satisfactions levels of over 99%. 
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheckDouble}  /> With our entire service network, we provide services to every corner of our country, including remote locations. 
                  </li>
                  </ul>
          </div>
        </div>
        </div>
          </section>
          <section>
          <div className="container">
          <h3 className={styles.aboutH3}>Service Network</h3>
              <div className="card">
              <MyMap isMarkerShown={marker}
               googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC3HHUyMrJnkhilzj5w2_MYZcvMi1_k3ak&v=3.exp&libraries=geometry,drawing,places"
               loadingElement={<div style={{ height: `100%` }} />}
               containerElement={<div style={{ height: `900px` }} />}
               mapElement={<div style={{ height: `100%` }} />}></MyMap>
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
}

export default Service;