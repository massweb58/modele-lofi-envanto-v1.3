"use client";

import React from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="contact-us-area">
        <div className="container">
          <div className="contact-us-inner-box with-black-color">
            <div className="row align-items-center">
              <div className="col-lg-8 col-md-12">
                <div className="contact-form-wrap">
                  <h2>Contact Us</h2>

                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        className="form-control"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <textarea
                        name="text"
                        cols={30}
                        rows={6}
                        className="form-control"
                        placeholder="Enter message..."
                        required
                      ></textarea>
                    </div>

                    <div className="contact-us-btn">
                      <button type="submit" className="default-btn style-two">
                        <span className="ri-arrow-right-s-line"></span>Send
                        Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="get-in-touch-information">
                  <h4>Get in Touch</h4>

                  <ul className="information-list">
                    <li>
                      <i className="ri-map-pin-line"></i>
                      Address: 2750, Quadra Street Victoria, Canada
                    </li>
                    <li>
                      <i className="ri-phone-line"></i>
                      <a href="tel:+44587154756">+44 587 154756</a>
                      <a href="tel:+55587154756">+55 58715 4756</a>
                    </li>
                    <li>
                      <i className="ri-mail-line"></i>
                      <a href="mailto:hello@lofi.com">hello@lofi.com</a>
                      <a href="mailto:lofi@info.com">lofi@info.com</a>
                    </li>
                    <li>
                      <i className="ri-time-line"></i>
                      <span>Opening Hours:</span> 7:00am - 10:00pm Open 7 Days a
                      Week
                    </li>
                  </ul>
                  <div className="get-in-touch-shape">
                    <Image
                      src="/images/crypto-startup/get-in-touch-shape.png"
                      alt="image"
                      width={368}
                      height={104}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
