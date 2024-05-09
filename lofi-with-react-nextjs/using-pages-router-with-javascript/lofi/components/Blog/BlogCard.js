import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard = () => {
  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
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

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog4.jpg"
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

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog5.jpg"
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

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog6.jpg"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  </Link>
                  <span className="date">March 19, 2024</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog/details">Content Writing Resources</Link>
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

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog7.jpg"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  </Link>
                  <span className="date">March 20, 2024</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog/details">Social Marketing Resources</Link>
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

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-blog-post">
                <div className="image">
                  <Link href="/blog/details" className="d-block">
                    <Image
                      src="/images/blog/blog8.jpg"
                      alt="image"
                      width={760}
                      height={900}
                    />
                  </Link>
                  <span className="date">March 20, 2024</span>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/blog/details">Video Marketing Resources</Link>
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

            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="pagination-area">
                <div className="nav-links">
                  <span className="page-numbers current">1</span>
                  <Link href="#" className="page-numbers">
                    2
                  </Link>
                  <Link href="#" className="page-numbers">
                    3
                  </Link>
                  <Link
                    href="#"
                    className="next page-numbers"
                    title="Next Page"
                  >
                    <i className="ri-arrow-right-line"></i>
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

export default BlogCard;
