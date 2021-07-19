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
    fontSize: '2rem',
    marginBottom: '1em',
  },
  thumbnail: {
    boxShadow: '0.5rem 1rem 1.5rem rgba(0,0,0, 0.1)',
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
            <Typography
              variant="body1"
              paragraph
              className={classes.description}
            >
              {description}
            </Typography>
          </Container>
        </Link>
      </div>
    </Container>
  );
}

export default ProjectCard;
