import useDarkMode from 'use-dark-mode'

export default function useTheme() {
    let initTheme = 'light';
    
    const darkMode = useDarkMode(initTheme, {
        classNameDark: 'dark',
        classNameLight: 'light',
    })

    return darkMode
}