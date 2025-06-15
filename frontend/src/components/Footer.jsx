import React from 'react';
import './Footer.css'

const Footer = ({ children, onSelect }) => {
  return (
    <li>
      <button className='active' onClick={onSelect}>{children}</button>
    </li>
  );
};

export default Footer;
