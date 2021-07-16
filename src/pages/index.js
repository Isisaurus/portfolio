import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from './../components/Layout';
import { Typography } from '@material-ui/core';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Home({ data }) {
  console.log(data);

  const projects = data.projects.nodes;

  return (
    <Layout>
      <section className="intro">
        <Typography variant="h1" color="textSecondary">
          h1 textSecondary
        </Typography>
        <Typography variant="h1" color="textPrimary">
          h1 textPrimary
        </Typography>
        <Typography variant="h1" color="primary">
          h1 primary
        </Typography>
        <Typography variant="h1" color="secondary">
          h1 secondary
        </Typography>
        <Typography variant="h2">h2</Typography>
        <Typography variant="h3">h3</Typography>
        <Typography variant="h4">h4</Typography>
        <Typography variant="h5">h5</Typography>
        <Typography variant="h6">h6</Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi
          aspernatur quaerat natus! Eaque unde officia blanditiis nulla cum
          voluptas at dolorum eveniet adipisci ratione cupiditate animi
          laudantium, explicabo quae eum ipsum rerum nisi ipsam amet placeat
          possimus similique consectetur tempore? Perspiciatis nobis dolorem a
          ratione consectetur tempore porro eligendi id, natus nemo mollitia
          voluptatum necessitatibus numquam voluptate cupiditate assumenda minus
          commodi, sed nostrum! Quisquam sit enim doloribus quos assumenda. Id
          quaerat veniam nihil porro quo sed eligendi officiis rem iste possimus
          et sapiente fugiat obcaecati sequi nemo quam culpa dolore architecto,
          totam eaque numquam officia repellendus, deserunt omnis! Corporis id
          omnis dolorem. Quidem sed eius, reiciendis amet enim ipsam maxime
          libero. Esse tempora impedit ex similique non corporis assumenda
          aspernatur harum quas dolorem sed laborum optio consectetur, explicabo
          deserunt odit blanditiis possimus facere voluptatibus libero ducimus
          error? Aperiam excepturi aut incidunt cupiditate perferendis ratione,
          repudiandae tempora nesciunt obcaecati praesentium, iusto, quisquam
          nam debitis quae. Itaque quia obcaecati debitis natus et, eaque
          incidunt, asperiores, sunt repudiandae voluptas cum praesentium! Illum
          inventore eveniet, magnam ut maiores sint repellat fugit labore alias
          nam nisi, mollitia quo blanditiis quos dignissimos. Ipsum, eveniet ad,
          exercitationem est totam perspiciatis optio quod cumque vitae, rerum
          sed!
        </Typography>
        <br />
        <br />
        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">body1</Typography>
        <Typography variant="body2">body2</Typography>
        <Typography variant="overline">overline</Typography>
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
