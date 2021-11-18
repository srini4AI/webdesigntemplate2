import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { NavBarHeader } from '../components/navbar';
import { BannerCarousel } from '../components/carousels';
import {SliderWeb} from '../components/slider';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars , faSearch, faBomb, faCar,  faCheckDouble, faGlobe, faDoorClosed} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';
import CountUp from 'react-countup';
import React from 'react';
import { FooterWeb } from '../components/footer';
import { ProductPortfolio } from '../components/product';
import styles1 from '../components/footer/footer.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from '../components/contactForm';
import { ScrollToTop } from '../components/scrolltotop';
const Home: NextPage = () => {
  
  useEffect(()=>{
    AOS.init({
      duration : 500,
      once: true
    });
  },[])

 
  return (
    <div className={styles.container}>
      <NavBarHeader></NavBarHeader>
      <BannerCarousel></BannerCarousel>
      <section id="about" className="about my-3">
      <div className="container">

        <div className="section-title my-4">
          <h2>About</h2>
          <p>Pioneer in Public Safety & Security past 25+ Years</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p className={styles.paraP}>
            ECIL Rapiscan Ltd, incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise). ECIL Rapiscan Limited, since its inception in the year 1995, is selling and providing after-sale- services for the entire manufacturing of the X-ray Baggage Inspection Systems (XBIS). We offer a wide array of products and solutions which are state-of-the-art, reliable and high quality ranging from Biological and Chemical Agents Detection to Baggage and Parcel Inspection. Cargo Vehicle Inspection, Hold Baggage Screening, People Screening, 
            </p>
           
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" >
          <p className={styles.paraP}> Radiation Detection, Metal Detection, Trace Detection to System Integration such as Surveillance Solutions, and Bomb Disposal Solutions are a few other areas of our expertise.

</p>
          <h3 className={styles.aboutH3}>Our Prestigious Clients include:</h3>
          
            <div className="row">
            <div className="col-lg-6 col-sm-6 col-12">
            
          <ul  className={styles.unordered}>
              <li>   <FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Indian Police & Central Jails</li>
              <li>   <FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Airforce stations</li>
              <li><FontAwesomeIcon icon={faCheckDouble}  size="lg" />  Airports</li>
          
            </ul>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
            <ul className={styles.unordered}>
              <li>   <FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Defence</li>
              <li>   <FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Parliament House</li>
              <li><FontAwesomeIcon icon={faCheckDouble}  size="lg" />  PWD</li>
  
            </ul>
              </div>
              </div>
            <Button href="/about" size="lg" variant="outline-primary">Learn More</Button>
          </div>
        </div>

      </div>
    </section>
      <section id="counts" className="counts my-4">
      <div className="container aos-init aos-animate">

        <div className="row gy-4">

          <div className="col-lg-2 col-md-6 col-xs-6 col-sm-6"   data-aos="flip-right"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">
            <div className="count-box">
              <FontAwesomeIcon icon={faBinoculars}  size="lg" />
              <div>
                <span>4966+</span>
                <p>X-RAY BAGGAGE <br/>SCANNERS</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6  col-xs-6 col-sm-6" 
  data-aos="flip-right"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">
            <div className="count-box">
              <FontAwesomeIcon icon={faDoorClosed}  size="lg"  style={{"color":"#ee6c20"}}  />
              <div>
                <span>4966+</span>
                <p>DOOR FRAME METAL DETECTORS</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
            <FontAwesomeIcon icon={faSearch}  size="lg" />
              <div>
                <span>521</span>
                <p>HAND HELD METAL DETECTORS</p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6  col-xs-6 col-sm-6"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="count-box">
            <FontAwesomeIcon icon={faBomb}  size="lg" style={{"color":"#15be56"}}/>
              <div>
              <span>3711+</span>
                <p>EXPLOSIVE<br/> DETECTORS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6  col-xs-6 col-sm-6"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="count-box">
            <FontAwesomeIcon icon={faCar}  size="lg" style={{"color":"#bb0852"}}/>
              <div>
              <span>1720+</span>
                <p>VEHICLE MOUNT SCANNERS</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    <section id="products"  className="p-3 m-4 products">
    <div className="container  py-2">

<div className="section-title" data-aos="zoom-in">
  <h2>Products</h2>
 <ProductPortfolio></ProductPortfolio>
  </div>
  </div>
    </section>
    <section id="clients" className="clients" data-aos="zoom-in">
      <div className="container  py-2">

        <div className="section-title" >
          <h2 >Clients</h2>
          
        </div>
        <div className="my-3 py-3 col-12">
      <SliderWeb></SliderWeb>
      </div>
      </div>
    </section>
      <footer id={styles1.footer}>
        <div className={styles1.footerTop}>
          <div className="container">
            <div className="row">
              <ContactForm></ContactForm>
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
     
    </div>
  )
}

export default Home
