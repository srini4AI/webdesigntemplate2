import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect } from 'react';
import styles from './product.module.css';

export const ProductPortfolio = () =>{
  useEffect(()=>{
    SwiperCore.use([Autoplay])
  },[])
    return( <> <div className="row">
       <Swiper
       autoplay={{ delay: 3000 }}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      breakpoints={{
        "@0.00": {
          "slidesPerView": 1,
          "spaceBetween": 10
        },
        "@0.75": {
          "slidesPerView": 2,
          "spaceBetween": 20
        },
        "@1.00": {
          "slidesPerView": 3,
          "spaceBetween": 40
        },
        "@1.50": {
          "slidesPerView": 4,
          "spaceBetween": 10
        }
      }}



    >
    <SwiperSlide>
    <Link href= "/category/xray-baggage" ><a className={styles.productA}><div className="member">
        <div className="member-img">
          <img  src="/images/products/Rapiscan-622XR.jpeg"  className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>X-Ray Baggage Scanners</h4>
          
        </div>
      </div></a></Link></SwiperSlide>
    <SwiperSlide>
    <Link href= "/category/exp-trace-detectors" ><a className={styles.productA}><div className="member">
        <div className="member-img">
          <img  src="/images/products/Itemiser-4DX-1.jpg"  className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>Explosive Trace Detectors</h4>
          
        </div>
      </div></a></Link>
    </SwiperSlide>
    <SwiperSlide>
    <Link href= "/category/door-frame-metal-detectors" ><a className={styles.productA}> <div className="member">
        <div className="member-img">
          <img  src="/images/products/Metor-6M.jpeg"  className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>Door Frame Metal Detectors</h4>
          
        </div>
      </div></a></Link>
    </SwiperSlide>
    <SwiperSlide><Link href= "/category/hand-held-metal-detectors" ><a className={styles.productA}> <div className="member">
        <div className="member-img">
          <img src="/images/products/handheld.jpeg" className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>Hand Held Metal Detectors</h4>
          
        </div>
      </div></a></Link>

    </SwiperSlide>
    <SwiperSlide><Link href= "/category/vehicle-mounted-x-Ray-baggage-scanners" ><a className={styles.productA}> <div className="member">
        <div className="member-img">
  <img src="/images/products/Rapiscan-MobileCheck-636SV.jpeg" className="img-fluid p-2" style={{"marginBottom":"3.3em", "borderRadius":"20px"}} height="250" alt=""/>

  </div>
  <div className="member-info">
    <h4>Vehicle Mounted X-Ray Baggage Scanners</h4>
    
  </div>
</div></a></Link>
</SwiperSlide>
    </Swiper>
  </div></>);
}