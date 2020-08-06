import React from 'react'
import Layout from '../components/Layout'
import useReactResponsive from '../hooks/useReactResponsive'
import bethLindsTableImg from '../img/lindsay.jpg'
import bethLindsBooksImg from '../img/beth-linds-books.jpg'
import bethFieldImg from '../img/beth-field.jpg'
import { HeaderImage, MainText } from '../styles/SharedStyledComponents'
import {
  Section0,
  Section0Header,
  Section1,
  Section1Header,
  Section1Image,
  Section2,
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
        <HeaderImage
          className={!isMobile ? 'make-full-width' : ''}
          imgUrl={bethLindsBooksImg}
          imgHeight={isMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB}
        />
        <Section0>
          <Section0Header>About Us (Lorem Ipsum)</Section0Header>
          <MainText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </MainText>
        </Section0>
        <Section1>
          <Section1Image
            src={bethLindsTableImg}
            alt="sample"
            className="border box-shadow"
          />
          <div>
            <Section1Header>Lindsay</Section1Header>
            <MainText>Hey there,</MainText>
            <MainText>
              I'm Lin. Reading has always provided me a safe-haven, so now
              bringing stories into existence is my life. I get passionate about
              stories because they frame the way we understand our lives. If you
              have a story to tell, I am here to share my expertise and
              encouragement.
            </MainText>
          </div>
        </Section1>
        <Section2>
          <Section2Image
            src={bethFieldImg}
            alt="sample"
            className="border box-shadow"
          />
          <div>
            <Section2Header>Bethany</Section2Header>
            <MainText>Hi, hi!</MainText>
            <MainText>
              I'm Bee, a linguist who lingers on words and creative ideas. I
              believe how we share our messages with the world creates our
              impact. I find myself taking notes on the media I consume in my
              free time to clarify the messages just that much more... so you
              could say it has become somewhat of an obsession.
            </MainText>
          </div>
        </Section2>
      </div>
    </Layout>
  )
}

export default AboutPage

export const AboutPageTemplate = () => {
  return <div>TODO>>> Will need to remove this later</div>
}
