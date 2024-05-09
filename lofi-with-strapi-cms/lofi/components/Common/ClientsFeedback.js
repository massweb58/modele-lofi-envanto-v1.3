import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const ClientsFeedback = () => {
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
      <div className="feedback-area bg-main-color">
        <div className="container">
          <div className="section-title">
            <h2>Our Valuable Clients Feedback</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {testimonials && (
            <div className="row justify-content-center">
              {testimonials.data.attributes.items.slice(0, 3).map((item) => (
                <div className="col-lg-4 col-md-6" key={item.id}>
                  <div className="single-feedback-box with-boxshadow">
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ClientsFeedback
