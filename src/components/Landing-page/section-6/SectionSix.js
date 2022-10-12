import React from "react";
import "./section-6.css";
import sec6bg1 from "../../../assets/images/sec6-bg.png";
import sec6bg2 from "../../../assets/images/sec6-1.png";
import sec62 from "../../../assets/images/sec6-2.png";
import sec63 from "../../../assets/images/sec6-3.png";
import sec64 from "../../../assets/images/sec6-4.png";
import sec65 from "../../../assets/images/sec6-5.png";
import sec66 from "../../../assets/images/sec6-6.png";
import chicken from "../../../assets/images/chiken.png";
function SectionSix() {
  return (
    <div>
      <div className="section-6">
        <div className="sec6-img-div ">
          <div className="white-bg sec6-content mb-auto">
            <div className="sec-title ">
              <h1 className="cooke-text  ">Discover</h1>
              <h1 className="text-orange  ">OUR NEW MENU</h1>
            </div>
            <div className="content">
              <div className="row align-items-center justify-content-evenly">
                <div className="col-lg-4 col-12 col-md-6">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="circle-white">
                      <img src={chicken} className="sec6-img " />
                    </div>
                    <div className="">
                      <h5 className="">TIKKA CHICKEN</h5>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do oculis $14.95
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 col-md-6">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="circle-white">
                      <img src={sec62} className="sec6-img " />
                    </div>
                    <div className="">
                      <h5 className="">SOUP OF THE DAY</h5>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do oculis $14.95
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-evenly mt-2">
                <div className="col-lg-4 col-12 col-md-6">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="circle-white">
                      <img src={sec63} className="sec6-img " />
                    </div>
                    <div className="">
                      <h5 className="">PLAIN PAPADUMS</h5>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do oculis $8.95
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 col-md-6">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="circle-white">
                      <img src={sec64} className="sec6-img " />
                    </div>
                    <div className="">
                      <h5 className="">YELLOW CURRY</h5>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do oculis $1.95
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-evenly mt-2">
                <div className="col-lg-4 col-12 col-md-6">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="circle-white">
                      <img src={sec65} className="sec6-img " />
                    </div>
                    <div className="">
                      <h5 className="">CHICKEN CURRY </h5>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do oculis $7.95
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 col-md-6">
                  <div className="d-flex gap-3 align-items-center">
                    <div className="circle-white d-flex align-items-center">
                      <img src={sec66} className="sec6-img " />
                    </div>
                    <div className="">
                      <h5 className="">SPICY MEATBALLS </h5>
                      <p className="">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                        sed do oculis $14.95
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={sec6bg2} className="w-100" />
    </div>
  );
}

export default SectionSix;
