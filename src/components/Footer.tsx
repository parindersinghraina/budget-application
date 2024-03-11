// Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; 2024 www.budgettrek.com. All rights reserved.</p>
      <div className="powered-by">
        <p>Powered by PindoholicTech <img src="/pindoholicTech.png" alt="PindoholicTech Icon" className="powered-by-icon" /></p>
      </div>
    </footer>
  );
};

export default Footer;
