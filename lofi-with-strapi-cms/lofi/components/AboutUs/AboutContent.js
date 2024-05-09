import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const AboutContent = () => {
  // About Us API
  const [about, setAbout] = React.useState();
  React.useEffect(() => {
    const getAbout = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/technology-solutions-about-us?populate=deep`
      );
      setAbout(response.data);
      // console.log(response.data);
    };
    getAbout();
  }, []);

  // Award API
  const [award, setAward] = React.useState();
  React.useEffect(() => {
    const getAward = async () => {
      const response = await axios.get(`${baseApiUrl}/api/award?populate=deep`);
      setAward(response.data);
      // console.log(response.data);
    };
    getAward();
  }, []);

  return (
    <>
      <div className="about-area bg-gradient-image ptb-100">
        <div className="container">
          {about && (
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
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
                          <div className="icon">
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
                </div>
              </div>
            </div>
          )}

          {award && (
            <div className="awards-list">
              <h4>{award.data.attributes.title}</h4>

              <div className="row justify-content-center">
                {award.data.attributes.awardItems.map((items) => (
                  <div
                    className="col-lg-2 col-4 col-sm-4 col-md-3"
                    key={items.id}
                  >
                    <div className="awards-box">
                      <img
                        src={items.image.data.attributes.url}
                        alt={items.image.data.attributes.alternativeText}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AboutContent;
