import React from 'react';
//import { ParallaxBanner } from 'react-scroll-parallax';
import Carousel from 'react-bootstrap/Carousel';

export const Home = () => (
    <div>
       {/* <ParallaxBanner layers={[
            {
                image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                amount: 0.1,
            },
            {
                image: 'https://images.pexels.com/photos/116832/pexels-photo-116832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                amount: 0.2,
            }, ]} style={{height: '500px'}} >
        </ParallaxBanner>
        
         Slider */}
        <div>
            <Carousel autoPlay>
                <Carousel.Item>
                    <div className="img-gradient">
                        <img
                        className="d-block w-100 carouselImage"
                        src="https://c.tribune.com.pk/2019/09/2068476-DevelopmentprojectPHOTOMOHAMMADNOMANEXPRESS-1569816429.jpg"
                        alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="transparentBg SEorange">
                    <h3>First slide label</h3>
                    <p className=" SEorange">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-gradient">
                        <img
                        className="d-block w-100 carouselImage"
                        src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'"
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className="transparentBg SEorange">
                    <h3>Second slide label</h3>
                    <p className=" SEorange">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-gradient">
                        <img
                        className="d-block w-100 carouselImage"
                        src="https://images.pexels.com/photos/116832/pexels-photo-116832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                        />
                    </div>
                    <Carousel.Caption className="transparentBg">
                    <h3>Third slide label</h3>
                    <p className=" SEorange">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div>
        <h1  style={{textAlign:'center'}}>Hello World</h1>
        </div>
    </div>
)