import React from "react";
import styled from "styled-components";
import bgimg from "../assets/bgimg.png";
import landingvid from "../assets/landingvid3.mp4";
import InspirePage from "./InspirePage";
import ExplorePage from "./ExplorePage";
import JourneyPage from "./JourneyPage";
import ServicePage from "./ServicePage";
import Map from "./Map";

const LandingPage = () => {
  return (
    <>
      <Container>
        <VideoBackground src={landingvid} autoPlay loop muted playsInline />
        <TextOverlay>
          SCALABLE AI <br />
          SOLUTIONS
        </TextOverlay>
      </Container>

      <BackgroundWrapper>
        <InspirePage />
        <ExplorePage />
        <JourneyPage />
        <ServicePage />
        <Map />
      </BackgroundWrapper>
    </>
  );
};

export default LandingPage;

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 80vh;
  }

  @media (max-width: 768px) {
    height: 70vh;
  }

  @media (max-width: 480px) {
    height: 60vh;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 96px;
  line-height: 100%;
  max-width: 900px;

  @media (max-width: 1440px) {
    font-size: 80px;
  }

  @media (max-width: 1024px) {
    font-size: 64px;
    bottom: 40px;
    left: 40px;
  }

  @media (max-width: 768px) {
    font-size: 48px;
    bottom: 30px;
    left: 20px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    bottom: 20px;
    left: 15px;
  }
`;

const BackgroundWrapper = styled.div`
  position: relative;
  background: url(${bgimg}) no-repeat center center;
  background-size: cover;
  width: 100%;
  padding: 50px 0;

  @media (max-width: 1024px) {
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
  }

  /* create semi-transparent overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.6); /* adjust transparency */
    backdrop-filter: blur(6px); /* frosted glass look */
    -webkit-backdrop-filter: blur(6px);
    z-index: 0;
  }

  /* ensure child content stays above overlay */
  > * {
    position: relative;
    z-index: 1;
  }
`;
