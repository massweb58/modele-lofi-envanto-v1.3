import React from "react";
import Link from "next/link";
import Image from "next/image";

const OurLatestBlog = () => {
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

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog1.jpg"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  </Link>
                  <span className="date">March 20, 2024</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog/details">Resources for Teachers</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <Link href="/blog/details" className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog2.jpg"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  </Link>
                  <span className="date">March 19, 2024</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog/details">Instructional Strategies</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <Link href="/blog/details" className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 col-sm-12"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog3.jpg"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  </Link>
                  <span className="date">March 18, 2024</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog/details">Fitness Guideline Program</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>

                  <Link href="/blog/details" className="default-btn">
                    <span className="ri-arrow-right-s-line"></span>Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurLatestBlog;
