import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Seo from "../../components/seo";

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }`;

  const BlogPost = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
      <p>Posted: {data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
