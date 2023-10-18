import React from 'react'
import logo from './images/IndifeetLogo.svg.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import trend1 from './images/trend1.jpg';
import trend2 from './images/trend2.jpg';
import trend3 from './images/trend3.jpg';
import trend4 from './images/trend4.jpg';
import {Link} from 'react-router-dom';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const User = () => {
    const items = ['shop by category', 'shop by occasion', 'new arrivals', 'view all'];
  const kids = ['shop by gender', 'shop by age'];
  const navigate = useNavigate();
  const handleDropdownItemClick = (item) => {
    navigate(`/page/${item.toLowerCase().replace(' ', '-')}`);
  };
  return (
    <div>
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
        <button className="home-button">HOME</button>
        <Dropdown className="nav-dropmenu dropdown-hover">
          <Dropdown.Toggle className="nav-dropmenu1">WOMEN</Dropdown.Toggle>
          <Dropdown.Menu className="nav-dropitem">
            {items.map((item) => (

              <Dropdown.Item key={item} onClick={() => handleDropdownItemClick(item)}>{item}</Dropdown.Item>

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


        <button className="button-blog">BLOG MAGZINE</button>
      </div>
      <div className="nav-right">
        <FontAwesomeIcon className="font-icon" icon={faSearch} color="white" />
        <Link to="/cart"><FontAwesomeIcon className="font-icon" icon={faShoppingCart} color="white" /></Link>
                  

      </div>
    </div>
    <div className="myaccount">
            <h3>My Account</h3>
            <div className="accountbottom">
                <div className="accountbottom1">
                    <p style={{backgroundColor:"#dcb976"}}>Dash Board</p>
                    <p>Orders</p>
                    <p>Downloads</p>
                    <p>Address</p>
                    <p>Account details</p>
                    <p>Logout</p>
                    
                </div>
                <div className="accountbottom2">
                    <p>Hello User Name (not User Name? Log out)</p>
                    <p>From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and accou</p>

                </div>
            </div>
          </div>
    <div className="trending">
          <h3>Trending Now</h3>
          <div className="trending-bottom">
            <div className="trending-item">
              <img src={trend1} alt='trending-image'></img>
              <h4>Trendy Touch</h4>
            </div>
            <div className="trending-item">
              <img src={trend2} alt='trending-image'></img>
              <h4>Gypsy Gait</h4>
            </div>
            <div className="trending-item">
              <img src={trend3} alt='trending-image'></img>
              <h4>Cloud Step</h4>
            </div>
            <div className="trending-item">
              <img src={trend4} alt='trending-image'></img>
              <h4>Trendy Touch</h4>
            </div>
          </div>



        </div>
        <div className="bottom">
          <div className="bottom1">
            <h2>Sign up for INDIFEET updates</h2>
            <p>Be first to receive early access to our latest collections, exclusive discounts and news</p>

          
          </div>
          <div className="bottom2">
            <h4>Email address*</h4>
            <input type="text"  placeholder="Enter your email" />
            <button>SUBSCRIBE!</button>

          </div>
        </div>
    </div>
  )
}
export default User
