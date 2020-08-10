import styled from 'styled-components'

const FORM_WIDTH_INT = 750

export const ContactHeader = styled.h1`
  display: flex;
  justify-content: center;
  font-family: 'Tw Cen Medium Regular';
  font-size: 2em;
  font-weight: 900;
  margin-bottom: 32px;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Form = styled.form`
  width: ${FORM_WIDTH_INT}px;
`

export const InputHalfWrapper = styled.div`
  width: calc((100% - 16px) / 2);
  padding: 10px 30px 9px 22px;
  background-color: white;
`

export const InputEmail = styled.input`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`
export const InputName = styled.input`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`

export const InputSubjectWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 9px 22px;
  background-color: white;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const InputSubject = styled.input`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.2em;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
`

export const TextAreaWrapper = styled.div`
  width: 100%;
  padding: 10px 30px 9px 22px;
  min-height: 120px;
  background-color: white;
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
  background-color: #333333;
  font-size: 16px;
  color: #fff;
  line-height: 1.2;
`

export const ButtonText = styled.p`
  font-family: 'Tw Cen Medium Regular';
  font-size: 1.5em;
`
