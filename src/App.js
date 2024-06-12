import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import KeyboardPage from "./pages/keyboardPage/keyboardPage";
import { Background } from "./components/background/background";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header/>
      <Background/>
      <Routes>
        <Route path="/VirtualKeyboard" element={<KeyboardPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
