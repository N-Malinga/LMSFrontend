import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Sidebar from './components/common/Sidebar';
import Dashboard from './pages/Dashboard';
import './styles/global.css';
import BooksManagement from './pages/BooksManagement';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/books" element={<BooksManagement />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;