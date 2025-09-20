// Map.jsx
import React from "react";
import styled from "styled-components";
const Map = () => {
  return (
    <MapContainer>
      <MapTitle>Connect with us</MapTitle>
      <MapIframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3883.703718988227!2d77.715482!3d13.243901!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d621205dbb3%3A0xd11567287438df05!2sMansys%20Infotech%20(I)%20Private%20Limited!5e0!3m2!1sen!2sin!4v1681286078487!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      ></MapIframe>
    </MapContainer>
  );
};

// Styled Components
const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 0px;

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 250px;
  }

  @media (max-width: 360px) {
    height: 220px;
  }
`;

const MapTitle = styled.h1`
  position: absolute;
  bottom: 10px;
  left: 100px;
  font-size: 66px;
  font-style: normal;
  color: #1d2d63;
  z-index: 3;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    font-size: 50px;
    left: 60px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
    left: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    left: 20px;
  }

  @media (max-width: 360px) {
    font-size: 22px;
    left: 15px;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 4px;
  filter: brightness(1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;
export default Map;