import React from "react";
import "./section-5.css";
import secleft from "../../../assets/images/sec5-left.png";
import secright from "../../../assets/images/sec5-right.png";
function SectionFive() {
  return (
    <div>
      <div className="section-5 bg-grey">
        <div className="d-flex justify-content-between align-items-center gap-5">
          <div className="d-none d-lg-block">
            <img src={secleft} />
          </div>
          <div className="text-center">
            <h5>Traditional cuisine made easy</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
            <div className="d-flex gap-2 justify-content-center">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-link sec5-link-btn">Meals</button>
              <button className="btn btn-link sec5-link-btn">Spices</button>
              <button className="btn btn-link sec5-link-btn">Book</button>
              <button className="btn btn-link sec5-link-btn">Gallery</button>
            </div>
          </div>
          <div className="d-none d-lg-block">
            <img src={secright} className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
