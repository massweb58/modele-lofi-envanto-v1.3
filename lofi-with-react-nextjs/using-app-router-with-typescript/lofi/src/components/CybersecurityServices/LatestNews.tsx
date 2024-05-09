"use client";
  
import React from "react";
import Link from "next/link";
import Image from "next/image";

const LatestNews: React.FC = () => {
  return (
    <>
      <div className="blog-style-area pb-70">
        <div className="container">
          <div className="section-title with-max-width">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="blog-style-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/cybersecurity-services/blog/blog-1.jpg"
                      alt="image"
                      width={1050}
                      height={650}
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>March 15, 2024</li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Proper Guide Line Learning Strategies About Cyber Security
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="blog-style-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/cybersecurity-services/blog/blog-2.jpg"
                      alt="image"
                      width={1050}
                      height={650}
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>March 15, 2024</li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Rules To Protect Your Account From Cyber Attack
                    </Link>
                  </h3>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="blog-style-card">
                <div className="blog-image">
                  <Link href="/blog/details">
                    <Image
                      src="/images/cybersecurity-services/blog/blog-3.jpg"
                      alt="image"
                      width={1050}
                      height={650}
                    />
                  </Link>
                </div>
                <div className="blog-content">
                  <ul className="meta">
                    <li>
                      By <Link href="#">Admin</Link>
                    </li>
                    <li>March 15, 2024</li>
                  </ul>
                  <h3>
                    <Link href="/blog/details">
                      Rules For Introducing Web Code To Increase Cyber Security
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="blog-style-shape">
          <Image
            src="/images/cybersecurity-services/blog/shape.png"
            alt="image"
            width={553}
            height={890}
          />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
