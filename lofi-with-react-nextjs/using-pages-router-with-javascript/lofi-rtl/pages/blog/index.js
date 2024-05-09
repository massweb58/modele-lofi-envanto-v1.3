import React from 'react'
import Navbar from '@/components/Layouts/Navbar'
import PageTitle from '@/components/Common/PageTitle'
import BlogCard from '@/components/Blog/BlogCard'
import GetStarted from '@/components/Common/GetStarted'
import Footer from '@/components/Layouts/Footer'

export default function Blog() {
  return (
    <>
      <Navbar />

      <PageTitle homeText="Home" pageTitle="Blog" />

      <BlogCard />

      <GetStarted />

      <Footer />
    </>
  )
}
