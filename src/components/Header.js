import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className='header__nav'>
            <NavLink to='/' activeClassName='activeNav' exact={true}>Back to Main Page</NavLink>
            <NavLink to='/addcontact' activeClassName='activeNav'>Add Contact</NavLink>
        </div>
    </header>
);

export default Header;