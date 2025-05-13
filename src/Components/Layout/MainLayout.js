// src/Components/Layout/MainLayout.js
import React from 'react';
import CustomSidebar from '../CustomSidebar/CustomSidebar ';
import Header from '../Header/Header'; // For future

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <CustomSidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
