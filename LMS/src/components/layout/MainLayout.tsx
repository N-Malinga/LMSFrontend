import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Sidebar from '../../components/common/Sidebar';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div>

      <div>
        <Sidebar currentRoute={location.pathname} />
        <main>{children}</main>
      </div>

    </div>
  );
};

export default MainLayout;