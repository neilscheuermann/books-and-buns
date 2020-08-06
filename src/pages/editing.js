import React from 'react'
import Layout from '../components/Layout'
import ComingSoon from '../components/ComingSoon'

export default function Editing({ location: { pathname } }) {
  return (
    <Layout pathname={pathname}>
      <ComingSoon>Packages and pricing coming soon!</ComingSoon>
    </Layout>
  )
}
