import React, { ReactNode } from 'react';
import Cart from "../Assets/Cart.png";
export default class Header extends React.Component <any> {

constructor(props){
super(props);
this.state = {
message: '',
}
}

componentDidMount(){

}

render(): ReactNode {
  return (
    <>
    
    <div className="wrapper">
   <div className="first-heading">
    <ul id="first-nav">
        <li>
            +2349067812468
        </li>
        <li className='first-none'>
            Get 50% Off from Selected items | Shop Now
        </li>
        <div className="dropdown">
          <li className="drop-btn">
            Eng <i className="fa fa-caret-down"></i>
        </li> 
    <div className="dropdown-content">
      <a href="#">Earpiece</a>
      <a href="#">Earpiece</a>
      <a href="#">Earpiece</a>
    </div> 
        </div>    
    <div className="dropdown">
          <li className="drop-btn">
            Location <i className="fa fa-caret-down"></i>
        </li> 
    <div className="dropdown-content">
      <a href="#">Abuja</a>
      <a href="#">Lagos</a>
      <a href="#">Akure</a>
    </div> 
        </div>    
    </ul>
    </div>
   </div>
  <header className="header">
    <nav className="navbar">
        <div className="logo">
        <a href="#" className="nav-logo"> <img src={Cart} alt="" /> Shopcart</a>
    </div>
        <div className="topbar" id="topbar">
            <ul className="nav-menu">
                <div className="dropdown">
                <li className=" nav-item">
                    <a href="/" title="Homepage" className="nav-link"> category</a><i className="fa fa-caret-down"></i>
                </li>
                <div className="dropdown-cont">
                    <a href="/" title="Homepage" className="nav-link">Books</a>
                    <a href="/" title="Homepage" className="nav-link">Tech</a>
                    <a href="/" title="Homepage" className="nav-link">Furniture</a>
                    <a href="/" title="Homepage" className="nav-link">Travel</a>
                </div>
            </div>
                <li className="nav-item">
                    <a href="/deals.html" title="About-Adenuga Victoria" className="nav-link"> deals</a>
                </li>
                <li className="nav-item">
                    <a href="/gallery.html" title="Adenuga Victoria-Resume" className="nav-link">what's new</a>
                </li>
                <li className="nav-item ">
                    <a href="/contact.html" title="Adenuga Victoria-Contact" className="nav-link">Delivery</a>
                </li>
                <li>
                    <input type="text" placeholder="Search..." />
                </li>
                <li>
                    <a href="#"> <i className="fa fa-user"></i> Account
                    </a>
                </li>
                <li>
                    <a href="#"> <img src={Cart} alt="" /> Cart
                    </a>
                </li>
            </ul>
        </div>
        <div className="mobile-nav">
            <i className="fa fa-bars"></i>
        </div>
      
    </nav>
    
    <div className="mobile-menu" id="menu">
        <ul>
            <div className="dropdown">
                <li className="active nav-item">
                    <a href="/" title="Homepage" className="nav-link">category</a><i className="fa fa-caret-down"></i>
                </li>
                <div className="dropdown-cont">
                    <a href="/" title="Homepage" className="nav-link">Books</a>
                    <a href="/" title="Homepage" className="nav-link">Tech</a>
                    <a href="/" title="Homepage" className="nav-link">Furniture</a>
                    <a href="/" title="Homepage" className="nav-link">Travel</a>
                </div>
            </div>
            <li className="nav-item">
                <a href="/deals.html" title="About-Adenuga Victoria" className="nav-link"> deals</a>
            </li>
            <li className="nav-item">
                <a href="/gallery.html" title="Adenuga Victoria-Resume" className="nav-link">what's new</a>
            </li>
            <li className="nav-item ">
                <a href="/contact.html" title="Adenuga Victoria-Contact" className="nav-link">Delivery</a>
            </li>
            <li>
                <a href="#"> <i className="fa fa-user"></i> Account
                </a>
            </li>
            <li>
                <a href="#"> <img src={Cart} alt="" /> Cart
                </a>
            </li>
        </ul>
    </div>
</header>
</>
   );
  }
}


