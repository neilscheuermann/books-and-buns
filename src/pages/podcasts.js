import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useReactResponsive from '../hooks/useReactResponsive'
import { COLOR_BLACK, FONT_FAMILY, TABLET_WIDTH_MAX_PLUS_1 } from '../constants'
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
            src={isMobileTemp ? colorBunSmall : colorBun}
            alt="logo of cartoon woman head with colorful bun"
            // Make sure max-height is none to respect the changes to width and height in logo svg
            // Had to do inline style due to bulma styling
            style={{
              maxHeight: 'none',
            }}
          />
          <Text>Podcasts coming October 6th!</Text>
        </div>
      </Wrapper>
    </Layout>
  )
}

const ColorBunsSticker = styled.img`
  margin: 32px;
  border: 1px solid ${COLOR_BLACK};
  border-radius: 56%;
  padding: 10px;
  box-shadow: 3px 5px ${COLOR_BLACK};
`

const Text = styled.h1`
  font-family: ${FONT_FAMILY};
  color: ${COLOR_BLACK};
  font-size: 2.5em;
  display: flex;
  text-align: center;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    font-size: 4em;
    transform: rotate(-3deg);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`
