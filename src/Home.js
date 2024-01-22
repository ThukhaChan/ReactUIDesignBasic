import React from "react";
import logo from "./logo.jpg";
import logo8 from "./gic8.jpg";
import logo9 from './developer-team.svg'



export default function Home() {
  return (
    <>
      <div className="container" id="home">
        <div className="row">
          <div className="col p-5 m-5">
            <h3>About Us</h3>
            <p className="">
              The GIC Group consists of three companies, Japan (Global
              Innovation Consulting Inc. as GIC), Myanmar (GIC Myanmar Co., Ltd
              ., as GICM), and US (GIC Silicon Valley Lab Inc ., as GSVL). Our
              main business is offshore system development in Japan/Myanmar,
              including LAB-type and contract development. 
            </p>
          </div>
          <div className="col  m-5">
            <img src={logo9} className="w-100 h-100 " alt="logo"></img>
          </div>
        </div>
      </div>
    </>
  );
}
