import React from "react";
import logo from "./logo.jpg";
import './About'
const navbar = {backgroundColor: 'red'};
export default function Header() {
  return (
    <>
      <div id="header">
          <nav className="navbar navbar-expand-lg bg-secondary-subtle">
            <div className="container">
              {/* <img src={logo} className='App-logo' alt='logo'></img> */}
              <h2 className="mt-2 mb-2 ">Global Innovation Consulting</h2>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  
                </ul>
                  <a className="page-link active p-3" href="#home">
                  {/* <a className="nav-link active p-3" aria-current="page" href="#"> */}
                      Home
                    </a>
                    <a className="page-link active p-3" href="#service">
                    {/* <a className="nav-link active p-3" aria-current="page" href="#"> */}
                      Service
                    </a>
                    <a className="page-link " href="#about">
                    {/* <a className="nav-link active p-3" aria-current="page" href="About"> */}
                      About
                    </a>
              </div>
            </div>
          </nav>
        
      </div>
    </>
  );
}
