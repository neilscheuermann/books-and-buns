import styled from 'styled-components'
import { COLOR_ORANGE, BACKGROUND_COLOR_LIGHT_BLUE } from '../../constants'

// Section 1
//
export const Section1 = styled.div`
  width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${BACKGROUND_COLOR_LIGHT_BLUE};
  margin-top: 24px;
`

export const SectionHeader = styled.h1`
  font-family: 'Tw Cen Medium Regular';
  font-size: 2em;
  margin-top: 98px;
  text-decoration: underline;
`

export const Paragraph = styled.div`
  width: calc(100% - 64px);
  margin: 16px;
  background-color: white;
`

export const ButtonWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: flex-end;
  margin-right: 64px;
`

export const Button = styled.button`
  font-family: 'Tw Cen Medium Regular';
  font-size: 2em;
  border: none;
  padding: 8px 16px;
  color: white;
  background-color: ${COLOR_ORANGE};
  border-radius: 5px;
`
