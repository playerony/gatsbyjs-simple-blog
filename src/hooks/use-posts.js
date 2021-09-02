import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allMdx {
      nodes {
        excerpt
        frontmatter {
          slug
          title
          author
        }
      }
    }
  }
`;

const usePosts = () => {
  const data = useStaticQuery(query);

  return data.allMdx.nodes.map((_post) => ({
    excerpt: _post.excerpt,
    slug: _post.frontmatter.slug,
    title: _post.frontmatter.title,
    author: _post.frontmatter.author,
  }));
};

export default usePosts;
