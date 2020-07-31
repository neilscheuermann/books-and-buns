import styled from 'styled-components'
import { COLOR_2, FOOTER_HEIGHT } from '../constants'

export const Wrapper = styled.footer`
  background-color: ${COLOR_2};
  width: 100%;
  height: ${FOOTER_HEIGHT};
  display: flex;
  justify-content: center;
`

export const SocialLink = styled.a`
  margin: 10px;
`
