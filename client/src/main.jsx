import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";
import { AppWrapper } from "./dashboard/components/common/PageMeta.tsx";
import { ThemeProvider } from "./dashboard/context/ThemeContext.tsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ThemeProvider>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
)
