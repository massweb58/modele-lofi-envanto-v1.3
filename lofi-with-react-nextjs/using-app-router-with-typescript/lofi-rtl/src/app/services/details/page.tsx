import React from "react";
import Navbar from "@/components/Layouts/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Service Details" />

      <ServiceDetailsContent />

      <GetStarted />

      <Footer />
    </>
  );
}
