import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const ClientsFeedbackStyle2 = () => {
  const [testimonials, setTestimonials] = React.useState()
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonial?populate=deep`,
      )
      setTestimonials(response.data)
      // console.log(response.data);
    }
    getTestimonials()
  }, [])
  return (
    <>
      <div className="feedback-area bg-gradient-image pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">CLIENT&apos;S FEEDBACK</span>
            <h2>What Our Client&apos;s Say</h2>
          </div>

          {testimonials && (
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
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Autoplay]}
              className="mySwiper feedback-slides"
            >
              {testimonials.data.attributes.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="single-feedback-box">
                    <div className="rating">
                      {item.rating.map((info) => (
                        <span key={info.id}>
                          <i className={info.icon}></i>
                        </span>
                      ))}
                    </div>
                    <p>
                      {item.feedbackText}
                    </p>
                    <div className="client-info">
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image.data.attributes.url} 
                          alt={item.image.data.attributes.alternativeText} 
                        />
                        <div className="title">
                          <h3>{item.name}</h3>
                          <span>{item.designation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  )
}

export default ClientsFeedbackStyle2
