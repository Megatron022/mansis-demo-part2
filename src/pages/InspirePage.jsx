import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import centerImage from "../assets/inspireimg.png";
import zigzag from "../assets/inspire1.png";
import person from "../assets/inspire2.png";
import clock from "../assets/inspire3.png";
import lightbulb from "../assets/inspire4.png";

const bounceUp = keyframes`
  0%   { transform: translateX(-50%) translateY(0); }
  20%  { transform: translateX(-50%) translateY(-50px); }  
  40%  { transform: translateX(-50%) translateY(0); }
  60%  { transform: translateX(-50%) translateY(-30px); }  
  75%  { transform: translateX(-50%) translateY(0); }
  85%  { transform: translateX(-50%) translateY(-15px); }  
  100% { transform: translateX(-50%) translateY(0); }
`;

const InspirePage = () => {
  const texts = [
    "Flexibility: Choose hourly or per-task pricing to suit your budget and business needs.",
    "Talent: Connect with skilled professionals easily.",
    "Efficiency: Get tasks done quickly and reliably.",
    "Innovation: New ideas to drive your business forward.",
  ];

  const [hoverText, setHoverText] = useState("Inspire Innovate Implement");
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // true = visible, false = hidden

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out current text

      setTimeout(() => {
        const nextIndex = (index + 1) % texts.length;
        setIndex(nextIndex);
        setHoverText(texts[nextIndex]);
        setFade(true); // fade in new text
      }, 500); // 0.5s fade out before changing
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <Container>
      <CircleWrapper>
        <IconTop
          src={zigzag}
          onMouseEnter={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[0]);
              setFade(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[index]);
              setFade(true);
            }, 500);
          }}
        />
        <IconLeft
          src={person}
          onMouseEnter={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[1]);
              setFade(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[index]);
              setFade(true);
            }, 500);
          }}
        />
        <IconRight
          src={clock}
          onMouseEnter={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[2]);
              setFade(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[index]);
              setFade(true);
            }, 500);
          }}
        />
        <IconBottom
          src={lightbulb}
          onMouseEnter={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[3]);
              setFade(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setFade(false);
            setTimeout(() => {
              setHoverText(texts[index]);
              setFade(true);
            }, 500);
          }}
        />

        <CenterCircle src={centerImage} />
        <TextOverlay>
          <Title
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {hoverText.split(":")[0]}
          </Title>
          <Description
            style={{
              opacity: fade ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {hoverText.includes(":") ? hoverText.split(":")[1] : ""}
          </Description>
        </TextOverlay>
      </CircleWrapper>
    </Container>
  );
};

export default InspirePage;

// Styled Components
// Styled Components (responsive additions)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 1024px) {
    height: 90vh;
  }

  @media (max-width: 768px) {
    height: 80vh;
  }

  @media (max-width: 480px) {
    height: 70vh;
  }
`;

const CircleWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;

  @media (max-width: 1024px) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const CenterCircle = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background: blue;

`;

const IconTop = styled.img`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  background: #1d2c63;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;
  transition: transform 0.2s ease-in-out;

  &:hover {
    animation: ${bounceUp} 3.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
    top: -25px;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    top: -20px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    top: -15px;
  }
`;

const IconLeft = styled.img`
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 90px;
  height: 90px;
  background: #1d2c63;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;

  &:hover {
    animation: ${keyframes`
      0%   { transform: translateY(-50%) translateY(0); }
      20%  { transform: translateY(-50%) translateY(-40px); }
      40%  { transform: translateY(-50%) translateY(0); }
      60%  { transform: translateY(-50%) translateY(-20px); }
      75%  { transform: translateY(-50%) translateY(0); }
      85%  { transform: translateY(-50%) translateY(-15px); }
      100% { transform: translateY(-50%) translateY(0); }
    `} 3.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
    left: -25px;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    left: -20px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    left: -15px;
  }
`;

const IconRight = styled.img`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  width: 90px;
  height: 90px;
  background: #1d2c63;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;

  &:hover {
    animation: ${keyframes`
      0%   { transform: translateY(-50%) translateY(0); }
      20%  { transform: translateY(-50%) translateY(-40px); }
      40%  { transform: translateY(-50%) translateY(0); }
      60%  { transform: translateY(-50%) translateY(-20px); }
      75%  { transform: translateY(-50%) translateY(0); }
      85%  { transform: translateY(-50%) translateY(-15px); }
      100% { transform: translateY(-50%) translateY(0); }
    `} 3.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
    right: -25px;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    right: -20px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    right: -15px;
  }
`;

const IconBottom = styled.img`
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  background: #1d2c63;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;

  &:hover {
    animation: ${keyframes`
      0%   { transform: translateX(-50%) translateY(0); }
      20%  { transform: translateX(-50%) translateY(-40px); }
      40%  { transform: translateX(-50%) translateY(0); }
      60%  { transform: translateX(-50%) translateY(-20px); }
      75%  { transform: translateX(-50%) translateY(0); }
      85%  { transform: translateX(-50%) translateY(-15px); }
      100% { transform: translateX(-50%) translateY(0); }
    `} 3.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    width: 70px;
    height: 70px;
    bottom: -25px;
  }

  @media (max-width: 768px) {
    width: 55px;
    height: 55px;
    bottom: -20px;
  }

  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    bottom: -15px;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  width: 70%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #000;
  transition: all 0.6s ease-in-out;

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 55%;
  }
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 35px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  color: #1d2c63;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  font-family: "Montserrat", sans-serif;
  opacity: 0;
  transition: opacity 0.6s ease-in-out;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
