import React, {useState} from 'react';
import {useSpring, animated} from "react-spring";
import ImageSchtroumpfs from '../Images/img.png';

const Toggle = () => {
    const [isToggle, setToggle] = useState(false);
    const fade = useSpring({
        //opacity: isToggle ? 1 : 0,
        //fontSize: isToggle? '2rem' : '20em',
        color: isToggle ? '#000': 'green',
        transform : isToggle ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
    });

    return (
        <div>
            <animated.h1 style={fade}>
                <img src={ImageSchtroumpfs} alt={"ImageSchtroumpfs"}/>
            </animated.h1>
            <button onClick={() => setToggle(!isToggle)}>
                Toggle
            </button>
        </div>
    );
};

export default Toggle;