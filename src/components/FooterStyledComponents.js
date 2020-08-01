import styled from 'styled-components'
import { BORDER_COLOR, HEADER_COLOR, FOOTER_HEIGHT } from '../constants'

export const Wrapper = styled.footer`
  background-color: ${HEADER_COLOR};
  width: 100%;
  height: ${FOOTER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid ${BORDER_COLOR} 1px;
  position: relative;
`

export const SocialLink = styled.a`
  margin: 8px;
`
