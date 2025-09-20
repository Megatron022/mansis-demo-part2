import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logoImage from "../assets/logo.png";
import { FaUpwork } from "react-icons/fa6";

// Styled Components
const FooterContainer = styled.footer`
  background: #f3f6fb;
  padding: 40px 0;
  width: 100%;
`;

const Title = styled.h1`
  font-family: "Montserrat";
  font-weight: 800;
  font-size: 32px;
  text-align: center;
  color: #000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Divider = styled.hr`
  width: 90%;
  border: 1px solid #ccc;
  margin: 20px auto;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  gap: 2rem;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Column = styled.div`
  min-width: 200px;
  font-family: "Montserrat";
  color: #333;

  h4 {
    margin-bottom: 12px;
    font-weight: 600;
  }
  p {
    margin: 8px 0;
    font-size: 16px;
  }

  hr {
    width: 100%;
    border: 2px solid #000000ff;
    margin: 20px auto;
  }

  .location-text {
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    min-width: unset;
    margin-bottom: 20px;
  }
`;

const ContactItem = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;

  svg {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: flex-start;

  a {
    color: #ffffffff;
    font-size: 20px;
    transition: color 0.3s;
    background: #1d2c63;
    border-radius: 50%;
    padding: 0.5rem 0.6rem 0.4rem 0.6rem;

    &:hover {
      color: #0073b1;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const LogoFooter = styled.div`
  img {
    max-width: 200px;
    height: auto;
    object-fit: contain;
    margin-left: -20px;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 10px;
    }

    @media (max-width: 480px) {
      max-width: 150px;
    }
  }
`;

const Bottom = styled.div`
  text-align: center;
  font-size: 20px;
  color: #000000ff;
  margin-top: 10px;
  font-family: "Montserrat";

  a {
    color: #000000ff;
    &:hover {
      background: #a1c2d8ff;
    }
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

// Footer Component
const Footer = () => {
  return (
    <FooterContainer>
      <Title>INSPIRE . INNOVATE . IMPLEMENT</Title>
      <Divider />
      <FooterContent>
        <Column>
          <h4>LOCATION</h4>
          <div className="location-text">
            #333/1, 2nd Floor, V.J.
            <br />
            Complex,
            <br />
            Devanahalli Town, Bengaluru,
            <br />
            Karnataka 562110
          </div>
        </Column>

        <Column>
          <h4>COMPANY</h4>
          <p>Annotations Services</p>
          <p>Service</p>
          <p>About Us</p>
          <p>Contact</p>
        </Column>

        <Column>
          <h4>CONTACT US</h4>
          <ContactItem>
            <FaPhone /> +91 (080) - 276 - 8055
          </ContactItem>
          <ContactItem>
            <FaEnvelope /> annotate@mansys.co.in
          </ContactItem>
          <hr />
        </Column>

        <Column>
          <h4>SOCIALS</h4>
          <SocialIcons>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="https://www.upwork.com/agencies/mansysteam/">
              <FaUpwork />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </SocialIcons>
          <LogoFooter>
            <img src={logoImage} alt="Mansys Logo" />
          </LogoFooter>
        </Column>
      </FooterContent>
      <Divider />
      <Bottom>
        © Copyrights Mansys Powered by{" "}
        <a
          href="https://www.locateuss.co.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LocateUs
        </a>
      </Bottom>
    </FooterContainer>
  );
};

export default Footer;
