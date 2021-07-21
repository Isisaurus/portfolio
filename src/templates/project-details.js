import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'markdown-to-jsx';
import { Container, makeStyles, Typography } from '@material-ui/core';

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

  const options = {
    overrides: {
      h2: {
        component: Typography,
        props: {
          variant: 'h6',
          color: 'primary',
        },
      },
      p: {
        component: Typography,
        props: {
          variant: 'body1',
          color: 'textPrimary',
        },
      },
    },
  };

  return (
    <Layout>
      <Container>
        <div>
          <GatsbyImage image={getImage(image)} alt={`${title} thumbnail`} />
          <h2>{title}</h2>
          <h3>
            {styledDate.toLocaleDateString('nl-Nl', { dateStyle: 'medium' })}
          </h3>
        </div>
        <ReactMarkdown id="recipe" options={options} children={html} />
        {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      </Container>
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
