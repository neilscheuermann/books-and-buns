import React from 'react'
import Layout from '../components/Layout'
import useReactResponsive from '../hooks/useReactResponsive'
import homeWelcome from '../img/home-welcome.jpg'
import titleImgTemp from '../img/title-temp.jpg'
import {
  Section1Img,
  EmailWrapper,
  Img3,
  MainImage,
  Section1,
  Section2,
  SmallTextBox,
  Section1TextBox,
  Section1TextWrapper,
  Section1WelcomeText,
} from './indexPageStyledComponents'
import { MainText } from '../styles/SharedStyledComponents'

const IMG_HEIGHT_WEB = '600px'
const IMG_HEIGHT_MOBILE = '200px'

const IndexPage = () => {
  const { isMobile } = useReactResponsive()

  return (
    <Layout>
      <div>
        <MainImage
          className={!isMobile ? 'make-full-width' : ''}
          imgUrl={titleImgTemp}
          imgHeight={isMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB}
        />
        <Section1>
          <Section1TextWrapper>
            <Section1WelcomeText>Welcome!</Section1WelcomeText>
            <Section1TextBox>
              <MainText>
                We are{' '}
                <strong style={{ fontSize: '1.25em' }}>Books and Buns</strong>!
                We offer detailed <strong>Concept Editing</strong> because
                writing a story can be a lonely calling. you often just need
                someone to brainstorm with or someone to take a step back to see
                the big picture. That is easy to miss when every detail of your
                story is under scrutiny. It's like missing the forest for the
                trees. That's where we come in. Show us your forest!
              </MainText>
              <MainText>
                Once you have your story down on paper, First step: take a huge
                sigh of relief and a fist bump, cause ... ya boss. Second step:
                we are here for the <strong>Copy Edit</strong>, to cross your
                t's and dot those i's.
              </MainText>
            </Section1TextBox>
          </Section1TextWrapper>
          <Section1Img
            src={homeWelcome}
            alt="sample"
            className="border box-shadow"
            imgHeight={IMG_HEIGHT_WEB}
          />
        </Section1>
      </div>
      <div>
        <MainText>
          More coming soon! Please follow us below or email us at
          books.buns.co@gmail.com
        </MainText>
      </div>
      <EmailWrapper>
        <MainText>
          More coming soon! Please follow us below or email us at
          books.buns.co@gmail.com
        </MainText>
      </EmailWrapper>
    </Layout>
  )
}

export default IndexPage

// TODO>>>: Need to remove this and anything that relies on it.
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => <div>TODO>>>: Need to remove this and anything that relies on it.</div>
