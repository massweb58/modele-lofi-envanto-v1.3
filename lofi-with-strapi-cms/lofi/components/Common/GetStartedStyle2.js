import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const GetStartedStyle2 = () => {
  const [letsTalk, setLetsTalk] = React.useState();
  React.useEffect(() => {
    const getLetsTalk = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/let-s-talk-something?populate=*`
      );
      setLetsTalk(response.data);
      // console.log(response.data);
    };
    getLetsTalk();
  }, []);
  return (
    <>
      {letsTalk && (
        <div className="get-started-area bg-main-color pt-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div
                  className="get-started-image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-once="true"
                >
                  <img
                    src={letsTalk.data.attributes.image.data.attributes.url}
                    alt={
                      letsTalk.data.attributes.image.data.attributes
                        .alternativeText
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="get-started-content white-color">
                  <span className="sub-title">
                    {letsTalk.data.attributes.subTitle}
                  </span>
                  <h2>{letsTalk.data.attributes.title}</h2>
                  <p>{letsTalk.data.attributes.shortDescription}</p>
                  <Link
                    href={letsTalk.data.attributes.btnUrl}
                    className="default-btn style-two"
                  >
                    <span className="ri-arrow-right-s-line"></span>{" "}
                    {letsTalk.data.attributes.btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GetStartedStyle2;
