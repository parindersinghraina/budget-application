// header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
      <img src="/logo.png" alt="Logo" className="logo" />
    </div>
  );
};

export default Header;
