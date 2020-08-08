import React from 'react'
import Layout from '../components/Layout'
import useReactResponsive from '../hooks/useReactResponsive'
import lindsayImg from '../img/lindsay.jpg'
import bethLindsBooksImg from '../img/beth-linds-books.jpg'
import bethHatImg from '../img/beth-hat.jpg'
import { HeaderImage, MainText } from '../styles/SharedStyledComponents'
import {
  Section0,
  Section0Header,
  Section1,
  Section1TextContent,
  Section1Header,
  Section1Image,
  Section2,
  Section2TextContent,
  Section2Header,
  Section2Image,
} from './aboutPageStyledComponents'

const IMG_HEIGHT_WEB = '600px'
const IMG_HEIGHT_MOBILE = '200px'

const AboutPage = ({ location: { pathname } }) => {
  const { isMobile } = useReactResponsive()

  return (
    <Layout pathname={pathname}>
      <div>
        {/* <HeaderImage */}
        {/*   className={!isMobile ? 'make-full-width' : ''} */}
        {/*   imgUrl={bethLindsBooksImg} */}
        {/*   imgHeight={isMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB} */}
        {/* /> */}
        <Section0>
          {/* <Section0Header>About Us</Section0Header> */}
          <MainText>
            We are two sisters with very different perspectives but still end up
            finding the similarities in each other. We use this to our advantage
            when editing your manuscripts, and we often become as passionate as
            you are about your story. This is us!
          </MainText>
        </Section0>
        <div className={!isMobile ? 'jc-center' : ''}>
          <Section1>
            <Section1Image
              src={lindsayImg}
              alt="Lindsay"
              className="border box-shadow"
            />

            <Section1TextContent>
              <Section1Header>Lindsay</Section1Header>
              <MainText>Hey there,</MainText>
              <MainText>
                I'm Lin. Reading has always provided me a safe-haven, so now
                bringing stories into existence is my life. I get passionate
                about stories because they frame the way we understand our
                lives. If you have a story to tell, I am here to share my
                expertise and encouragement.
              </MainText>
            </Section1TextContent>
          </Section1>
        </div>
        <div className={!isMobile ? 'jc-center' : ''}>
          <Section2>
            <Section2Image
              src={bethHatImg}
              alt="Bethany"
              className="border box-shadow"
            />
            <Section2TextContent>
              <Section2Header>Bethany</Section2Header>
              <MainText>Hi, hi!</MainText>
              <MainText>
                I'm Bee, a linguist who lingers on words and creative ideas. I
                believe how we share our messages with the world creates our
                impact. I find myself taking notes on the media I consume in my
                free time to clarify the messages just that much more... so you
                could say it has become somewhat of an obsession.
              </MainText>
            </Section2TextContent>
          </Section2>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const AboutPageTemplate = () => {
  return <div>TODO>>> Will need to remove this later</div>
}
