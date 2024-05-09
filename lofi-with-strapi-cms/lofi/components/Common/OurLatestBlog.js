import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import formatDate from "./../../utils/formatDate";

const OurLatestBlog = () => {
  const [blogs, setBlogs] = React.useState();
  React.useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/blogs?populate=deep&sort[0]=createdAt%3Adesc`
      );
      setBlogs(response.data);
      // console.log(response.data)
    };
    getBlogs();
  }, []);
  return (
    <>
      <div className="blog-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">OUR LATEST BLOG</span>
            <h2>Our Latest Insights Are On Top All Times</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {blogs && (
            <div className="row justify-content-center">
              {blogs.data.slice(0, 3).map((blog) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12"
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="1200"
                  data-aos-once="true"
                  key={blog.id}
                >
                  <div className="single-blog-post">
                    <div className="image">
                      <Link
                        href={`/blogs/${blog.attributes.slug}`}
                        className="d-block"
                      >
                        <img
                          src={blog.attributes.image.data.attributes.url}
                          alt={
                            blog.attributes.image.data.attributes
                              .alternativeText
                          }
                        />
                      </Link>
                      <span className="date">
                        {formatDate(blog.attributes.createdAt)}
                      </span>
                    </div>
                    <div className="content">
                      <h3>
                        <Link href={`/blogs/${blog.attributes.slug}`}>
                          {blog.attributes.title}
                        </Link>
                      </h3>
                      <p>{blog.attributes.shortDescription}</p>
                      <Link
                        href={`/blogs/${blog.attributes.slug}`}
                        className="default-btn"
                      >
                        <span className="ri-arrow-right-s-line"></span>{" "}
                        {blog.attributes.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurLatestBlog;
