import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FlowTask from './components/FlowTask.tsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FlowTask />
  </StrictMode>
);
