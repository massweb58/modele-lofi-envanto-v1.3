import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'
import ReactMarkdown from "react-markdown";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

export default function TermsConditions() {
  const [termsConditions, setTermsConditions] = React.useState()
  React.useEffect(() => {
    const getTermsConditions = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/terms-and-condition?populate=deep`,
      )
      setTermsConditions(response.data)
      // console.log(response.data);
    }
    getTermsConditions()
  }, [])
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Terms Conditions" />

      {termsConditions && (
        <div className="ptb-100">
          <div className="container">
            <div className="main-text-content">
              <ReactMarkdown>
                {termsConditions.data.attributes.content}
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
