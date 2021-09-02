import React from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

import Header from './header';

const StyledMain = styled.main`
  width: 750px;
  max-width: 80vw;
  margin: 2rem auto 4rem;
`;

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          box-sizing: border-box;
        }

        * + * {
          margin-top: 1rem;
        }

        html,
        body {
          margin: 0;
          color: #bbb5b5;
          line-height: 1.4;
          font-size: 1.3em;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
            sans-serif;
        }

        > div {
          margin-top: 0;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #2b2b2b;
          line-height: 1.1;

          + * {
            margin-top: 0.5rem;
          }
        }

        strong {
          color: #2b2b2b;
        }

        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Header />
    <StyledMain>{children}</StyledMain>
  </>
);

export default Layout;
