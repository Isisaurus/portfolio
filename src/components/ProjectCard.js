import React from 'react';
import {
  Container,
  Typography,
  Button,
  makeStyles,
  Divider,
} from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import LanguageIcon from '@material-ui/icons/Language';
import CodeIcon from '@material-ui/icons/Code';

const useStyles = makeStyles(theme => ({
  projectLink: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    transition: 'color 0.2s ease',
    '&:hover': {
      textDecoration: 'none',
      transition: 'color 0.2s ease',
      color: theme.palette.primary.main,
    },
  },
  container: {
    marginBottom: '10vh',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '.5em',
    lineHeight: '1.5',
  },
  thumbnail: {
    boxShadow: '0.5rem .8rem 1rem rgba(0,0,0, 0.2)',
    transition: 'all 0.2s ease-out',
    opacity: '.9',
    '&:hover': {
      opacity: '1',
      boxShadow: '0.25rem 1rem 1.5rem rgba(0,0,0, 0.1)',
      transition: 'all 0.2s ease-in',
      transform: 'translateY(-3px)',
    },
  },
  buttonContainer: {
    display: 'flex',
    margin: '1rem 0',
  },
  description: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  stackImg: {
    maxHeight: '2rem',
    marginLeft: '1rem',
    transition: 'all 0.2s ease-out',
    opacity: '.8',
    '&:hover': {
      transition: 'all 0.2s ease-in',
      transform: 'scale(1.2)',
      opacity: '1',
    },
  },
}));

function ProjectCard({ project }) {
  const classes = useStyles();

  const {
    title,
    stack,
    slug,
    date,
    live,
    github,
    image,
    description,
  } = project.frontmatter;

  const splitStr = stack.split(',');
  const spread = [...splitStr];
  const stackArr = Array.from(spread);

  return (
    <Container className={classes.container}>
      <div style={{ maxWidth: '60rem' }}>
        <Link to={slug} className={classes.projectLink}>
          <Typography variant="h1" component="h3" className={classes.title}>
            {title}
          </Typography>
          <GatsbyImage
            image={getImage(image)}
            alt={`${title} thumbnail`}
            className={classes.thumbnail}
          />
        </Link>
        <Divider style={{ margin: '3rem 0 0' }} />
        <Container className={classes.buttonContainer}>
          <Button
            startIcon={<LanguageIcon />}
            color="primary"
            variant="text"
            size="large"
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
            size="large"
          >
            <Link
              to={`${github}`}
              target="__blank"
              style={{ textDecoration: 'none' }}
            >
              code
            </Link>
          </Button>
          <Button
            color="primary"
            variant="text"
            size="large"
            style={{ marginLeft: 'auto' }}
          >
            <Link to={slug} style={{ textDecoration: 'none' }}>
              read more
            </Link>
          </Button>
        </Container>
        <Container>
          <Typography variant="body1" paragraph className={classes.description}>
            {description}
          </Typography>
        </Container>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
    </Container>
  );
}

export default ProjectCard;
