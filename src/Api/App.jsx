import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import LanguageContext from './LanguageContext';
import ChildComponent from './ChildComponent';


    function App(){
const [theme,setTheme]= useState(kz)

   return(
    <div>
      <h1>
        This is Text component 
      </h1>
      <div>
        <h3>This is Main component</h3>
        <p> {theme == "kz" ? "Миссия түнде орындалады" : theme =="ru" ? "Миссия ночинается в полночь" : theme=="en" ? "Mission starts at midnight": 'theme'}</p>
        <select onChange={(e)=>setTheme(e.target.value)}>
          <option value="kz">kz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </div>
    </div>
   )



    }

export default App;

