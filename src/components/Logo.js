import React from 'react';
import { Typography, Hidden } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

export default function Logo() {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  return (
    <Hidden xsDown>
      <Typography
        component="h1"
        variant="overline"
        color="textPrimary"
        style={{ fontSize: '1rem', letterSpacing: '.2em' }}
      >
        {title}
      </Typography>
    </Hidden>
  );
}
