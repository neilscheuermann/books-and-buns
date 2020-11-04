import React from 'react'
import Layout from '../../components/Layout'
import Blog from '../../components/Blog'

export default function blogPage({ location: { pathname } }) {
  return (
    <Layout pathname={pathname}>
      <Blog />
    </Layout>
  )
}
