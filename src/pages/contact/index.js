import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import { HEADER_HEIGHT } from '../../constants'
import {
  ContactHeader,
  Form,
  FormWrapper,
  InputName,
  InputSubject,
  InputSubjectWrapper,
  InputHalfWrapper,
  InputEmail,
  TextArea,
  TextAreaWrapper,
  Button,
  ButtonText,
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
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  render() {
    const {
      location: { pathname },
    } = this.props

    return (
      <Layout pathname={pathname}>
        <ContactHeader
          style={{ marginTop: `${parseInt(HEADER_HEIGHT) + 64}px` }}
        >
          Connect with us
        </ContactHeader>
        <FormWrapper>
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

            <div style={{ display: 'flex' }}>
              <InputHalfWrapper style={{ marginRight: '8px' }}>
                <InputName
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </InputHalfWrapper>
              <InputHalfWrapper style={{ marginLeft: '8px' }}>
                <InputEmail
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </InputHalfWrapper>
            </div>
            <InputSubjectWrapper>
              <InputSubject
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </InputSubjectWrapper>
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
                <ButtonText>Send Message</ButtonText>
              </Button>
            </div>
          </Form>
        </FormWrapper>
      </Layout>
    )
  }
}
