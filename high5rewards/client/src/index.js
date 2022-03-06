import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


import {MoralisProvider} from "react-moralis";
import reportWebVitals from './reportWebVitals';


console.log(appId, serverUrl)
ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={process.env.APPID} serverUrl={process.env.SERVERURL}>
      <App />
    </ MoralisProvider >
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
