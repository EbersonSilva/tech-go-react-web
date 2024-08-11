import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app' //Importação da função App
import './index.css' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
