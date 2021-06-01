import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from './../../components/Layout';

const Projects = ({ data }) => {
  console.log(data);

  const projects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <h1>Projects</h1>
      <div>
        {projects.map(project => (
          <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </Link>
        ))}
      </div>
      <p>Like what you see? Email me at {contact} for a quote!</p>
    </Layout>
  );
};

export default Projects;

// export page query
export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          stack
          slug
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;
