import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import KeyboardPage from "./pages/keyboardPage/keyboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/VirtualKeyboard" element={<KeyboardPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
