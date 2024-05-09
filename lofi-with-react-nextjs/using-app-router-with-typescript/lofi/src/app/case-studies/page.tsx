import Navbar from "@/components/Layouts/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import CaseStudiesCard from "@/components/CaseStudies/CaseStudiesCard";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Case Studies" />

      <CaseStudiesCard />

      <GetStarted />

      <Footer />
    </>
  );
}
