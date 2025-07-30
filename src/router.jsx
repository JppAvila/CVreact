import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FlowTask from './components/FlowTask';

export default function Router() {
  return (
    <BrowserRouter basename="/CVreact">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flowtask" element={<FlowTask />} />
      </Routes>
    </BrowserRouter>
  );
}
