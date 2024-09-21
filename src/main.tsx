import { StrictMode } from 'react'

import App from './App.tsx'
import './index.css'
import { createRoot } from 'react-dom/client'

import MainLayout from '@/layouts/main-layout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </StrictMode>
)
