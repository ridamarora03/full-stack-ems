import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // this root is same as the one in index.html to render it
  //this file is main entry point in the javascript
  //src of this file is mentioned in index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
