


import React from 'react';

function Home({ user, onLogout, onDelete }) {
  return (
    <div>
      <h2>Қош келдіңіз, {user.name}!</h2>
      <button onClick={onLogout}>Шығу</button>
      {user.email && <button onClick={onDelete}>Аккаунтты жою</button>}
    </div>
  );
}

export default Home;
