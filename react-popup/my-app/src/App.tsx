import { Popup } from './Popup.tsx';
import './App.css';
import './Popup.css';
import { useRef, useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  return (
    <>
      <button
        ref={button}
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        Pop Up!
      </button>
      <Popup
        isOpen={isOpen}
        positionTo={button.current}
        onClose={() => {
          setIsOpen(false);
        }}>
        <ul>
          <li>Appetizers</li>
          <li>Lunch</li>
          <li>Dinner</li>
          <li>Desserts</li>
          <li>Drinks</li>
        </ul>
      </Popup>
    </>
  );
}

export default App;
