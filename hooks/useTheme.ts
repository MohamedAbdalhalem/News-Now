import { ChangeEvent, useLayoutEffect, useState } from "react";

export default function useTheme() {
  // define a state to update the theme mode
  const [theme, setTheme] = useState("");

  // define a regular function to toggle change theme
  // change the theme on the value form the select element
  function changemode(e: ChangeEvent<HTMLSelectElement>) {
    // change the theme to light mode by putting attribute data-theme to html element and assign it with light value plus store the theme in the localStorage and update the state to rerender the select element
    if (e.target.value === "Light mode") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      setTheme("Light mode");
    }

    // change the theme to dark mode by putting attribute data-theme to html element and assign it with dark value plus store the theme in the localStorage and update the state to rerender the select element
    else if (e.target.value === "Dark mode") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("Dark mode");
    }

    // if there the value isn't light or dark , kept the defalut System theme plus remove the arrtibute data-theme from html elelment and remove the the theme form the localStorage
    else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem("theme");
      setTheme("System");
    }
  }

  // use useLayoutEffect ot update the theme on the theme that stored in the local storage
  useLayoutEffect(() => {
    if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "light"
    ) {
      document.documentElement.setAttribute("data-theme", "light");
      setTheme("Light mode");
    } else if (
      localStorage.getItem("theme") &&
      localStorage.getItem("theme") === "dark"
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("Dark mode");
    } else {
      document.documentElement.removeAttribute("data-theme");
      setTheme("System");
    }
  }, []);
  return { theme, changemode };
}
