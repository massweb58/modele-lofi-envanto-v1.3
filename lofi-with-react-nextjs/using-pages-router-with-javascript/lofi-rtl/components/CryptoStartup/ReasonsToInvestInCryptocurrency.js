import React from "react";
import Image from "next/image";

const ReasonsToInvestInCryptocurrency = () => {
  return (
    <>
      <div className="invest-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="invest-content">
                <h2>Reasons To Invest In Cryptocurrency</h2>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-1.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Control Over Your Assets</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>

                <div className="invest-inner-box with-some-left">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-2.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Transparent And Secure</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>

                <div className="invest-inner-box">
                  <div className="image">
                    <Image
                      src="/images/crypto-startup/invest/image-3.png"
                      alt="image"
                      width={65}
                      height={65}
                    />
                  </div>
                  <h3>Good Choice For Long Term Investment</h3>
                  <p>
                    Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
                    justo lacinia eget consectetur sed convallis at tellus.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="invest-image">
                <Image
                  src="/images/crypto-startup/invest/invest.png"
                  alt="image"
                  width={662}
                  height={632}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReasonsToInvestInCryptocurrency;
