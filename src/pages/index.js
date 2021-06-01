import { graphql } from 'gatsby';
import React from 'react';
import Layout from './../components/Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
  console.log(data);
  return (
    <Layout>
      <section className="intro">
        <h1>My name is Diana Vitanyi</h1>
        <GatsbyImage image={getImage(data.file)} alt="Banner" />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`;
