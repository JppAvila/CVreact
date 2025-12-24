import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import FlowTask from './components/FlowTask';
import NutriPlan from './components/NutriPlan';
import Nemesis2k from './components/Nemesis2k';

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/flowtask" element={<FlowTask />} />
        <Route path="/nutriplan" element={<NutriPlan />} />
        <Route path="/nemesis2k" element={<Nemesis2k />} />
      </Routes>
    </HashRouter>
  );
}
