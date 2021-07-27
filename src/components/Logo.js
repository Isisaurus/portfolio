import React from 'react';
import { Typography, Hidden, makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    fontWeight: 500,
    fontSize: '1rem',
    letterSpacing: '.2em',
    lineHeight: 1,
    textTransform: 'uppercase',
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
        <Typography component="h1" color="textPrimary">
          {title}
        </Typography>
      </Link>
    </Hidden>
  );
}
