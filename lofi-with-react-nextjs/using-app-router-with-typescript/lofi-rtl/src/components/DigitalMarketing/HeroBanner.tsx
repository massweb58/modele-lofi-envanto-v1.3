"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="banner-area">
        <div className="container">
          <div className="banner-content">
            <span
              className="sub-title"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="800"
              data-aos-once="true"
            >
              AWARD WINNING COMPANY
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              Make Your Business More Money With Team Of Experts
            </h1>

            <Link
              href="/contact"
              className="default-btn style-two"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <span className="ri-arrow-right-s-line"></span>Get Started Now
            </Link>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <Image
                src="/images/banner.png"
                alt="banner-image"
                width={966}
                height={542}
              />
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={149}
            height={150}
          />
        </div>
        <div className="shape2">
          <Image
            src="/images/shape/shape2.png"
            alt="image"
            width={103}
            height={110}
          />
        </div>
        <div className="shape3">
          <Image
            src="/images/shape/shape3.png"
            alt="image"
            width={130}
            height={130}
          />
        </div>
        <div className="shape4">
          <Image
            src="/images/shape/shape4.png"
            alt="image"
            width={162}
            height={129}
          />
        </div>
        <div className="shape9">
          <Image
            src="/images/shape/shape8.png"
            alt="image"
            width={200}
            height={236}
          />
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
