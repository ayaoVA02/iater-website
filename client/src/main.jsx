import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./i18n";
import { AppWrapper } from "./dashboard/components/common/PageMeta.tsx";
import { ThemeProvider } from "./dashboard/context/ThemeContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <QueryClientProvider client={queryClient}>

          <App />
        </QueryClientProvider>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>,
)
