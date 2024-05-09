import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurServices = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/services?populate=deep&sort[0]=createdAt%3Adesc`
      );
      setServices(response.data);
      // console.log(response.data)
    };
    getServices();
  }, []);
  return (
    <>
      <div className="services-area pb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR SERVICES</span>
            <h2>We Offer Professional Services For Business</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {services && (
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper services-slides"
            >
              {services.data.slice(0, 6).map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="single-services-item">
                    <div className="d-flex align-items-center">
                      <img
                        src={service.attributes.icon.data.attributes.url}
                        alt={
                          service.attributes.icon.data.attributes
                            .alternativeText
                        }
                      />
                      <h3>
                        <Link href={`/services/${service.attributes.slug}`}>
                          {service.attributes.title}
                        </Link>
                      </h3>
                    </div>
                    <p>{service.attributes.shortDescription}</p>

                    <ul className="features-list">
                      {service.attributes.featuresList.map((feature) => (
                        <li key={feature.id}>
                          <span>
                            <i className="ri-checkbox-circle-fill"></i>{" "}
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.attributes.slug}`}
                      className="default-btn"
                    >
                      <span className="ri-arrow-right-s-line"></span>{" "}
                      {service.attributes.brnText}
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default OurServices;
