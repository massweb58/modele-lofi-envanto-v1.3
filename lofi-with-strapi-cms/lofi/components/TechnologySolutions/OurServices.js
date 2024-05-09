import React from "react";
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
      <div className="services-area pt-100 pb-70">
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
            <div className="row justify-content-center">
              {services.data.slice(0, 6).map((service) => (
                <div
                  className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1200"
                  data-aos-once="true"
                  key={service.id}
                >
                  <div
                    className="single-services-box"
                    style={{
                      backgroundImage: `url(${service.attributes.image.data.attributes.url})`,
                    }}
                  >
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurServices;
