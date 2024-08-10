import React, {useEffect, useState} from 'react';
import './App.css';

export function App() {
    return (
        // <ModeSwitcher/>
        <Clock/>
    );
}


export const ModeSwitcher = () => {

    let [on, setOn] = useState(false)
    let onStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: on ? 'green' : 'white',
        border: '1px solid black',
        display: 'inline-block',
        padding: '20px'
    }
    let offStyle = {
        width: '30px',
        height: '30px',
        backgroundColor: !on ? 'red' : 'white',
        border: '1px solid black',
        display: 'inline-block',
        padding: '20px'
    }

    let indicatorStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: on ? 'green' : 'red',
        borderRadius: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px'
    }
    return <>
        <div onClick={() => setOn(true)} style={onStyle}>ON</div>
        <div onClick={() => setOn(false)} style={offStyle}>OFF</div>
        <div style={indicatorStyle}></div>
    </>
}

export const Clock = () => {


    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        setCurrentDate(currentDate)
    }, []);

    return <>

    </>
}
