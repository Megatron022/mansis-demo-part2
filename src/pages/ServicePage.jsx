import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

const services = [
  { img: service1, title: "Support Services" },
  { img: service2, title: "Image Annotation" },
  { img: service3, title: "Point Cloud Annotations" },
];

const ServicePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        // if user clicked, start from clickedIndex first, then continue
        if (clickedIndex !== null) {
          const next = (clickedIndex + 1) % services.length;
          setClickedIndex(null); // reset after first move
          return next;
        }
        return (prev + 1) % services.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [clickedIndex]);

  const handleCardClick = (index) => {
    setActiveIndex(index);   // show clicked card immediately
    setClickedIndex(index);  // ensure next auto-rotation continues from here
  };

  return (
    <Container>
      <Title>SERVICES WE PROVIDE</Title>
      <CircleWrapper>
        {services.map((service, index) => {
          let position =
            (index - activeIndex + services.length) % services.length;
          return (
            <CircleCard
              key={index}
              position={position}
              total={services.length}
              onClick={() => handleCardClick(index)}
              style={{ cursor: "pointer" }}
            >
              <Image src={service.img} alt={service.title} />
              <Caption>{service.title}</Caption>
            </CircleCard>
          );
        })}
      </CircleWrapper>
    </Container>
  );
};


export default ServicePage;

// ---------- styled-components ----------
const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 3rem 0;
  text-align: center;

  @media (max-width: 1024px) {
    padding: 2.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
`;

const Title = styled.h2`
  font-size: 76px;
  font-weight: 800;
  color: #1d2c63;
  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1440px) {
    font-size: 60px;
  }

  @media (max-width: 1024px) {
    font-size: 48px;
    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  margin: auto;
  perspective: 1500px;

  @media (max-width: 1024px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 300px;
  }
`;

const CircleCard = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);

  transform: ${({ position, total }) =>
    `translate(-50%, -50%) rotateY(${
      (360 / total) * position
    }deg) translateZ(500px)`};

  transition: transform 1s ease-in-out;

  @media (max-width: 1024px) {
    width: 240px;
    height: 240px;
    transform: ${({ position, total }) =>
      `translate(-50%, -50%) rotateY(${
        (360 / total) * position
      }deg) translateZ(400px)`};
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    transform: ${({ position, total }) =>
      `translate(-50%, -50%) rotateY(${
        (360 / total) * position
      }deg) translateZ(300px)`};
  }

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;
    transform: ${({ position, total }) =>
      `translate(-50%, -50%) rotateY(${
        (360 / total) * position
      }deg) translateZ(200px)`};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 5px;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
