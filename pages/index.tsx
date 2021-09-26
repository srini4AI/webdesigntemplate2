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

        <div className="section-title aos-init aos-animate my-4" data-aos="fade-right">
          <h2>About</h2>
          <p>Who we are</p>
        </div>

        <div className="row content aos-init aos-animate">
          <div className="col-lg-6"  data-aos="fade-right">
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
          <div className="col-lg-6 pt-4 pt-lg-0"   data-aos="fade-left">
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
        <div className="my-3 py-5 col-12">
      <SliderWeb></SliderWeb>
      </div>
      </div>
    </section>
    <section id="contacts" className="contacts my-4">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
         
        </div>

        <div className="row  py-4"  >

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
                <h4>Location:</h4>
                <p>8-1-305 & 306, 6th Floor, Unit-2, <br/>Anand Silicon Chip, Shaikpet, Tolichowki,  <br/>Hyderabad – 500 008, Telengana, India.</p>
              </div>

              <div className="email">
              <FontAwesomeIcon icon={faEnvelopeSquare} />
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
              <FontAwesomeIcon icon={faPhoneSquareAlt} />
                <h4>Call:</h4>
                <p>040 6700 0800</p>
              </div>

              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" style={{"border":0, "width": "100%", "height": "290px"}} allowFullScreen={true}></iframe>
            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"  >
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" required={true}/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" required={true}/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" required={true}/>
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label>
                <textarea className="form-control" name="message" rows={10} required={true}></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    <FooterWeb></FooterWeb>
    </div>
  )
}

export default Home
