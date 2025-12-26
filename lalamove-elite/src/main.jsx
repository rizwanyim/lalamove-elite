import React from 'react'
import ReactDOM from 'react-dom/client'
// Menggunakan import tanpa sambungan .jsx adalah lebih selamat dalam sesetengah persekitaran pembinaan Vite
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)