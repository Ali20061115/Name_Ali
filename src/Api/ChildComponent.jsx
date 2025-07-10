

import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';

const ChildComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h1>Тақырып аты: {theme}</h1>
      <p>Қазіргі тақырып: {theme}</p>
      <button onClick={toggleTheme}>Тақырыпты ауыстыру</button>
      <p>Тіл: {language}</p>
      <button onClick={toggleLanguage}>Тілді ауыстыру</button>
    </div>
  );
};

export default ChildComponent;
