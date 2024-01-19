import React from "react";
import { SocialIcon } from 'react-social-icons'
import logo10 from './facebook.svg'


export default function Footer() {
  return (
    <>
      <div className="bg-secondary-subtle">
        <div className="d-flex flex-row p-5">
          {/* <div className="row text-md-start text-center bg-body-tertiary"> */}
          <div className="col p-1 m-5">
            <small>
                Yangon
            </small>
            <p className="mt-2 element">
              No.67,khaing shwe Wah,baho road,kamayut Township Yangon
              09-972425310,09457086030
            </p>
          </div>
          <div className="col p-1 m-5">
            <small>Mandalay</small>
            <p className="mt-2 element">
              No.816,Between 62nd street x 63rd street ,Between 30th street x
              32nd street,Myitter street,Pyi Gyi Myat Shin quarter,Chan Aye Thar
              San Township,mandalay ,09423385177
            </p>
          </div>
          {/* </div> */}
        </div>
        <div class="mw-layout-container no-element   container-fluid py-2">
          <div class="row">
            <div class="col-12 d-md-flex text-center">
              <div
                class="col-sm-6 text-md-start text-center edit safe-mode"
                field="footer-reserved-skin-19-footer-layout"
                rel="module"
              >
                <small>© All Rights Reserved.</small>
              </div>
              <div class="col-sm-6 mb-0 noedit text-md-end text-center">
                <small>
                  <span class="mw-powered-by">
                    <a
                      class="tblr-body-color"
                      href="https://microweber.com/"
                      title="Create website"
                    >
                      Create a website
                    </a>{" "}
                    with{" "}
                    <a
                      class="tblr-body-color"
                      href="https://microweber.org"
                      target="_blank"
                      title="Website Builder"
                    >
                      Microweber
                    </a>
                  </span>{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
