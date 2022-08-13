import {BrowserRouter,Routes,Route} from "react-router-dom"
import Description from "./pages/Description"
import ComponentHeader from "./components/Header"
import ComponentMain from "./components/Main"


function App() {
  return (
     <BrowserRouter>
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
