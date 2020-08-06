import styled from 'styled-components'
import {
  BORDER_COLOR,
  HEADER_COLOR,
  FOOTER_HEIGHT,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'

export const Wrapper = styled.footer`
  background-color: ${HEADER_COLOR};
  width: 100%;
  min-height: ${FOOTER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid ${BORDER_COLOR} 1px;
  position: relative;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-bottom: 32px;
  }
`

export const SocialLink = styled.a`
  margin: 8px;
`

export const FontCredit = styled.div`
  font-family: 'Tw Cen Medium Regular';
  position: absolute;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    bottom: 8px;
    right: 8px;
  }

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    bottom: -2px;
    font-size: 0.8em;
    justify-content: center;
  }
`
