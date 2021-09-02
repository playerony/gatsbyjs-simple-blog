import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../parts/layout';

const StyledAuthor = styled.p`
  font-size: 0.75rem;
`;

export const query = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        author
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <StyledAuthor>Posted by {post.frontmatter.author}</StyledAuthor>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
