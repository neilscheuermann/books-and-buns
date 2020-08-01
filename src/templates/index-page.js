import React from 'react'
import Layout from '../components/Layout'
import homeWelcome from '../img/home-welcome.jpg'
// import titleImgBethany from '../img/title-bethany.jpg'
import titleImgTemp from '../img/title-temp.jpg'
import {
  Img2,
  Img3,
  MainImage,
  SmallTextBox,
  EmailTreat,
  TextBox,
  WelcomeText,
} from './IndexPageStyledComponents'
import { MainText } from '../styles/SharedStyledComponents'

const IMG_HEIGHT = '600px'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <MainImage className="full-width" imgUrl={titleImgTemp}></MainImage>
        <div
          style={{
            position: 'relative',
            height: IMG_HEIGHT,
            marginTop: '100px',
          }}
        >
          {/* <WelcomeText>Welcome!</WelcomeText> */}
          <TextBox>
            <h2>Mission Statement</h2>
            <MainText>
              We believe that good coffee has the power to bring people
              together. That’s why we decided to turn a corner of our shop into
              a cozy meeting space where you can hang out with fellow coffee
              lovers and learn about coffee making techniques. All of the
              artwork on display there is for sale. The full price you pay goes
              to the artist.
            </MainText>
          </TextBox>
          <Img2
            src={homeWelcome}
            alt="sample"
            className="border box-shadow"
            imgHeight={IMG_HEIGHT}
          />
        </div>

        <div
          style={{
            position: 'relative',
            marginTop: '20px',
            height: '300px',
          }}
        >
          <Img3
            src={homeWelcome}
            alt="sample"
            className="border box-shadow"
            imgHeight="300px"
          />
          <SmallTextBox>
            <MainText>
              We believe that good coffee has the power to bring people
              together.
            </MainText>
          </SmallTextBox>

          <EmailTreat className="border box-shadow">
            <MainText>freebee email treat (will be a button)</MainText>
          </EmailTreat>
        </div>
      </div>
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
