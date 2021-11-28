import React,{useEffect,useState} from 'react';
import { Breadcrumb, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarHeader } from '../../components/navbar';

import styles from './events.module.css';
import { FooterWeb } from '../../components/footer';
import styles1 from '../../components/footer/footer.module.css';
import { ScrollToTop } from '../../components/scrolltotop';

import Link from 'next/link';
let productList = [];
const EventsCategory = () => {

  productList = [{
    path :"/events/25Years_Celberation", url:"/images/events/25Years_Celberation-34.jpg", name:"25 Years Silver Jubilee Celeberation"
  }]

    return (<>        <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
        <div className="container">
 
 <div className="d-flex justify-content-between align-items-center">
     <h2 className={styles.headingH2}>Events</h2>
     <Breadcrumb>
         <Breadcrumb.Item href="#">Career</Breadcrumb.Item>
         <Breadcrumb.Item active>Events</Breadcrumb.Item>
     </Breadcrumb>
 </div>

</div>

        </section>   <section>
            <div className="container  mb-4">
                <div className="row">
                {productList.map((value:any, index:number)=>{
                    return (<div className="col-lg-4" key={index}>
                      <Link href={value.path}><a><Card>
                        <img  src={value.url}  className={`${styles.imageContainer} img-fluid` } />
                        <Card.Body>
                          <Card.Title>{value.name}</Card.Title>


                        </Card.Body>
                      </Card></a></Link></div>)
})}
                   
           
                </div>
            </div>
        </section>  <footer id={styles1.footer}>
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
      </footer></>)
}

export default EventsCategory;