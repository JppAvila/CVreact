import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FlowTask from './components/FlowTask.tsx'

const path = window.location.pathname.replace(import.meta.env.BASE_URL, '/');
const RootComponent = path.startsWith('/flowtask') ? FlowTask : App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RootComponent />
  </StrictMode>,
)
