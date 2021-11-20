import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarHeader } from '../../components/navbar';
import styles from './management.module.css';
import { Breadcrumb } from 'react-bootstrap';
import AOS from 'aos';
import "aos/dist/aos.css";
import { FooterWeb } from '../../components/footer';
import styles1 from '../../components/footer/footer.module.css';
import type { NextPage } from 'next';
import { ScrollToTop } from '../../components/scrolltotop';
 const Management = () =>{
    useEffect(()=>{
        AOS.init({
          duration : 500,

      once: true
        });
      },[])
    return (<>
       <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>Management</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
                        <Breadcrumb.Item active>Management</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <div className="container"  data-aos="zoom-in">
  <div className={styles.card}>
    <div className="row ">
      <div className="col-10">
        <div className={styles["card-block"]}>

          <p className={`${styles.pHead} text-start fs-4 text-info`}>Mr. Deepak Chopra</p>
          <p  className={`text-start  ${styles.pHeadS}`}>Chairman and CEO</p>
          <p className={`text-start  ${styles.pDescr}`}>Mr. Deepak Chopra is one of the founder of the Company, Mr. Chopra has served as the Director of the Company, since its Inception i.e. since from the year 1995.</p>
        </div>
      </div>

      <div className="col-2">
        <img className="img-thumbnail rounded float-end mx-4 mt-4" style={{"height":"200px"}} src="/images/management/chopra_photograph.png" alt=""/>
      </div>
    </div>
    <p   className={`text-start  ${styles.pDescr}   mx-3 mt-3`}>Mr. Chopra is also the founder of OSI Systems, Inc. USA and has served as President, CEO and as a Director since the Company&apos;s inception in May 1987. Mr. Chopra holds a Bachelor of Science in Electronics from Punjab Engineering College and a Master of Science degree in Semiconductor Electronics from the University of Massachusetts, Amherst.</p>
  </div>
  
    </div>
    <div className="container"  data-aos="zoom-in">
  <div className={styles.card}>
    <div className="row ">
      <div className="col-10">
        <div className={styles["card-block"]}>

          <p className={`${styles.pHead} text-start fs-4 text-info`}>Mr. Ajay Mehra</p>
          <p  className={`text-start  ${styles.pHeadS}`}>Executive V.P., OSI Systems and President, Rapiscan Systems</p>
          <p className={`text-start  ${styles.pDescr}`}>Mr. Ajay Mehra served as a Director of the company since its inception. Mr. Mehra is the EVP and Director of OSI Systems, Inc. USA and served the Company in various capacities since, 1989.</p>
        </div>
      </div>

      <div className="col-2">
        <img className="img-thumbnail rounded float-end mx-4 mt-4" src="https://picsum.photos/150?image=380" alt=""/>
      </div>
    </div>
    <p  className={`text-start  ${styles.pDescr}   mx-3 mt-3`}>Mr. Mehra holds a Bachelor of Arts degree from the school of business of the University of Massachusetts, Amherst and MBA degree from Pepperdine University.</p>
  </div>
  
    </div>
    <div className="container"  data-aos="zoom-in">
  <div className={styles.card}>
    <div className="row ">
      <div className="col-10">
        <div className={styles["card-block"]}>

          <p className={`${styles.pHead} text-start fs-4 text-info`}>Rear Admiral Sanjay Chaubey (Retd.)</p>
          <p  className={`text-start  ${styles.pHeadS}`}>Chairman & Managing Director, Electronics Corporation of India Limited</p>
          <p className={`text-start  ${styles.pDescr}`}>Rear Admiral Sanjay Chaubey (Retd.) has taken over as Chairman and Managing Director of the Electronics Corporation of India Ltd (ECIL) on 1st July, 2018.</p>
        </div>
      </div>

      <div className="col-2">
        <img className="img-thumbnail rounded float-end mx-4 mt-4" src="/images/management/Rear_Admiral_Sanjay_Chaubey.png" alt=""/>
      </div>
    </div>
    <p  className={`text-start  ${styles.pDescr} mx-3 mt-3`}>Mr. Chaubey was holding the position of Director (Technical) prior to this appointment and he is a graduate in Electrical Engineering from the National Institute of Technology, Rourkela and a post graduate in Communication Engineering from Indian Institute of Science, Bengaluru.</p>
  </div>
  
    </div>

    <div className="container"  data-aos="zoom-in">
  <div className={styles.card}>
    <div className="row ">
      <div className="col-lg-10">
        <div className={styles["card-block"]}>

          <p className={`${styles.pHead} text-start fs-4 text-info`}>Mr. Mohinder Chopra</p>
          <p  className={`text-start  ${styles.pHeadS}`}>Director</p>
          <p className={`text-start  ${styles.pDescr}`}>Mr. Mohinder Chopra holds a Bachelor of Electrical Engineering from IIT Delhi and MBA from University of Massachusetts, Amhert USA.</p>
        </div>
      </div>

      <div className="col-lg-2">
        <img className="img-thumbnail rounded float-end mx-4 mt-4" src="/images/management/mohinder_chopr_photo.png" alt=""/>
      </div>
    </div>
    <p  className={`text-start mx-3 mt-2 ${styles.pDescr}`}>Mr. Chopra served as alternate director of the company since many years and presently he is the Director of our company i.e., from 28.12.2015 and also holds the position of directorship In OSI Systems Private Limited since 01.11.2005</p>
  </div>
  
    </div>
    <div className="container mb-4" data-aos="zoom-in">
  <div className={styles.card}>
    <div className="row ">
      <div className="col-lg-10">
        <div className={styles["card-block"]}>

          <p className={`${styles.pHead} text-start fs-4 text-info`}>Mr. Vinod Kapoor</p>
          <p  className={`text-start  ${styles.pHeadS}`}>Executive Vice President (Finance), ECIL-Rapiscan Limited</p>
          <p className={`text-start  ${styles.pDescr}`}>Mr. Vinod Kapoor joined ECIL-Rapiscan Limited in the year 1997 and presently serving as the Whole-time Director of the company.</p>
        </div>
      </div>

      <div className="col-lg-2">
        <img className="img-thumbnail rounded float-end mx-4 mt-4" src="/images/management/Vinod_kapoor.jpeg" alt=""/>
      </div>
    </div>
    <p  className={`text-start mx-3 mt-2 ${styles.pDescr}`}>Prior to ERL, he has served as an Accounts Officer with Indian Immunological Limited, a unit of National Diary Development Board. Mr. Kapoor holds a Bachelor of Law degree and a Master degree in Business Administration.</p>
  </div>
  
    </div>
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

export default Management;