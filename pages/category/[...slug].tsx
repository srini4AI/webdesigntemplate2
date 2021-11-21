import React from 'react';
import { NavBarHeader } from '../../components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FooterWeb } from '../../components/footer';
import { Breadcrumb } from 'react-bootstrap';
import styles from './category.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import styles1 from '../../components/footer/footer.module.css';
import { ScrollToTop } from '../../components/scrolltotop';
import { Card } from 'react-bootstrap';
import { useRouter} from 'next/router';

import Link from 'next/link';
const Category = () =>{
    const router = useRouter();
    const { slug } = router.query;
    let productList:Array<any> = [];
    let productName = "";
    console.log("Slug--->",slug)
    if(slug && Array.isArray(slug) && slug.length>0){
    if(slug.length===1 && slug[0]==="xray-baggage"){
      productName="X-ray Baggage Scanners";
      productList = [{"url":"/images/products/Rapiscan_618XRH.jpg",name:'Single View Scanners', 
      path:"/category/xray-baggage/single-view-scanner"},
      {"url":"/images/products/RAPISCAN_627DV.png",name:'Dual View Scanners',path:"/category/xray-baggage/dual-view-scanner"},
      {"url":"/images/products/920ct.jpg",name:'CT Scanners',path:"/category/xray-baggage/ct-scanner"}]
    }
    if(slug.length===1 && slug[0]==="exp-trace-detectors"){
      productName="Explosive Trace Detectors";
      productList = [{"url":"/images/products/MobileTrace.jpeg",name:'Mobile Trace', path:"/products/mobiletrace"},{"url":"/images/products/Itemiser-4DX-1.jpg",name:'ITEMISER 4DX',path:"/products/itemiser4dx"},
      {"url":"/images/products/Itemiser3E-1.jpeg",name:'ITEMISER 3E', path:"/products/itemiser3e"},{"url":"http://localhost:3000/images/products/5X.jpg",name:'Itemiser 5X',path:"/products/itemiser5x"}]
     } 
     if(slug.length===1 && slug[0]==="door-frame-metal-detectors"){
      productName="Door Frame Metal Detectors";
      productList = [{"url":"/images/products/Metor-6M.jpeg",name:'METOR 6M', path:"/products/metor6m"},{"url":"/images/products/Metor_6S.jpg",name:'METOR 6S',path:"/products/metor6s"},
      {"url":"/images/products/Metor-6WP.jpg",name:'METOR 6WP', path:"/products/metor6wp"},{"url":"/images/products/Metor-6E.jpg",name:'METOR 6E',path:"/products/metor6e"}]
     } 
     if(slug.length===1 && slug[0]==="hand-held-metal-detectors"){
      productName="Hand Held Metal Detectors";
      productList = [{"url":"/images/products/metor-28.jpg",name:'METOR 28', path:"/products/metor28"},{"url":"/images/products/metor-28e.jpg",name:'METOR 28E',path:"/products/metor28e"}]
     } 
     if(slug.length===1 && slug[0]==="vehicle-mounted-x-Ray-baggage-scanners"){
      productName="Hand Held Metal Detectors";
      productList = [{"url":"/images/products/Rapiscan-MobileCheck-636SV.jpeg",name:'RAP 636SV', path:"/products/rap636sv"}]
     } 
     else if(slug.length===2 && slug[0]==="xray-baggage" && slug[1]==="single-view-scanner"){
      productName="Single View Scanners";
      productList = [{"url":"/images/products/RAP-515.jpeg",name:'RAP 515', path:"/products/rapiscan515"},{"url":"/images/products/Rapiscan-618XR.jpg",name:'RAP 618XR', path:"/products/rapiscan618xr"},
      {"url":"/images/products/Rapiscan_618XRH.jpg",name:'RAP 618XRH', path:"/products/rapiscan618xrh"},{"url":"/images/products/620XR.png",name:'RAP 620XR', path:"/products/rapiscan620xr"},
      {"url":"/images/products/620XR.png",name:'RAP 620XRH', path:"/products/rapiscan620xrh"},{"url":"/images/products/620xr-ve.jpeg",name:'RAP 620XRve', path:"/products/rapiscan620xrve"},
      {"url":"/images/products/Rapiscan-622XR.jpeg",name:'RAP 622XR', path:"/products/rapiscan622xr"},{"url":"/images/products/Rapiscan-624XR.jpeg",name:'RAP 624XR', path:"/products/rapiscan624xr"},
      {"url":"/images/products/Rapiscan-626XR.jpeg",name:'RAP 626XR', path:"/products/rapiscan626xr"},{"url":"/images/products/Rapiscan-627XR.jpeg",name:'RAP 627XR', path:"/products/rapiscan627xr"},
      {"url":"/images/products/Rapiscan-624XR.jpeg",name:'RAP 628XR', path:"/products/rapiscan628xr"},{"url":"/images/products/Rapiscan-632XR.jpeg",name:'RAP 632XR', path:"/products/rapiscan632xr"},
      {"url":"/images/products/Rapiscan-632XR.jpeg",name:'RAP 638XR',path:"/products/rapiscan638xr"}]
    }
    else if(slug.length===2 && slug[0]==="xray-baggage" && slug[1]==="dual-view-scanner"){
      productName="Dual View Scanners";
      productList = [{"url":"/images/products/Rapiscan_620DV.png",name:'RAP 620DV',  path:"/products/rap620dv"},
      {"url":"/images/products/RAPISCAN_627DV.png",name:'RAP 627DV',path:"/products/rap627dv"}, {"url":"/images/products/Rapiscan-628DV.jpg",name:'RAP 628DV',path:"products/rap628dv"},
      {"url":"/images/products/Rapiscan-632DV.jpg",name:'RAP 632DV',path:"/products/rap632dv"}, {"url":"/images/products/Rapiscan-638DV.jpg",name:'RAP 638DV',path:"/products/rap638dv"},
      {"url":"/images/products/920DX.jpg",name:'920DX',path:"/products/920dx"}, {"url":"/images/products/927DX.jpg",name:'927DX',path:"/products/927dx"}, 
      {"url":"/images/products/928DX.jpg",name:'928DX',path:"/products/928dx"}]
    }
    else if(slug.length===2 && slug[0]==="xray-baggage" && slug[1]==="ct-scanner"){
      productName="CT Scanners";
      productList = [{"url":"/images/products/920ct.jpg",name:'920CT', path:"/products/920ct"}]
    }

  }

    return(<React.Fragment>
        <NavBarHeader></NavBarHeader>
        <section className={styles.breadcrumbs}>
            <div className="container">

                <div className="d-flex justify-content-between align-items-center">
                    <h2 className={styles.headingH2}>{productName}</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">Company</Breadcrumb.Item>
                        <Breadcrumb.Item active>{productName}</Breadcrumb.Item>
                    </Breadcrumb>
                </div>

            </div>
        </section>
        <section>
            <div className="container  mb-4">
                <div className="row">
                {productList.map((value, index)=>{
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
    </React.Fragment>)
} 

export default Category;