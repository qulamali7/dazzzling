import React from 'react'
import { Helmet } from 'react-helmet-async'
import Blogs from '../../components/Blogs'

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <Blogs/>
    </>
  )
}

export default Home