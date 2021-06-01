import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, date } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <div>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div>Image</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        date
      }
    }
  }
`;
