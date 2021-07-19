import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";

//command: npm run start
//command (with new terminal): npx json-server --watch data/db.json --port 8000
//commanf (maybe not always needed): npm install react-router-dom@5

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
