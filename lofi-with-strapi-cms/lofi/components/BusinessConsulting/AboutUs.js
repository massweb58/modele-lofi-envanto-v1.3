import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const AboutUs = () => {
  const [about, setAbout] = React.useState();
  React.useEffect(() => {
    const getAbout = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/business-consulting-about-us?populate=deep`
      );
      setAbout(response.data);
      // console.log(response.data);
    };
    getAbout();
  }, []);
  return (
    <>
      {about && (
        <div className="about-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="about-img"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <img
                    src={about.data.attributes.image.data.attributes.url}
                    alt={
                      about.data.attributes.image.data.attributes
                        .alternativeText
                    }
                  />
                  <div className="shape5">
                    <img src="/images/shape/shape5.png" alt="image" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="about-content">
                  <span className="sub-title">
                    {about.data.attributes.subTitle}
                  </span>
                  <h2>{about.data.attributes.title}</h2>
                  <p>{about.data.attributes.shortDescription}</p>

                  <ul className="features-list">
                    {about.data.attributes.featuresList.map((feature) => (
                      <li key={feature.id}>
                        <div className="d-flex align-items-center">
                          <div className="icon bg-f9f9f9">
                            <img
                              src={feature.icon.data.attributes.url}
                              alt={feature.icon.data.attributes.alternativeText}
                            />
                          </div>
                          <span>{feature.title}</span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={about.data.attributes.btnLink}
                    className="default-btn"
                  >
                    <span className="ri-arrow-right-s-line"></span>{" "}
                    {about.data.attributes.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="shape6">
            <img src="/images/shape/shape6.png" alt="image" />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
