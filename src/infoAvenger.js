import React, { Component } from 'react'
import img1 from "../src/assets/image/1.jpg";

export class infoAvenger extends Component {
  render() {
    return (
      <>
        <div id="navbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className="mobile-logo responsive">
                <a href="#" className="header-logo">
                  hulu
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link " href="#" title="home">
                      <i class="bi bi-house-door"></i>
                      <p>HOME</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" title="home">
                      <i class="bi bi-lightning-charge"></i>
                      <p>TRENDING</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" title="home">
                      <i class="bi bi-patch-check"></i>
                      <p>VERIFIED</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" title="home">
                      <i class="bi bi-collection"></i>
                      <p>COLLECTION</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" title="home">
                      <i class="bi bi-search"></i>
                      <p>SEARCH</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link " href="#" title="home">
                      <i class="bi bi-person"></i>
                      <p>ACCOUNT</p>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mobile-logo">
                <a href="#" className="header-logo">
                  hulu
                </a>
              </div>
            </div>
          </nav>
        </div>

        <section className="main-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="main-section-text">
                <a href="./infoAvenger.js">
                  <img src={img1} alt="image" />
                  <p>The Final Avengers War</p>
                  <h2>AVENGERS ENDGAME</h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default infoAvenger