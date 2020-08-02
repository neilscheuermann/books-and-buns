import styled from 'styled-components'
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
} from '../constants'

const MAX_WIDTH_INT = 1336

export const Content = styled.div`
  margin-bottom: 24px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    ${/* Set max width and center */ ''}
    margin-top: ${HEADER_HEIGHT};
    margin-left: auto;
    margin-right: auto;
    max-width: ${MAX_WIDTH_INT}px;
  }
  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    margin-top: ${HEADER_HEIGHT_MOBILE};
  }

  ${/* To always give some margin */ ''}
  @media (max-width: ${MAX_WIDTH_INT + 16}px) {
    margin-right: 16px;
    margin-left: 16px;
  }
`
