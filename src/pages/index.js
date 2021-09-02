import React from 'react';

import Layout from '../parts/layout';
import PostPreview from '../parts/post-preview';

import usePosts from '../hooks/use-posts';

const IndexPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <h1>Read my blog</h1>
      <h2>
        {posts.map((_post) => (
          <PostPreview key={_post.slug} post={_post} />
        ))}
      </h2>
    </Layout>
  );
};

export default IndexPage;
