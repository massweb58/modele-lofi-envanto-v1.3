import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const HeroBanner = () => {
  // API
  const [banner, setBanner] = React.useState();
  React.useEffect(() => {
    const getBanner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/technology-solutions-hero-banner?populate=*`
      );
      setBanner(response.data);
      // console.log(response.data);
    };
    getBanner();
  }, []);

  return (
    <>
      {banner && (
        <div className="main-banner-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div
                  className="main-banner-content"
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <span className="sub-title">
                    {banner.data.attributes.subTitle}
                  </span>
                  <h1>{banner.data.attributes.title}</h1>

                  <Link
                    href={banner.data.attributes.btnLink}
                    className="default-btn style-two"
                  >
                    <span className="ri-arrow-right-s-line"></span>
                    {banner.data.attributes.btnText}
                  </Link>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="main-banner-image">
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-once="true"
                  >
                    <img
                      src={banner.data.attributes.mainImage.data.attributes.url}
                      alt={
                        banner.data.attributes.mainImage.data.attributes
                          .alternativeText
                      }
                    />
                  </div>
                  <div className="shape">
                    <img src="/images/shape/shape8.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape images */}
          <div className="shape1">
            <img src="/images/shape/shape1.png" alt="image" />
          </div>
          <div className="shape2">
            <img src="/images/shape/shape2.png" alt="image" />
          </div>
          <div className="shape3">
            <img src="/images/shape/shape3.png" alt="image" />
          </div>
          <div className="shape4">
            <img src="/images/shape/shape4.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
