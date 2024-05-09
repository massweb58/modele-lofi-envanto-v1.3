import React from 'react'
import Navbar from '@/components/Layout/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import ServiceDetailsContent from '@/components/Services/ServiceDetailsContent'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layout/Footer'
import baseApiUrl from "@/utils/baseApiUrl";

const ServicesDetails = ({ service: { data } }) => {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle={data[0].attributes.title} />

      <ServiceDetailsContent {...data[0]} />
 
      <GetStarted />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/services`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/services?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const service = await res.json();
  // By returning { props: { service } }, the Blog component
  // will receive `service` as a prop at build time
  return {
    props: {
      service,
    },
  };
}

export default ServicesDetails;