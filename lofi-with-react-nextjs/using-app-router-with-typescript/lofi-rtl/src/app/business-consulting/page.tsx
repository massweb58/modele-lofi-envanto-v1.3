import NavbarStyle2 from "@/components/Layouts/NavbarStyle2";
import HeroSlider from "@/components/BusinessConsulting/HeroSlider";
import OurServices from "@/components/BusinessConsulting/OurServices";
import AboutUs from "@/components/BusinessConsulting/AboutUs";
import FunFacts from "@/components/Common/FunFacts";
import FreeSEOQuotesForm from "@/components/Common/FreeSEOQuotesForm";
import ClientsFeedback from "@/components/Common/ClientsFeedback";
import OurCaseStudies from "@/components/Common/OurCaseStudies";
import OurTeamMember from "@/components/Common/OurTeamMember";
import OurLatestBlog from "@/components/Common/OurLatestBlog";
import NewsletterForm from "@/components/Common/NewsletterForm";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarStyle2 />

      <HeroSlider />

      <OurServices />

      <AboutUs />

      <FunFacts />

      <FreeSEOQuotesForm />

      <ClientsFeedback />

      <OurCaseStudies />

      <OurTeamMember />

      <OurLatestBlog />

      <NewsletterForm />

      <Footer />
    </>
  );
}
