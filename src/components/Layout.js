import React from 'react'
import { Helmet } from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import { withPrefix } from 'gatsby'

import './all.sass'
import '../styles/global.css'
import useSiteMetadata from './SiteMetadata'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {
  MOBILE_WIDTH_MAX,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MIN,
} from '../constants'
import { Content } from './LayoutStyledComponents'
import GlobalFonts from '../fonts/fonts'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: `(min-device-width: ${TABLET_WIDTH_MAX})`,
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: ${TABLET_WIDTH_MAX})`,
  })
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: ${TABLET_WIDTH_MAX})`,
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && (
        <>
          <p>You are a desktop or laptop</p>
          {isBigScreen && <p>You also have a huge screen</p>}
          {isTabletOrMobile && (
            <p>You are sized like a tablet or mobile phone though</p>
          )}
        </>
      )}
      {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
      {isRetina && <p>You are retina</p>}
    </div>
  )
}

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()

  return (
    <div>
      <GlobalFonts />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Navbar />
        <div>
          <Content>{children}</Content>
        </div>
        {false && <Example />}
        <Footer />
      </div>
    </div>
  )
}

export default TemplateWrapper
