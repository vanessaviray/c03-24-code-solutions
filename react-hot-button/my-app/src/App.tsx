import './hot-button.css';
import './App.css';
import { HotButton } from './hot-button';
import { ClickCount } from './click-count';
import { useState } from 'react';

const buttonText = 'Hot Button';
let className = 'purple';

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);

    if (count < 2) {
      className = 'purple';
    } else if (count < 5) {
      className = 'magenta';
    } else if (count < 8) {
      className = 'red';
    } else if (count < 11) {
      className = 'orange';
    } else if (count < 14) {
      className = 'yellow';
    } else {
      className = 'white';
    }
  };

  return (
    <div>
      <HotButton
        className={className}
        buttonText={buttonText}
        onClick={handleClick}
      />
      <ClickCount count={count} />
    </div>
  );
}
