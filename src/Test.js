import React from "react";
import logo from "./logo.jpg";
import logo1 from "./gic5.png";
import logo2 from "./gic4.png";
import logo3 from "./gic6.png";

export default function Example() {
  return (
    <>
      <div id="service">
        
        <div
          className="module module module-layouts "
          data-mw-title="Layouts"
          template="titles/skin-2.php"
          id="mw-module-1704369942076"
          data-type="layouts"
          parent-module="layouts"
          parent-module-id="mw-module-1704369942076"
        >
          <section className="section     ">
            <div
              className=" module module-background "
              data-mw-title="Background Image"
              id="background-layout--mw-module-1704369942076"
              parent-module-id="mw-module-1704369942076"
              parent-module="layouts"
              data-type="background"
            >
              <div className="mw-layout-background-block no-settings inaccessibleModule">
                <div className="mw-layout-background-node"></div>
                <div className="mw-layout-background-overlay"></div>
              </div>
            </div>
            <div
              className=" module module-spacer "
              data-mw-title="Spacer"
              id="spacer-layout--mw-module-1704369942076-top"
              parent-module-id="mw-module-1704369942076"
              parent-module="layouts"
              data-type="spacer"
            >
              
              <div
                className="mw-le-spacer noelement nodrop inaccessibleModuleIfFirstParentIsLayout"
                data-for-module-id="spacer-layout--mw-module-1704369942076-top"
                contentEditable="false"
                style={{ height: 50 }}
                id="spacer-item-spacer-layout--mw-module-1704369942076-top"
              />
            </div>
            <div
              className="mw-layout-container no-element   container   safe-mode edit safe-mode "
              field="layout-titles-skin-2-mw-module-1704369942076"
              rel="module"
            >
              <div className="row text-center mb-5">
                <div className="col-lg-12 mx-auto">
                  <h1 className="mb-3 element">Service</h1>
                </div>
              </div>
            </div>
            <div
              className=" module module-spacer "
              data-mw-title="Spacer"
              id="spacer-layout--mw-module-1704369942076-bottom"
              parent-module-id="mw-module-1704369942076"
              parent-module="layouts"
              data-type="spacer"
            >
              
              <div
                className="mw-le-spacer noelement nodrop inaccessibleModuleIfFirstParentIsLayout"
                data-for-module-id="spacer-layout--mw-module-1704369942076-bottom"
                contentEditable="false"
                style={{ height: 50 }}
                id="spacer-item-spacer-layout--mw-module-1704369942076-bottom"
              />
            </div>
          </section>
        </div>
        <div
          className=" module module-layouts "
          data-mw-title="Layouts"
          id="module-layouts-1--5"
          template="blog/skin-1"
          data-type="layouts"
          parent-module="layouts"
          parent-module-id="module-layouts-1--5"
        >
          <section className="section    ">
            <div
              className=" module module-background "
              data-mw-title="Background Image"
              id="background-layout--module-layouts-1--5"
              parent-module-id="module-layouts-1--5"
              parent-module="layouts"
              data-type="background"
            >
              <div className="mw-layout-background-block no-settings inaccessibleModule">
                <div className="mw-layout-background-node"></div>
                <div className="mw-layout-background-overlay"></div>
              </div>
            </div>
            <div
              className=" module module-spacer "
              data-mw-title="Spacer"
              id="spacer-layout--module-layouts-1--5-top"
              parent-module-id="module-layouts-1--5"
              parent-module="layouts"
              data-type="spacer"
            >
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n    #spacer-layout--module-layouts-1--5-top, .mw-spacer-disable-settings--spacer-layout--module-layouts-1--5-top{\n        pointer-events: none;\n    }\n    .mw-spacer-disable-settings--spacer-layout--module-layouts-1--5-top > *{\n        pointer-events: all;\n    }\n",
                }}
              />
              <div
                className="mw-le-spacer noelement nodrop inaccessibleModuleIfFirstParentIsLayout"
                data-for-module-id="spacer-layout--module-layouts-1--5-top"
                contentEditable="false"
                style={{ height: 0 }}
                id="spacer-item-spacer-layout--module-layouts-1--5-top"
              />
            </div>
            <div
              className="container mw-layout-container no-element   edit  "
              field="layout-blog-skin-1-module-layouts-1--5"
              rel="module"
            >
              <div
                className=" module module-posts "
                id="module-layouts-1--5-posts"
                data-mw-title="Posts List"
                template="skin-1"
                slides-md={2}
                slides-lg={3}
                adaptive_height="true"
                parent-module-id="module-layouts-1--5"
                parent-module="layouts"
                data-type="posts"
              >
                <div className="row blog-posts-3">
                  <div className="mx-auto mx-md-0 col-sm-10 col-md-6 col-lg-4 mb-5">
                    <div className="h-100 d-flex flex-column">
                     
                        <div className="img-as-background h-350">
                          <img
                            src={logo1}
                            className="w-100 h-100 shadow-lg"
                            alt="logo"
                            style={{ position: "relative !important" }}
                          />
                        </div>
                      
                      <div className="pt-4 pb-3">
                          <h5 className="text-start text-left"style={{ color: 'blue'}}>
                            DX support for Insurance business
                          </h5>
                        
                        <p className="">
                          We provide consulting services for insurance service
                          development, taking into consideration the future
                          vision of insurance in the digital age.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mx-md-0 col-sm-10 col-md-6 col-lg-4 mb-5">
                    <div className="h-100 d-flex flex-column">
                       {/* Service photo */}
                        <div className="img-as-background h-350">
                          <img
                            src={logo2}
                            className="w-100 h-100 shadow-lg"
                            alt="logo"
                            style={{ position: "relative !important" }}
                          />
                        </div>
                      {/* Service photo */}
                      <div className="pt-4 pb-3">
                          <h5 className="text-start text-left"style={{ color: 'blue'}}>
                            IT Operations Business
                          </h5>
                        
                        <p className="">
                          We support your business with our ITOps services,
                          delivering cutting-edge IT infrastructure operations
                          and management.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mx-auto mx-md-0 col-sm-10 col-md-6 col-lg-4 mb-5" >
                    <div className="h-100 d-flex flex-column">
                        <div className="img-as-background h-350">
                          <img
                            src={logo3}
                            className="w-100 h-100 shadow-lg"
                            alt="logo"
                          ></img>
                        </div>
                      <div className="pt-4 pb-3">
                          <h5 className="text-start text-left"style={{ color: 'blue'}}>System Development (Myanmar Offshore Development)</h5>
                        <p className="">
                        A team of bilingual Myanmar IT engineers who are fluent in Japanese and English and have high technical capabilities will respond to a wide range of needs from large-scale system development to small-scale system development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className=" module module-pagination "
                  id="module-layouts-1--5-posts-pagination"
                  data-mw-title="Pagination"
                  pages_count={2}
                  paging_param="current_page3311198290"
                  parent-module-id="module-layouts-1--5-posts"
                  parent-module="posts"
                  data-type="pagination"
                >
                  <ul className="pagination d-flex justify-content-center align-items-center">
                    <li className="page-item">
                      <a className="page-link" href="./Header.js">
                        1{" "}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="./Home.js">
                        2{" "}
                      </a>
                    </li>
                  </ul>
                {/* </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
