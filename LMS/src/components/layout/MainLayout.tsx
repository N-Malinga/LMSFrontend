import React from 'react';

import Sidebar from '../../components/common/Sidebar';
import { ReactNode } from 'react';

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="main-layout">
      {/* <Header /> */}
      <div className="content-wrapper">
        <Sidebar />
        <main className="main-content">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;