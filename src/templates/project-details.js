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
  Fab,
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
    margin: '2.5em 0 1em',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  header2: {
    display: 'block',
    margin: '1.5em 0',
    fontSize: '1rem',
    fontWeight: 500,
  },
  link: {
    color: [theme.palette.text.secondary],
    fontWeight: 600,
    '&:hover': {
      textDecoration: 'none',
      color: [theme.palette.primary.main],
    },
  },
  list: {
    fontSize: '1rem',
  },
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
  stackImgContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '2rem',
    '& > *': {
      marginRight: '1rem',
      marginBottom: '.5rem',
    },
    '&:last-child': {
      marginRight: '0rem',
    },
  },
  stackImg: {
    maxHeight: '2rem',
    transition: 'all 0.2s ease-out',
    opacity: '.8',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '1.5rem',
    },
    '&:hover': {
      transition: 'all 0.2s ease-in',
      transform: 'scale(1.2)',
      opacity: '1',
    },
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
      h3: {
        component: Typography,
        props: {
          variant: 'h5',
          component: 'span',
          color: 'primary',
          className: `${classes.header2}`,
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
        component: 'li',
        props: {
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

  const splitStr = stack.split(',');
  const spread = [...splitStr];
  const stackArr = Array.from(spread);

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
          <div className={classes.stackImgContainer}>
            {stackArr.length
              ? stackArr.map((el, i) => (
                  <img
                    key={i}
                    alt={el.toLowerCase().replace('.', '_')}
                    title={el}
                    src={`/stack_images/${el
                      .toLowerCase()
                      .replace('.', '_')}.png`}
                    className={classes.stackImg}
                  />
                ))
              : ''}
          </div>
        </div>
        <ReactMarkdown id="documentation" options={options} children={html} />
        <div className={classes.buttonContainer} style={{ margin: '2rem 0' }}>
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
