import { Home } from "./pages/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Description from "./pages/Description"
import Test from "./pages/Test"
import Header from "./components/Header"
function App() {

  return (
  <BrowserRouter>
    <div className="App">
     <Header/>

  <Routes>
  <Route path="/" element={<Home/>}/>
      <Route path="/description/:name" element={<Description/>}/>
      <Route path="/tes" element={<Test/>}/>
  </Routes>
      
    </div>
    </BrowserRouter>
  )
}

export default App
