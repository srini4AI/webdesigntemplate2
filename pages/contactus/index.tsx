import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { NavBarHeader } from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './contactus.module.css';
import styles1 from '../../components/footer/footer.module.css';
import { FooterWeb } from '../../components/footer';
const ContactUs = () =>{
    return(<React.Fragment>
        <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
        <div className="container">
 
 <div className="d-flex justify-content-between align-items-center">
     <h2 className={styles.headingH2}>Contact Us</h2>
     <Breadcrumb>
         <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
         <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
     </Breadcrumb>
 </div>

</div>

        </section>
        <section className={styles.resume}>

            <div className="container  my-4">

            <div className={styles.main}>
<h2>SOUTHERN REGION</h2>
</div>

            <div className="row m-4">
          <div className="col-lg-6">
 
  

            {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Bangalore</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>217, 13th Cross</p>
              <p>Sampige Road</p>
              <p>Malleshwaram</p>
              <p >Bangalore - 560003</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
              <h4>Hyderabad</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>8-1-305 & 306, Unit-2, 6th Floor, Anand Silicon Chip</p>
              <p>Shaikpet, Tolichowki</p>
              <p>Hyderabad - 500 008</p>
              <p>TEL: 040 - 6700 0800</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
               <h4>THIRUVANANTHAPURAM</h4>
               <p>ECIL-Rapiscan Ltd</p>
               <p>Western Traders</p>
               <p>Teluguchetty Complex, Karamana Post</p> 
               <p>Thiruvananthapuram - 695 002</p>
               <p>Kerala</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
                <h4>VISHAKHAPATNAM</h4>
                <p>ECIL-Rapiscan Ltd</p>
                <p>H.No. 1-34-1, Adharsa Nagar</p>
                <p>Ushodaya, MVP Colony</p>
                <p>Vishakhapatnam - 530 017</p>
                <p>Andhra Pradesh</p>
            </div>
          </div>
          <div className="col-lg-6">
          {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Chennai</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>Regency's AshianaAppt</p>
              <p>G3, Ground Floor</p>
              <p>No.15/7, Asargaana Street, Alandur</p>
              <p >Chennai - 600 016Chennai - 600 016</p>
              <p>TEL: 044 - 2233 5870</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
              <h4>KOCHI</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>2C&E, Block I</p>
              <p>Lord Krishna Apartments</p>
              <p>Vappalassery PO, Nedumbassery</p>
              <p>Ernakulam - 683 572</p>
              <p>TEL: 0484 - 2610034</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
               <h4>TUTICORIN</h4>
               <p>ECIL-Rapiscan Ltd</p>
               <p>GARDS Mobile Scanner yard,</p>
               <p>Behind Custom House,</p>
               <p>New Harbour Estate, OPP Green Gate,</p>
               <p>Tuticorin -628 004</p>
               <p>Tamilnadu</p>
               </div>
          </div>
        </div>
            </div>
        </section>
<section className={styles.resume}>

<div className="container  my-4">

<div className={styles.main}>
<h2>NORTHERN REGION</h2></div>

<div className="row m-4">
          <div className="col-lg-6">
 
  

            {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>AMRITSAR</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>House No. 15, 1st Floor</p>
              <p>Street No. 18, New Pawan Nagar</p>
              <p>Batala Road, Amritsar - 143 001</p>
              <p >Punjab</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
                <h4>JAIPUR</h4>
                <p>ECIL-Rapiscan Ltd</p>
                <p>16-K, Shree Ram Colony</p>
                <p>Ram Nagar Vistar</p>
                <p>Near Green Field School, Sodala</p>
                <p>Jaipur - 302 019, Rajasthan</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
                <h4>SRINAGAR</h4>
                <p>ECIL-Rapiscan Ltd</p>
                <p>H.No. 88, AlluchaBaghShallproa</p>
                <p>Near Airtel Tower</p>
                <p>Srinagar</p>
                <p>Jammu Kashmir - 190 009</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
                <h4>CHANDIGARH</h4>
                <p>ECIL-Rapiscan Ltd</p>
                <p>Flat No. 1304-C</p>
                <p>Phase 10, Mohali-160062</p>
                <p>Chandigarh, Punjab</p>
                </div></div>
                <div className="col-lg-6">
          {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Delhi</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>801-803, 8th Floor</p>
              <p>Ashoka Estate, 24 Barakhamba Road</p>
              <p>New Delhi - 110 001</p>
              <p>TEL: 011 - 4989 9600</p>
              <p>FAX: 011 - 4989 9698</p>
              </div>
              <div className={`${styles.resumeItem} my-4`}>
              <h4>Lucknow</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>SS-145, Sector E</p>
              <p>LDA Colony, Kanpur Road</p>
              <p>Lucknow - 226 012</p>
              <p>Uttar Pradesh</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
              <h4>Jammu</h4>
              <p>ECIL RAPISCAN LIMITED</p>
              <p>F-53/14, 1st Floor,</p>
              <p>Railway Road,</p>
              <p>Nanak Nagar,</p>
              <p>Jammu-180001</p>
            </div>

</div></div></div>
</section>
<section className={styles.resume}>

<div className="container  my-4">

<div className={styles.main}>
<h2>WESTERN REGION</h2></div>

<div className="row m-4">
          <div className="col-lg-6">
 
  

            {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Ahmedabad</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>B-406, Raj Avenue</p>
              <p>Near Sahajand City, Bunglow</p>
              <p>New CG Road, Chandkheda</p>
              <p >Ahmedabad - 382 424</p>
              <p>TEL: 079 - 2909 8938</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
                <h4>JNPT Project Office</h4>
                <p>ECIL-Rapiscan Ltd</p>
                <p>Flat No. 203, Maruti Tower</p>
                <p>Plot No. 35, Sector 11</p>
                <p>CBD Belapur, Navi Mumbai</p>
                <p>Maharashtra - 400 614</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
                <h4>Mumbai</h4>
                <p>ECIL-Rapiscan Ltd</p>
                <p>307, Timmy Arcade</p>
                <p>778B, Makwana Road</p>
                <p>Off. MV Road, Andheri(E)</p>
                <p>Mumbai - 400 059</p>
                <p>TEL: 022 - 2851 5864</p>
            </div>
            </div>
                <div className="col-lg-6">
          {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>goa</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>H. No. 1061, Gauthan, Priol</p>
              <p>H. No. 1061, Gauthan, Priol</p>
              <p>Landmark: Next to Goodwill Entp</p>
              </div>
              <div className={`${styles.resumeItem} my-4`}>
              <h4>JNPT Site Office</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>C/O CWC District Park</p>
              <p>Bhendkhel Village</p>
              <p>Dronagiri Node, JNPT</p>
              <p>Navi Mumbai</p>
              <p>Maharashtra - 400 707</p>
              <p>TEL: 022 - 2292 5207</p>
            </div>
            <div className={`${styles.resumeItem} my-4`}>
              <h4>Pune</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>Flat No. 12, 3rd Floor</p>
              <p>Chinar Co-operative Society</p>
              <p>Behind Homeguard Office</p>
              <p>1707, "B" Shivaji Nagar</p>
              <p>Pune - 411 005, Maharashtra</p>
              <p>TEL: 020 - 3020 3600</p>
            </div>

</div></div></div>
</section>
<section className={styles.resume}>

<div className="container  my-4">

<div className={styles.main}>
<h2>EASTERN REGION</h2></div>

<div className="row m-4">
          <div className="col-lg-6">
 
  

            {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Kolkata</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>Sarala Apartment, Flat 1-D</p>
              <p>7/2, Motijheel Avenue</p>
              <p>Kolkata - 700 074</p>
              <p >TEL: 033 - 2560 3025</p>
            </div>
            
</div></div></div>
</section>
<section className={styles.resume}>

<div className="container  my-4">

<div className={styles.main}>
<h2>NORTH-EAST REGION</h2></div>

<div className="row m-4">
          <div className="col-lg-6">
 
  

            {/* <h3 className={styles.resumeTitle}>Education</h3> */}
            <div className={styles.resumeItem}>
              <h4>Guwahati</h4>
              <p>ECIL-Rapiscan Ltd</p>
              <p>1st Floor, Ramkrishna Mission Lane</p>
              <p>VIP, Near State Bank of India</p>
              <p>P.O.- Guwahati Airport</p>
              <p >Guwahati - 781 015</p>
              <p>TEL: 0361 - 2842988</p>
            </div>
            
</div></div></div>
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

    </React.Fragment>);
};

export default ContactUs;