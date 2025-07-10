import React, { useState } from 'react';
import axios from 'axios';
import "./App.css"
function App() {
  const [userInput, setUserInput] = useState('');
  const [answer, setAnswer] = useState([]);

  function click() {
    axios.post(
     'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ',
      {
        contents: [{ parts: [{ text: userInput }] }]
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
    .then((response) => {
      setAnswer([...answer, {answer: response.data.candidates?.[0]?.content?.parts?.[0]?.text, question: userInput}]);
      console.log(response.data);
    });
  }


    return(
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-6">Gemini AI Сұрақ-Жауап</h1>
      
        <div className="w-full max-w-xl bg-white rounded-lg shadow-md p-6 mb-6">
          <input
            type="text"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Сұрағыңызды жазыңыз..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
          />
          <button
            onClick={click}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Сұрау
          </button>
        </div>
      
        <div className="w-full max-w-xl space-y-4">
          {answer.map((n, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow p-4 hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-800"><b>Сұрақ:</b> {n.question}</p>
              <p className="text-green-700 mt-2"><b>Жауап:</b> {n.answer}</p>
            </div>
          ))}
        </div>
      </div>
    )      

}
export default App