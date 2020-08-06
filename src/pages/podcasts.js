import React from 'react'
import Layout from '../components/Layout'
import ComingSoon from '../components/ComingSoon'

export default function Podcasts({ location: { pathname } }) {
  return (
    <Layout pathname={pathname}>
      <ComingSoon>Podcasts coming soon!</ComingSoon>
    </Layout>
  )
}
