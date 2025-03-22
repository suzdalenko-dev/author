import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [isExpanded, setIsExpanded] = useState(false);

  let toggleNavbar = () => { setIsExpanded((prev) => !prev); };

  return (
    <nav className="navbar ftco-navbar-light">
      <div className="container-xl">
        <a className="navbar-brand align-items-center" href="/"><span className="">Suzdalenko</span></a>
        <button className="navbar-toggler"  aria-expanded={isExpanded} onClick={toggleNavbar}><span className=""></span></button>
      </div>
      <div style={{ display: isExpanded ? "block" : "none" }} className="menu_div">
          <div className="navbar-nav">
            <div className="nav-item"  onClick={toggleNavbar}><a className="nav-link active" href="/">Inicio</a></div>
            <div className="nav-item"  onClick={toggleNavbar}><Link className="nav-link active" to="/Blog">Blog</Link></div>
             
            {window.content.map((item, index) => (
              <div className="nav-item" key={index} onClick={toggleNavbar}><Link className="nav-link" to={"/Blog/"+item.slug+"/"+item.id}>{item.title}</Link></div>
            ))}
            
          </div>
        </div>
    </nav>
  );
};

export default Navbar;

/*


*/