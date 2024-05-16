import React, { useState } from 'react';
import VirtualKeyboard from '../keyboard/keyboard';
import VirtualScreen from '../screen/screen';

function MechanographicLayout() {
  const [typedText, setTypedText] = useState('');

  return(
    <section className="mechanographic-layout">
      <VirtualScreen typedText={typedText} />
      <VirtualKeyboard setTypedText={setTypedText} />
    </section>
  )
}

export default MechanographicLayout;

