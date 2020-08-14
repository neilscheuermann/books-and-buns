import React from 'react'
import Layout from '../../components/Layout'
import useReactResponsive from '../../hooks/useReactResponsive'
import { MainText } from '../../styles/SharedStyledComponents'
import {
  ButtonWrapper,
  LIStyled,
  MainWrapper,
  SectionHeader,
  Paragraph,
  Section,
  SectionTextWrapper,
  StyledLink,
  ULStyled,
} from '../../styles/EditingStyledComponents'

const LineDivider = () => (
  <div className="jc-center">
    <div
      style={{
        borderBottom: '1px solid black',
        width: '100%',
        margin: '16px 0',
      }}
    ></div>
  </div>
)

export default function Editing({ location: { pathname } }) {
  const { isMobile } = useReactResponsive()
  return (
    <Layout pathname={pathname}>
      <div className="jc-center">
        <MainWrapper>
          {/* Section 1 */}
          {/* ========= */}
          <Section>
            <SectionHeader className="jc-center">Concept Editing</SectionHeader>
            <Paragraph>
              <SectionTextWrapper>
                <MainText className="jc-center">Why you need us</MainText>
                <MainText>
                  Writing a story can be a lonely calling. you often just need
                  someone to brainstorm with or someone to take a step back to
                  see the big picture. That is easy to miss when every detail of
                  your story is under scrutiny. It's like missing the forest for
                  the trees. That's where we come in. Show us your forest!
                </MainText>
              </SectionTextWrapper>
              <LineDivider />
              <MainText className="jc-center">What you get</MainText>
              <div className="jc-center">
                <ULStyled>
                  <LIStyled>Full manuscript concept edit and review</LIStyled>
                  <LIStyled>45 minute zoom-call follow-up</LIStyled>
                  <LIStyled>Easy to read physical critique</LIStyled>
                  <LIStyled>
                    List of customized, supplemental resources
                  </LIStyled>
                </ULStyled>
              </div>
              <LineDivider />
              <MainText className="jc-center">What you pay</MainText>
              <div className="jc-center">
                <ULStyled>
                  <LIStyled>$150 for up to 29,999 words</LIStyled>
                  <LIStyled>$299 for 30,000 - 69,999 words</LIStyled>
                  <LIStyled>$399 for 70,000 - 100,000 words</LIStyled>
                </ULStyled>
              </div>
            </Paragraph>
            <ButtonWrapper>
              <StyledLink to="/contact">I'm In </StyledLink>
            </ButtonWrapper>
          </Section>

          <div
            style={{
              borderBottom: '1px solid black',
              width: '100vw',
              margin: isMobile ? '0' : '16px 0',
            }}
          ></div>

          {/* Section 2 */}
          {/* ========= */}
          <Section color="rgb(229 236 246)">
            <SectionHeader className="jc-center">Copy Editing</SectionHeader>
            <Paragraph>
              <SectionTextWrapper>
                <MainText className="jc-center">Why you need us</MainText>
                <MainText>
                  Once you have your story structure perfected, you still have a
                  few grammatical snags you need to eliminate. It is invaluable
                  to have someone - besides you - check for all those errant
                  commas and spelling mixups. We've got eyes for your novel!
                </MainText>
              </SectionTextWrapper>
              <LineDivider />
              <MainText className="jc-center">What you get</MainText>
              <div className="jc-center">
                <ULStyled>
                  <LIStyled>Full manuscript copy edit and review</LIStyled>
                  <LIStyled>Easy to read physical critique</LIStyled>
                  <LIStyled>
                    List of customized, supplemental resources
                  </LIStyled>
                </ULStyled>
              </div>
              <LineDivider />
              <MainText className="jc-center">What you pay</MainText>
              <div className="jc-center">
                <ULStyled>
                  <LIStyled>$150 for up to 6,000 words</LIStyled>
                  <LIStyled>$26 for each additional 1,000 words</LIStyled>
                </ULStyled>
              </div>
            </Paragraph>
            <ButtonWrapper>
              <StyledLink to="/contact">Yes Please!</StyledLink>
            </ButtonWrapper>
          </Section>

          <div
            style={{
              borderBottom: '1px solid black',
              width: '100vw',
              margin: isMobile ? '0' : '16px 0',
            }}
          ></div>

          {/* Section 3 */}
          {/* ========= */}
          <Section>
            <SectionHeader className="jc-center">Combined</SectionHeader>
            <Paragraph>
              <SectionTextWrapper>
                <MainText className="jc-center">Why you need us</MainText>
                <MainText>
                  If you're really committed and your work needs, well, work. We
                  have been there! We will support you through your concept and
                  copy edit with everything from each of the individual packages
                  plus two additional zoom calls. Because you're worth it and
                  this will be fun!
                </MainText>
                <MainText>
                  Oh, did we mention a discount?{' '}
                  <span role="img" aria-label="happy hearts emoji">
                    🥰
                  </span>
                </MainText>
              </SectionTextWrapper>
              <LineDivider />
              <MainText className="jc-center">What you get</MainText>
              <div className="jc-center">
                <ULStyled>
                  <LIStyled>Full manuscript concept edit and review</LIStyled>
                  <LIStyled>Full manuscript copy edit and review</LIStyled>
                  <LIStyled>Three 45 minute zoom-call follow-ups</LIStyled>
                  <LIStyled>Easy to read physical critiques</LIStyled>
                  <LIStyled>
                    List of customized, supplemental resources
                  </LIStyled>
                </ULStyled>
              </div>
              <LineDivider />
              <MainText className="jc-center">What you pay</MainText>
              <div className="jc-center">
                <ULStyled>
                  <MainText>Concept</MainText>
                  <LIStyled>$120 for up to 29,999 words</LIStyled>
                  <LIStyled>$240 for 30,000 - 69,999 words</LIStyled>
                  <LIStyled>$340 for 70,000 - 100,000 words</LIStyled>
                  <MainText>Copy</MainText>
                  <LIStyled>$150 for up to 6,000 words</LIStyled>
                  <LIStyled>$22 for each additional 1,000 words</LIStyled>
                </ULStyled>
              </div>
            </Paragraph>
            <ButtonWrapper>
              <StyledLink to="/contact">Obviously</StyledLink>
            </ButtonWrapper>
          </Section>
        </MainWrapper>
      </div>
    </Layout>
  )
}
