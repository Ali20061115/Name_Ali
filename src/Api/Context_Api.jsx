// ChildComponent.js
import React, { useContext } from 'react';
import UserContext from './UserContext';

function Context_Api() {
  // Context-тен username-ді аламыз
  const username = useContext(UserContext);

  return (
    <div>
      <p>Сәлем, {username}!</p>
    </div>
  );
}

export default Context_Api;
 