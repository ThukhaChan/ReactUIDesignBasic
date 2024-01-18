import React from "react";
import logo from "./logo.png";
import './header.css';

export default function Header() {
  return (
    <>
      <div>
        <h>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              {/* <img src={logo} className='App-logo' alt='logo'></img> */}
              <h2 className="mt-2 mb-2 ">GIC Shopping</h2>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  {/* <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li> */}
                  {/* <li class="nav-item d-flex">
                    <a class="nav-link" href="#">
                      Link
                    </a>
                  </li> */}
                </ul>
                  <a className="nav-link active p-3" aria-current="page" href="#">
                      Home
                    </a>

                    <a className="nav-link active p-3" aria-current="page" href="#">
                      Link
                    </a>

                    <a className="nav-link active p-3" aria-current="page" href="#">
                      About
                    </a>
              </div>
            </div>
          </nav>
        </h>
      </div>
    </>
  );
}
