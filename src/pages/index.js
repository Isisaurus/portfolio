import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from './../components/Layout';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
  console.log(data);

  const projects = data.projects.nodes;

  return (
    <Layout>
      <section className="intro">
        {projects.map(project => (
          <Link to={`/${project.frontmatter.slug}`} key={project.id}>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query HomePage {
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
  }
`;
