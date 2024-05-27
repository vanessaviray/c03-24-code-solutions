import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import './ValidatedInput.css';

export function ValidatedInput() {
  const [password, setPassword] = useState('');

  const hasDigit = /\d/.test(password);
  const hasCapitalLetter = /[A-Z]/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()]/.test(password);

  const getIcon = (isValid: boolean) => {
    return isValid ? (
      <FaCheck className="fa-check" />
    ) : (
      <FaTimes className="fa-times" />
    );
  };

  let icon = getIcon(false);
  let message = '';

  if (password.length === 0) {
    message = 'A password is required.';
  } else if (password.length < 8) {
    message = 'Your password is too short.';
  } else if (!hasDigit) {
    message = 'Your password must contain at least one digit.';
  } else if (!hasCapitalLetter) {
    message = 'Your password must contain at least one capital letter.';
  } else if (!hasSpecialCharacter) {
    message =
      'Your password must contain at least one special character (!, @, #, $, %, ^, &, *, (, or )).';
  } else {
    icon = getIcon(true);
  }

  return (
    <div>
      <div className="column">
        <label>Password</label>
        <div className="row">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {icon}
        </div>
      </div>
      <div className="message">{message}</div>
    </div>
  );
}

// Original Solution:

// import { useState } from 'react';
// import { FaCheck } from 'react-icons/fa';
// import { FaXmark } from 'react-icons/fa6';
// import './ValidatedInput.css';

// export function ValidatedInput() {
//   const [password, setPassword] = useState('');

//   return (
//     <div>
//       <span>Password</span>
//       <div className="row">
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         />
//         {password.length === 0 && (
//           <FaXmark style={{ color: 'red', marginLeft: '5px' }} />
//         )}
//         {password.length > 0 && password.length < 8 && (
//           <FaXmark style={{ color: 'red', marginLeft: '5px' }} />
//         )}
//         {password.length >= 8 && (
//           <FaCheck style={{ color: 'green', marginLeft: '5px' }} />
//         )}
//       </div>
//       {password.length === 0 && <p>A password is required.</p>}
//       {password.length > 0 && password.length < 8 && (
//         <p>Your password is too short.</p>
//       )}
//       {password.length >= 8 && <p></p>}
//     </div>
//   );
// }
