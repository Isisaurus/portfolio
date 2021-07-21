import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const {
    title,
    stack,
    date,
    live,
    github,
    image,
  } = data.markdownRemark.frontmatter;
  const styledDate = new Date(date);

  return (
    <Layout>
      <div>
        <GatsbyImage image={getImage(image)} alt={`${title} thumbnail`} />
        <h2>{title}</h2>
        <h3>
          {styledDate.toLocaleDateString('nl-Nl', { dateStyle: 'medium' })}
        </h3>
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
