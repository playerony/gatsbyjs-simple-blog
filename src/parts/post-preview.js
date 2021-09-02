import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledArticle = styled.article`
  margin-top: 0.75rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #dddddd;

  &:first-of-type {
    margin-top: 1rem;
  }

  &:last-of-type {
    border: none;
  }
`;

const StyledReadLink = styled(Link)`
  font-size: 0.8em;
  display: inline-block;
`;

const PostPreview = ({ post }) => (
  <StyledArticle>
    <h3>
      <Link to={post.slug}>{post.title}</Link>
    </h3>
    <p>{post.excerpt}</p>
    <StyledReadLink to={post.slug}>read this post</StyledReadLink>
  </StyledArticle>
);

export default PostPreview;
