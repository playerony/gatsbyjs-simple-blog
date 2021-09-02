exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((_post) => {
    actions.createPage({
      path: _post.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: _post.frontmatter.slug,
      },
    });
  });
};
