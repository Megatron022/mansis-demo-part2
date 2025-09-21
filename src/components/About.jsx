import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Aboutbg from "../assets/aboutbg.png";
import Aboutimg from "../assets/aboutImg.png";
import bgImage from "../assets/bgimg.png";

//  slideshow images
import img1 from "../assets/images/1.webp";
import img2 from "../assets/images/2.webp";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/4.webp";
import img5 from "../assets/images/5.webp";
import img6 from "../assets/images/6.webp";
import img7 from "../assets/images/7.webp";
import img8 from "../assets/images/8.webp";
import img9 from "../assets/images/9.webp";
import img10 from "../assets/images/10.webp";
import img11 from "../assets/images/11.webp";
import img12 from "../assets/images/12.webp";

const PageContainer = styled.div`
  margin-top: 60px;
  font-family: "Montserrat", sans-serif;
  background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url(${bgImage}) no-repeat center center/cover;
`;

const HeroSection = styled.section`
  background: url(${Aboutbg}) no-repeat center center/cover;
  position: relative;
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
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

const Title = styled.h1`
  font-size: 4.25rem;
  z-index: 2;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
`;

const Content = styled.div`
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
   
    z-index: -1;
  }
`;

const Container = styled.div`
  margin: 5rem 5rem 5rem 5rem;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 200px;

  img {
    width: 28rem;
    height: 23rem;
    border: 5px white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  p {
    font-family: "Montserrat", sans-serif;
    text-align: justify;
    line-height: 30px;
    font-size: 18px;
    font-weight: 500;
    width: 600px;
    margin-top: 50px;
  }
`;

const ServicesSection = styled.section`
  position: relative;
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  width: 100%;
`;

const ServicesTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #142c57;
  margin-bottom: 3rem;
  text-align: left;
  font-family: "Montserrat", sans-serif;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

const ServicesList = styled.ul`
  list-style: none;
  gap: 10px;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  li {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 2rem;
    border-bottom: 1px solid #999;
    padding-bottom: 0.5rem;
    width: fit-content;
  }
`;

const Stats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  margin-bottom: 45px;

  @media (min-width: 768px) {
    text-align: left;
  }

  p:first-child {
    font-size: 2.5rem;
    font-weight: 700;
    color: #142c57;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  p:last-child {
    font-size: 1.4rem;
    font-weight: 700;
    color: #142c57;
    display: flex;
    justify-content: center;
    margin: 0;
  }
`;

// Slideshow Section
const SlideshowContainer = styled.div`
  margin: 2rem 28%;
  width: 80%;
  max-width: 700px;
  height: 400px;
  background: #ccc;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(29, 44, 99, 0.6);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 5px;
  z-index: 2;

  &:hover {
    background: rgba(29, 44, 99, 0.9);
  }

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }
`;

const VideoSection = styled.div``;

const About = () => {
  // slideshow images
  const slides = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  const [index, setIndex] = useState(0);

  // optional autoplay (change every 4s)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <ResponsiveFixes>
      <PageContainer>
        {/* Hero Section */}
        <HeroSection>
          <Title>About Us</Title>
        </HeroSection>

        {/* Main Section */}
        <Content>
          <Container>
            <img src={Aboutimg} alt="About Section" />
            <p>
              ManSys specializes in bringing artificial intelligence to life by
              delivering practical, real-world solutions. Founded in 2009, our
              mission has always been to empower customers with high-quality
              data-driven solutions that address their everyday challenges.
              Initially focused on data mining, we expanded our expertise in
              2015 to include media and data annotation services, helping
              businesses unlock deeper insights and achieve greater efficiency.
            </p>
          </Container>
        </Content>

        {/* Services */}
        <ServicesSection>
          <ServicesTitle>Our Services</ServicesTitle>
          <ServicesContainer>
            <ServicesList>
              <li>Image Annotation</li>
              <li>Point Cloud Annotation</li>
              <li>Data Mining</li>
              <li>Data Annotation</li>
              <li>Service Support</li>
            </ServicesList>

            <Stats>
              <div>
                <p>8+</p>
                <p>Services</p>
              </div>
              <div>
                <p>50+</p>
                <p>Satisfied Clients</p>
              </div>
              <div>
                <p>150+</p>
                <p>Projects Completed</p>
              </div>
            </Stats>
          </ServicesContainer>
        </ServicesSection>

        {/* Slideshow Section */}
        <SlideshowContainer>
          <SlideButton
            className="prev"
            onClick={() =>
              setIndex((index - 1 + slides.length) % slides.length)
            }
          >
            ‹
          </SlideButton>
          <img src={slides[index]} alt="Slideshow" />
          <SlideButton
            className="next"
            onClick={() => setIndex((index + 1) % slides.length)}
          >
            ›
          </SlideButton>
        </SlideshowContainer>

        <VideoSection />
      </PageContainer>
    </ResponsiveFixes>
  );
};

export default About;
// ---------------- EXTRA RESPONSIVE FIXES ----------------
const ResponsiveFixes = styled.div`
  @media (max-width: 1024px) {
    ${Title} {
      font-size: 3rem;
      text-align: center;
    }

    ${Container} {
      margin: 3rem 2rem;
      gap: 60px;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        width: 22rem;
        height: auto;
      }

      p {
        width: 100%;
        max-width: 600px;
        margin-top: 20px;
        font-size: 1rem;
      }
    }

    ${ServicesContainer} {
      flex-direction: column;
      gap: 5rem;
    }
  }

  @media (max-width: 768px) {
    ${HeroSection} {
      padding: 2rem;
      min-height: 40vh;
    }

    ${Title} {
      font-size: 2.5rem;
    }

    ${Container} {
      margin: 2rem 1.5rem;
      gap: 40px;

      img {
        width: 18rem;
        height: auto;
      }

      p {
        font-size: 0.95rem;
        line-height: 1.5rem;
      }
    }

    ${ServicesTitle} {
      font-size: 2rem;
      text-align: center;
    }

    ${Stats} p:first-child {
      font-size: 2rem;
    }
    ${Stats} p:last-child {
      font-size: 1.1rem;
    }

    ${SlideshowContainer} {
      margin: 2rem auto;
      width: 90%;
      height: 280px;
    }
  }

  @media (max-width: 480px) {
    ${HeroSection} {
      padding: 1rem;
      min-height: 30vh;
    }

    ${Title} {
      font-size: 2rem;
    }

    ${Container} {
      margin: 1.5rem 1rem;
      gap: 20px;

      img {
        width: 14rem;
        height: auto;
      }

      p {
        font-size: 0.85rem;
        line-height: 1.3rem;
        margin-top: 15px;
      }
    }

    ${ServicesTitle} {
      font-size: 1.6rem;
    }

    ${ServicesList} li {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    ${Stats} p:first-child {
      font-size: 1.5rem;
    }
    ${Stats} p:last-child {
      font-size: 1rem;
    }

    ${SlideshowContainer} {
      margin: 1.5rem auto;
      width: 95%;
      height: 200px;
    }

    ${SlideButton} {
      font-size: 1.2rem;
      padding: 0.3rem 0.6rem;
    }
  }
`;
