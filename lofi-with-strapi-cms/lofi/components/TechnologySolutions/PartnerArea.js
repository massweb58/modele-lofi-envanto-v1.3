import React from 'react'
import PartnerSlider from './PartnerSlider'
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const PartnerArea = () => {
  const [partner, setPartner] = React.useState()
  React.useEffect(() => {
    const getPartner = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/partner?populate=deep`,
      )
      setPartner(response.data)
      // console.log(response.data);
    }
    getPartner()
  }, [])
  return (
    <>
      {partner && (
        <div className="partner-area pt-100">
          <div className="container">
            <div className="section-title style-two">
              <div className="row align-items-center">
                <div className="col-lg-5 col-md-12">
                  <span className="sub-title">
                    {partner.data.attributes.subzTitle}
                  </span>
                  <h2>
                    {partner.data.attributes.title}
                  </h2>
                </div>
                <div className="col-lg-7 col-md-12">
                  <p>
                    {partner.data.attributes.shortDescription}
                  </p>
                </div>
              </div>
            </div>

            <PartnerSlider />
          </div>
        </div>
      )}
    </>
  )
}

export default PartnerArea
