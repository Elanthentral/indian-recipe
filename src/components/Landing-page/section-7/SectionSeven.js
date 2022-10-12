import React from "react";
import "./section-7.css";
import sec7 from "../../../assets/images/sec7.png";

function SectionSeven() {
  return (
    <div>
      <div className="section-7 primary-bg">
        <div className="container mx-auto ">
          <h1 className="cooke-text text-white sec-title ">Book here</h1>
          <div className="row justify-content-evenly mt-3 mt-lg-5 g-2">
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="text-white">How many people?</h6>
              <div class="btn-group mb-md-4 w-100">
                <button
                  class="btn bg-transparent border dropdown-toggle text-white py-0 text-start drop-btn"
                  type="button"
                  id="defaultDropdown"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  2.People
                </button>
                <ul class="dropdown-menu" aria-labelledby="defaultDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Menu item
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="text-white">When is your date?</h6>
              <input
                type="date"
                value="10.00 am"
                placeholder="10.00 am"
                className="form-control sec7-input py-0 "
              />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="text-white">Time?</h6>
              <input
                type="time"
                value="10.00 am"
                placeholder="10.00 am"
                className="form-control sec7-input py-0 "
              />
            </div>
          </div>
          <div className="row justify-content-evenly  g-2">
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="text-white">Name</h6>
              <input
                type="text"
                placeholder="Full Name"
                className="form-control sec7-input py-0 "
              />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="text-white">When is your date?</h6>
              <input
                type="email"
                placeholder="E-mail"
                className="form-control sec7-input py-0"
              />
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <h6 className="text-white">Phone Number</h6>
              <input
                type="number"
                placeholder="Phone Number"
                className="form-control sec7-input py-0 "
              />
            </div>
          </div>
          <div className="row justify-content-center mt-3 mt-lg-5 mb-5 g-2">
            <div className="col-12 col-md-4 col-lg-3">
              <button className="btn btn-submit border py-0 px-5 w-100">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <img src={sec7} className="w-100" />
    </div>
  );
}

export default SectionSeven;
