import {BrowserRouter,Routes,Route} from "react-router-dom"
import Description from "./pages/Description"
import ComponentHeader from "./components/Header"
import ComponentMain from "./components/SearchMain"
import { GlobalStyled } from "./GlobalStyled"
import {ThemeProvider} from "styled-components"


function App() {
const colors = {
  bg:"#000"
}
  return (
     <BrowserRouter>
     <GlobalStyled/>
     <ThemeProvider theme={colors}>
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
