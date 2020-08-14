import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import {
  COLOR_ORANGE,
  COLOR_ORANGE_HOVER,
  BACKGROUND_COLOR_LIGHT_BLUE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'

// Section 1
//
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 80%;
  }
`

export const Section = styled.div`
  margin: 48px 0;
  padding: 16px;

  ${({ color }) => `background-color: ${color};`}

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin: 0;
    padding: 32px 16px;
  }
`

export const SectionHeader = styled.h1`
  font-family: 'Tw Cen Medium Regular';
  font-size: 2em;
  text-decoration: underline;
`

export const SectionTextWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    padding: 0 102px;
  }
`

export const Paragraph = styled.div`
  margin: 16px;
`

export const ULStyled = styled.ul`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: 45%;
  }
`

export const LIStyled = styled.li`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.5em;
`

export const ButtonWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: flex-end;
  margin-right: 64px;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin: 16px;
  }
`

export const StyledLink = styled((props) => <Link {...props} />)`
  font-family: 'Tw Cen Medium Regular';
  font-size: 2em;
  border: none;
  padding: 8px 16px;
  color: white;
  background-color: ${COLOR_ORANGE};
  border-radius: 5px;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    width: 100%;
    text-align: center;
    margin-top: 32px;
  }

  :hover {
    color: white;
    background-color: ${COLOR_ORANGE_HOVER};
  }
`
