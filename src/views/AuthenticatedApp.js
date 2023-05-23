import React from 'react';
import MainTemplate from '../components/template/MainTemplate/MainTemplate';
import { Route, Routes } from 'react-router-dom';
import About from './About/About';
import AccountSettings from './AccountSettings/AccountSettings';
import Dashboard from '../components/organisms/Dashboard/Dashboard';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/about" element={<About />} />
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
