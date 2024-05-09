import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const OurTeamMember = () => {
  const [teamMembers, setTeamMembers] = React.useState();
  React.useEffect(() => {
    const getTeamMembers = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/team-member?populate=deep`
      );
      setTeamMembers(response.data);
      // console.log(response.data);
    };
    getTeamMembers();
  }, []);
  return (
    <>
      <div className="team-area bg-gradient-image ptb-100">
        <div className="container">
          <div className="row align-items-center">
            {teamMembers && (
              <div className="col-lg-6 col-md-12">
                <div className="team-member-list">
                  <div className="row justify-content-center">
                    {teamMembers.data.attributes.members
                      .slice(0, 4)
                      .map((member) => (
                        <div
                          className="col-lg-6 col-md-6 col-sm-6"
                          data-aos="fade-up"
                          data-aos-delay="300"
                          data-aos-duration="1200"
                          data-aos-once="true"
                          key={member.id}
                        >
                          <div className="single-team-member">
                            <img
                              src={member.image.data.attributes.url}
                              alt={member.image.data.attributes.alternativeText}
                              style={{ width: "100%" }}
                            />
                            <div className="content">
                              <div className="d-flex align-items-center justify-content-between">
                                <h3>{member.name}</h3>
                                <span>{member.designation}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            )}

            <div className="col-lg-6 col-md-12">
              <div className="team-section-title">
                <span className="sub-title">OUR EXPERTS</span>
                <h2>
                  Meet Our Leadership <br />
                  Preparing For Your Success
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <Link href="/team" className="default-btn style-two">
                  <span className="ri-arrow-right-s-line"></span>Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamMember;
