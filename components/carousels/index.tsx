import React from 'react';
import {Carousel} from 'react-bootstrap'
export const BannerCarousel =() =>{
    return(<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/mask-group-30-1000x.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3  className="display-3   animate__animated animate__zoomInDown" >First slide label</h3>
      <p className="lead  animate__animated  animate__fadeInRightBig">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/mask-group-29-1000x.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3   className="display-3  animate__animated animate__zoomInDown">Second slide label</h3>
      <p  className="lead  animate__animated  animate__fadeInLeftBig">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/images/photo-1496247749665-49cf5b1022e9-1000x.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3   className="display-3   animate__animated animate__fadeInDownBig">Third slide label</h3>
      <p  className="lead animate__animated  animate__fadeInRightBig">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)
}