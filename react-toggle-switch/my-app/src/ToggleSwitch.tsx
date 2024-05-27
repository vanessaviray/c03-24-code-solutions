import { useState } from 'react';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  let className = 'toggle-switch';
  let label = 'OFF';

  function handleToggle() {
    setIsOn(!isOn);
  }

  if (isOn) {
    className = 'toggle-switch is-on slider';
    label = 'ON';
  } else {
    className = 'toggle-switch';
    label = 'OFF';
  }

  return (
    <div className={className}>
      <div className="slider" onClick={handleToggle}>
        <div className="switch"></div>
      </div>
      <span className="state-label">{label}</span>
    </div>
  );
}
