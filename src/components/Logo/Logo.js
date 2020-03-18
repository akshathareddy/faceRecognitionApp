import React from 'react';

import Tilt from 'react-parallax-tilt';
import Face from './face.png';

export const Logo = ()=>{
    return(

        <Tilt
            className="parallax-effect-img w4 linear-grad-bck shadow-4 ml5"
            tiltMaxAngleX={40}
            tiltMaxAngleY={40}
            perspective={800}
            transitionSpeed={1500}
            scale={1.1}
            gyroscope={true}
        >
                <img className="inner-element" src={Face} alt="Face Recognition Logo"/>
        </Tilt>
    )
}