import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const useSiteMetadata = () => {
  const data = useStaticQuery(query);

  return data.site.siteMetadata;
};

export default useSiteMetadata;
