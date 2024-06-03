import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import KeyboardPage from "./pages/keyboardPage/keyboardPage";
import { Background } from "./components/background/background";
import FinishCardAlert from "./components/finishGameAlert/finishGameAlert";

function App() {
  return (
    <Router>
      <Background/>
      <FinishCardAlert/>
      <Routes>
        <Route path="/VirtualKeyboard" element={<KeyboardPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
