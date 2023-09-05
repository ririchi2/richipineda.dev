"use client"
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const isDark = (): boolean =>
    (localStorage && localStorage.theme === 'dark') ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

const getThemeString = (isDark: boolean): string => (isDark ? 'dark' : 'light')

const DarkModeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false)

    const toggleMode = (): void => {
        localStorage.theme = getThemeString(!isDarkMode)
        console.log(localStorage.theme);

        if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        setDarkMode(!isDarkMode)
    }

    useEffect(() => {
        setDarkMode(isDark())
    }, [])

    // const darkModeActive: boolean = document.documentElement.classList.contains('dark');


    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.button
                className="text-2xl sm:text-3xl text-yellow-400 dark:text-yellow-300 focus:outline-none"
                onClick={() => toggleMode()}
                key={isDarkMode ? 'dark-icon' : 'light-icon'}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {isDarkMode ? '🌙' : '🌤️'}
            </motion.button>
        </AnimatePresence>
    )
}

export default DarkModeToggle
