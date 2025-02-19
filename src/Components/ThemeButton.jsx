import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'
import light from '../../public/light1.svg'
import dark from '../../public/dark.png'

const ThemeButton = () => {
const {theme, toggleTheme} = useContext(ThemeContext)

  return (
    <div>
        <button className={`cursor-pointer`} onClick={toggleTheme}>
        <img 
          src={theme === "light" ? dark : light} 
          alt={theme === "light" ? "Light Mode Icon" : "Dark Mode Icon"} 
          className="w-6 h-6 mr-2" // Adjust size as needed and add margin
        />
            {/* Switch to {theme==="light"?"dark":"light"} */}
             </button>
    </div>
  )
}

export default ThemeButton