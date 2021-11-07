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
    const siwpeList = ["/images/clients/image001.gif","/images/clients/image003.png","/images/clients/image005.png","/images/clients/image007.png",
    "/images/clients/image008.png","/images/clients/image010.png","/images/clients/image012.png","/images/clients/image013.png","/images/clients/image014.png",
    "/images/clients/image015.png","/images/clients/image016.png","/images/clients/image017.png","/images/clients/image019.png","/images/clients/image020.png",
    "/images/clients/image022.jpg","/images/clients/image023.png","/images/clients/image024.png","/images/clients/image025.gif","/images/clients/image026.png",
    "/images/clients/image028.jpg", "/images/clients/image030.png","/images/clients/image032.png","/images/clients/image033.png","/images/clients/image034.png",
    "/images/clients/image035.png",  "/images/clients/image036.png", "/images/clients/image037.png", "/images/clients/image038.png", "/images/clients/image039.png",
    "/images/clients/image041.png", "/images/clients/image043.png", "/images/clients/image044.png", "/images/clients/image046.jpg","/images/clients/image048.png",
    "/images/clients/image049.png",  "/images/clients/image050.png",  "/images/clients/image051.jpg", "/images/clients/image053.gif", "/images/clients/image054.jpg",
    "/images/clients/image055.png", "/images/clients/image057.png", "/images/clients/image058.png", "/images/clients/image060.png", "/images/clients/image060.png",
    "/images/clients/image062.png", "/images/clients/image063.png", "/images/clients/image065.png", "/images/clients/image067.png", "/images/clients/image068.png",
    "/images/clients/image069.png", "/images/clients/image072.jpg", "/images/clients/image073.png", "/images/clients/image075.png", "/images/clients/image076.png",
    "/images/clients/image077.png", "/images/clients/image078.jpg", "/images/clients/image080.png", "/images/clients/image083.png", "/images/clients/image084.png",
    "/images/clients/image085.png", "/images/clients/image086.png", "/images/clients/image087.jpg", "/images/clients/image091.jpg", "/images/clients/image093.jpg",
    "/images/clients/image094.jpg", "/images/clients/image095.png", "/images/clients/image096.png", "/images/clients/image098.jpg", "/images/clients/image099.png",
    "/images/clients/image100.png", "/images/clients/image101.png", "/images/clients/image103.png", "/images/clients/image104.png", "/images/clients/image106.jpg",
    "/images/clients/image107.png", "/images/clients/image108.jpg", "/images/clients/image110.png", "/images/clients/image112.png", "/images/clients/image113.png",
    "/images/clients/image114.png",  "/images/clients/image115.png", "/images/clients/image116.png", "/images/clients/image117.png", "/images/clients/image119.jpg", 
    "/images/clients/image120.png",  "/images/clients/image121.png",  "/images/clients/image122.png", "/images/clients/image123.png"
  ];
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{ delay: 3000 }}
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
{siwpeList.map((value:any, index:number)=>
  <SwiperSlide><img key={index} src={value} width="200" height="100"/></SwiperSlide>
)}
      
    </Swiper>
  );
};