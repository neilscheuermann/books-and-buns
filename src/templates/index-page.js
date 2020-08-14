import React from 'react'
import Layout from '../components/Layout'
import useReactResponsive from '../hooks/useReactResponsive'
import bethLindsTable from '../img/beth-linds-table.jpg'
import bethLindsSaltLake from '../img/beth-linds-salt-lake.jpg'
import lindsayImg from '../img/lindsay-square.jpg'
import bethHatImg from '../img/beth-hat-square.jpg'
import {
  Section1Img,
  Section1Header,
  Section1,
  Section1TextWrapper,
  Section1WelcomeText,
  Section2,
  Section2Image,
  Section2TextContent,
  Section3,
  Section3Image,
  Section3TextContent,
} from './indexPageStyledComponents'
import { HeaderImage, MainText } from '../styles/SharedStyledComponents'

const IMG_HEIGHT_WEB = '600px'
const IMG_HEIGHT_MOBILE = '200px'

const IndexPage = ({ location: { pathname } }) => {
  const { isMobile } = useReactResponsive()

  return (
    <Layout pathname={pathname}>
      <div>
        <HeaderImage
          className={!isMobile ? 'make-full-width' : ''}
          imgUrl={bethLindsSaltLake}
          imgHeight={isMobile ? IMG_HEIGHT_MOBILE : IMG_HEIGHT_WEB}
        />
        <Section1>
          <Section1TextWrapper>
            {/* <Section1WelcomeText>Welcome!</Section1WelcomeText> */}
            <div>
              {/* <Section1Header>Story Craft</Section1Header> */}
              <Section1Header>We are Books & Buns!</Section1Header>
              <MainText>
                Do you ever need to talk to someone about your writing?
              </MainText>
              <MainText>
                We can’t get enough of it! Often we will be chatting about a
                particular plot or character arc for hours!
              </MainText>
              <MainText>
                And it is sooo helpful to be able to have someone to bounce
                those ideas off of.
              </MainText>
              <MainText>
                Books and Buns was created for those of you that are looking for
                your writing community.
              </MainText>
              <MainText>
                Admit it, you need us{' '}
                <span role="img" aria-label="smiley emoji">
                  😊
                </span>
              </MainText>
              <MainText>
                So let us in! What are you working on that’s got you stuck or
                excited? Email us or sign up for a package. However you choose,
                we can’t wait to hear from you{' '}
                <span role="img" aria-label="kissey emojis">
                  💋💋
                </span>
              </MainText>
            </div>
          </Section1TextWrapper>
          <Section1Img
            src={bethLindsTable}
            alt="Lindsay and Bethany"
            className="border box-shadow"
          />
        </Section1>
      </div>

      <div>
        {/* <Section0> */}
        {/*   <Section0MainText className="jc-center"> */}
        {/*     We are two sisters with very different perspectives but still end up */}
        {/*     finding the similarities in each other. We use this to our advantage */}
        {/*     when editing your manuscripts, and we often become as passionate as */}
        {/*     you are about your story. This is us! */}
        {/*   </Section0MainText> */}
        {/* </Section0> */}
        <div className={!isMobile ? 'jc-center' : ''}>
          <Section2>
            <Section2Image
              src={lindsayImg}
              alt="Lindsay"
              className="border box-shadow"
            />

            <Section2TextContent>
              <MainText style={{ fontSize: '2em' }}>Hey there,</MainText>
              <MainText>
                I'm Lin. Reading has always provided me a safe-haven, so now
                bringing stories into existence is my life. I get passionate
                about stories because they frame the way we understand our
                lives. If you have a story to tell, I am here to share my
                expertise and encouragement.
              </MainText>
            </Section2TextContent>
          </Section2>
        </div>
        <div className={!isMobile ? 'jc-center' : ''}>
          <Section3>
            <Section3Image
              src={bethHatImg}
              alt="Bethany"
              className="border box-shadow"
            />
            <Section3TextContent>
              <MainText style={{ fontSize: '2em' }}>Hi, hi!</MainText>
              <MainText>
                I'm Bee, a linguist who lingers on words and creative ideas. I
                believe how we share our messages with the world creates our
                impact. I find myself taking notes on the media I consume in my
                free time to clarify the messages just that much more... so you
                could say it has become somewhat of an obsession.
              </MainText>
            </Section3TextContent>
          </Section3>
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
