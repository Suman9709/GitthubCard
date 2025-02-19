
import React from 'react'
import MyCard from "./Components/MyCard"
import ThemeProvider from './Context/ThemeProvider'
// import ThemeButton from './Components/ThemeButton'

function App() {
  return (
    <ThemeProvider>
      <MyCard/>
     
    </ThemeProvider>
  )
}

export default App
