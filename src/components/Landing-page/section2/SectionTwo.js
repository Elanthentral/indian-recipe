import React from "react";
import "./section-2.css";
import sec2 from "../../../assets/images/sec-2.png";
function SectionTwo() {
  return (
    <div>
      <div className="section-2 primary-bg">
        <div className="container ">
          <div className="row ustify-content-center align-items-center">
            <div className="col-12 col-md-6">
              <h5 className="">Indian traditional flavours</h5>
              <p className="mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris{" "}
              </p>
            </div>
            <div className="col-12 col-md-6">
              <img src={sec2} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
