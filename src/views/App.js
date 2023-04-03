import { Route, Routes } from 'react-router-dom';
import Dashboard from '../components/organisms/Dashboard/Dashboard';
import MainTemplate from '../components/template/MainTemplate/MainTemplate';
import AccountSettings from './AccountSettings/AccountSettings';
import About from './About/About';

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/about" element={<About />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
