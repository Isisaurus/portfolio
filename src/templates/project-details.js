import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'markdown-to-jsx';
import {
  Container,
  makeStyles,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles(theme => ({
  intro: {
    margin: '4rem 0',
  },
  buttonContainer: {
    margin: '1rem 0 2rem',
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
    display: 'block',
    margin: '1em 0',
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
    margin: '2.5rem 0',
    width: '40%',
  },
}));

export default function ProjectDetails({ data }) {
  const classes = useStyles();
  const { html } = data.markdownRemark;
  const { title, stack, live, github, image } = data.markdownRemark.frontmatter;
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
          <div className={classes.buttonContainer}>
            <Button
              startIcon={<LanguageIcon />}
              color="primary"
              variant="text"
              size="small"
              style={{ marginRight: '.5rem' }}
            >
              <Link
                to={`${live}`}
                target="__blank"
                style={{ textDecoration: 'none' }}
              >
                live server
              </Link>
            </Button>
            <Button
              startIcon={<CodeIcon />}
              color="primary"
              variant="text"
              size="small"
            >
              <Link
                to={`${github}`}
                target="__blank"
                style={{ textDecoration: 'none' }}
              >
                code
              </Link>
            </Button>
          </div>
          <GatsbyImage image={getImage(image)} alt={`${title} thumbnail`} />
        </div>
        <ReactMarkdown id="recipe" options={options} children={html} />
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
