import React from "react";
import sec81 from "../../../assets/images/sec8.png";
import sec82 from "../../../assets/images/sec8-1.png";
import sec83 from "../../../assets/images/sec8-2.png";
import "./section-8.css";
function SectionEight() {
  return (
    <div>
      <div className="section-8 bg-grey">
        <div className="container">
          <div className="sec-title ">
            <h1 className="cooke-text  ">Discover</h1>
            <h1 className="text-orange    ">OUR NEW MENU</h1>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card h-100">
                <img src={sec81} className="" />
                <div className="card-body">
                  <p className="fw-bold">Food / 16th March, 2019</p>
                  <p className="fw-bold mb-0">Lorem ipsum dolor sit</p>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                  </p>
                  <a href="#" className="card-link sec8-link ">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card h-100">
                <img src={sec82} className="" />

                <div className="card-body">
                  <p className="fw-bold"> Spices/ 16th March, 2019</p>
                  <p className="fw-bold mb-0">Lorem ipsum dolor sit</p>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                  </p>
                  <a href="#" className="card-link sec8-link ">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="card h-100">
                <img src={sec83} className="" />
                <div className="card-body">
                  <p className="fw-bold">Chicken Curry / 16th March, 2019</p>
                  <p className="fw-bold mb-0">Lorem ipsum dolor sit</p>
                  <p className="">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed
                  </p>
                  <a href="#" className="card-link sec8-link ">
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionEight;
