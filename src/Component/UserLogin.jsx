import React, {useState} from 'react'
import './UserLogin.css'

const UserLogin = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    let arr = email.split('.');
    let lastPart = arr[arr.length - 1];

    if (lastPart === 'ru' && password.length >= 8) {
      alert('Message sent');
    } else {
      if (lastPart !== 'ru') {
        alert('For email: Only ".ru" domains are allowed.');
      }
      if (password.length < 8) {
        alert('For password: At least 8 characters.');
      }
    }
}
  return (
    <div>
        <h2>Log in</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email
          <br />
          <input
            className="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <br />
        <br />
        <label>
          Password
          <br />
          <input
            className="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserLogin