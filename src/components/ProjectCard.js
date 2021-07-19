import React from 'react';
import { Container, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const useStyles = makeStyles(theme => ({
  projectLink: {
    textDecoration: 'none',
  },
  container: {
    marginBottom: '10vh',
  },
}));

function ProjectCard({ project, thumnail }) {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query Image {
      file(relativePath: { eq: "banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);

  console.log(data);

  return (
    <Link to={project.frontmatter.slug} className={classes.projectLink}>
      <Container className={classes.container}>
        <GatsbyImage
          image={getImage(project.frontmatter.image)}
          alt={`${project.frontmatter.title} thumbnail`}
        />
        <Typography className={classes.title}>
          {project.frontmatter.title}
        </Typography>
      </Container>
    </Link>
  );
}

export default ProjectCard;
