import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      <Header />

      <div className="container flex-fill">{children}</div>

      <Footer />
    </div>
  );
};

export default MainComponent;
