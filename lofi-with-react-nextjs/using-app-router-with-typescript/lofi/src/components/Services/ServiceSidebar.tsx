"use client";
  
import React from "react";
import Link from "next/link";

const ServiceSidebar: React.FC = () => {
  return (
    <>
      <div className="service-sidebar">
        <div className="sidebar-box">
          <h3>Services List</h3>
          <ul>
            <li>
              <Link href="/services/details">
                Branding <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Design <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Content <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Strategy <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Marketing <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
            <li>
              <Link href="/services/details">
                Technology <i className="ri-arrow-right-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ServiceSidebar;
