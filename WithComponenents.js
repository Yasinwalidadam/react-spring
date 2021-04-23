import React,{useState} from "react";
import {animated, useSprings} from "react-spring";

const data = [
    {
        id: 1,
        from: {
            backgroundColor: 'red',
            width: '10px'
        },
        to: {
            backgroundColor: 'green',
            width: '200px'
        },
        config: {
            mass : 10,
            tension: 10,
        },
        delay:'1000'
    },
    {
        id: 2,
        from: {
            backgroundColor: 'yellow',
            width: '10px'
        },
        to: {
            backgroundColor: '#323',
            width: '500px',
            hight: '40px',
        },
        config: {
            mass: 10,
            friction:40
        }
    },
    {
        id: 3,
        from: {
            backgroundColor: 'rgb(20,56,24)',
            width: '10px'
        },
        to: {
            backgroundColor: 'pink',
            width: '100px'
        },
        config:{
            tension: 30,
        }
    }
];

const WithComponenents = () =>{
    const animation = useSprings(data.length,data.map(({id,...from})=>from))
    return <>
        {animation.map((element,index)=>
            <animated.div style={element} key={data[index].id}>
                HelloWorld
            </animated.div>
        )}
    </>
}
export default WithComponenents;