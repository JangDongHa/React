import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <App />, // App 이라는 Function이 실행되는데 (return 값만 받아옴)
  document.querySelector('#root') // 그 function을 root라는 id가 있는 곳에서 실행(기본적으로 public->index.html에서 스캔)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
