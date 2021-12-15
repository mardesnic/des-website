import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Naslovna from './components/pages/Naslovna'
import Usluge from './components/pages/Usluge'
import Kontakt from './components/pages/Kontakt'
import OMeni from './components/pages/OMeni'
import { GlobalStyles } from "./components/GlobalStyles";

import { useState, useEffect, useCallback } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {  ThemeProvider } from 'styled-components'
import { themeDark, themeLight } from './Theme'


function App() {
    const [themeName, setThemeName] = useState('')
    const themeToggler = () => {
        if(themeName === 'light'){
            setThemeName('dark')
            saveToStorage('dark')
        }else{
            setThemeName('light')
            saveToStorage('light')
        }
    }

    const fetchThemeNameFromStorage = useCallback(() => {
        const storageData = localStorage.getItem('themeName')
        let currentTheme = ''
        try {
            currentTheme = storageData !== null ? storageData : currentTheme
        } catch (error) {
            console.log("error: ", error)
        }
        return currentTheme
    }, []);

    useEffect(() => {
        setThemeName(fetchThemeNameFromStorage())
    }, [fetchThemeNameFromStorage])

    const saveToStorage = (themeName:string) => {
        localStorage.setItem('themeName', themeName);
    }

    return (
        <>
            <ThemeProvider theme={themeName === 'light' ? themeLight : themeDark}>
                <GlobalStyles />
                <Router basename={`/${process.env.PUBLIC_URL}`}>
                    <Navbar themeName={themeName} themeToggler={themeToggler} />
                    <Routes>
                        <Route path="/" element={<Naslovna />} />
                        <Route path="/o-meni" element={<OMeni />} />
                        <Route path="/usluge" element={<Usluge />} />
                        <Route path="/kontakt" element={<Kontakt />} />
                    </Routes>
                    <Footer />
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
