import React, { createContext, useContext, useState } from 'react'
const StateContext = createContext();

export const Context = ({ children }) => {
    // Setting login Gateway
    const [login, setLogin] = useState(0)
    const [user, setUser] = useState(null);
    const [currentMode, setCurrentMode] = useState(localStorage.themeMode || 'light');
    // Setting single project
    const [sProject, setSProject] = useState([]);
    const [client, setClient] = useState([]);
    const [dataProject, setDataProject] = useState([]);
    const [userFile, setUserFile] = useState([]);

    return (
        <StateContext.Provider
            value={{ login, setLogin, user, setUser, currentMode, setCurrentMode, sProject, setSProject, client, setClient, dataProject, setDataProject, userFile, setUserFile }}
        >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);