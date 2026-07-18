import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppThemeConfig from './theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeConfig>
      <App />
    </AppThemeConfig>
  </StrictMode>,
)
