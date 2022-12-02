import React, { useState, useEffect } from 'react';
import '../Stylesheet/Button.css'
const DarkThemeContext = React.createContext();

const MainColors = [
    {background: "#fff", text: "#000"},
    {background: "#222", text: "#fff"},
];

const DartThemeOn = ({children}) => {
    const [turnOn, setTurnOn] = useState(false);
    const [mainColor, setMainColor] = useState (MainColors[0]);

    useEffect (() => {
        const color = turnOn ? MainColors[1] : MainColors[0];
        setMainColor(color);
    },[turnOn]);

    return (
        <DarkThemeContext.Provider 
        value={{turnOn, setTurnOn, mainColor, setMainColor}}
        >
            {children}
        </DarkThemeContext.Provider>
    );
};

export {DarkThemeContext, DartThemeOn};
