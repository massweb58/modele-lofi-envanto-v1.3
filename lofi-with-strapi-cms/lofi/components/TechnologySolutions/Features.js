import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Features = () => {
  const [features, setFeatures] = React.useState();
  React.useEffect(() => {
    const getFeatures = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/technology-solutions-feature?populate=deep`
      );
      setFeatures(response.data);
      // console.log(response.data);
    };
    getFeatures();
  }, []);
  return (
    <>
      {features && (
        <div className="features-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">
                {features.data.attributes.subTitle}
              </span>
              <h2>{features.data.attributes.title}</h2>
              <p>{features.data.attributes.shortDec}</p>
            </div>

            <div className="row justify-content-center">
              {features.data.attributes.FeaturesList.map((feature) => (
                <div
                  className="col-lg-4 col-sm-6 col-md-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  key={feature.id}
                >
                  <div className="single-features-box">
                    <div className="icon">
                      <img
                        src={feature.icon.data.attributes.url}
                        alt={feature.icon.data.attributes.alternativeText}
                      />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.shortDec}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Features;
