import React from 'react';
import { Link } from 'gatsby';

import Layout from '../parts/layout';

const AboutPage = () => (
  <Layout>
    <h1>About me</h1>
    <p>This is my personal website</p>
    <Link to="/">&larr; back to home page</Link>
  </Layout>
);

export default AboutPage;
