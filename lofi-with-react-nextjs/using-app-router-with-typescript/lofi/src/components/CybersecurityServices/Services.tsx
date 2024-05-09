"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services: React.FC = () => {
  return (
    <>
      <div className="cyber-security-services-area ptb-100">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Cyber Security Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/cybersecurity-services/services/services-1.png"
                        alt="image"
                        width={272}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">Phishing Attack</Link>
                      </h3>
                      <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus
                        magna justo lacinia eget consectetur sed convallis at
                        tellus.
                      </p>
                      <Link href="/services/details" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/cybersecurity-services/services/services-2.png"
                        alt="image"
                        width={255}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">Data Protection</Link>
                      </h3>
                      <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus
                        magna justo lacinia eget consectetur sed convallis at
                        tellus.
                      </p>
                      <Link href="/services/details" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/cybersecurity-services/services/services-3.png"
                        alt="image"
                        width={258}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">Quality Assurance</Link>
                      </h3>
                      <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus
                        magna justo lacinia eget consectetur sed convallis at
                        tellus.
                      </p>
                      <Link href="/services/details" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="cyber-security-services-card">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="services-image">
                      <Image
                        src="/images/cybersecurity-services/services/services-4.png"
                        alt="image"
                        width={214}
                        height={240}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="services-content">
                      <h3>
                        <Link href="/services/details">Smart Contraxt</Link>
                      </h3>
                      <p>
                        Nulla quis lorem ut libero malesuada feugiat. Vivamus
                        magna justo lacinia eget consectetur sed convallis at
                        tellus.
                      </p>
                      <Link href="/services/details" className="services-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="view-all-services-btn">
                <Link href="/services" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>View All
                  Services
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="cyber-security-services-shape">
          <Image
            src="/images/cybersecurity-services/services/shape.png"
            alt="image"
            width={523}
            height={867}
          />
        </div>
      </div>
    </>
  );
};

export default Services;
