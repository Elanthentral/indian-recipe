import React from "react";
import "./section-9.css";

function SectionNine() {
  return (
    <div>
      <div className="section-9 primary-bg">
        <div className="container">
          <div className="sec-title ">
            <h1 className="symbol" style={{ fontSize: "100px", lineHeight: 0 }}>
              “
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis{" "}
            </p>
            <h6>Linda Steward</h6>
            <div className="d-flex justify-content-center gap-4">
              <div className="social-icon">
                <button className="btn social-btn">
                  <i class="fa-brands fa-facebook socila-icon"></i>
                </button>
              </div>
              <div className="social-icon">
                <button className="btn social-btn">
                  <i class="fa-brands fa-twitter social-icon"></i>
                </button>
              </div>
              <div className="social-icon">
                <button className="btn social-btn">
                  <i class="fa-brands fa-instagram social-icon"></i>
                </button>
              </div>
              <div className="social-icon">
                <button className="btn social-btn">
                  <i class="fa-brands fa-pinterest-p social-icon"></i>
                </button>
              </div>
              <div className="social-icon">
                <button className="btn social-btn">
                  <i class="fa-brands fa-google-plus-g social-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionNine;
