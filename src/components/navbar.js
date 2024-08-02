/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const navBarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f8f0e3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const logoStyle = css`
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  color: #a85c49;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const NavLinkItem = styled.li`
  & a {
    text-decoration: none;
    color: #5e4433;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    padding: 5px 10px;
    transition: all 0.3s ease;

    &:hover {
      color: #a85c49;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

const NavBar = () => {
  return (
    <nav css={navBarStyle}>
      <div css={logoStyle}>Our Wedding</div>
      <NavLinks>
        <NavLinkItem><a href="#about">About Us</a></NavLinkItem>
        <NavLinkItem><a href="#schedule">Schedule</a></NavLinkItem>
        <NavLinkItem><a href="#rsvp">RSVP</a></NavLinkItem>
        <NavLinkItem><a href="#gallery">Gallery</a></NavLinkItem>
        <NavLinkItem><a href="#contact">Contact</a></NavLinkItem>
      </NavLinks>
    </nav>
  );
}

export default NavBar;
