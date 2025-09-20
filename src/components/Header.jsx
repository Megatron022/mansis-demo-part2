import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import logoImage from "../assets/logo.png";

// Navbar Container
const NavbarContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 50px;
  z-index: 9;

  background: #ffffff;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

// Logo
const Logo = styled.img`
  height: 80px;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 65px;
  }
`;

// Desktop Menu
const Menu = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: right;
  flex-grow: 1;
  margin-left: 60px;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Desktop Menu Item
const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 21px;
  color: black;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Button
const IconButton = styled.button`
  background-color: #2ea2d7;
  color: white;
  border: solid white 1px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 21px;
  transition: background 0.3s ease;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 14px;
  }
`;

const StyledArrowUpRight = styled(ArrowUpRight)`
  stroke-width: 2;
  margin-left: 4px;
  transition: transform 0.3s ease;
  background: white;
  border-radius: 50px;
  color: black;

  ${IconButton}:hover & {
    transform: rotate(45deg);
  }
`;

// Desktop Dropdown
const DropdownWrapper = styled.div`
  position: relative;
  z-index: 999999;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  padding: 12px 0;
  display: ${({ open }) => (open ? "block" : "none")};
  min-width: 220px;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 10px 18px;
  font-size: 16px;
  color: black;
  text-decoration: none;

  &:hover {
    background: #f5f5f5;
    color: #2ea2d7;
  }
`;

// Mobile Hamburger Button
const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Mobile Dropdown Menu below navbar
const MobileDropdownMenu = styled.div`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  background: white;
  width: 100%;
  padding: 10px 0;
  position: absolute;
  top: 90px; // below navbar
  left: 0;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuItem = styled(Link)`
  padding: 12px 20px;
  font-size: 18px;
  text-decoration: none;
  color: black;

  &:hover {
    color: #2ea2d7;
    background: #f5f5f5;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false); // desktop dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <NavbarContainer>
      <Logo
        src={logoImage}
        alt="Logo"
        onClick={() => {
          if (window.location.pathname === "/") window.location.reload();
          else navigate("/");
        }}
      />

      {/* Desktop Menu */}
      <Menu>
        <DropdownWrapper ref={dropdownRef}>
          <MenuItem onClick={() => setOpenDropdown((prev) => !prev)}>
            <span>What we Serve</span>
            <ChevronDown size={16} />
          </MenuItem>
          <DropdownMenu open={openDropdown}>
            <DropdownItem
              to="/annotation-service"
              onClick={() => setOpenDropdown(false)}
            >
              Annotation Service
            </DropdownItem>
            <DropdownItem
              to="/support-service"
              onClick={() => setOpenDropdown(false)}
            >
              Support Service
            </DropdownItem>
          </DropdownMenu>
        </DropdownWrapper>

        <MenuItem>
          <Link to="/about">About</Link>
        </MenuItem>
        <IconButton onClick={() => navigate("/contact")}>
          Contact us
          <StyledArrowUpRight size={25} />
        </IconButton>
      </Menu>

      {/* Mobile Hamburger */}
      <MobileMenuButton onClick={() => setMobileMenuOpen((prev) => !prev)}>
        {mobileMenuOpen ? <X size={32} /> : <MenuIcon size={32} />}
      </MobileMenuButton>

      {/* Mobile Menu DropDown */}
      <MobileDropdownMenu open={mobileMenuOpen}>
        <MobileMenuItem
          to="/annotation-service"
          onClick={() => setMobileMenuOpen(false)}
        >
          Annotation Service
        </MobileMenuItem>
        <MobileMenuItem
          to="/support-service"
          onClick={() => setMobileMenuOpen(false)}
        >
          Support Service
        </MobileMenuItem>
        <MobileMenuItem to="/about" onClick={() => setMobileMenuOpen(false)}>
          About
        </MobileMenuItem>
        <MobileMenuItem
          to="/contact"
          onClick={() => {
            navigate("/contact");
            setMobileMenuOpen(false);
          }}
        >
          Contact Us
        </MobileMenuItem>
      </MobileDropdownMenu>
    </NavbarContainer>
  );
};

export default Header;
