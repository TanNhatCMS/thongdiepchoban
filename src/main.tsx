import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { CustomProvider } from 'rsuite'
import viVN from './utils/locale/vi_VN'
import { ThemeProvider } from './ThemeContext'
import { StyledEngineProvider } from '@mui/material/styles';
import InstallPrompt from './components/InstallPrompt'
const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <StyledEngineProvider injectFirst>
      <CustomProvider locale={viVN}>
        <ThemeProvider>
          <BrowserRouter>
            <App />
            <InstallPrompt />
          </BrowserRouter>
        </ThemeProvider>
      </CustomProvider>
      </StyledEngineProvider>
    </StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  )
}
