import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useReactResponsive from '../hooks/useReactResponsive'
import {
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_ORANGE_HOVER,
  FONT_FAMILY,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'
import colorBun from '../img/icons-and-logos/color-bun-200px.svg'
import colorBunSmall from '../img/icons-and-logos/color-bun-100px.svg'
import Layout from '../components/Layout'

export default function Podcasts({ location: { pathname } }) {
  const { isMobile } = useReactResponsive()
  const [isMobileTemp, setIsMobileTemp] = useState('')
  useEffect(() => {
    setIsMobileTemp(isMobile)
  }, [isMobile])

  return (
    <Layout pathname={pathname}>
      <Wrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <ColorBunsSticker
            src={colorBunSmall}
            alt="logo of cartoon woman head with colorful bun"
            // Make sure max-height is none to respect the changes to width and height in logo svg
            // Had to do inline style due to bulma styling
            style={{
              maxHeight: 'none',
            }}
          />
          <Header>The Books and Buns Podcast</Header>
          <ul>
            <p>
              <a
                href="https://booksandbuns.podbean.com/e/why-we-edit-novels/"
                target="_blank"
                rel="noreferrer"
              >
                Episode #1
              </a>{' '}
              - Why We Edit Novels
            </p>
            <p>
              <a
                href="https://booksandbuns.podbean.com/e/the-nutshell-technique/"
                target="_blank"
                rel="noreferrer"
              >
                Episode #2
              </a>{' '}
              - The Nutshell Technique
            </p>
            <p>
              <a
                href="https://booksandbuns.podbean.com/e/dynamic-secondary-characters/"
                target="_blank"
                rel="noreferrer"
              >
                Episode #3
              </a>{' '}
              - Dynamic Secondary Characters
            </p>
            <p>
              <a
                href="https://booksandbuns.podbean.com/e/writing-wisdom-from-amy-harmon/"
                target="_blank"
                rel="noreferrer"
              >
                Episode #4
              </a>{' '}
              - Writing Wisdom from{' '}
              <a
                href="https://www.authoramyharmon.com/"
                target="_blank"
                rel="noreferrer"
              >
                Amy Harmon
              </a>
            </p>
          </ul>
        </div>
      </Wrapper>
    </Layout>
  )
}

const ColorBunsSticker = styled.img`
  margin: 16px;
  border: 1px solid ${COLOR_BLACK};
  border-radius: 56%;
  padding: 10px;
  box-shadow: 3px 5px ${COLOR_BLACK};
`

const Header = styled.h1`
  font-family: ${FONT_FAMILY};
  color: ${COLOR_BLACK};
  font-size: 2em;
  display: flex;
  text-align: center;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    font-size: 4em;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 90px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    margin-top: 150px;
  }

  p {
    font-size: 1.5em;
    font-family: ${FONT_FAMILY};
  }

  ul > p {
    margin: 16px;
  }

  button {
    font-family: ${FONT_FAMILY};
    font-size: 1.4em;
    border: none;
    border-radius: 30px;
    display: inline-block;
    padding: 8px 16px;
    margin: 24px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: white;
    background-color: ${COLOR_ORANGE};
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    box-shadow: 1px 2px 0px 0px ${COLOR_BLACK};

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    margin: 16px;
  }

    :hover {
      background-color: ${COLOR_ORANGE_HOVER};
    }
  }
`
