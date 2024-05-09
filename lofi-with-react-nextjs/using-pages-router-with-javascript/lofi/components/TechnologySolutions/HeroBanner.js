import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <>
      <div className="main-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="main-banner-content"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span className="sub-title">AWARD WINNING COMPANY</span>
                <h1>Let&apos;s Make Wave Amazing Together</h1>

                <Link href="/contact" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Get Started Now
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="main-banner-image">
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <Image
                    src="/images/woman.png"
                    alt="image"
                    width={546}
                    height={578}
                  />
                </div>

                <div className="shape">
                  <Image
                    src="/images/shape/shape8.png"
                    alt="image"
                    width={200}
                    height={236}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shape images */}
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
      </div>
    </>
  );
};

export default HeroBanner;
