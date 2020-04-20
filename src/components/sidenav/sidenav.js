import React from 'react';
import { 
  FaSearch, FaTachometerAlt, FaShoppingCart, 
  FaGem, FaChartLine, FaGlobe, FaBell, 
  FaEnvelope, FaCog, FaPowerOff,
  FaTimes, FaBars, FaAngleRight } from "react-icons/fa";
import './sidenav.css';
import { Nav, Container, Row, Col } from 'react-bootstrap';


const Sidenav = () => {
  return (
    <div className="page-wrapper chiller-theme toggled">
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
        {/* <i className="fas fa-bars" /> */}
        <FaBars />
      </a>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="#">Eco App</a>
            <div id="close-sidebar">
              {/* <i className="fas fa-times" /> */}
              <FaTimes />
            </div>
          </div>
          <div className="sidebar-header">
            <div className="user-pic">
              <img className="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture" />
            </div>
            <div className="user-info">
              <span className="user-name">
                  <strong>Username</strong>
              </span>
              <span className="user-role">Rol</span>
              <span className="user-role">$ 0.00</span>
            </div>
          </div>
          {/* sidebar-header  */}
          <div className="sidebar-search">
            <div>
              <div className="input-group">
                <input type="text" className="form-control search-menu" placeholder="Search..." />
                <div className="input-group-append">
                  <span className="input-group-text">
                    {/* <i className="fa fa-search" aria-hidden="true" /> */}
                    <FaSearch />
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* sidebar-search  */}
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                <span>General</span>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <FaTachometerAlt className="icon_side" />
                  <span>Dashboard</span>

                  <span className="badge badge-pill"> <FaAngleRight size={15} /> </span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Dashboard 1
                          <span className="badge badge-pill badge-success">Pro</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">Dashboard 2</a>
                    </li>
                    <li>
                      <a href="#">Dashboard 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  {/* <i className="fa fa-shopping-cart" /> */}
                  <FaShoppingCart className="icon_side" />
                  <span>E-commerce</span>
                  <span className="badge badge-pill"> <FaAngleRight size={15} /> </span>
                  {/* <span className="badge badge-pill badge-danger">3</span> */}
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Products
                        </a>
                    </li>
                    <li>
                      <a href="#">Orders</a>
                    </li>
                    <li>
                      <a href="#">Credit cart</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  {/* <i className="far fa-gem" /> */}
                  <FaGem className="icon_side" />
                  <span>Components</span>
                  <span className="badge badge-pill"> <FaAngleRight size={15} /> </span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">General</a>
                    </li>
                    <li>
                      <a href="#">Panels</a>
                    </li>
                    <li>
                      <a href="#">Tables</a>
                    </li>
                    <li>
                      <a href="#">Icons</a>
                    </li>
                    <li>
                      <a href="#">Forms</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <FaChartLine className="icon_side" />
                  {/* <i className="fa fa-chart-line" /> */}
                  <span>Charts</span>
                  <span className="badge badge-pill"> <FaAngleRight size={15} /> </span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Pie chart</a>
                    </li>
                    <li>
                      <a href="#">Line chart</a>
                    </li>
                    <li>
                      <a href="#">Bar chart</a>
                    </li>
                    <li>
                      <a href="#">Histogram</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <FaGlobe className="icon_side" />
                  {/* <i className="fa fa-globe" /> */}
                  <span>Maps</span>
                  <span className="badge badge-pill"> <FaAngleRight size={15} /> </span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="#">Google maps</a>
                    </li>
                    <li>
                      <a href="#">Open street map</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          {/* sidebar-menu  */}
        </div>
        {/* sidebar-content  */}
        <div className="sidebar-footer">
          <a href="#">
            {/* <i className="fa fa-bell" /> */}
            <FaBell />
            <span className="badge badge-pill badge-warning notification">3</span>
          </a>
          <a href="#">
            {/* <i className="fa fa-envelope" /> */}
            <FaEnvelope />
            <span className="badge badge-pill badge-success notification">7</span>
          </a>
          <a href="#">
            {/* <i className="fa fa-cog" /> */}
            <FaCog />
            <span className="badge-sonar" />
          </a>
          <a href="#">
            {/* <i className="fa fa-power-off" /> */}
            <FaPowerOff />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Sidenav;
