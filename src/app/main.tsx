import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/index.css'
import App from './App.tsx'
import { BackgroundProvider } from './providers/BackgroundContext.tsx'
import { TimerProvider } from './providers/TimerContext.tsx'
import '../i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BackgroundProvider>
        <TimerProvider>
          <App />
        </TimerProvider>
      </BackgroundProvider>
  </StrictMode>,
)
