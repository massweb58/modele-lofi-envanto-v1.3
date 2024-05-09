import Navbar from "@/components/Layouts/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import CaseStudiesCard3 from "@/components/CaseStudies/CaseStudiesCard3";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Case Studies 3" />

      <CaseStudiesCard3 />

      <GetStarted />

      <Footer />
    </>
  );
}
