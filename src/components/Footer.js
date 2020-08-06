import React from 'react'

import instagram from '../img/icons-and-logos/social/instagram.svg'
// import twitter from '../img/social/twitter.svg'

import { FontCredit, SocialLink, Wrapper } from './FooterStyledComponents'

export default function Footer() {
  return (
    <Wrapper>
      {/* <SocialLink title="twitter" href="https://twitter.com"> */}
      {/*   <img */}
      {/*     src={twitter} */}
      {/*     alt="Twitter" */}
      {/*     style={{ width: '1.5em', height: '1.5em' }} */}
      {/*   /> */}
      {/* </SocialLink> */}
      <SocialLink
        title="instagram"
        href="https://www.instagram.com/books.buns/"
      >
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </SocialLink>
      {/* TODO>>>: Add email link */}
      <FontCredit>
        Font made from{' '}
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> is licensed
        by CC BY 3.0
      </FontCredit>
    </Wrapper>
  )
}
