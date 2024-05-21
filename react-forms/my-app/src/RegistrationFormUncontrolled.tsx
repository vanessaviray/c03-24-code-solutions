import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    console.log(
      'Username:',
      formValues.username,
      'Password:',
      formValues.password
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username"></input>
      </label>
      <label>
        Password:
        <input type="password" name="password"></input>
      </label>
      <button>Submit</button>
    </form>
  );
}
