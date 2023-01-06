import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';

// eslint-disable-next-line


 const props = () => {
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
        admin uwu
      </a>
    </Menu>
  );
};
export default props;
