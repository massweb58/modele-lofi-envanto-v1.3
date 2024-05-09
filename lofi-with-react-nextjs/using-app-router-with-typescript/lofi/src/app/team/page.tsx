import Navbar from "@/components/Layouts/Navbar";
import PageTitle from "@/components/Common/PageTitle";
import OurTeamMembers from "@/components/Team/OurTeamMembers";
import GetStarted from "@/components/Common/GetStarted";
import Footer from "@/components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Meet Our Leadership Team" />

      <OurTeamMembers />

      <GetStarted />

      <Footer />
    </>
  );
}
