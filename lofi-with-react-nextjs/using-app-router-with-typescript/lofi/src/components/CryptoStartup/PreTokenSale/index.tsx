"use client";
  
import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const PreTokenSale: React.FC = () => {
  return (
    <>
      <div className="pre-token-sale-ends-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="pre-token-sale-ends-content">
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

                <div className="pre-token-sale-ends-shape">
                  <Image
                    src="/images/crypto-startup/pre-token-sale-ends/shape.png"
                    alt="image"
                    width={80}
                    height={118}
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="pre-token-sale-ends-image"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <Image
                  src="/images/crypto-startup/pre-token-sale-ends/pre-token-sale-ends.png"
                  alt="image"
                  width={709}
                  height={560}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreTokenSale;
