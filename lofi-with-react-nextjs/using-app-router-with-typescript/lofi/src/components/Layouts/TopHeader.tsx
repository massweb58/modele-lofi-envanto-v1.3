"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const TopHeader: React.FC = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="top-header-start d-flex align-items-center">
                <Link href="/" className="logo d-inline-block">
                  <Image
                    src="/images/logo.png"
                    alt="image"
                    width={114}
                    height={41}
                  />
                </Link>

                <form className="search-box">
                  <label>
                    <i className="ri-search-line"></i>
                  </label>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Search here..."
                  />
                </form>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="top-header-end">
                <div className="d-flex align-items-center justify-content-end">
                  <div className="number">
                    <a
                      href="tel:+1-485-456-0102"
                      className="d-flex align-items-center"
                    >
                      <i className="ri-phone-line"></i> +1-485-456-0102
                    </a>
                  </div>

                  <ul className="social-links">
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-facebook-box-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-linkedin-box-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="ri-instagram-fill"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
