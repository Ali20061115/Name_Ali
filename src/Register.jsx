import React, { useState } from 'react';

function Register({ onLogin, onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      alert('Бұл email тіркелген.');
      return;
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onLogin(newUser);
  };

  return (
    <div>
      <h2>Тіркелу</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Аты"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br />
        <input
          type="password"
          placeholder="Құпия сөз"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br />
        <button type="submit">Тіркелу</button>
      </form>
      <p>
        Аккаунтыңыз бар ма? <button onClick={onSwitch}>Кіру</button>
      </p>
    </div>
  );
}

export default Register;