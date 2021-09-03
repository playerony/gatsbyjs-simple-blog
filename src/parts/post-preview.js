import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const StyledArticle = styled.article`
  display: flex;
  align-items: center;
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

const StyledContentWrapper = styled.div`
  margin-top: 0;
  margin-left: 1rem;
`;

const StyledReadLink = styled(Link)`
  font-size: 0.8em;
  display: inline-block;
`;

const PostPreview = ({ post }) => (
  <StyledArticle>
    <Link to={post.slug}>
      <GatsbyImage alt={post.title} image={getImage(post.image.childrenImageSharp[0])} />
    </Link>
    <StyledContentWrapper>
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <StyledReadLink to={post.slug}>read this post</StyledReadLink>
    </StyledContentWrapper>
  </StyledArticle>
);

export default PostPreview;
