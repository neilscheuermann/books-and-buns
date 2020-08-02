import React from 'react'
import Layout from '../components/Layout'
import useReactResponsive from '../hooks/useReactResponsive'
import homeWelcome from '../img/home-welcome.jpg'
import titleImgTemp from '../img/title-temp.jpg'
import {
  Section1Img,
  Img3,
  MainImage,
  Section1,
  Section2,
  SmallTextBox,
  Section1TextBox,
  Section1WelcomeText,
} from './IndexPageStyledComponents'
import { MainText } from '../styles/SharedStyledComponents'

const IMG_HEIGHT_WEB = '600px'
const IMG_HEIGHT_MOBILE = '200px'

const IndexPage = () => {
  const { isTabletOrMobile } = useReactResponsive()

  return (
    <Layout>
      <div>
        <div>
          <MainImage
            className={!isTabletOrMobile ? 'make-full-width' : ''}
            imgUrl={titleImgTemp}
            imgHeight={isTabletOrMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB}
          />
        </div>
        {/* Section 1 */}
        <Section1
          divHeight={isTabletOrMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Section1WelcomeText>Welcome!</Section1WelcomeText>
          </div>
          <Section1TextBox>
            <MainText>
              We believe that good coffee has the power to bring people
              together. That’s why we decided to turn a corner of our shop into
              a cozy meeting space where you can hang out with fellow coffee
              lovers and learn about coffee making techniques. All of the
              artwork on display there is for sale. The full price you pay goes
              to the artist.
            </MainText>
          </Section1TextBox>
          <Section1Img
            src={homeWelcome}
            alt="sample"
            className="border box-shadow"
            imgHeight={IMG_HEIGHT_WEB}
          />
        </Section1>
        {/* <Section2> */}
        {/*   <Img3 */}
        {/*     src={homeWelcome} */}
        {/*     alt="sample" */}
        {/*     className="border box-shadow" */}
        {/*     imgHeight="300px" */}
        {/*   /> */}
        {/*   <SmallTextBox> */}
        {/*     <MainText> */}
        {/*       We believe that good coffee has the power to bring people */}
        {/*       together. */}
        {/*     </MainText> */}
        {/*   </SmallTextBox> */}
        {/* </Section2> */}
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
