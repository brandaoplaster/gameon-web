import React from 'react';
import DashboardHeader from '../../Dashboard/Header';

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <DashboardHeader />

      <div className="container flex-fill">{children}</div>
    </div>
  );
};

export default MainComponent;
