import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import ReactMarkdown from "react-markdown";

const ServiceDetailsContent = ({
  attributes: {
    longDescription,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  },
}) => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="service-details-content">
                <img src={imageUrl} alt="Services Image" />

                <ReactMarkdown>{longDescription}</ReactMarkdown>
              </div>
            </div>

            <div className="col-lg-4">
              <ServiceSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
