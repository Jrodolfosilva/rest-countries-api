
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { GlobalStyled } from "./GlobalStyled"
import { ThemeProvider } from "styled-components"
import Description from "./pages/Description"
import ComponentHeader from "./components/Header"
import ComponentMain from "./components/SearchMain"
import {ligthMode,darkMode} from "./theme/Themes"
import { useState } from "react"

function App() {
 const [theme,setTheme] = useState("ligth")


  return (
     <BrowserRouter>
     <ThemeProvider theme={theme ==="ligth"?ligthMode:darkMode}>
     <GlobalStyled/>

     
        <div className="App">
          <ComponentHeader/>

      <Routes>
        <Route path="/" element={<ComponentMain/>}/>
         <Route path="/description/:name" element={<Description/>}/> 
      </Routes>
      
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
