import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const NavbarStyle2 = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
      <header className="header-area header-style-two">
        <div id="navbar" className="navbar-area">
          <nav className="navbar navbar-expand-md navbar-light">
            <div className="container">
              <Link href="/" className="navbar-brand">
                <Image
                  src="/images/logo.png"
                  alt="Site logo"
                  width={114}
                  height={41}
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Home
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/"
                          className={`nav-link ${
                            currentPath == "/" && "active"
                          }`}
                        >
                          Technology Solutions
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/digital-marketing/"
                          className={`nav-link ${
                            currentPath == "/digital-marketing/" && "active"
                          }`}
                        >
                          Digital Marketing
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/business-consulting/"
                          className={`nav-link ${
                            currentPath == "/business-consulting/" && "active"
                          }`}
                        >
                          Business Consulting
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/cybersecurity-services/"
                          className={`nav-link ${
                            currentPath == "/cybersecurity-services/" &&
                            "active"
                          }`}
                        >
                          Cybersecurity Services
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/crypto-startup/"
                          className={`nav-link ${
                            currentPath == "/crypto-startup/" && "active"
                          }`}
                        >
                          Crypto Startup
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/ico-landing/"
                          className={`nav-link ${
                            currentPath == "/ico-landing/" && "active"
                          }`}
                        >
                          ICO Landing
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about-us/"
                      className={`nav-link ${
                        currentPath == "/about-us/" && "active"
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Services
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Services
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          href="/services/details/"
                          className={`nav-link ${
                            currentPath == "/services/details/" && "active"
                          }`}
                        >
                          Services Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className="dropdown-toggle nav-link">
                      Case Studies
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/case-studies/"
                          className={`nav-link ${
                            currentPath == "/case-studies/" && "active"
                          }`}
                        >
                          Case Studies
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/2/"
                          className={`nav-link ${
                            currentPath == "/case-studies/2/" && "active"
                          }`}
                        >
                          Case Studies #2
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/3/"
                          className={`nav-link ${
                            currentPath == "/case-studies/3/" && "active"
                          }`}
                        >
                          Case Studies #3
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/case-studies/details/"
                          className={`nav-link ${
                            currentPath == "/case-studies/details/" && "active"
                          }`}
                        >
                          Case Studies Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/team/"
                      className={`nav-link ${
                        currentPath == "/team/" && "active"
                      }`}
                    >
                      Team
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/pricing/"
                      className={`nav-link ${
                        currentPath == "/pricing/" && "active"
                      }`}
                    >
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Blog
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="others-option">
                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-edit-2-line"></span>Get A Free Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavbarStyle2;
