import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='container'>
        <div className='row'>
          <div className='column' >
            <div className='headerInner'>
              <div className='brand' />
              <nav className='navigation'>
                <ul>
                  <li>
                    <NavLink exact activeClassName="is-active" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" to="/dashboard/examiner/">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" to="/diagnosis">
                      Diagnosis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="is-active" to="/pacients">
                      Pacients
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
