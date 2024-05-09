import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/remixicon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "swiper/css";
import "swiper/css/bundle";

// Globals Styles
import "../styles/globals.css";
// Global Responsive Styles
import "../styles/responsive.css";
// Global RTL Styles
import "../styles/rtl.css";

import Head from "next/head";
import ScrollToTop from "@/components/Layouts/ScrollToTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>
          Lofi - Multipurpose IT Startup React Nextjs Template
        </title>
        <meta 
          name="viewport" 
          content="initial-scale=1.0, width=device-width" 
        />
      </Head>

      <Component {...pageProps} />

      <ScrollToTop />
    </>
  );
}

export default MyApp;