import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    allMdx {
      nodes {
        excerpt
        frontmatter {
          author
          slug
          title
          image {
            childrenImageSharp {
              gatsbyImageData(width: 200, height: 200)
            }
          }
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
    image: _post.frontmatter.image,
    author: _post.frontmatter.author,
  }));
};

export default usePosts;
