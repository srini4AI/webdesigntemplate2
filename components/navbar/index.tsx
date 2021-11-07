import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Navbar, Container,Nav,NavDropdown} from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { faCheckDouble, faPhone, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import styles from './navbar.module.css';
export const NavBarHeader =() =>{
    return(
    <>
    <div style={{"backgroundColor":"#006aae", height:"38px", width:"100%","position": "fixed",zIndex:9999, "top": 0}}>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="col-12 col-lg-3 col-md-3 float-end"> <p  className="float-end" style={{"color":"white", "lineHeight":"36px", "fontSize":"16px", "fontFamily":"Abel, sans-serif"}}><FontAwesomeIcon icon={faPhoneAlt}  size="lg" /> Toll Free: 9999999999999</p></div>
        </div>
      </div>
    </div>
    </div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top" className={styles.navbarStyle}>
    
    <Container>
    <Navbar.Brand href="/"><div className={styles.logoNav}>
      <img src="/images/rapiscan_ltd_1ss.png" className={styles.logoImage}/><h4 className={styles.logoText}> ECIL - Rapiscan Ltd</h4></div></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown  title="Company" id={`collasible-nav-dropdown`}>
          <NavDropdown.Item href="/about"   id={styles.anchorAnnual}>About us</NavDropdown.Item>
          <NavDropdown.Item href="/management"   id={styles.anchorAnnual}>Management</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"   id={styles.anchorAnnual}>Annual Reports</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Products" id="collasible-nav-dropdown">
        <NavDropdown  align="end" drop="end" title="X-ray Baggage Scanners" id={styles.anchorAnnual}>
          <NavDropdown align="end" drop="end" title="Single View Scanners" id={styles.anchorAnnual}>
          <NavDropdown.Item href="/products/rapiscan515">RAP 515</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan618xr-xrh">RAP 618XR/XRH</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan620xr">RAP 620XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan620xrh">RAP 620XRH</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan620xrve">RAP 620XRve</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan622xr">RAP 622XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan624xr">RAP 624XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan626xr">RAP 626XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan627xr">RAP 627XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan628xr">RAP 628XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan632xr">RAP 632XR</NavDropdown.Item>
          <NavDropdown.Item href="/products/rapiscan638xr">RAP 638XR</NavDropdown.Item>
         </NavDropdown>
         </NavDropdown>
         <NavDropdown  align="end" drop="end" title="Explosive Trace Detectors" id={styles.anchorAnnual}>
         <NavDropdown.Item href="/products/mobiletrace">Mobile Trace</NavDropdown.Item>
          <NavDropdown.Item href="/products/itemiser4dx">Itemizer 4DX</NavDropdown.Item>
          <NavDropdown.Item href="/products/itemiser3e">Itemizer 3E</NavDropdown.Item>
          <NavDropdown.Item href="/products/itemiser5x">Itemizer 5X</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown  align="end" drop="end" title="Door Frame Metal Detectors" id={styles.anchorAnnual}>
         <NavDropdown.Item href="/products/metor6m">Metor 6M</NavDropdown.Item>
          <NavDropdown.Item href="/products/metor6s">Metor 6S</NavDropdown.Item>
          <NavDropdown.Item href="/products/metor6wp">Metor 6WP</NavDropdown.Item>
          <NavDropdown.Item href="/products/metor6e">Metor 6e</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown  align="end" drop="end" title="Hand Held Metal Detectors" id={styles.anchorAnnual}>
         <NavDropdown.Item href="/products/metor28">Metor 28</NavDropdown.Item>
          <NavDropdown.Item href="/products/metor28e">Metor 28e</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown  align="end" drop="end" title="Vehicle Mount Baggage Scanners" id={styles.anchorAnnual}>
         <NavDropdown.Item href="/products/rap636sv">RAP 636SV</NavDropdown.Item>
          </NavDropdown>
        </NavDropdown>
        
        <NavDropdown title="Service Support" id={`${styles.anchorAnnual} collasible-nav-dropdown`}>
        <NavDropdown.Item href="/service" id={styles.anchorAnnual}>Service Network & Our Strengths</NavDropdown.Item>
        <NavDropdown.Item href="/maintenance" id={styles.anchorAnnual}>Maintenance</NavDropdown.Item>
        <NavDropdown.Item href="/spares" id={styles.anchorAnnual}>Spares</NavDropdown.Item>
        <NavDropdown.Item href="/maintenancemanage" id={styles.anchorAnnual}>Maintenance Management System</NavDropdown.Item>
        <NavDropdown.Item href="/training" id={styles.anchorAnnual}>Training</NavDropdown.Item>
        <NavDropdown.Item href="/safetyaudits" id={styles.anchorAnnual}>Safety Audits</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Career" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/opening" id={styles.anchorAnnual}>Current Opening</NavDropdown.Item>
        <NavDropdown.Item href="/whyerl" id={styles.anchorAnnual}>Why ERL</NavDropdown.Item>
        <NavDropdown.Item href="/events" id={styles.anchorAnnual}>Events</NavDropdown.Item>
        </NavDropdown> 
        <Nav.Link href="/contactus">Contact us</Nav.Link>
      </Nav>
      {/* <Nav>
        <Nav.Link href="#deets">Login</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Register
        </Nav.Link>
      </Nav> */}
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}