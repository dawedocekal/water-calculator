import React from 'react';
import ReactDOM from 'react-dom/client';
import QuestionsList from './components/questionsList/QuestionsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuestionsList />
  </React.StrictMode>
);
