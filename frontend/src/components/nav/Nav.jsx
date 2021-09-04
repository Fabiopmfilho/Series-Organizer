import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css'

const Nav = (props) => {
  return(
    <aside className='menu-area'>
        <nav className="menu">
          <Link to="/">
            <i className="item fa fa-home"></i> Início
          </Link>
          <Link to="/series">
            <i className="item fa fa-tv"></i> Séries
          </Link>
        </nav>
    </aside>
  )
}

export default Nav;
