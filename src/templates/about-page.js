import React from 'react'
import Layout from '../components/Layout'
import homeWelcome from '../img/home-welcome.jpg'
import { MainText } from '../styles/SharedStyledComponents'
import { Img2, TextBox, WelcomeText } from './aboutPageStyledComponents'

const IMG_HEIGHT = '600px'

const AboutPage = () => {
  return (
    <Layout>
      <div
        style={{
          position: 'relative',
          height: IMG_HEIGHT,
        }}
      >
        <WelcomeText>About Us!</WelcomeText>
        <TextBox>
          <MainText>
            We believe that good coffee has the power to bring people together.
            That’s why we decided to turn a corner of our shop into a cozy
            meeting space where you can hang out with fellow coffee lovers and
            learn about coffee making techniques. All of the artwork on display
            there is for sale. The full price you pay goes to the artist.
          </MainText>
        </TextBox>
        <Img2
          src={homeWelcome}
          alt="sample"
          className="border box-shadow"
          imgHeight={IMG_HEIGHT}
        />
      </div>
    </Layout>
  )
}

export default AboutPage

export const AboutPageTemplate = () => {
  return <div>TODO>>> Will need to remove this later</div>
}
