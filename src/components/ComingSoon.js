import React from 'react'
import styled from 'styled-components'
import {
  COLOR_BLACK,
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  FONT_FAMILY,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'

export default function ComingSoon({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  )
}

const Text = styled.h1`
  font-family: ${FONT_FAMILY};
  color: ${COLOR_BLACK};
  font-size: 3em;
  display: flex;
  text-align: center;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    font-size: 4em;
    transform: rotate(-3deg);
  }
`

// Subtract 24px to account for the margin-bottom added to Layout ContentStyled
const Wrapper = styled.div`
  height: calc(100vh - ${FOOTER_HEIGHT} - ${HEADER_HEIGHT} - 24px);
  display: flex;
  justify-content: center;
  align-items: center;
`
