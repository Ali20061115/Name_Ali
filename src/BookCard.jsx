import React from 'react';
import './App.css'; 
import App from './App'

const BookCard = (props) => {
  return (
    <div className="book-card">
      <img src={props.cover} alt={props.title} className="book-cover" />
      <h2>{props.title}</h2>
      <p><strong>Автор:</strong> {props.author}</p>
      <p><strong>Шыққан жылы:</strong> {props.year}</p>
    </div>
  );
};

export default BookCard;