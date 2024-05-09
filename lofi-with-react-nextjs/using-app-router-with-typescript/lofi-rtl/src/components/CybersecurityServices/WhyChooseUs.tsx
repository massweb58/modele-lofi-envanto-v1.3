"use client";
  
import React from "react";
import Image from "next/image";

const WhyChooseUs: React.FC = () => {
  return (
    <>
      <div className="why-choose-us-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <span className="sub-title">Why Choose Us</span>
                <h2>
                  You Can Choose Us By Looking At Our Different Work Skills
                </h2>
                <p>
                  Donec sollicitudin molestie malesuada vivamus magna justo
                  lacinia eget consectetur sed convallis at tellus donec rutrum
                  congue leo eget malesuada quisque velit nisi pretium ut
                  lacinia in elementum.
                </p>

                <ul className="list">
                  <li>
                    <i className="ri-check-fill"></i> Network and system
                    administration
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Operating system and
                    virtual machine
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Network security control
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Coding languages
                  </li>
                  <li>
                    <i className="ri-check-fill"></i> Cloud security
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="why-choose-us-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/cybersecurity-services/choose/choose.png"
                  alt="image"
                  width={798}
                  height={510}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-us-shape">
          <Image
            src="/images/cybersecurity-services/choose/shape.png"
            alt="image"
            width={495}
            height={839}
          />
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
