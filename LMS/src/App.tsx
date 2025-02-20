import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Sidebar from './components/common/Sidebar';
import Dashboard from './pages/Dashboard';
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/books" element={<BooksManagement />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<HelpSupport />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;