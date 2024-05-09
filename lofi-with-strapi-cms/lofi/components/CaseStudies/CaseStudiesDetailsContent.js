import React from 'react'
import ReactMarkdown from "react-markdown";

const CaseStudiesDetailsContent = ({ 
  attributes: { 
    title, 
    shortDescription,
    framework,
    category, 
    webLink, 
    longDescription, 
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
    icon: {
      data: {
        attributes: { url: imageUrl2 },
      },
    },
  } 
}) => {
  return (
    <>
      <div className="case-studies-details-area ptb-100">
        <div className="container">
          <div className="case-studies-details-header row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="image">
                <img
                  src={imageUrl}
                  alt="Case Studies Image"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="content">
                <img 
                  src={imageUrl2}
                  alt="Case Studies Thumb Image" 
                />
                <h1>{title}</h1>
                <p>
                  {shortDescription}
                </p>
                <ul className="meta">
                  <li>
                    <i className="ri-folder-2-line"></i>
                    <span>FRAMEWORK</span>
                    {framework}
                  </li>
                  <li>
                    <i className="ri-price-tag-3-line"></i>
                    <span>CATEGORY</span>
                    {category}
                  </li>
                  <li>
                    <i className="ri-global-line"></i>
                    <span>LINK</span>
                    <a href={webLink} target="_blank">
                      {webLink}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
 
          <div className="case-studies-details-desc">
            <div className="article-content">
              <ReactMarkdown>
                {longDescription}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CaseStudiesDetailsContent
