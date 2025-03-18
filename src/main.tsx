import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StoreProvider } from 'easy-peasy'
import store from './store/Store.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider store={store}>
     <BrowserRouter>
     <App />
     </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)
