import './App.css';
import Keyboard from './components/keyboard/keyboard';
import Screen from './components/screen/screen';
import { useState } from 'react';

function App() {
  const [typedText, setTypedText] = useState('');

  return(
    <section>
      <Screen text={typedText} />
      <Keyboard setTypedText={setTypedText}/>
    </section>
  )
}

export default App;
