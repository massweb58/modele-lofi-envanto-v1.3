import Navbar from "@/components/Layouts/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import AboutContent from "@/components/AboutUs/AboutContent";
import PartnerArea from "@/components/TechnologySolutions/PartnerArea";
import Process from "@/components/AboutUs/Process";
import ClientsFeedbackStyle2 from "@/components/Common/ClientsFeedbackStyle2";
import TeamSlider from "@/components/Common/TeamSlider";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="About Us" />

      <AboutContent />

      <PartnerArea />

      <div className="ptb-100">
        <Process />
      </div>

      <ClientsFeedbackStyle2 />

      <TeamSlider />

      <GetStarted />

      <Footer />
    </>
  );
}
