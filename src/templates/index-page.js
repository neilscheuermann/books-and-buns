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
              We offer detailed <strong>Concept Editing</strong> because writing
              a story can be a lonely calling. you often just need someone to
              brainstorm with or someone to take a step back to see the big
              picture. That is easy to miss when every detail of your story is
              under scrutiny. It's like missing the forest for the trees. That's
              where we come in. Show us your forest!
            </MainText>
            <MainText>
              Once you have your story down on paper, First step: take a huge
              sigh of relief and a fist bump, cause ... ya boss. Second step: we
              are here for the <strong>Copy Edit</strong>, to cross your t's and
              dot those i's.
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
