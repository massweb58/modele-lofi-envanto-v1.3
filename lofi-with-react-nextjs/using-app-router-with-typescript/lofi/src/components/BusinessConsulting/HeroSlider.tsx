"use client";
  
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

const HeroSlider: React.FC = () => {
  return (
    <>
      <div className="home-area">
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          className="home-slides"
        >
          <SwiperSlide>
            <div className="banner-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="home-content">
                      <span className="sub-title">AWARD WINNING COMPANY</span>
                      <h1>
                        Make Your Business More Money With Team Of Experts
                      </h1>
                      <Link href="/contact" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Get
                        Started Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="home-image">
                      <Image
                        src="/images/banner-img1.png"
                        alt="banner-image"
                        width={830}
                        height={790}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="banner-item">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12">
                    <div className="home-content">
                      <span className="sub-title">AWARD WINNING COMPANY</span>
                      <h1>
                        Make Your Business More Money With Team Of Experts
                      </h1>
                      <Link href="/contact" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Get
                        Started Now
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="home-image">
                      <Image
                        src="/images/banner-img2.png"
                        alt="banner-image"
                        width={830}
                        height={790}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default HeroSlider;
