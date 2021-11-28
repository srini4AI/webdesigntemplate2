import React,{useEffect,useState} from 'react';
import { Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBarHeader } from '../../components/navbar';

import styles from './events.module.css';
import { FooterWeb } from '../../components/footer';
import styles1 from '../../components/footer/footer.module.css';
import { ScrollToTop } from '../../components/scrolltotop';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lightgallery-bundle.css';
import useScript from '../../components/useScript';
import { useRouter} from 'next/router';
declare const lightGallery:any;
 const EventsCareer = function(){
  const router = useRouter();
  const { slug } = router.query;
  let productName = '';
  let productList:any = [];
  if(slug && Array.isArray(slug) && slug.length>0){
    if(slug.length===1 && slug[0]==="25Years_Celberation"){
      productName = '25 Years Silver Jubilee Celebrations';
      productList = ['/images/events/25Years_Celberation-31.jpeg',
    '/images/events/25Years_Celberation-32.jpg','/images/events/25Years_Celberation-33.jpg',
  '/images/events/25Years_Celberation-34.jpg','/images/events/25Years_Celberation-35.jpg',
'/images/events/25Years_Celberation-36.jpg','/images/events/25Years_Celberation-37.jpg',
'/images/events/25Years_Celberation-38.jpg','/images/events/25Years_Celberation-39.jpg']
    }
  }
            
   useScript('https://cdnjs.cloudflare.com/ajax/libs/lightgallery/2.3.0/lightgallery.min.js');   
    useEffect(() => {
      //  loadGallery();
      setTimeout(() => {
        lightGallery(document.getElementById('lightgallery')); 
      }, 1000);
    
    },[useScript])
 

    return (<>        <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
        <div className="container">
 
 <div className="d-flex justify-content-between align-items-center">
     <h2 className={styles.headingH2}>{productName}</h2>
     <Breadcrumb>
         <Breadcrumb.Item href="#">Career</Breadcrumb.Item>
         <Breadcrumb.Item href="#">Events</Breadcrumb.Item>
         <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
     </Breadcrumb>
 </div>

</div>

        </section> 
        <section>
            <div className="container  mb-4">
                <div className="row" id="lightgallery">
   {productList.map((value:any, index:number)=><a key={index} href={value} className={styles.thumbNail} >
        <img src={value} className={`${styles.overflowImg} "img-fluid img-thumbnail"`}/>
    </a>)}          
 
  
      </div></div></section>
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

export default EventsCareer;