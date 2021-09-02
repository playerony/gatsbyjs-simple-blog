import React from 'react';
import { Link } from 'gatsby';

import Layout from '../parts/layout';

const IndexPage = () => (
  <Layout>
    <h1>Index page</h1>
    <p>Description</p>
    <Link to="/about">Learn more about me &rarr;</Link>
  </Layout>
);

export default IndexPage;
