/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Define styles for the navigation bar
const navBarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f8f0e3; /* Soft beige background */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  flex-wrap: wrap;
  /* Ensure padding for mobile responsiveness */
  @media (max-width: 768px) {
    padding: 15px 20px; /* Adjust padding if necessary for mobile */
  }
`;

// Define styles for the logo
const logoStyle = css`
  font-family: 'Dancing Script', cursive;
  font-size: 24px;
  color: #a85c49; /* Rich brownish color */
  margin-right: auto; /* Aligns logo to the left */
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px; /* Adds space below the logo on mobile */
  }
`;

// Define styles for the navigation links
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

// Define styles for each navigation link item
const NavLinkItem = styled.li`
  position: relative;
  
  & a {
    text-decoration: none;
    color: #5e4433; /* Darker brownish color */
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

// Define styles for the dropdown menu
const DropdownMenu = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #f8f0e3;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 999;
  
  & li a {
    color: #5e4433;
    padding: 5px 10px;
    display: block;
    white-space: nowrap;
    
    &:hover {
      color: #a85c49;
      background-color: #fff;
    }
  }
`;

const NavBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav css={navBarStyle}>
      {/* todo: style the logo not have the link line underneath */}
      <a href='/' css={logoStyle}>Nathan & Megan's Wedding</a> 
      <NavLinks>
        <NavLinkItem
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <a href="/">Guest Information</a>
          <DropdownMenu show={dropdownVisible}>
            <li><a href="/accommodation">Accommodation</a></li>
            <li><a href="/parking">Parking</a></li>
            <li><a href="/findingTheVenue">Finding The Venue</a></li>
            <li><a href="/taxis">Taxis</a></li>
          </DropdownMenu>
        </NavLinkItem>
        <NavLinkItem><a href="#schedule">Schedule</a></NavLinkItem>
        <NavLinkItem><a href="/rsvp">RSVP</a></NavLinkItem>
        <NavLinkItem><a href="#gallery">Gallery</a></NavLinkItem>
        <NavLinkItem><a href="#contact">Contact</a></NavLinkItem>
      </NavLinks>
    </nav>
  );
}

export default NavBar;
