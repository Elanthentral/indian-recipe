import React from "react";
import SectionTen from "./section-10/SectionTen";
import SectionFour from "./section-4/SectionFour";
import SectionSix from "./section-6/SectionSix";
import SectionSeven from "./section-7/SectionSeven";
import SectionEight from "./section-8/SectionEight";
import SectionNine from "./section-9/SectionNine";
import SectionFive from "./section-five/SectionFive";
import SectionTwo from "./section2/SectionTwo";
import SectionThree from "./section3/SectionThree";

function LandingPage() {
  return (
    <div>
      <div className="land-sec1">
        <div class="container header-container">
          <nav className="navbar navbar-expand-lg  bg-transparent ">
            <div className="container-fluid">
              <a className="navbar-brand text-white fw-bold" href="#">
                BRUNCH
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <div className="navbar-nav ms-auto nav-nav">
                  <a
                    className="nav-link active nav-menu"
                    aria-current="page"
                    href="#"
                  >
                    WELCOME
                  </a>
                  <a className="nav-link nav-menu" href="#">
                    MENU
                  </a>
                  <a className="nav-link nav-menu" href="#">
                    EVENTS
                  </a>
                  <a className="nav-link nav-menu" href="#">
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="sec1-center">
          <h1 className="sec1-text cooke-text">Brunch</h1>
          <h1 className="text-orange title-text">FULL WEBSITE</h1>
          <button className="btn readmore-btn">READ MORE</button>
        </div>
      </div>

      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine />
      <SectionTen />
    </div>
  );
}

export default LandingPage;
