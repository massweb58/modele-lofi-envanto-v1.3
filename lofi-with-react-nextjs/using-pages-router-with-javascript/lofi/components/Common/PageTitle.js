import React from "react";
import Link from "next/link";
import Image from "next/image";

const PageTitle = ({ pageTitle, homeText }) => {
  return (
    <>
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content text-center">
            <h1>{pageTitle}</h1>
            <ul>
              <li>
                <Link href="/">{homeText}</Link>
              </li>
              <li>{pageTitle}</li>
            </ul>
          </div>
        </div>

        {/* Shape */}
        <div className="shape1">
          <Image
            src="/images/shape/shape1.png"
            alt="image"
            width={149}
            height={150}
          />
        </div>
        <div className="shape3">
          <Image
            src="/images/shape/shape2.png"
            alt="image"
            width={103}
            height={110}
          />
        </div>
      </div>
    </>
  );
};

export default PageTitle;
