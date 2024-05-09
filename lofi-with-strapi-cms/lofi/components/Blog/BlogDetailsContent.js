import React from "react";
import ReactMarkdown from "react-markdown";
import formatDate from "./../../utils/formatDate";

const BlogDetailsContent = ({
  attributes: {
    title,
    shortDescription,
    longDescription,
    createdAt,
    author,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
    authorImg: {
      data: {
        attributes: { url: imageUrl2 },
      },
    },
  },
}) => {
  return (
    <>
      <div className="blog-details-area ptb-100">
        <div className="container">
          <div className="blog-details-header row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-12">
              <div className="content">
                <h1>{title}</h1>
                <p>{shortDescription}</p>
                <div className="post-author-meta">
                  <div className="d-flex align-items-center">
                    <img src={imageUrl2} alt="Author Image" />
                    <div className="title">
                      <span className="name">
                        By <span>{author}</span>
                      </span>
                      <span className="date">{formatDate(createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="image">
                <img src={imageUrl} alt="Blog Post Image" />
              </div>
            </div>
          </div>

          <div className="blog-details-desc">
            <div className="article-content">
              <ul className="social-links">
                <li>
                  <a href="#" target="_blank" className="facebook">
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="linkedin">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" className="instagram">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
              </ul>

              <ReactMarkdown>{longDescription}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
