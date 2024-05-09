import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const TeamSlider = () => {
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
      {teamMembers && (
        <div className="team-area bg-gradient-image ptb-100">
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

            <Swiper
              navigation={true}
              spaceBetween={30}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 5,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="mySwiper team-slides"
            >
              {teamMembers.data.attributes.members.map((member) => (
                <SwiperSlide key={member.id}>
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamSlider;
