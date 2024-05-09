"use client";

import React, { useState } from "react";

const GetInTouchForm: React.FC = () => {
  return (
    <>
      <div className="get-in-touch-area">
        <div className="container">
          <div className="get-in-touch-inner-box ptb-100">
            <form className="get-in-touch-form">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="text"
                      name="number"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="text"
                      cols={30}
                      rows={4}
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="get-in-touch-btn">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouchForm;
