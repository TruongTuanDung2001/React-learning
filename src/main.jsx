import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App, MapProduct, ExpReact1} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />
    <MapProduct /> */}
    <ExpReact1 />
  </StrictMode>,
)
