import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useInView } from "framer-motion";
import logo2 from "../assets/logo2.png";

const useCountUp = (end, isInView, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    setCount(0);
    const increment = Math.ceil(end / (duration / 5));

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isInView, end, duration]);

  return count;
};

const JourneyPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const clients = useCountUp(50, isInView);
  const services = useCountUp(8, isInView);
  const projects = useCountUp(150, isInView);

  return (
    <Container>
      <HeaderSection>
        <Title>Our Journey</Title>
        <Description>
          ManSys specializes in bringing artificial intelligence to life by
          delivering practical, real-world solutions. Founded in 2009, our
          mission has always been to empower customers with high-quality
          data-driven solutions that address their everyday challenges.
          Initially focused on data mining, we expanded our expertise in 2015 to
          include media and data annotation services, helping businesses unlock
          deeper insights and achieve greater efficiency.
        </Description>
      </HeaderSection>

      <StatsSection ref={ref}>
        <StatCard>
          <StatNumber>{clients}+</StatNumber>
          <StatText>Satisfied Clients</StatText>
        </StatCard>
        <Divider />
        <StatCard>
          <StatNumber>{services}+</StatNumber>
          <StatText>Services</StatText>
        </StatCard>
        <Divider />
        <StatCard>
          <StatNumber>{projects}+</StatNumber>
          <StatText>Projects Completed</StatText>
        </StatCard>
        <LogoImg src={logo2} alt="Company Logo" />
      </StatsSection>
    </Container>
  );
};

export default JourneyPage;

const Container = styled.div`
  width: 100%;
  padding: 4rem 2rem 2rem 2rem;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem 1.5rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 1rem 1rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem 0.5rem 0.5rem;
  }
`;

const HeaderSection = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.h2`
  font-size: 76px;
  font-weight: 800;
  color: #1d2c63;
  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1440px) {
    font-size: 64px;
  }

  @media (max-width: 1024px) {
    font-size: 50px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 38px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: black;
  line-height: 1.5;
  text-align: justify;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
const LogoImg = styled.img`
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 120px;
  height: auto;
`;

const StatsSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(90deg, #101b3f 0%, #2e53da 100%);
  color: #fff;
  padding: 2rem;
  border-radius: 10px;

  @media (max-width: 1024px) {
    padding: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const StatCard = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const StatText = styled.p`
  margin: 0;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 151.577%;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const StatNumber = styled.h3`
  font-family: "poppins", sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 60px;
  background: rgba(255, 255, 255, 0.5);

  @media (max-width: 1024px) {
    height: 50px;
  }

  @media (max-width: 768px) {
    width: 60%;
    height: 1px;
  }

  @media (max-width: 480px) {
    width: 70%;
    height: 1px;
  }
`;
