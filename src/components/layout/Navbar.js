import React from "react";
import '../../css/navbar.css';
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";


const MyNavbar = ({  title }) => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand>  <FontAwesomeIcon color={'#666'} icon={faGlobeAmericas} /> <span className="nav-title">{title}</span> </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Link className="nav-item" to="/">Home</Link>
            <Link className="nav-item" to="/about">About</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};


MyNavbar.propTypes = {
  title: PropTypes.string.isRequired,  
};

export default MyNavbar;
