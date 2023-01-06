import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

export default () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        home
      </a>
      <a href="https://twitter.com/secunene" target="_blank" rel="noopener noreferrer">
        twitter
      </a>
      <a href="https://www.instagram.com/secunene/" target="_blank" rel="noopener noreferrer">
        instagram
      </a>
      <a href="https://twitter.com/terqoo" target="_blank" rel="noopener noreferrer">
        creador uwu
      </a>
    </Menu>
  );
};
