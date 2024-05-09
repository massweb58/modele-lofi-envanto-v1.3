import Navbar from "@/components/Layouts/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import CaseStudiesCard2 from "@/components/CaseStudies/CaseStudiesCard2";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Case Studies 2" />

      <CaseStudiesCard2 />

      <GetStarted />

      <Footer />
    </>
  );
}
