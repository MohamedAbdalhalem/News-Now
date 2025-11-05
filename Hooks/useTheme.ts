import React, { useLayoutEffect, useState } from "react"

export default function useTheme() {
    const [theme, setTheme] = useState("")
    function changemode(e : React.ChangeEvent<HTMLSelectElement>) {
      if (e.target.value === "Light mode") {
        document.documentElement.setAttribute("data-theme", "light")
        localStorage.setItem('theme', 'light')
        setTheme('Light mode')
      } else if (e.target.value === "Dark mode") {
        document.documentElement.setAttribute("data-theme", "dark")
        localStorage.setItem('theme', 'dark')
        setTheme('Dark mode')
      } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.removeItem('theme')
        setTheme('System')
      }
    }
    useLayoutEffect(() => {
      if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute("data-theme", "light")
        setTheme('Light mode')
      } else if (localStorage.getItem('theme') && localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute("data-theme", "dark")
        setTheme('Dark mode')
      } else {
        document.documentElement.removeAttribute('data-theme')
        setTheme('System')
      }
    }, [])
    return {theme,changemode}
}
