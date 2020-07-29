import React from 'react'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

import { SocialLink, Wrapper } from './FooterStyledComponents'

export default function Footer() {
  return (
    <Wrapper>
      <SocialLink title="facebook" href="https://facebook.com">
        <img
          src={facebook}
          alt="Facebook"
          style={{ width: '1em', height: '1em' }}
        />
      </SocialLink>
      <SocialLink title="twitter" href="https://twitter.com">
        <img
          src={twitter}
          alt="Twitter"
          style={{ width: '1em', height: '1em' }}
        />
      </SocialLink>
      <SocialLink title="instagram" href="https://instagram.com">
        <img
          src={instagram}
          alt="Instagram"
          style={{ width: '1em', height: '1em' }}
        />
      </SocialLink>
      <SocialLink title="vimeo" href="https://vimeo.com">
        <img src={vimeo} alt="Vimeo" style={{ width: '1em', height: '1em' }} />
      </SocialLink>
    </Wrapper>
  )
}
