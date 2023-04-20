import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Login from '../pages/Login'


export class Header extends Component {
  render() {
    return (
      <>
        <div id="navbar">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <div className="mobile-logo mb-3">
                <a href="#" className="header-logo">
                  <p> <i class="bi bi-camera-reels"></i> <span className='text-decoration-underline'>Cine</span>MAX</p>
                </a>
              </div>
              <div className="mobile-logo responsive">
                <a href="#" className="header-logo">
                CineMAX
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
                    <Link class="nav-link " to="/" title="Home">
                      <i class="bi bi-house-door"></i>
                      <p>HOME</p>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " to={"/Trending"} title="Trending">
                      <i class="bi bi-lightning-charge"></i>
                      <p>TRENDING</p>

                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link " to={"/Collection"} title="Collection">
                      <i class="bi bi-collection"></i>
                      <p>COLLECTION</p>
                    </Link>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link " href="#" title="search" type='Submit'>
                      <i class="bi bi-search"></i>
                      <p>SEARCH</p>
                    </a>
                  </li> */}
                  <li class="nav-item">
                    <Link class="nav-link " to={"/Login"} title="Account">
                      <i class="bi bi-person"></i>
                      <p>ACCOUNT</p>
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <div className="mobile-logo">
                <a href="#" className="header-logo">
                  <p className='text-decoration-underline'>MovieHub</p>
                </a>
              </div> */}
            </div>
          </nav>
        </div>
      </>
    )
  }
}

export default Header