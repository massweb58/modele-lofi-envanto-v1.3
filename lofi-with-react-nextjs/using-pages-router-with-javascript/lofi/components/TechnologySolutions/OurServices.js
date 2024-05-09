import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurServices = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>We Offer Professional Services For Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services1.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon8.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Branding</Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Identity
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Voice
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Competitor
                      Farm
                    </span>
                  </li>
                </ul>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services2.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon9.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Design</Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> App Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Website Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Product Design
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> UX Design
                    </span>
                  </li>
                </ul>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services3.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon10.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Content</Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Photography
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Animations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Copywriting
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Social Content
                    </span>
                  </li>
                </ul>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services4.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon11.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Strategy</Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Research
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Analysis
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Market
                      Strategy
                    </span>
                  </li>
                </ul>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services5.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon12.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Marketing</Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Email
                      Campaigns
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Social
                      Campaigns
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Print
                      Campaigns
                    </span>
                  </li>
                </ul>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>

            <div
              className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div
                className="single-services-box"
                style={{
                  backgroundImage: `url(/images/services/services6.jpg)`,
                }}
              >
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icon/icon13.png"
                    alt="image"
                    width={78}
                    height={78}
                  />
                  <h3>
                    <Link href="/services/details">Technology</Link>
                  </h3>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <ul className="features-list">
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> E-Commerce
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Prototyping
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Positioning
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className="ri-checkbox-circle-fill"></i> Platform &
                      APIs
                    </span>
                  </li>
                </ul>
                <Link href="/services/details" className="default-btn">
                  <span className="ri-arrow-right-s-line"></span>Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
