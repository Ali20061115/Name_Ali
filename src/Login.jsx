import React, { useState } from 'react';

function Login({ onLogin, onSwitch, onGuestLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      onLogin(user);
    } else {
      alert('Email немесе құпия сөз қате.');
    }
  };

  return (
    <div>
      <h2>Кіру</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Кіру</button>
      </form>
<button onClick={onGuestLogin}>Қонақ ретінде кіру</button>
      <p>
        Аккаунтыңыз жоқ па? <button onClick={onSwitch}>Тіркелу</button>
      </p>
    </div>
  );
}
export default Login;