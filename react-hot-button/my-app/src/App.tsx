import './App.css';
import './HotButton.css';
import { HotButton } from './HotButton.tsx';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  const [className, setClassName] = useState('');

  function handleClick() {
    setCount(count + 1);

    if (count === 2 && count < 5) {
      setClassName('purple');
    } else if (count === 5 && count < 8) {
      setClassName('magenta');
    } else if (count === 8 && count < 11) {
      setClassName('red');
    } else if (count === 11 && count < 14) {
      setClassName('orange');
    } else if (count === 14 && count < 17) {
      setClassName('yellow');
    } else if (count === 17 && count < 20) {
      setClassName('white');
    }
  }

  return (
    <HotButton count={count} onClick={handleClick} className={className} />
  );
}
