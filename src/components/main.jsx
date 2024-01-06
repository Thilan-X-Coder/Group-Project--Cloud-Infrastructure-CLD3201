import React from "react";
import { Carousel } from 'react-bootstrap';
import image1 from '../Carousel_Img/1.jpg';
import image2 from '../Carousel_Img/3.jpg';
import image3 from '../Carousel_Img/4.jpg';
import './main.css'



const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
        <Carousel data-bs-theme="dark" className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption >
          <div className="carousel_caption">
          <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

          </div>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <div className="carousel_caption">
          <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

          </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-image"
          src={image3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <div className="carousel_caption">
          <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>

          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
        </div>
      </div>
    </>
  );
};

export default Home;
