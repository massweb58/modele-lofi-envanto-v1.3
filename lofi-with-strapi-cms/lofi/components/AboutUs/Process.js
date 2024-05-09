import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const Process = () => {
  const [process, setProcess] = React.useState();
  React.useEffect(() => {
    const getProcess = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/process?populate=deep`
      );
      setProcess(response.data);
      // console.log(response.data);
    };
    getProcess();
  }, []);
  return (
    <>
      {process && (
        <div className="process-area">
          <div className="container">
            <div className="process-inner">
              <div className="row justify-content-center">
                {process.data.attributes.processList.map((processInfo) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                    data-aos-once="true"
                    key={processInfo.id}
                  >
                    <div className="single-process-box">
                      <div className="icon">
                        <img
                          src={processInfo.icon.data.attributes.url}
                          alt={processInfo.icon.data.attributes.alternativeText}
                        />
                      </div>
                      <h3>{processInfo.title}</h3>
                      <p>{processInfo.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Process;
