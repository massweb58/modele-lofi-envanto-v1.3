import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const HeroSlider = () => {
  const [heroSlider, setHeroSlider] = React.useState();
  React.useEffect(() => {
    const getHeroSlider = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/business-consulting-hero-slider?populate=deep`
      );
      setHeroSlider(response.data);
      // console.log(response.data)
    };
    getHeroSlider();
  }, []);
  return (
    <>
      {heroSlider && (
        <div className="home-area">
          <Swiper
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper home-slides"
          >
            {heroSlider.data.attributes.sliderITems.map((sliderITem) => (
              <SwiperSlide key={sliderITem.id}>
                <div className="banner-item">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-12">
                        <div className="home-content">
                          <span className="sub-title">
                            {sliderITem.subTitle}
                          </span>
                          <h1>{sliderITem.title}</h1>
                          <Link
                            href={sliderITem.btnLink}
                            className="default-btn style-two"
                          >
                            <span className="ri-arrow-right-s-line"></span>{" "}
                            {sliderITem.btnText}
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="home-image">
                          <img
                            src={sliderITem.image.data.attributes.url}
                            alt={
                              sliderITem.image.data.attributes.alternativeText
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default HeroSlider;
