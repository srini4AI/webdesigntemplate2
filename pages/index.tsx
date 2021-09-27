import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import { NavBarHeader } from '../components/navbar';
import { BannerCarousel } from '../components/carousels';
import {SliderWeb} from '../components/slider';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import "animate.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBinoculars , faSearch, faBomb, faCar,  faCheckDouble,  faMapMarkerAlt, faEnvelope, faEnvelopeSquare, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-bootstrap';
import CountUp from 'react-countup';
import React from 'react';
import { FooterWeb } from '../components/footer';
import { ProductPortfolio } from '../components/product';
const Home: NextPage = () => {
  useEffect(()=>{
    AOS.init({
      duration : 2000
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
          <p>Who we are</p>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li>   <FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              <li>   <FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Duis aute irure dolor in reprehenderit in voluptate velit</li>
              <li><FontAwesomeIcon icon={faCheckDouble}  size="lg" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" >
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button variant="outline-primary">Learn More</Button>
          </div>
        </div>

      </div>
    </section>
      <section id="counts" className="counts my-4">
      <div className="container aos-init aos-animate">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 col-xs-6 col-sm-6"   data-aos="flip-right"
  data-aos-easing="ease-out-cubic"
  data-aos-duration="2000">
            <div className="count-box">
              <FontAwesomeIcon icon={faBinoculars}  size="2x" />
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
              <FontAwesomeIcon icon={faSearch}  size="2x"  style={{"color":"#ee6c20"}}  />
              <div>
                <span>7652+</span>
                <p>DOOR FRAME METAL DETECTORS</p>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-2 col-md-6">
            <div className="count-box">
            <FontAwesomeIcon icon={faGlobe}  size="2x" />
              <div>
                <span>521</span>
                <p>COUNTRIES SUPPLIED</p>
              </div>
            </div>
          </div> */}

          <div className="col-lg-3 col-md-6  col-xs-6 col-sm-6"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="count-box">
            <FontAwesomeIcon icon={faBomb}  size="2x" style={{"color":"#15be56"}}/>
              <div>
              <span>3711+</span>
                <p>EXPLOSIVE<br/> DETECTORS</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6  col-xs-6 col-sm-6"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="count-box">
            <FontAwesomeIcon icon={faCar}  size="2x" style={{"color":"#bb0852"}}/>
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
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>
        <div className="my-3 py-3 col-12">
      <SliderWeb></SliderWeb>
      </div>
      </div>
    </section>

    <FooterWeb></FooterWeb>
    </div>
  )
}

export default Home
