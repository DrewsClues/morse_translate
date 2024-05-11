import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'

import Translate from './components/translation.jsx'
import Translate2 from './components/translation2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Translate2 />
  </React.StrictMode>,
)
