import React from 'react'
import { Link } from 'gatsby'

import instagram24px from '../img/icons-and-logos/social/instagram-24-px.svg'
import twitter24px from '../img/icons-and-logos/social/twitter-24-px.svg'
import pinterest24px from '../img/icons-and-logos/social/pinterest-24-px.svg'
import gmail24px from '../img/icons-and-logos/social/gmail-24-px.svg'

import { FontCredit, SocialLink, Wrapper } from './FooterStyledComponents'

export default function Footer() {
  return (
    <Wrapper>
      <SocialLink
        title="instagram"
        href="https://www.instagram.com/books.buns/"
        target="_blank"
      >
        <img
          src={instagram24px}
          alt="Instagram"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </SocialLink>
      <SocialLink
        title="twitter"
        href="https://twitter.com/Bee84501167"
        target="_blank"
      >
        <img
          src={twitter24px}
          alt="Twitter"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </SocialLink>
      <SocialLink
        title="pinterest"
        href="https://www.pinterest.com/booksbunsco/"
        target="_blank"
      >
        <img
          src={pinterest24px}
          alt="Pinterest"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </SocialLink>
      <Link to={`/contact`} style={{ margin: '8px' }}>
        <img
          src={gmail24px}
          alt="Email"
          style={{ width: '1.5em', height: '1.5em' }}
        />
      </Link>
      <FontCredit>
        Font made from{' '}
        <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a> is licensed
        by CC BY 3.0
      </FontCredit>
    </Wrapper>
  )
}
