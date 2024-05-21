import { useState } from 'react';
import { FormEvent } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('Username:', username, 'Password:', password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}></input>
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
