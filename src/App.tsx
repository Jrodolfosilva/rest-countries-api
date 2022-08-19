
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { GlobalStyled } from "./GlobalStyled"
import Description from "./pages/Description"
import ComponentHeader from "./components/Header"
import ComponentMain from "./components/SearchMain"
import {ligthMode,darkMode} from "./theme/Themes"

function App() {

  return (
     <BrowserRouter>
     <GlobalStyled/>
        <div className="App">
          <ComponentHeader/>

      <Routes>
        <Route path="/" element={<ComponentMain/>}/>
         <Route path="/description/:name" element={<Description/>}/> 
      </Routes>
      
        </div>
    </BrowserRouter>
  )
}

export default App
