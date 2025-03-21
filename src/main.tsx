import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StoreProvider } from 'easy-peasy'
import store from './store/Store.ts'
import { BrowserRouter } from 'react-router-dom'
import RouteFlow from './routes/routeFlow.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider store={store}>
     <BrowserRouter>
      <RouteFlow />
     </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
)
