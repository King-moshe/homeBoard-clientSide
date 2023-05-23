import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();


export const Context = ({ children }) => {

    const [login, setLogin] = useState(0)
    const [user, setUser] = useState(null);
    const [currentMode, setCurrentMode] = useState(localStorage.themeMode || 'light');
    const [sProject, setSProject] = useState([])
    return (
        <StateContext.Provider
            value={{ login, setLogin, user, setUser, currentMode, setCurrentMode}}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);