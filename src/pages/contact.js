import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Tell me cool things</h1>
    <form method="POST" action="https://formspree.io/veronicaliu821@gmail.com">
      <input type="text" name="name" placeholder="Name"></input><br />
      <input type="text" name="email" placeholder="Email"></input> <br/>

      <textarea id="text" name="subject" placeholder="hi there"></textarea>
      <input type="submit" value="Submit"></input>
    </form>
  </Layout>
)

export default ContactPage