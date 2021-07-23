import React from 'react';
import { Typography, Hidden, makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 400,
    '&:hover': {
      textDecoration: 'none',
    },
  },
});

export default function Logo() {
  const classes = useStyles();
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
      <Link to="/" className={classes.link}>
        <Typography
          component="h1"
          variant="overline"
          color="textPrimary"
          style={{ fontSize: '1rem', letterSpacing: '.2em', lineHeight: 1 }}
        >
          {title}
        </Typography>
      </Link>
    </Hidden>
  );
}
