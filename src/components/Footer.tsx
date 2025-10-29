import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-greige text-text py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm" style={{
          fontFamily: 'Sora, sans-serif',
          fontWeight: '400',
          color: '#13131A'
        }}>
          Designed with curiosity using React, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;