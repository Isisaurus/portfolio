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
    color: theme.palette.text.primary,
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
    fontSize: '1.5rem',
    margin: '1em 0 1.5em',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2rem',
      maxWidth: '70%',
    },
  },
  thumbnail: {
    boxShadow: '0.5rem .8rem 1rem rgba(0,0,0, 0.2)',
    transition: 'all 0.2s ease-out',
    '&:hover': {
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
    fontWeight: 500,
    '&:hover': {
      color: theme.palette.text.primary,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
  stackImgContainer: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '1rem',
    '& > *': {
      marginRight: '1rem',
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
  readmoreBtn: {
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '.5rem',
    },
  },
}));

function ProjectCard({ project }) {
  const classes = useStyles();

  const {
    title,
    stack,
    slug,
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
          <Typography variant="h5" component="h3" className={classes.title}>
            {title}
          </Typography>
          <GatsbyImage
            image={getImage(image)}
            alt={`${title} thumbnail`}
            className={classes.thumbnail}
          />
        </Link>
        <Divider style={{ margin: '2rem 0 0' }} />
        <Container className={classes.buttonContainer}>
          <Link
            to={`${live}`}
            target="__blank"
            style={{ textDecoration: 'none' }}
          >
            <Button
              startIcon={<LanguageIcon />}
              color="primary"
              variant="text"
              size="small"
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
              size="small"
            >
              code
            </Button>
          </Link>
          <Link
            to={slug}
            style={{ textDecoration: 'none' }}
            className={classes.readmoreBtn}
          >
            <Button color="primary" variant="text" size="small">
              read more
            </Button>
          </Link>
        </Container>
        <Container>
          <Typography variant="body1" paragraph className={classes.description}>
            {description}
          </Typography>
        </Container>
        <Container className={classes.stackImgContainer}>
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
        </Container>
      </div>
    </Container>
  );
}

export default ProjectCard;
