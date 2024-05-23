import { useState } from 'react';
import './App.css';
import { Modal } from './Modal';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}>
        "Delete Me!"
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}>
        <p>Are you sure you want to delete this item?</p>
        <button
          onClick={() => {
            setIsOpen(false);
          }}>
          Cancel
        </button>
        <button
          onClick={() => {
            alert('Item was deleted.');
            setIsOpen(false);
          }}>
          Delete
        </button>
      </Modal>
    </div>
  );
}
