import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  display: flex;
  background-color: #eeeeee;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  padding: 0.7rem calc((100vw - 750px) / 2);
`;

const StyledNavLink = styled(Link)`
  color: #2b2b2b;
  font-size: 1em;
  line-height: 1;
  padding: 0.25rem;
  margin: 0 0.5rem 0 0;
  text-decoration: none;
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};

  &.current-page {
    border-bottom: 2px solid #555555;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const StyledNav = styled.nav`
  margin-top: 0;
`;

const Header = () => (
  <StyledHeader>
    <StyledNavLink to="/" fontWeight="bold">
      GatsbyJS simple blog
    </StyledNavLink>
    <StyledNav>
      <StyledNavLink activeClassName="current-page" to="/">
        Home
      </StyledNavLink>
      <StyledNavLink activeClassName="current-page" to="/about">
        About
      </StyledNavLink>
    </StyledNav>
  </StyledHeader>
);

export default Header;
