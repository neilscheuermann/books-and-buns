import React from 'react'
import styled from 'styled-components'

export default function ComingSoon({ children }) {
  return (
    <Wrapper>
      <Text>{children}</Text>
    </Wrapper>
  )
}

const Text = styled.h1`
  font-family: 'Noteworthy Light';
  color: black;
  font-size: 65px;
  transform: rotate(-3deg);
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 300px;
`
