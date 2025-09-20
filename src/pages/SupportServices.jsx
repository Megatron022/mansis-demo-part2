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

/* === Hero Section === */
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

  @media (max-width: 1024px) {
    min-height: 70vh;
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    min-height: 60vh;
    padding: 2rem 1rem;
    text-align: center;
    justify-content: center;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3.25rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.25rem;

  @media (max-width: 1280px) {
    font-size: 2.8rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

/* === Services Section === */
const Section = styled.section`
  background: url(${supportBg}) no-repeat center center/cover;
  padding: 8rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 6rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    gap: 2rem;
  }
`;

const Card = styled.div`
  background: url(${blueBg}) no-repeat center center/cover;
  background-size: 100% 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  width: 100%;
  max-width: 1200px;
  border-radius: 1rem;

  @media (max-width: 1024px) {
    padding: 2.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    gap: 1.5rem;
  }
`;

const TextTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  align-items: flex-start;
  flex-wrap: wrap;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    flex: 0.4;
    text-align: center;
    margin-top: 2rem;

    @media (max-width: 1280px) {
      font-size: 2.5rem;
    }

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 768px) {
      font-size: 1.8rem;
      margin-top: 1rem;
      margin-right: 85px;
    }
  }

  .right {
    flex: 1;

    p {
      max-width: 40ch;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1rem;

      @media (max-width: 1024px) {
        font-size: 0.95rem;
      }

      @media (max-width: 768px) {
        font-size: 0.9rem;
        max-width: 60%;
        text-align: center;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
    max-width: 79%;
    margin-left: 22px;
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

    h3 {
      font-size: 2rem;
      margin-bottom: 0.75rem;
      font-weight: 800;

      @media (max-width: 1024px) {
        font-size: 1.6rem;
      }

      @media (max-width: 768px) {
        font-size: 1.4rem;
        text-align: center;
      }
    }

    ul {
      list-style: disc;
      max-width: 45ch;
      padding-left: 1.25rem;

      li {
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;

        @media (max-width: 1024px) {
          font-size: 0.95rem;
        }

        @media (max-width: 768px) {
          font-size: 0.9rem;
          text-align: left;
        }
      }
    }
  }

  .right {
    flex: 1;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;
      max-width: 400px;
      border-radius: 0.75rem;
      border: 3px solid white;
      object-fit: cover;

      @media (max-width: 1024px) {
        max-width: 350px;
        max-height: 230px;
      }

      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
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
                general IT inquiries, ensuring that technical issues are
                resolved efficiently:
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
