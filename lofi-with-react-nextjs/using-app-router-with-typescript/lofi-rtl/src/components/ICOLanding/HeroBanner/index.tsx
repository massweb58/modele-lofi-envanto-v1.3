"use client";

import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const HeroBanner: React.FC = () => {
  return (
    <>
      <div className="ico-landing-banner-area">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12">
              <div className="ico-landing-banner-content">
                <h1>New Platform For Buying And Selling Digital Currency</h1>

                <div className="banner-pre-token-sale-ends">
                  <h3>Pre Token Sale Ends</h3>

                  {/* Countdown */}
                  <Countdown endDate="" />

                  <p>Pre sale total amount 1 ETH = $2,537.37</p>

                  <div className="pre-token-sale-ends-with-progress">
                    <ul className="top-list d-flex justify-content-between align-items-center">
                      <li>$5m</li>
                      <li>$50m</li>
                    </ul>

                    <div className="progress-wrapper">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow={75}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>

                    <ul className="bottom-list d-flex justify-content-between align-items-center">
                      <li>Softcap</li>
                      <li>Hardcap</li>
                    </ul>
                  </div>

                  <ul className="pre-token-sale-ends-btn">
                    <li>
                      <a href="#" className="buy-token-btn">
                        Buy Tokens
                      </a>
                    </li>
                    <li>Minimum Purchase: 10 ICO Token</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12">
              <div
                className="ico-landing-banner-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/ico-landing-home/banner/banner.png"
                  alt="image"
                  width={475}
                  height={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
