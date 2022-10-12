import React from "react";
import "./section-3.css";

function Sectionthree() {
  return (
    <div>
      <div className="section-3 bg-grey">
        <div className="container ">
          <div className="row justify-content-evenly ">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="circle"></div>
              <h6 className="fw-bold mt-3">New tastes</h6>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                tation omne ullamco laboris nisi ut aliqolore.
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="d-flex gap-2">
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <h6 className="fw-bold mt-3">New spices</h6>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                tation omne ullamco laboris nisi ut aliqolore.
              </p>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="d-flex gap-2">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
              </div>
              <h6 className="fw-bold mt-3">New dishes</h6>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
                tation omne ullamco laboris nisi ut aliqolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sectionthree;
