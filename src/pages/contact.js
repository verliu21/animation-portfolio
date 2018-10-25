import React from 'react'

import Layout from '../components/layout'

const ContactPage = () => (
  <Layout>
    <h1>Tell me cool things</h1>
    <form enctype="text/plain" method="post" action="https://formspree.io/veronicaliu821@gmail.com">
      <input type="text" name="firstname" placeholder="First Name"></input><br />
      <input type="text" name="lastname" placeholder="Last Name"></input>

      <input type="text" name="email" placeholder="Email"></input>

      <textarea id="text" name="subject" placeholder="who R u"></textarea>
      <input type="submit" value="Submit"></input>
    </form>
  </Layout>
)

export default ContactPage