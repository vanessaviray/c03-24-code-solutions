import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import './ValidatedInput.css';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  return (
    <div>
      <span>Password</span>
      <div className="row">
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {password.length === 0 && (
          <FaXmark style={{ color: 'red', marginLeft: '5px' }} />
        )}
        {password.length > 0 && password.length < 8 && (
          <FaXmark style={{ color: 'red', marginLeft: '5px' }} />
        )}
        {password.length >= 8 && (
          <FaCheck style={{ color: 'green', marginLeft: '5px' }} />
        )}
      </div>
      {password.length === 0 && <p>A password is required.</p>}
      {password.length > 0 && password.length < 8 && (
        <p>Your password is too short.</p>
      )}
      {password.length >= 8 && <p></p>}
    </div>
  );
}
