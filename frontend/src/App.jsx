import NavBar from "./NavBar"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Home from "./Home"
import {Routes,Route} from "react-router-dom" 
function App() {
  return (
    <Routes>
      <Route path="/SignUp" element={< SignUp/>}/>
      <Route path="/SignIn" element={< SignIn/>}/>
      <Route path="/" element={< Home/>}/>
      <Route path="/home" element={< Home/>}/>
      

    </Routes>
  )
}
export default App
