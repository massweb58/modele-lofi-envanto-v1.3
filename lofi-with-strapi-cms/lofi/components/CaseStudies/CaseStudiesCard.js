import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const CaseStudiesCard = () => {
  const [caseStudies, setCaseStudies] = React.useState();
  React.useEffect(() => {
    const getCaseStudies = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/case-studies?populate=deep&sort[0]=createdAt%3Adesc`
      );
      setCaseStudies(response.data);
      // console.log(response.data)
    };
    getCaseStudies();
  }, []);
  return (
    <>
      <div className="case-studies-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR CASE STUDIES</span>
            <h2>We Get you Higher Revenues, Not just Higher Ranks</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {caseStudies && (
            <div className="case-studies-card-box">
              {caseStudies.data.map((caseStudie) => (
                <div className="single-case-studies-box" key={caseStudie.id}>
                  <div className="row align-items-center m-0">
                    <div className="col-lg-6 col-md-12 p-0">
                      <div className="content">
                        <div className="logo">
                          <img
                            src={caseStudie.attributes.icon.data.attributes.url}
                            alt={
                              caseStudie.attributes.icon.data.attributes
                                .alternativeText
                            }
                          />
                        </div>
                        <h3>
                          <Link
                            href={`/case-studies/${caseStudie.attributes.slug}`}
                          >
                            {caseStudie.attributes.title}
                          </Link>
                        </h3>

                        <p>{caseStudie.attributes.shortDescription}</p>

                        <ul className="features-list">
                          <li>
                            <span>FRAMEWORK</span>
                            {caseStudie.attributes.framework}
                          </li>
                          <li>
                            <span>CATEGORY</span>
                            {caseStudie.attributes.category}
                          </li>
                          <li>
                            <span>WEB LINK</span>
                            <Link
                              href={caseStudie.attributes.webLink}
                              target="_blank"
                            >
                              {caseStudie.attributes.webLink}
                            </Link>
                          </li>
                        </ul>
                        <Link
                          href={`/case-studies/${caseStudie.attributes.slug}`}
                          className="default-btn"
                        >
                          <span className="ri-arrow-right-s-line"></span>{" "}
                          {caseStudie.attributes.btnText}
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 p-0">
                      <div className="image">
                        <img
                          src={caseStudie.attributes.image.data.attributes.url}
                          alt={
                            caseStudie.attributes.image.data.attributes
                              .alternativeText
                          }
                        />
                      </div>
                    </div>
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

export default CaseStudiesCard;
