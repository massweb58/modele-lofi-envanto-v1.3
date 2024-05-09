import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PartnerSlider = () => {
  const [partner, setPartner] = React.useState();
  React.useEffect(() => {
    const getPartner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/partner?populate=deep`
      );
      setPartner(response.data);
      // console.log(response.data);
    };
    getPartner();
  }, []);
  return (
    <>
      {partner && (
        <div className="partner-area ptb-100">
          <div className="container">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 5,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              modules={[Autoplay]}
              className="mySwiper partner-slides"
            >
              {partner.data.attributes.partnersList.map((list) => (
                <SwiperSlide key={list.id}>
                  <div className="partner-item">
                    <img
                      src={list.image.data.attributes.url}
                      alt={list.image.data.attributes.alternativeText}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerSlider;
