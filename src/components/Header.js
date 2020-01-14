import React from 'react';
import logo from "../images/logo.png";
 
const Header = () => {
  return <div className="header">
          <img  className="header__photo"src={logo} alt={logo}/>
        </div>
}
export default Header;