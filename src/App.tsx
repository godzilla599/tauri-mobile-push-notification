import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import HomePage from './pages/home';
import SettingsPage from './pages/settings';
import LayoutWrapper from './components/custom/layout-wrapper';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
