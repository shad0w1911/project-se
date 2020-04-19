import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';

export const Projects = () => (
    <div>
        <ParallaxBanner className="your-class" style={{ height: '100vh'}} layers={[
        { image: 'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', amount: 0.1 },
        { image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', amount: 0.2 }, ]}>
    <h1>Banner Children</h1>
    </ParallaxBanner>
    </div>
)