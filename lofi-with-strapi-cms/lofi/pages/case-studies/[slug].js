import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import CaseStudiesDetailsContent from '@/components/CaseStudies/CaseStudiesDetailsContent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'
import baseApiUrl from "@/utils/baseApiUrl";

const CaseStudiesDetails = ({ caseStudie: { data } }) => {
  return (
    <>
      <Navbar />
  
      <PageTitle homeText="Home" pageTitle={data[0].attributes.title} />

      <CaseStudiesDetailsContent {...data[0]} />

      <GetStarted />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/case-studies`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((caseStudie) => ({
    params: { slug: caseStudie.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/case-studies?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const caseStudie = await res.json();
  // By returning { props: { caseStudie } }, the Blog component
  // will receive `caseStudie` as a prop at build time
  return {
    props: {
      caseStudie,
    },
  };
}

export default CaseStudiesDetails;