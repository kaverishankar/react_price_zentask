import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Displaying from './pricecard.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Displaying />
  </React.StrictMode>,
)
