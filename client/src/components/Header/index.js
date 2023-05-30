import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Auth from '../../utils/auth';
import unnamed from '../../images/unnamed.png';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();


  };
  return (
    <div>

      <header id="header" className="header fixed-top d-flex align-items-center">

        <div className="d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center">
            <img src={unnamed} alt="" />
            <span className="d-none d-lg-block">Auto Sales</span>

          </a>
          
        </div>

        

        <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">

            




            <li className="nav-item dropdown pe-3">

              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">

              {Auth.loggedIn() ? (
                    <>

                      <span id=" Usermaemain" as={Link} variant='info' classNameName="m-2" to="/me">
                        {Auth.getProfile().data.username}
                      </span>

                    </>
                  )
                    : (
                      <>
                  
                        <span className="d-none d-md-block dropdown-toggle ps-2" as={Link} variant='primary'to="/login">
                        Sign In into your account.
                          </span>

                      </>
                    )}
                <img src="images/profile-img.jpg" alt="Profile" className="rounded-circle" />
                
              </a>

              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                <li className="dropdown-header">

                  {Auth.loggedIn() ? (
                    <>

                      <h6 id=" Usermaemain" as={Link} variant='info' classNameName="m-2" to="/me">
                        {Auth.getProfile().data.username}'s profile
                      </h6>

                    </>
                  )
                    : (
                      <>
                        <h6 as={Link} variant='primary' classNameName="m-2" to="/login">
                        Sign In
                        </h6>
                        <span as={Link} variant='primary' classNameName="m-2" to="/login">-</span>

                      </>
                    )}

                 
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="/me">
                    <i className="bi bi-person"></i>
                    <span>My Profile</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                    <i className="bi bi-gear"></i>
                    <span>Account Settings</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                    <i className="bi bi-question-circle"></i>
                    <span>Need Help?</span>
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>

                <li>
                  <a className="dropdown-item d-flex align-items-center" href="/Login">
                    {Auth.loggedIn() ? (
                      <>

                        <i classNameName="bi bi-box-arrow-right">
                          <span onClick={logout}>Sign Out</span>
                        </i>
                      </>
                    )
                      : (
                        <>

                          <i classNameName="bi bi-box-arrow-right" >
                            <span as={Link} variant='secondary' to="/signup ">Sign In</span>
                          </i>
                        </>
                      )}


                  </a>

                </li>

              </ul>
            </li>

          </ul>
        </nav>

      </header>
      
    </div>

  );
};

export default Header;
