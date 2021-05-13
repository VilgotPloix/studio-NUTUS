import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(localStorage.getItem('state') || true);


    const themeStatus = theme;

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(themeStatus))
    }, [theme])

    var storaged = localStorage.getItem('state')

    return(
        <ThemeContext.Provider value={{
            state: theme,
            toggleTheme  : () => setTheme(!theme)
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider