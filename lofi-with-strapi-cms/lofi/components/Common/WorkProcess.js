import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const WorkProcess = () => {
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
        <div className="process-area bg-gradient-image ptb-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">OUR PROCESS</span>
              <h2>How We Works?</h2>
            </div>
            <div className="process-inner">
              <div className="row justify-content-center">
                {process.data.attributes.processList.map((processInfo) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6"
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

export default WorkProcess;
