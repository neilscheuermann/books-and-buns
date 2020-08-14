import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/Layout'
import { MainText } from '../../styles/SharedStyledComponents'
import {
  ButtonWrapper,
  Button,
  Section1,
  SectionHeader,
  Paragraph,
} from './EditingStyledComponents'

export default function Editing({ location: { pathname } }) {
  return (
    <Layout pathname={pathname}>
      <div className="jc-center">
        <Section1>
          <SectionHeader>Concept Editing</SectionHeader>
          <Paragraph>
            <MainText>
              Writing a story can be a lonely calling. you often just need
              someone to brainstorm with or someone to take a step back to see
              the big picture. That is easy to miss when every detail of your
              story is under scrutiny. It's like missing the forest for the
              trees. That's where we come in. Show us your forest!
            </MainText>
          </Paragraph>
          <ButtonWrapper>
            <Link to="/contact">
              <Button>I'm In</Button>
            </Link>
          </ButtonWrapper>
          <SectionHeader>Copy Editing</SectionHeader>
          <Paragraph>
            <MainText>Once you have your story down on paper</MainText>
            <MainText>
              First step: take a huge sigh of relief and a fist bump, cause ...
              ya boss.
            </MainText>
            <MainText>
              Second step: we are here for the <i>Copy Edit</i>, to cross your
              t's and dot those i's.
            </MainText>
          </Paragraph>
          <ButtonWrapper>
            <Link to="/contact">
              <Button>Yes Please!</Button>
            </Link>
          </ButtonWrapper>
          <SectionHeader>Combined</SectionHeader>
          <Paragraph>
            <MainText>
              You’re really committed and you need detailed concept editing as
              well as a nice and tidy copy edit. We got you! This package will
              include general concept editing, reviews with accompanying zoom
              calls, and of course our copy edit.
            </MainText>
          </Paragraph>
          <ButtonWrapper style={{ marginBottom: '120px' }}>
            <Link to="/contact">
              <Button>Obviously</Button>
            </Link>
          </ButtonWrapper>
        </Section1>
      </div>
    </Layout>
  )
}
