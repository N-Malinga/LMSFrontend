import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Sidebar from '../../components/common/Sidebar';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div className="main-layout">

      <div className="content-wrapper">
        <Sidebar currentRoute={location.pathname} />
        <main className="main-content">{children}</main>
      </div>

    </div>
  );
};

export default MainLayout;