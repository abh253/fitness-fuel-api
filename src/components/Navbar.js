import React from 'react'
import { useState } from 'react';


const Navbar = () => {
    const [toggle,setToggle]=useState(true);


    
    return <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#f4f1de'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Fitness fuel</a>
      <button className="navbar-toggler" type="button" onClick={()=>setToggle(!toggle)} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`navbar-collapse ${toggle?'collapse':null}`} >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">about</a>
          </li>

          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
}

export default Navbar
