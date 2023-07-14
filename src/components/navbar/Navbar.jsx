import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='position-sticky top-0' style={{ zIndex: 10 }}>
      {/* <!-- Navbar --> */}
      {/* <!-- Navbar --> */}
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        {/* <!-- Container wrapper --> */}
        <div className='container'>
          {/* <!-- Navbar brand --> */}
          <Link className='navbar-brand me-2' to='/'>
            Login & Registration
          </Link>

          {/* <!-- Toggle button --> */}
          <button
            className='navbar-toggler'
            type='button'
            data-mdb-toggle='collapse'
            data-mdb-target='#navbarButtonsExample'
            aria-controls='navbarButtonsExample'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <i className='fas fa-bars'></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className='collapse navbar-collapse' id='navbarButtonsExample'>
            {/* <!-- Left links --> */}
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#!'>
                  Dashboard
                </a>
              </li>
            </ul>
            {/* <!-- Left links --> */}

            <div className='d-flex align-items-center'>
              <Link
                to={'/login'}
                type='button'
                className='btn btn-link px-3 me-2'>
                Login
              </Link>
              <Link
                to={'/register'}
                type='button'
                className='btn btn-primary me-3'>
                Sign up for free
              </Link>
              <Link
                className='btn btn-dark px-3'
                href='https://github.com/mdbootstrap/mdb-ui-kit'
                role='button'>
                <i className='fab fa-github'></i>
              </Link>
            </div>
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
      </nav>
      {/* <!-- Navbar --> */}
    </header>
  );
};

export default Navbar;
