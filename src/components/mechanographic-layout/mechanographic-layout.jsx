import React, { useState } from 'react';
import VirtualKeyboard from './keyboard/virtualKeyboard';
import VirtualScreen from './virtualScreen/virtualScreen';

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

