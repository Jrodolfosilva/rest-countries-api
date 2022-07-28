import { Home } from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Description from "./pages/Description"
import Header from "./components/Header"
import Search from "./components/Search"
function App() {

  return (
  <BrowserRouter>
    <div className="App">
     <Header/>

  <Routes>
  <Route path="/" element={<Search/>}/>
      <Route path="/description/:name" element={<Description/>}/>
  </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
