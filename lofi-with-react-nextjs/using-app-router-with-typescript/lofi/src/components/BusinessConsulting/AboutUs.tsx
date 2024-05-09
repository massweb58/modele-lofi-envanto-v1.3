"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="about-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div
                className="about-img"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/about3.png"
                  alt="image"
                  width={676}
                  height={677}
                />

                <div className="shape5">
                  <Image
                    src="/images/shape/shape5.png"
                    alt="image"
                    width={90}
                    height={74}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <span className="sub-title">ABOUT US</span>
                <h2>We Are Award Winning Digital Marketing Company</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <ul className="features-list">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon4.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Brand Strategy</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon5.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Expert Team</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon6.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Fast Delivery</span>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="icon bg-f9f9f9">
                        <Image
                          src="/images/icon/icon7.png"
                          alt="image"
                          width={48}
                          height={48}
                        />
                      </div>
                      <span>Ongoing Report</span>
                    </div>
                  </li>
                </ul>

                <Link href="/about-us" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="shape6">
          <Image
            src="/images/shape/shape6.png"
            alt="image"
            width={106}
            height={113}
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
