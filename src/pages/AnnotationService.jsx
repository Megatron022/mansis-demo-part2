import React, { useState, useEffect } from "react";
import styled from "styled-components";
import annotationbg from "../assets/annotationbg.png";
import annotation1 from "../assets/annotation1.png";
import annotation2 from "../assets/annotation2.png";
import annotation3 from "../assets/annotation3.png";
import annotation4 from "../assets/annotation4.png";
import annotation5 from "../assets/annotation5.png";
import annotation6 from "../assets/annotation6.png";
import annotationvid from "../assets/annotationvid.mp4";

const cards = [
  { title: "Semantic Segmentation", img: annotation1 },
  { title: "Image Annotation", img: annotation2 },
  { title: "2D Bounding Box", img: annotation3 },
  { title: "Cuboid Annotation", img: annotation4 },
  { title: "Polygon Annotation", img: annotation5 },
  { title: "Point Cloud Annotation", img: annotation6 },
];

const AnnotationService = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]); // restart interval from clicked card

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  return (
     <ResponsiveStyles>
    <Container>
      {/* Hero Section */}
      <Hero>
        <HeroContent>
          <h1>ANNOTATION SERVICES</h1>
          <p>
            At AI Solutions, we specialize in delivering high-quality data
            annotation services to power AI and ML applications. Our services
            include image annotation, video annotation, text annotation, and
            more. With expertise across industries, we provide scalable and
            customizable annotation solutions tailored to your project’s needs.
          </p>
        </HeroContent>
      </Hero>

      {/* Coverflow Carousel */}
      <CarouselWrapper>
        <NavButton onClick={handlePrev}>&lt;</NavButton>
        <CarouselInner>
          {cards.map((card, index) => {
            let offset = index - activeIndex;
            if (offset < 0) offset += cards.length;

            // positions with active card at x=0
            const positions = {
              0: { x: -470, rotate: 50, scale: 0.6, z: 1, opacity: 0.0 },
              1: { x: -390, rotate: 30, scale: 0.75, z: 2, opacity: 0.7 },
              2: { x: -210, rotate: 15, scale: 0.9, z: 3, opacity: 0.85 },
              3: { x: 0, rotate: 0, scale: 1.2, z: 4, opacity: 1 }, // center
              4: { x: 210, rotate: -15, scale: 0.9, z: 3, opacity: 0.85 },
              5: { x: 370, rotate: -30, scale: 0.75, z: 2, opacity: 0.7 },
            };

            // calculate circular offset to center clicked card
            const posIndex = offset <= 3 ? offset : offset - cards.length;
            const pos = positions[posIndex + 3] || {
              x: 420,
              rotate: -50,
              scale: 0.7,
              z: 1,
              opacity: 0,
            };

            return (
              <CarouselCard
                key={index}
                style={{
                  transform: `translateX(${pos.x}px) scale(${pos.scale}) rotateY(${pos.rotate}deg)`,
                  zIndex: pos.z,
                  opacity: pos.opacity,
                }}
                onClick={() => setActiveIndex(index)} // clicked card becomes center
              >
                <img src={card.img} alt={card.title} />
                <Caption>{card.title}</Caption>
              </CarouselCard>
            );
          })}
        </CarouselInner>
        <NavButton onClick={handleNext}>&gt;</NavButton>
      </CarouselWrapper>

      {/* Video Section */}
      <VideoSection>
        <h2>Video Annotation</h2>
        <video src={annotationvid} controls autoPlay loop muted />
      </VideoSection>
    </Container>
   </ResponsiveStyles>
  );
};

export default AnnotationService;

// ---------------- STYLES ----------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hero = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url(${annotationbg});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  color: white;
  padding: 0 50px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  > div {
    position: relative;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 700px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    font-family: "Montserrat", sans-serif;
    text-align: justify;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;
  height: 400px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1500px;
`;

const CarouselInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CarouselCard = styled.div`
  position: absolute;
  top: 10%;
  left: 39%;
  width: 250px;
  height: 380px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  transform-origin: center center;
  transform-style: preserve-3d;
  transition: transform 0.8s ease, opacity 0.8s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 220px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 200px;
  }
`;

const Caption = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 5px;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  background: rgba(0, 0, 0, 0.6);
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  font-size: 2rem;
  padding: 8px 14px;
  margin: 0 -10px;
  cursor: pointer;
  border-radius: 50%;
  transition: 0.3s;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;

const VideoSection = styled.div`
  width: 90%;
  margin: 70px auto;
  text-align: center;

  h2 {
    margin-bottom: 20px;
    font-size: 2.8rem;
    font-weight: bold;
    color: #1D2C63;
    font-family:"montserrat", sans-serif;
  }

  video {
    width: 100%;
    max-width: 800px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }
`;

// --------- EXTRA RESPONSIVE FIXES ---------
const ResponsiveStyles = styled.div`
  @media (max-width: 1024px) {
    ${Hero} {
      height: 600px;
      padding: 0 30px;

      h1 {
        font-size: 2rem;
      }
      p {
        font-size: 1rem;
      }
    }

    ${CarouselWrapper} {
      height: 320px;
      margin: 60px auto;
    }
  }

  @media (max-width: 768px) {
    ${Hero} {
      height: 350px;
      padding: 0 20px;

      h1 {
        font-size: 1.8rem;
      }
      p {
        font-size: 0.95rem;
      }
    }

    ${CarouselWrapper} {
      max-width: 100%;
      height: 260px;
    }

    ${CarouselCard} {
      left: 30%;
      width: 160px;
      height: 220px;
    }

    ${Caption} {
      font-size: 1rem;
    }

    ${VideoSection} h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    ${Hero} {
      height: 500px;
      padding: 0 15px;

      h1 {
        font-size: 1.5rem;
        text-align: center;
      }
      p {
        font-size: 0.85rem;
        text-align: center;
      }
    }

    ${CarouselWrapper} {
      height: 220px;
      margin: 40px auto;
    }

    ${CarouselCard} {
      left: 25%;
      width: 130px;
      height: 180px;
    }

    ${Caption} {
      font-size: 0.9rem;
      padding: 4px;
    }

    ${NavButton} {
      font-size: 1.5rem;
      padding: 5px 10px;
    }

    ${VideoSection} h2 {
      font-size: 1.6rem;
    }
  }
`;
