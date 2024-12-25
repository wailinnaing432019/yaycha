import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import ThemedApp from './ThemedApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemedApp />
  </StrictMode>,
)
