import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurTeamMembers = () => {
  const [teamMembers, setTeamMembers] = React.useState();
  React.useEffect(() => {
    const getTeamMembers = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/team-member?populate=deep`
      );
      setTeamMembers(response.data);
      console.log(response.data);
    };
    getTeamMembers();
  }, []);
  return (
    <>
      {teamMembers && (
        <div className="team-area pt-100 pb-70">
          <div className="container">
            <div className="section-title style-two">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <span className="sub-title">
                    {teamMembers.data.attributes.subTitle}
                  </span>
                  <h2>{teamMembers.data.attributes.title}</h2>
                </div>
                <div className="col-lg-7 col-md-12">
                  <p>{teamMembers.data.attributes.shortDescription}</p>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              {teamMembers.data.attributes.members.map((member) => (
                <div
                  className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                  key={member.id}
                >
                  <div className="single-team-box">
                    <div className="image">
                      <div
                        className="bg-1"
                        style={{
                          backgroundImage: `url(${member.image.data.attributes.url})`,
                        }}
                      ></div>
                    </div>
                    <div className="content">
                      <h3>{member.name}</h3>
                      <span>{member.designation}</span>
                    </div>
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

export default OurTeamMembers;
