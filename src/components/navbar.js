/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

// Define styles for the navigation bar with a Greek-inspired wedding theme
const navBarStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #f4f4f2; /* Soft white background */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

// Define styles for the logo
const logoStyle = css`
  font-family: 'Dancing Script', cursive;
  font-size: 28px;
  color: #003366; /* Deep Greek blue */
  margin-right: auto;
  text-decoration: none;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

// Define styles for the navigation links
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

// Define styles for each navigation link item with wedding-like fonts
const NavLinkItem = styled.li`
  position: relative;
  
  & a {
    text-decoration: none;
    color: #006699; /* Medium Greek blue */
    font-family: 'Great Vibes', cursive; /* Wedding-like cursive font */
    font-size: 18px;
    font-weight: 500;
    padding: 8px 12px;
    transition: all 0.3s ease;
    
    &:hover {
      color: #f4f4f2;
      background-color: #003366; /* Deep Greek blue */
      border-radius: 5px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
  background-color: #f4f4f2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 999;
  
  & li a {
    color: #006699;
    font-family: 'Great Vibes', cursive;
    padding: 8px 12px;
    display: block;
    white-space: nowrap;
    
    &:hover {
      color: #f4f4f2;
      background-color: #003366;
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
