import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import dataMiningImg from "../assets/datamining.png";
import serviceDeskImg from "../assets/servicedesk.png";
import dataAnnotationImg from "../assets/dataannotation.png";

const ExplorePage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, triggerOnce: true });
  const controls = useAnimation();

  const cards = [
    {
      title: "DATA MINING",
      description:
        "ManSys offers top-notch data mining services to extract valuable insights from complex data sets.",
      image: dataMiningImg,
    },
    {
      title: "SERVICE DESK",
      description:
        "Our team provides precise and efficient data annotation services to enhance machine learning models.",
      image: serviceDeskImg,
    },
    {
      title: "DATA ANNOTATION",
      description:
        "Our 24/7 service desk & account management teams make sure your customers' issues are addressed in a timely manner.",
      image: dataAnnotationImg,
    },
  ];
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: (i) => ({
      opacity: 1,
      scale: [0.8, 1],
      transition: {
        delay: i * 0.5,
        duration: 2,
        repeatDelay: 2,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <Container ref={ref}>
      <Title>EXPLORE</Title>
      <CardWrapper>
        {cards.map((card, index) => (
          <MotionCard
            key={index}
            as={motion.div}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
          >
            <CardImage src={card.image} />
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
            <Divider />
          </MotionCard>
        ))}
      </CardWrapper>
    </Container>
  );
};

export default ExplorePage;

// Styled Components
// Styled Components (with responsiveness)
const Container = styled.div`
  padding: 70px 20px 0 20px;
  text-align: center;
  position: relative;

  @media (max-width: 1024px) {
    padding: 60px 15px 0 15px;
  }

  @media (max-width: 768px) {
    padding: 50px 10px 0 10px;
  }

  @media (max-width: 480px) {
    padding: 40px 5px 0 5px;
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

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 30px;
  }

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const MotionCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 20px;
  width: 300px;
  height: 450px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 260px;
    height: 420px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 400px;
  }

  @media (max-width: 480px) {
    width: 180px;
    height: 380px;
    padding: 15px;
  }
`;

const Divider = styled.hr`
  border: none;
  width: 100%;
  border-top: 3px solid rgba(255, 255, 255, 0.6);
  margin-top: 10px;
  margin-bottom: 40px;
  background: #948d69;

  @media (max-width: 480px) {
    margin-bottom: 25px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    height: 160px;
  }

  @media (max-width: 768px) {
    height: 140px;
  }

  @media (max-width: 480px) {
    height: 120px;
    margin-bottom: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 15px;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 12px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #555;
  line-height: 1.5;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
