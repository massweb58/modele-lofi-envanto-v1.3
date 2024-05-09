import React from 'react'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const NewsletterForm = () => {
  const [newsletter, setNewsletter] = React.useState()
  React.useEffect(() => {
    const getNewsletter = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/newsletter?populate=deep`,
      )
      setNewsletter(response.data)
      // console.log(response.data);
    }
    getNewsletter()
  }, [])
  return (
    <>
      {newsletter && (
        <div className="subscribe-area pb-100">
          <div className="container">
            <div className="subscribe-inner">
              <span className="sub-title">
                {newsletter.data.attributes.subTitle}
              </span>
              <h2>{newsletter.data.attributes.title}</h2>
              <p>
                {newsletter.data.attributes.shortDescription}
              </p>
              
              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder="Enter your email address"
                  name="EMAIL"
                  required
                />
                <button type="submit">
                  Subscribe Now <i className="ri-arrow-right-s-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NewsletterForm
