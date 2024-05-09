import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'
import ReactMarkdown from "react-markdown";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

export default function PrivacyPolicy() {
  const [privacyPolicy, setPrivacyPolicy] = React.useState()
  React.useEffect(() => {
    const getPrivacyPolicy = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/privacy-policy?populate=deep`,
      )
      setPrivacyPolicy(response.data)
      // console.log(response.data);
    }
    getPrivacyPolicy()
  }, [])
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Privacy Policy" />

      {privacyPolicy && (
        <div className="ptb-100">
          <div className="container">
            <div className="main-text-content">
              <ReactMarkdown>
                {privacyPolicy.data.attributes.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      <GetStarted />

      <Footer />
    </>
  )
}
