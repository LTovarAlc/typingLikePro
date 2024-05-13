import "./App.css";
import MechanographicLayout from "./components/mechanographic-layout/mechanographic-layout";
import { useState } from "react";
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
