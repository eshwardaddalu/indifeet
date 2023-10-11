import React from 'react';
import logo from './images/IndifeetLogo.svg.png';
import NewArrivals from './NewArrivals';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import {casual1 } from '@fortawesome/fontawesome-svg-core';

import CarouselComponent from './CarouselComponent';
const Homepage = () => {
    const items = ['shop by category','shop by occasion','new arrivals','view all'];
    const kids = ['shop by gender', 'shop by age'];
    
    
    return (
        <div className="HomePage">
            <div className="top-logo">
                <div className="left-icons">
                    <FontAwesomeIcon className="font-icon" icon={faFacebook} color="white" />
                    <FontAwesomeIcon className="font-icon" icon={faInstagram} color="white" />
                    </div>
               

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <span className="right-icon">
                    <p >LOGIN</p>

                    <FontAwesomeIcon className="font-icon" icon={faUser} color="white" />
                </span>
                
             
            </div>
            <div className="navbar">
                <div className="nav-left"></div>
                <div className="nav-center">
                    <h4>Home</h4>
 <Dropdown className="nav-dropmenu dropdown-hover">
  <Dropdown.Toggle className="nav-dropmenu1">WOMEN</Dropdown.Toggle>
  <Dropdown.Menu className="nav-dropitem">
    {items.map((item) => (
      <Dropdown.Item key={item}>{item}</Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>

                    <Dropdown className="nav-dropmenu dropdown-hover">
  <Dropdown.Toggle className="nav-dropmenu1">KIDS</Dropdown.Toggle>
  <Dropdown.Menu className="nav-dropitem">
    {kids.map((item) => (
      <Dropdown.Item key={item}>{item}</Dropdown.Item>
    ))}
  </Dropdown.Menu>
</Dropdown>

                    
                       <h4>Blog magine</h4>
                </div>
                <div className="nav-right">
                    <FontAwesomeIcon className="font-icon" icon={faSearch} color="white" />
                    <FontAwesomeIcon className="font-icon" icon={faShoppingCart} color="white" />
                    
                    </div>
                </div>
            
                    
      
      <CarouselComponent />
      <NewArrivals/>
      <div className="shop-by-ocassion">
        <h2>SHOP BY OCASSION</h2>
        <div className="ocassion-1">
           {/* <img src={casual1} alt="casual1" ></img>  */}
        </div>
      </div>
    
            
        </div>
    );
};

export default Homepage;