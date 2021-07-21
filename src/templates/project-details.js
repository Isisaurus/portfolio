import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'markdown-to-jsx';
import {
  Container,
  makeStyles,
  Typography,
  Link,
  Divider,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  intro: {
    margin: '4rem 0',
  },
  title: {
    fontSize: '2.5rem',
    lineHeight: '1.5',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      color: theme.palette.primary.main,
    },
  },
  header: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  link: {
    color: [theme.palette.text.secondary],
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'none',
      color: [theme.palette.primary.main],
    },
  },
  list: {},
  listItem: {
    lineHeight: 2,
  },
  code: {
    fontSize: '1rem',
    textTransform: 'none',
    backgroundColor: 'rgba(0,0,0, 0.05)',
    padding: '.3em .5em',
    fontWeight: 300,
  },
  divider: {
    margin: '4rem 0',
    width: '40%',
  },
}));

export default function ProjectDetails({ data }) {
  const classes = useStyles();
  const { html } = data.markdownRemark;
  const {
    title,
    stack,
    date,
    live,
    github,
    image,
  } = data.markdownRemark.frontmatter;
  const styledDate = new Date(date);

  const options = {
    overrides: {
      h2: {
        component: Typography,
        props: {
          variant: 'h6',
          component: 'span',
          color: 'primary',
          className: `${classes.header}`,
        },
      },
      p: {
        component: Typography,
        props: {
          paragraph: true,
          variant: 'body1',
        },
      },
      a: {
        component: Link,
        props: {
          className: `${classes.link}`,
        },
      },
      ul: {
        component: 'ul',
        props: {
          className: `${classes.list}`,
        },
      },
      li: {
        component: Typography,
        props: {
          variant: 'body1',
          component: 'li',
          className: `${classes.listItem}`,
        },
      },
      code: {
        component: Typography,
        props: {
          variant: 'overline',
          component: 'code',
          className: `${classes.code}`,
        },
      },
      hr: {
        component: Divider,
        props: {
          className: `${classes.divider}`,
        },
      },
    },
  };

  return (
    <Layout>
      <Container>
        <div className={classes.intro}>
          <Typography variant="h1" component="h2" className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="overline"
            style={{ fontSize: '1rem', textTransform: 'none' }}
          >
            {styledDate.toLocaleDateString('nl-Nl', { dateStyle: 'medium' })}
          </Typography>
          <GatsbyImage image={getImage(image)} alt={`${title} thumbnail`} />
        </div>
        <ReactMarkdown id="recipe" options={options} children={html} />
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        stack
        slug
        date(locale: "nl-NL")
        live
        github
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: FULL_WIDTH
              formats: [WEBP, AUTO]
            )
          }
        }
      }
    }
  }
`;
