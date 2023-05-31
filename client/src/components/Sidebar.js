import React, { useState } from 'react';
import carprice from '../images/car-price-icon.png';
import vehiclesell from '../images/car-vehicle-sell-icon.png';
import carservice from '../images/car-service-icon.png';
import carpriVehicalRentce from '../images/car-vehicle-rent-icon.png';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
} from "react-icons/fa";


const Sidebar = () => {
   
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };

    return (
       

        <div className="sidebarcontainer" >

           
              


                <aside id="sidebar" className="sidebar">

                    <ul className="sidebar-nav" id="sidebar-nav">

                        <li className="nav-item">
                            <a className="nav-link " href="/home">
                                <i className="bi bi-grid"></i>
                                <span>Dashboard</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <img src={carprice} width="30" height="30" /><span style={{ margin: "auto"}}> Vehicles</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="/addnewvehicle">
                                        <i className="bi bi-circle"></i><span >Vehicle Purchase </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/addnewvehicle">
                                        <i className="bi bi-circle"></i><span >Vehicle Sales </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/addnewvehicle">
                                        <i className="bi bi-circle"></i><span >Vehicle Rent </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/ViewAllVehicle">
                                        <i className="bi bi-circle"></i><span >View All Vehicle </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/addnewvehicle">
                                        <i className="bi bi-circle"></i><span >View Sold Vehicle </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/addnewvehicle">
                                        <i className="bi bi-circle"></i><span >View Rented Vehicle  </span>
                                    </a>
                                </li>
                                
                            </ul>
                        </li>



                        <li className="nav-item">
                            <a className="nav-link collapsed" data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#">
                            <img src={vehiclesell} width="30" height="30" /><span style={{ margin: "auto"}}> Workshop</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="forms-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="/Repairs">
                                        <i className="bi bi-circle"></i><span>Repairs</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="forms-layouts.html">
                                        <i className="bi bi-circle"></i><span>Modifications</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/GeneralServices">
                                        <i className="bi bi-circle"></i><span>General Services</span>
                                    </a>
                                </li>
                                
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <img src={carservice} width="35"></img><span  style={{ margin: "auto"}}>Store Management</span><i
                                    className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                    <a href="tables-general.html">
                                        <i className="bi bi-circle"></i><span>Add Customer</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tables-general.html">
                                        <i className="bi bi-circle"></i><span>Goods In / Out</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tables-data.html">
                                        <i className="bi bi-circle"></i>
                                        <span>Sales Order</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tables-data.html">
                                        <i className="bi bi-circle"></i>
                                        <span>Purchse Order</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tables-data.html">
                                        <i className="bi bi-circle"></i>
                                        <span>Grn</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link collapsed" data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#">
                                <i className="bi bi-bar-chart"></i><span>Accounts</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="charts-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="charts-chartjs.html">
                                        <i className="bi bi-circle"></i><span>Receipts</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="charts-apexcharts.html">
                                        <i className="bi bi-circle"></i><span>Payments</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="charts-echarts.html">
                                        <i className="bi bi-circle"></i><span>Journal</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="charts-echarts.html">
                                        <i className="bi bi-circle"></i><span>Invoice</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                                <i className="bi bi-gem"></i><span>System Tools</span><i className="bi bi-chevron-down ms-auto"></i>
                            </a>
                            <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                                <li>
                                    <a href="/addEmployee">
                                        <i className="bi bi-circle"></i><span>Add Employee</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="icons-remix.html">
                                        <i className="bi bi-circle"></i><span>Add Vehical Make Model</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/signup">
                                        <i className="bi bi-circle"></i><span>Create User Logins</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="icons-boxicons.html">
                                        <i className="bi bi-circle"></i><span>Create User Roles</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-heading">...</li>


                        <li className="nav-item">
                            <a className="nav-link collapsed" href="/">
                                <i className="bi bi-box-arrow-in-right"></i>
                                <span>Login</span>
                            </a>
                        </li>




                    </ul>

                    <nav className="header-nav ms-auto">
          <ul className="d-flex align-items-center">
            <li className="nav-item dropdown pe-3">

              <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">

              {Auth.loggedIn() ? (
                    <>

                      <span id=" Usermaemain" as={Link} variant='info' className="m-2" to="/me">
                        {Auth.getProfile().data.username}
                      </span>

                    </>
                  )
                    : (
                      <>
                  
                        <span className="d-none d-md-block dropdown-toggle ps-2" as={Link} variant='primary'to="/">
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

                      <h6 id=" Usermaemain" as={Link} variant='info' className="m-2" to="/me">
                        {Auth.getProfile().data.username}'s profile
                      </h6>

                    </>
                  )
                    : (
                      <>
                        <h6 as={Link} variant='primary' className="m-2" to="/">
                        Sign In
                        </h6>
                        <span as={Link} variant='primary' className="m-2" to="/">-</span>

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
                  <a className="dropdown-item d-flex align-items-center" href="/">
                    {Auth.loggedIn() ? (
                      <>

                        <i className="bi bi-box-arrow-right">
                          <span onClick={logout}>Sign Out</span>
                        </i>
                      </>
                    )
                      : (
                        <>

                          <i className="bi bi-box-arrow-right" >
                            <span as={Link} variant='secondary' href="/">Sign In</span>
                          </i>
                        </>
                      )}


                  </a>

                </li>

              </ul>
            </li>

          </ul>
        </nav>

                </aside>




          

        </div>

    )



}
export default Sidebar;