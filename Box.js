import React, {useState} from 'react';
import {animated, useTransition} from "react-spring";


const Box = () => {
        const [isVisible, setIsVisible] = useState(false);
        const transition = useTransition(isVisible, {
            from: {x: -100, y: 800, opacity: 0},
            enter: {x: 0, y: 0, opacity: 1},
            leave: {x: 100, y: 800, opacity: 0}
        });
        return <div>
            <button onClick={() => {
                setIsVisible(!isVisible)
            }}>
                {isVisible ? 'un-mount' : 'mount'}
            </button>
            <div className="container">
                {transition((style, item) =>
                    item ? <animated.div style={transition} className="item"/> : '')}
            </div>
        </div>
    }
;
export default Box;