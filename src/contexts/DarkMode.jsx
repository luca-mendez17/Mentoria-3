import React, { useState, useEffect } from "react";
const DarkThemeContext = React.createContext();

const MainColors = [
    {background: "#fff", text: "#000"},
    {background: "#000", text: "#fff"},
];

const DarkThemeOn = ({children}) => {
    const [turnOn, setTurnOn] = useState(false);
    const [mainColor, setMainColor] = useState (MainColors[0]);

    useEffect (() => {
        const color = turnOn ? MainColors[0] : MainColors[1];
        setMainColor(color);
    },[turnOn]);

    return (
        <button>
        <DarkThemeContext.Provider 
        value={{turnOn, setTurnOn, mainColor, setMainColor}}
        >
            {children}
        a</DarkThemeContext.Provider>
        </button>
    );
};

export {DarkThemeContext, DarkThemeOn};
