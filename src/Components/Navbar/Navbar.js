import React from 'react'
import {
  Navbar,
  NavItem,
} from "react-bootstrap";
import PropTypes from "prop-types";

import '@components/Navbar/navbar.css'
function MainNavbar(props) {
  const {handleClick }= props;
    return (
      <div>
        <Navbar sticky="top" className="navbar">
          <div className="img-container">
            <img
              src="https://uploads-ssl.webflow.com/5d3aa39f8474c472841a7dfc/5eb8b999ca0a15fdfcd63b11_header-logo.png"
              width="168"
              height="54.094"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </div>
          <div className="space"></div>
          <div className="links">
            <NavItem className="navItem" onClick={""}>
              Contact Us
            </NavItem>
            <NavItem className="navItem">Blog</NavItem>
            <NavItem
              className="navItem pri"
              onClick={() => handleClick()}
            >
              Sign Up
            </NavItem>
            <NavItem
              className="navItem pri"
              onClick={() => handleClick()}
            >
              Sign In
            </NavItem>
          </div>
        </Navbar>
      </div>
    );
}
MainNavbar.prototype={
  handleClick: PropTypes.func.isRequired,
}
MainNavbar.defaultProps = {
  handleClick: () => {},
};
export default MainNavbar
