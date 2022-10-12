import React from "react";
import "./section-4.css";
import sec1 from "../../../assets/images/sec4-1.png";
import sec2 from "../../../assets/images/sec4-2.png";
import sec3 from "../../../assets/images/sec4-3.png";
import sec4 from "../../../assets/images/sec4-4.png";
import sec5 from "../../../assets/images/sec4-5.png";
import sec6 from "../../../assets/images/sec4-6.png";

function SectionFour() {
  return (
    <div>
      <div className="section-4">
        <div className="container mx-auto ">
          <div className="white-bg">
            <div className="sec-title ">
              <h1 className="cooke-text ">India</h1>
              <h1 className="text-orange   ">ON YOUR PLATE</h1>
            </div>
            <div className="row  align-items-center justify-content-between g-0">
              <div className="col-12 col-md-6 col-lg-3">
                <img src={sec1} className="img-fluid w-100" />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="sec4-content">
                  <h5>TIKKA CHIKEN</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do
                  </p>
                  <h6 className="">$14.95</h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <img src={sec2} className="img-fluid w-100" />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="sec4-content">
                  <h5 className="">SPICY WEDGES</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do
                  </p>
                  <h6 className="">$10.95</h6>
                </div>
              </div>
            </div>
            <div className="row  align-items-center justify-content-between g-0">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="sec4-content">
                  <h5>CHICKEN CURRY</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do
                  </p>
                  <h6 className="">$14.95</h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <img src={sec3} className="img-fluid w-100" />
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="sec4-content">
                  <h5 className="">RED CURRY</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do
                  </p>
                  <h6 className="">$11.95</h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 ">
                <img src={sec4} className="img-fluid  w-100" />
              </div>
            </div>
            <div className="row  align-items-center justify-content-between g-0">
              <div className="col-12 col-md-6 col-lg-3">
                <img src={sec5} className="img-fluid w-100" />
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="sec4-content">
                  <h5>SPICY VEGGIES</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do
                  </p>
                  <h6 className="">$18.95</h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <img src={sec6} className="img-fluid w-100" />
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="sec4-content">
                  <h5 className="">SPICE MIX</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do
                  </p>
                  <h6 className="">$10.95</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
