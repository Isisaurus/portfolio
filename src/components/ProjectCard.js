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
    // border: '1px solid red',
  },
}));

function ProjectCard({ project }) {
  const classes = useStyles();

  return (
    <Link to={project.frontmatter.slug} className={classes.projectLink}>
      <Container className={classes.container}>
        <Typography variant="h1" component="h3" className={classes.title}>
          {project.frontmatter.title}
        </Typography>
        <GatsbyImage
          image={getImage(project.frontmatter.image)}
          alt={`${project.frontmatter.title} thumbnail`}
          className={classes.thumbnail}
        />
        <Divider style={{ margin: '1rem 0' }} />
      </Container>
    </Link>
  );
}

export default ProjectCard;
