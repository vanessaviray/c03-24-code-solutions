import { useState } from 'react';
import './toggleSwitch.css';
import './App.css';
import { ToggleSwitch } from './toggleSwitch';

export default function App() {
  let className = 'toggle-switch';
  let stateLabel = 'OFF';
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  if (isOn === true) {
    className = 'toggle-switch is-on';
    stateLabel = 'ON';
  } else if (isOn === false) {
    className = 'toggle-switch';
    stateLabel = 'OFF';
  }

  return (
    <ToggleSwitch
      className={className}
      onClick={handleClick}
      stateLabel={stateLabel}
    />
  );
}
