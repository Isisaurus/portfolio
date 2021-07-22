import React from 'react';
import Layout from './../components/Layout';
import { Typography } from '@material-ui/core';

function contact() {
  return (
    <Layout>
      <Typography variant="h1">Contact me</Typography>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </div>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    </Layout>
  );
}

export default contact;
