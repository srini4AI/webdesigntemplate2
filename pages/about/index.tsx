import React from 'react';
import { NavBarHeader } from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterWeb } from '../../components/footer';
import { Breadcrumb } from 'react-bootstrap';
import styles from './about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles1 from '../../components/footer/footer.module.css';
const aboutUs = () =>{
    return(<React.Fragment>
        <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>About Us</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
                        <Breadcrumb.Item active>About</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section>
            <div className="container  mb-4">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className={styles.aboutH3}>Pioneer in Public Safety & Security past 25+ Years</h3>
                        <p className={styles.aboutp}><b>ECIL Rapiscan Ltd,</b> incorporated in the year 1995(and is a Joint Venture Company formed jointly by OSI Systems, Inc., USA and Electronics Corporation of India Limited, a wholly-owned Government of India Enterprise)</p>
                        <p className={styles.aboutp}>ECIL Rapiscan Limited, since its inception in the year 1995, is selling and providing after-sale- services for the entire manufacturing of the X-ray Baggage Inspection Systems (XBIS). The technology for X-ray Baggage Inspection Systems, by Rapiscan Systems (a subsidiary of OSI Systems, Inc.), UK and USA, offers world-class security systems. In a span of two and half decades, the company has established itself as a 'Leader' in India in the security domain with distinctive innovations supported by our JV partner Rapiscan Systems from time to time.</p>
                        <p className={styles.aboutp}>Rapiscan Systems, our JV partner, is a leading supplier of screening solutions that help governments, corporations, law enforcement and military organizations worldwide. Combat terrorism, drug and weapons smuggling, illegal immigration and trade fraud with speed and confidence while maximizing operational efficiency and meeting the most stringent security regulations and standards.</p>
                        <p className={styles.aboutp}>Rapiscan Systems, UK & USA and Latest Software Technology Development manage the Research & Development for new technologies. Our Parent OSI Systems, Inc. and ECIL Rapiscan Ltd. manages Latest Software Technology Development. The Joint Venture Company could supply standard and sturdy screening solutions to our Indian customers.</p>
                        <p className={styles.aboutp}>We offer a wide array of products and solutions which are state-of-the-art, reliable and high quality ranging from Biological and Chemical Agents Detection to Baggage and Parcel Inspection. Cargo Vehicle Inspection, Hold Baggage Screening, People Screening, Radiation Detection, Metal Detection, Trace Detection to System Integration such as Surveillance Solutions, and Bomb Disposal Solutions are a few other areas of our expertise.</p>
                        <p className={styles.aboutp}>Our core strength is in the latest International Technology adopted by our parent Company Rapiscan Systems. Our qualified and trained team of engineers ensure After-sales-service and can respond to service calls within 24 hours turnaround time in more than 27 different centres located all over India; we assure 24/7 Customer care centre through our call centre.</p>
                        <p className={styles.aboutp}>We are certified an ISO-9001:2015 compliant by DNV-GL, our x-ray based baggage inspection systems are certified Radioactivity test by Atomic Energy Regulatory Board (AERB) and approved by BARC for food and film safety security while scanning.</p>
                        <p className={styles.aboutp}>We are a Leader in this Industry for the past 25+ years; our advanced x-ray based baggage inspection machines are installed and are in operation all over India, with more than 3000+ happy customers.</p>
                        <h3 className={styles.sechead}>Our Prestigious Clients include:</h3>
                     
                        </div>
                        <div className="col-lg-6">
                        <ul className={styles.ulList}>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  /> Indian Police & Central Jails
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Defence
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Airforce stations
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />   Airports
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Parliament House
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  PWD
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Customs
                  </li>
                  </ul>
                  </div>
                  <div className="col-lg-6">
                  <ul  className={styles.ulList}>
                
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Banking
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Railways
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Temples
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Hotels
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />  Logistics
                  </li>
                  <li>
                  <FontAwesomeIcon icon={faCheck}  />   Corporates and many more
                  </li>
                  </ul>
                  </div>
                  <div className="col-lg-12">
                        <h3 className={styles.aboutH3}>About Rapiscan Systems</h3>
                        <p className={styles.aboutp}><b>Rapiscan Systems,</b> UK & USA (www.rapiscansystems.com) is a subsidiary of OSI Systems Inc., USA. Rapiscan Systems is a leader in manufacturing the latest state-of-the-art XBIS (X-ray and Baggage Screening Solutions) and other related products manufactured to International Standards and approved by the Aviation Authorities in the USA, UK, and EUROPE. Rapiscan has supplied thousands of XBIS to reputed Organizations such as Heathrow Airport, Manchester Airport, Foreign Post Office UK, Her Majesty's Prisons, Buckingham Palace, and many other USA, Europe, Middle East, South East Asia etc.</p>
                        <h3 className={styles.aboutH3}>About Electronics Corporation of India Limited</h3>
                        <p className={styles.aboutp}><b>Electronics Corporation of India Limited, </b>(www.ecil.co.in) is a wholly-owned Government of India Enterprise and was established in 1967 to create a strong indigenous base in Electronics. ECIL has played a pioneering role in spurring the growth of the electronics industry in India. Over the years, ECIL has evolved into a multi-product, multi-disciplinary organization. The current focus is on increasing contributions to Atomic Energy Sector, Space, Defence Sector, Electronic Security Applications, Communications & Networks, E-Governance Applications and Exports. The company has a human resource pool of 5100 engineers & technicians and a current turnover of around Rs. 1,010 Crore. The Strategic Alliances forged with organizations like Defence Research and Development Organization (DRDO), Bhabha Atomic Research Center (BARC), Nuclear Power Corporation of India Limited (NPCIL), Indira Gandhi Centre for Atomic Research (IGCAR) and Department of Space bear testimony to ECIL's commitment to the nation.</p>
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
    </React.Fragment>)
} 

export default aboutUs;