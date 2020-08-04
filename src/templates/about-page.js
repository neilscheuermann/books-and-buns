import React from 'react'
import Layout from '../components/Layout'
import useReactResponsive from '../hooks/useReactResponsive'
import homeWelcome from '../img/home-welcome.jpg'
import { MainText } from '../styles/SharedStyledComponents'
import {
  Img2,
  Section1,
  Section1TextBox,
  AboutUsText,
} from './aboutPageStyledComponents'
import { MainImage } from './indexPageStyledComponents'

const IMG_HEIGHT_WEB = '600px'
const IMG_HEIGHT_MOBILE = '200px'
const SECTION_ONE_HEIGHT = '600px'

const AboutPage = () => {
  const { isMobile } = useReactResponsive()
  return (
    <Layout>
      <div>
        <MainImage
          className={!isMobile ? 'make-full-width' : ''}
          imgUrl={homeWelcome}
          imgHeight={isMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB}
        />
      </div>
      <AboutUsText>About Us!</AboutUsText>
      <Section1 SECTION_ONE_HEIGHT={SECTION_ONE_HEIGHT}>
        <Section1TextBox>
          <MainText>Hey there,</MainText>
          <MainText>
            I'm Lin. Reading has always provided me a safe-haven, so now
            bringing stories into existence is my life. I get passionate about
            stories because they frame the way we understand our lives. If you
            have a story to tell, I am here to share my expertise and
            encouragement.
          </MainText>
        </Section1TextBox>
        <Img2
          src={homeWelcome}
          alt="sample"
          className="border box-shadow"
          imgHeight={SECTION_ONE_HEIGHT}
        />
      </Section1>
    </Layout>
  )
}

export default AboutPage

export const AboutPageTemplate = () => {
  return <div>TODO>>> Will need to remove this later</div>
}
