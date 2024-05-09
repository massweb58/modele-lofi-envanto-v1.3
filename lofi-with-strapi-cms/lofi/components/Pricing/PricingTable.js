import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const PricingTable = () => {
  const [pricing, setPricing] = React.useState()
  React.useEffect(() => {
    const getPricing = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/pricing-option?populate=deep`,
      )
      setPricing(response.data)
      console.log(response.data)
    }
    getPricing()
  }, [])
  return (
    <>
      {pricing && (
        <div className="pricing-area pt-100 pb-70">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">
                {pricing.data.attributes.subTitle}
              </span>
              <h2>{pricing.data.attributes.title}</h2>
            </div>

            <div className="row justify-content-center">
              {pricing.data.attributes.pricingCard.map((price) => (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-6"
                  key={price.id}
                >
                  <div className="single-pricing-box active">
                    <div className="pricing-header">
                      <h3>{price.title}</h3>
                      <p>{price.subTitle}</p>
                    </div>

                    <div className="price">
                      <h4>
                        {price.price}
                        <span>{price.duration}</span>
                      </h4>
                      <p>{price.shortText}</p>
                    </div>

                    <Link href={price.btnLink} className="link-btn">
                      {price.btnText}
                    </Link>

                    <div className="features-list">
                      <h5>{price.featureTitle}</h5>
                      <ul>
                        {price.featuresList.map((list) => (
                          <li key={list.id}>
                            <i className={list.iconName}></i> {list.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PricingTable
