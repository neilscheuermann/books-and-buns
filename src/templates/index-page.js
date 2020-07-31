import React from 'react'
import Layout from '../components/Layout'
import file_example_JPG_500kB from './file_example_JPG_500kB.jpg'
import titleImgBethany from '../img/title-bethany.jpg'
import {
  Img,
  MainImage,
  SmallTextBox,
  EmailTreat,
  TextBox,
  WelcomeText,
} from './IndexPageStyledComponents'
import { PText } from '../styles/SharedStyledComponents'

const IMG_HEIGHT = '600px'

const IndexPage = () => {
  return (
    <Layout>
      <div>
        <MainImage className="full-width" imgUrl={titleImgBethany}></MainImage>

        <div style={{ position: 'relative', height: IMG_HEIGHT }}>
          <WelcomeText>Welcome!</WelcomeText>
          <TextBox className="border box-shadow">
            <PText>
              We believe that good coffee has the power to bring people
              together. That’s why we decided to turn a corner of our shop into
              a cozy meeting space where you can hang out with fellow coffee
              lovers and learn about coffee making techniques. All of the
              artwork on display there is for sale. The full price you pay goes
              to the artist.
            </PText>
            <PText>
              We believe that good coffee has the power to bring people
              together. That’s why we decided to turn a corner of our shop into
              a cozy meeting space where you can hang out with fellow coffee
              lovers and learn about coffee making techniques. All of the
              artwork on display there is for sale. The full price you pay goes
              to the artist.
            </PText>
          </TextBox>
          <Img
            src={file_example_JPG_500kB}
            alt="sample"
            className="border box-shadow"
            imgHeight={IMG_HEIGHT}
          />
        </div>

        <div
          style={{
            position: 'relative',
            marginTop: '20px',
            height: '200px',
          }}
        >
          <SmallTextBox className="border box-shadow">
            <PText>
              We believe that good coffee has the power to bring people
              together.
            </PText>
          </SmallTextBox>

          <EmailTreat className="border box-shadow">
            <PText>freebee email treat</PText>
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
