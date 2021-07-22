import React, { useState } from 'react';
import Layout from './../components/Layout';
import { Typography } from '@material-ui/core';
import { navigate } from 'gatsby-link';

function Contact() {
  const [email, setEmail] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  const handleSubmit = event => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        email,
      }),
    })
      .then(() => navigate('/'))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Typography variant="h1">Contact me</Typography>
      <form
        data-netlify="true"
        name="contact"
        method="post"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Your email
          <input name="email" type="text" onChange={handleChange} />
        </label>
        <input type="submit" />
      </form>
    </Layout>
  );
}

export default Contact;
