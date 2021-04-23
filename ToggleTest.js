import React, {useState} from 'react';
import {animated, useSpring} from "react-spring";


const Toggle2 = () => {
    const [activate,setActivate] = useState(false);
    const animate = useSpring({
        from: {opacity: 0, fontSize: "2rem"},
        opacity: 1,
        fontSize: activate ? '2rem' : '20em',
        color : activate ? 'red' : 'rgb(23,45,30)',
        transform : activate ? 'translate3d(0,0,0)':'translate3d(0,-50px,0)',
        config :{
            mass : 1,
            velocity: 10
        },
        delay : 1000
    });
    return (
        <div>
            <animated.div style={animate} onMouseOver={()=>setActivate(!activate)}>
                Hello
            </animated.div>
            <button onClick={()=>setActivate(!activate)}>
                Activate Animation
            </button>
        </div>
    )
};
export default Toggle2;