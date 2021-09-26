import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import React, { useEffect } from 'react';
export const ProductPortfolio = () =>{
  useEffect(()=>{
    SwiperCore.use([Autoplay])
  },[])
    return( <> <div className="row">
       <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
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
          "slidesPerView": 5,
          "spaceBetween": 10
        }
      }}



    >
    <SwiperSlide>
      <div className="member">
        <div className="member-img">
          <img  src="/images/250.png"  className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>X-Ray Baggage Scanners</h4>
          <span>Sample Text</span>
        </div>
      </div></SwiperSlide>
    <SwiperSlide>
      <div className="member">
        <div className="member-img">
          <img  src="/images/250.png"  className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>Explosive Trace Detectors</h4>
          <span>Sample Text</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="member">
        <div className="member-img">
          <img  src="/images/250.png"  className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>Door Frame Metal Detectors</h4>
          <span>Sample Text</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>

      <div className="member">
        <div className="member-img">
          <img src="/images/250.png" className="img-fluid" alt=""/>

        </div>
        <div className="member-info">
          <h4>Hand Held Metal Detectors</h4>
          <span>Sample Text</span>
        </div>
      </div>

    </SwiperSlide>
    <SwiperSlide>

<div className="member">
  <div className="member-img">
    <img src="/images/250.png" className="img-fluid" alt=""/>

  </div>
  <div className="member-info">
    <h4>Vehicle Mounted X-Ray Baggage Scanners</h4>
    <span>Sample Text</span>
  </div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="member">
  <div className="member-img">
    <img src="/images/250.png" className="img-fluid" alt=""/>

  </div>
  <div className="member-info">
    <h4>Vehicle Mounted X-Ray Baggage Scanners</h4>
    <span>Sample Text</span>
  </div>
</div>

</SwiperSlide>
    </Swiper>
  </div></>);
}