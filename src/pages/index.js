import { graphql } from 'gatsby';
import React from 'react';
import Layout from './../components/Layout';
import Introduction from '../components/Introduction';
import ProjectCard from '../components/ProjectCard';
import { Box } from '@material-ui/core';

export default function Home({ data }) {
  const projects = data.projects.nodes;

  return (
    <Layout>
      <Introduction />
      <Box component="section">
        {projects.map(project => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </Box>
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          stack
          slug
          date(locale: "nl-NL")
          live
          github
          description
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
  }
`;
