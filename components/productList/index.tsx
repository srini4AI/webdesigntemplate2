import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type ProductListProps = {
    products:Array<any>;
}
const ProductList = ({products}:ProductListProps) =>{
    useEffect(()=>{
        SwiperCore.use([Autoplay])
      },[])
    return (<React.Fragment>
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation



    >
        {products.map((value:any, index:number)=>
        <SwiperSlide key={index}><img src={value} className="img-fluid"/></SwiperSlide>
        )}
    </Swiper>
    </React.Fragment>);
};

export default ProductList;