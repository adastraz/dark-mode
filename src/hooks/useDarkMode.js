import {useLocalStorage} from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (initialValue) => {
    const [theme, setTheme] = useLocalStorage('light', initialValue)
    var test = document.querySelector('body')
    useEffect(() => {
        if (theme){
            test.classList.add('dark-mode')
        }else {
            test.classList.remove('dark-mode')
        }
    },[theme])
    return [theme, setTheme]
}