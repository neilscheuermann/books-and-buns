import styled from 'styled-components'
import {
  BACKGROUND_COLOR_LIGHT_BLUE,
  BORDER_COLOR,
  COLOR_BLACK,
  COLOR_ORANGE,
  COLOR_ORANGE_HOVER,
  TABLET_WIDTH_MAX,
  TABLET_WIDTH_MAX_PLUS_1,
  HEADER_HEIGHT,
} from '../constants'

const FORM_WIDTH_INT = 750

export const ContactHeader = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Tw Cen Medium Regular';
  color: ${COLOR_BLACK};
  font-size: 2em;
  font-weight: 900;
  margin-top: calc(${HEADER_HEIGHT} + 64px);

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    font-size: 1.7em;
    margin-top: calc(${HEADER_HEIGHT} + 32px);
  }
`

// Form
//
export const FormWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
    justify-content: center;
  }
`

export const FormBackground = styled.div`
  background-color: ${BACKGROUND_COLOR_LIGHT_BLUE};
  padding: 16px;

  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: ${FORM_WIDTH_INT}px;
  }
`

export const Form = styled.form`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    width: ${FORM_WIDTH_INT - 32}px;
  }
`

export const InputNameEmailWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
  }
`

export const InputHalfOrFullWrapper = styled.div`
  width: calc((100% - 16px) / 2);
  background-color: white;
  padding: 10px 30px 9px 22px;
  margin-bottom: 16px;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    width: 100%;
    padding: 10px 8px 9px 8px;
  }

  ${({ marginRight8px }) =>
    marginRight8px &&
    `
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
      margin-right: 8px;
    }
  `}

  ${({ marginLeft8px }) =>
    marginLeft8px &&
    `
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
      margin-left: 8px;
    }
  `}
`

// Pulled in custom Tw Cen Medium Regular font with this tutorial
// https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
export const Input = styled.input`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`
export const InputWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 9px 22px;
  background-color: white;
  margin-bottom: 16px;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    padding: 10px 8px 9px 8px;
  }
`

export const TextAreaWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 9px 22px;
  min-height: 120px;
  background-color: white;

  ${/* Mobile or Tablet*/ ''}
  @media (max-width: ${TABLET_WIDTH_MAX}) {
    padding: 10px 16px 9px;
  }
`

export const TextArea = styled.textarea`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  overflow: auto;
  resize: vertical;
  background: transparent;
`

export const Button = styled.button`
  margin-top: 16px;
  outline: none !important;
  border: none;
  background: transparent;
  width: 100%;
  height: 50px;
  background-color: ${COLOR_ORANGE};
  font-size: 16px;
  color: white;
  line-height: 1.2;

  :hover {
    background-color: ${COLOR_ORANGE_HOVER};
    cursor: pointer;
  }
`

export const StyledText = styled.p`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.5em;
`

// ContactInfo
//

export const ContactInfoWrapper = styled.div`
  ${/* Web */ ''}
  @media only screen and (min-width: ${TABLET_WIDTH_MAX_PLUS_1}) {
    display: flex;
    justify-content: center;
  }
`

export const ContactItem = styled.div`
  font-family: 'Tw Cen Medium Regular';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 32px 0;
  color: ${COLOR_BLACK};
`

export const ContactItemHeader = styled.h2`
  font-size: 1.7em;
  text-decoration: underline;
`
