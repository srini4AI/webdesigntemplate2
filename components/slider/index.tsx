import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const SliderWeb =  () => {
    SwiperCore.use([Autoplay])
  return (
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
      <SwiperSlide><img src="/images/clients/image001.gif" width="200" height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image003.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image005.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image007.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image008.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image010.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image012.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image013.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image014.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image015.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image016.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image017.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image019.png"  width="200" height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image020.png"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image022.jpg"  width="200"  height="100"/></SwiperSlide>
      <SwiperSlide><img src="/images/clients/image023.png"  width="200"  height="100"/></SwiperSlide>
    </Swiper>
  );
};