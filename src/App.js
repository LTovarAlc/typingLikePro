import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import KeyboardPage from "./pages/keyboardPage/keyboardPage";
import { Background } from "./components/background/background";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Header/>
      <Background/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/VirtualKeyboard" element={<KeyboardPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App
