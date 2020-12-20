import React from 'react';
import Footer from '../Footer';

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">

      <div className="container flex-fill">{children}</div>

      <Footer />
    </div>
  );
};

export default MainComponent;
