import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'
import ReactMarkdown from "react-markdown";
import axios from 'axios'
import baseApiUrl from '@/utils/baseApiUrl'

const Faq = () => {
  const [faq, setFaq] = React.useState()
  React.useEffect(() => {
    const getFaq = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/faq?populate=deep`,
      )
      setFaq(response.data)
      // console.log(response.data);
    }
    getFaq()
  }, [])
  return (
    <>
      {faq && (
        <div className="faq-area bg-gradient-image ptb-100">
          <div className="container">
            <div className="section-title">
              <span className="sub-title">
                {faq.data.attributes.subTitle}
              </span>
              <h2>{faq.data.attributes.title}</h2>
            </div>

            <div className="faq-accordion">
              <Accordion preExpanded={['a']}>
                {faq.data.attributes.faqList.map((list) => (
                  <AccordionItem uuid={list.uuid} key={list.id}>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {list.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ReactMarkdown>
                        {list.content}
                      </ReactMarkdown>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Faq
