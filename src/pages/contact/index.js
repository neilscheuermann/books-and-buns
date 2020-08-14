import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { HEADER_HEIGHT } from '../../constants'
import {
  ContactHeader,
  Form,
  FormWrapper,
  FormBackground,
  Input,
  InputWrapper,
  InputHalfOrFullWrapper,
  InputNameEmailWrapper,
  TextArea,
  TextAreaWrapper,
  Button,
  StyledText,
  ContactInfoWrapper,
  ContactItem,
  ContactItemHeader,
} from './ContactStyledComponents'

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate('/'))
      .catch((error) => alert(error))
  }

  render() {
    const {
      location: { pathname },
    } = this.props

    return (
      <Layout pathname={pathname}>
        <ContactHeader
          style={{
            marginTop: `${parseInt(HEADER_HEIGHT) + 64}px`,
            marginBottom: '0',
          }}
        >
          Request package details
        </ContactHeader>
        <ContactHeader>or Connect with us</ContactHeader>
        <FormWrapper>
          <FormBackground>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              {/* ============================================== */}

              <InputNameEmailWrapper>
                <InputHalfOrFullWrapper marginRight8px>
                  <Input type="text" name="name" id="name" placeholder="Name" />
                </InputHalfOrFullWrapper>
                <InputHalfOrFullWrapper marginLeft8px>
                  <Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </InputHalfOrFullWrapper>
              </InputNameEmailWrapper>
              <InputWrapper>
                <Input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </InputWrapper>
              <TextAreaWrapper>
                <TextArea
                  name="message"
                  id="message"
                  rows="6"
                  placeholder="Message"
                />
              </TextAreaWrapper>
              <div className="actions">
                <Button type="submit" value="Send Message">
                  <StyledText>Send Message</StyledText>
                </Button>
              </div>
            </Form>
          </FormBackground>
        </FormWrapper>
        <ContactInfoWrapper>
          <ContactItem>
            <ContactItemHeader>Email</ContactItemHeader>
            <StyledText>books.buns.co@gmail.com</StyledText>
          </ContactItem>
          <ContactItem>
            <ContactItemHeader>Address</ContactItemHeader>
            <StyledText>3267 E 3300 S #110</StyledText>
            <StyledText>Salt Lake City, UT 84109</StyledText>
          </ContactItem>
        </ContactInfoWrapper>
      </Layout>
    )
  }
}
