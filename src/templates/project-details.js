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
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme => ({
  intro: {
    margin: '4rem 0',
    [theme.breakpoints.down('xs')]: {
      margin: '1.5rem 0 2rem',
    },
  },
  buttonContainer: {
    margin: '1rem 0 4rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 0 2rem',
    },
  },
  title: {
    fontSize: '1.5rem',
    margin: '1em 0 .5em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
      maxWidth: '70%',
    },
  },
  header: {
    display: 'block',
    margin: '2.5em 0 1em',
    fontSize: '1.5rem',
    transition: 'all 0.2s ease',
    '&:hover': {
      textDecoration: 'none',
      color: [theme.palette.primary.light],
      transition: 'all 0.2s ease',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.8rem',
    },
  },
  header2: {
    display: 'block',
    margin: '1.5em 0',
    fontSize: '1rem',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
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
  list: {
    fontSize: '1rem',
  },
  listItem: {
    lineHeight: 2,
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  code: {
    fontSize: '1rem',
    textTransform: 'none',
    backgroundColor: 'rgba(0,0,0, 0.05)',
    padding: '.3em .5em',
    fontWeight: 400,
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
    [theme.breakpoints.up('md')]: {
      maxHeight: '2.5rem',
    },
    '&:hover': {
      transition: 'all 0.2s ease-in',
      transform: 'scale(1.2)',
      opacity: '1',
    },
  },
  fabContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    position: 'sticky',
    bottom: '20px',
  },
  toTopBtn: {
    display: 'none',
    opacity: '.6',
    marginRight: '20px',
    '&:hover': {
      opacity: 1,
    },
  },
  paragraph: {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
}));

export default function ProjectDetails({ data }) {
  const classes = useStyles();

  // desctructure markdown
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
          variant: 'h6',
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
          className: `${classes.paragraph}`,
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

  // generate stack array for logos
  const splitStr = stack.split(',');
  const spread = [...splitStr];
  const stackArr = Array.from(spread);

  return (
    <Layout>
      <Container>
        <div className={classes.intro}>
          <Typography variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <div className={classes.buttonContainer}>
            <Link
              to={`${live}`}
              target="__blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                startIcon={<LanguageIcon />}
                color="primary"
                variant="text"
                size="large"
                style={{ marginRight: '.5rem' }}
              >
                live server
              </Button>
            </Link>

            <Link
              to={`${github}`}
              target="__blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                startIcon={<CodeIcon />}
                color="primary"
                variant="text"
                size="large"
              >
                code
              </Button>
            </Link>
          </div>
          <GatsbyImage
            image={getImage(image)}
            alt={`${title} thumbnail`}
            style={{ maxWidth: '60rem' }}
          />
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
          <Link
            to={`${live}`}
            target="__blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              startIcon={<LanguageIcon />}
              color="primary"
              variant="text"
              size="large"
              style={{ marginRight: '.5rem' }}
            >
              live server
            </Button>
          </Link>
          <Link
            to={`${github}`}
            target="__blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              startIcon={<CodeIcon />}
              color="primary"
              variant="text"
              size="large"
            >
              code
            </Button>
          </Link>
        </div>
      </Container>
      <div className={classes.fabContainer}>
        <Fab
          color="primary"
          aria-label="up"
          className={classes.toTopBtn}
          id="scroll-btn"
          title="Scroll to top"
        >
          <ArrowUpwardIcon />
        </Fab>
      </div>
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
