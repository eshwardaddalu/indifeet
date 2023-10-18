import React from 'react'
import view1 from './images/view1.jpg';
import view2 from './images/view2.jpg';
import view3 from './images/view3.jpg';
import view4 from './images/view4.jpg';
import view5 from './images/view5.jpg';
import view6 from './images/view6.jpg';
import view7 from './images/view7.jpg';
import view8 from './images/view8.jpg';
import view9 from './images/view9.jpg';
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
import { cartdetails } from './Products';
const Cart = () => {
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
          <Link to="/"><button className="home-button">HOME</button></Link>
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
      



           
           





           <div className="topcart">
            <div className="topheading">Cart
            

            </div>
            <div className="cartbottom">
                   <div className="cartbottom1">
                       
                       <FontAwesomeIcon icon={faBell} ></FontAwesomeIcon>
                     <p>Proceed to Checkout!</p> 

                    

                </div>
           <div className="cartbottom2">
             
             {cartdetails.map((item, index) => (
               <div key={index} className="cart-products">
                 <img src={item.image } alt={item.title} />
                <div className="cart-product-details">
                 <h2>{item.title}</h2>
                   <p>{item.description}</p>
                   <strike> <p>{item.rate}</p></strike>
                   {/* <button>Remove from cart</button> */}
                  
                   </div> 
               </div>
             ))}
             
             <div className="cartbuttons"><button className="returnbt">Buy Now!</button>
                    <Link to="/page/view-all"><button className="returnbt">Return to Shop!</button></Link>
                    </div>

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

export default Cart;
