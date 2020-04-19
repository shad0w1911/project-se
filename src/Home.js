import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';

export const Home = () => (
    <div>
        <ParallaxBanner layers={[
            {
                image: 'https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                amount: 0.1,
            },
            {
                image: 'https://images.pexels.com/photos/116832/pexels-photo-116832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                amount: 0.2,
            }, ]} style={{height: '500px'}} >
        </ParallaxBanner>
        <div>
            <h1  style={{textAlign:'center'}}>Hello World</h1>
        </div>
    </div>
)