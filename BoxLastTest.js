import React, {useState, useEffect} from 'react';
import {useCallback} from "react/cjs/react.production.min";
import {useTransition} from "react-spring";

const pages= [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]
const Box = () => {
        const [index, set] = useState(0)
        const onClick = useCallback(() => set(state => (state + 1) % 3), [])
        const transitions = useTransition(index, {
            keys: null,
            from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
            enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
            leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
        })
        return (
            <div className={`container`} onClick={onClick}>
                {transitions((style, i) => {
                    const Page = pages[i]
                    return <Page style={style} />
                })}
            </div>)
    }
;
export default Box;