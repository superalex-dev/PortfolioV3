import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__brand">Александър Боев</h1>
      <nav className="header__nav">
        <ul>
          <li><a href="#home">Начало</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#contacts">Контакти</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
