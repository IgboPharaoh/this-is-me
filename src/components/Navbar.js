import React from "react";
import styled from "styled-components";
import companylogo from "../assets/thisisme.png";

const Navbar = () => {
  return (
    <StyledNav>
      <img src={companylogo} alt="company-logo" className="navbar__logo" />
      <ul className="navbar__links-container">
        <li>
          <a href="/" className="home">
            Home
          </a>
        </li>
        <li>
          <a href="/">This is Me</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  margin: 0 auto;
  align-items: center;
  width: 100%;

  .navbar {
    &__links-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      li a {
        text-decoration: none;
        padding-left: 2.4rem;
        font-size: 1.6rem;
        color: var(--clr-navBlue);
      }
      li a: hover {
        /* text-decoration: underline; */
        color: var(--clr-indigoNav);
        transition: all 0.5s;
      }
    }
    &__logo {
        height: 7.2rem ;
    }
  }
  ul li .home {
    color: var(--clr-indigoNav);
  }

  @media(max-width:767px){
    .navbar__links-container {
        display: none;
        
    }
}
`;
