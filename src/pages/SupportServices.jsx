import React from "react";
import styled from "styled-components";
import bgImage from "../assets/supportImg.png";
import serviceImg from "../assets/supportImg2.png";
import accountImg from "../assets/supportImg3.png";
import supportBg from "../assets/bgimg.png";
import blueBg from "../assets/supportbluebg.png";

/* === Styled Components === */
const PageContainer = styled.div`
  margin-top: 90px;
  font-family: "Montserrat", sans-serif;
`;

const HeroSection = styled.section`
  background: url(${bgImage}) no-repeat center center/cover;
  position: relative;
  width: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
  color: #fff;
  padding: 3.75rem;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(29, 44, 99, 0.6);
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;
  font-style:"montserrat", sans-serif;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  font-style:"montserrat", sans-serif;
  text-align: justify;

  .highlight {
    color: #ff4d6d;
    font-weight: 600;
  }
`;

/* === Services Section === */
const Section = styled.section`
  background: url(${supportBg}) no-repeat center center/cover;
  padding: 8.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
  align-items: center;
`;

const Card = styled.div`
  background: url(${blueBg}) no-repeat center center/cover;
  background-size: 100% 100%; 
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3rem;
  width: 100%;
  max-width: 1200px;
  border-radius: 1rem;
  height:700px;
`;

const TextTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  align-items: flex-start;

  h2 {
    font-size: 3.5rem;
    font-weight: 800;
    flex: 0.4;
    text-align: center;
    margin-top: 4rem;
  }

  .right {
    flex: 1;
    
    p {
      max-width: 32ch;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    }

    ul {
      padding-left: 1.25rem;

      li {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }
`;

const TextBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  align-items: flex-start;
  flex-wrap: wrap;

  .left {
    flex: 1;
    min-width: 280px;
    margin-left: 3rem;

    h3 {
      font-size: 2rem;
      margin-bottom: 0.75rem;
      font-weight: 800;
    }

    ul {
      list-style: disc;
      max-width: 45ch;
      padding-left: 1.25rem;

      li {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
      }
    }
  }

  .right {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
      width: 100%;
      max-width: 400px;
      height: 305px; 
      border-radius: 0.75rem;
      border: 3px solid white;
      object-fit: cover; 
      
    }
  }
`;

/* === Component === */
const SupportServices = () => {
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Content>
          <Title>
            SUPPORT <br /> SERVICES
          </Title>
          <Paragraph>
            At Mansys, we specialize in Service Desk and Account Management,
            ensuring seamless IT support and efficient account handling for
            businesses. Our expert team delivers swift issue resolution,
            proactive account management, and personalized assistance to enhance
            operational efficiency and customer satisfaction.
          </Paragraph>
        </Content>
      </HeroSection>

      {/* Services Section */}
      <Section>
        {/* Service Desk */}
        <Card>
          <TextTop>
            <h2>Service Desk</h2>
            <div className="right">
              <p>
                The team at Mansys handles your incidents, service requests, and
                general IT inquiries, ensuring that technical issues are resolved
                efficiently:
              </p>
              <ul>
                <li>Incident Management</li>
                <li>Service Request Fulfillment</li>
                <li>Problem Management</li>
                <li>Change Management</li>
                <li>Knowledge Management</li>
              </ul>
            </div>
          </TextTop>

          <TextBottom>
            <div className="left">
              <h3>Our Practices</h3>
              <ul>
                <li>
                  Frontline technical support team assisting customers with
                  questions, troubleshooting, and configuration changes.
                </li>
                <li>
                  Provide top-notch, “white glove”, concierge-level service.
                </li>
                <li>Respond quickly to tickets.</li>
                <li>Offer 24/7, 365-day support to our customers.</li>
              </ul>
            </div>
            <div className="right">
              <img src={serviceImg} alt="Mansys Service Desk Team" />
            </div>
          </TextBottom>
        </Card>

        {/* Account Management */}
        <Card>
          <TextTop>
            <h2>Account Management</h2>
            <div className="right">
              <p>
                Our team handles account management tasks including creation,
                modification, and deactivation of user accounts to ensure
                security and accessibility.
              </p>
              <ul>
                <li>User Account Provisioning & Deprovisioning</li>
                <li>Role-Based Access Control (RBAC)</li>
                <li>Multi-Factor Authentication (MFA)</li>
                <li>Periodic Account Audits</li>
                <li>Password Management and Reset Policies</li>
              </ul>
            </div>
            
          </TextTop>

          <TextBottom>
            <div className="left">
              <h3>Our Practices</h3>
              <ul>
                <li>
                  Follow the principle of least privilege (PoLP) to minimize
                  security risks.
                </li>
                <li>
                  Automate user account provisioning and deactivation processes.
                </li>
                <li>
                  Enforce strong password policies and regular password updates.
                </li>
                
                <li>
                  Implement Single Sign-On (SSO) and MFA for enhanced security.
                </li>
              </ul>
            </div>
            <div className="right">
              <img src={accountImg} alt="Mansys Account Management Team" />
            </div>
          </TextBottom>
        </Card>
      </Section>
    </PageContainer>
  );
};

export default SupportServices;
