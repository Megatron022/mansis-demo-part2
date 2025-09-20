import React, { useState } from "react";
import styled from "styled-components";
import contactbg from "../assets/contactbg.png";
import Map from "../pages/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://mansis-api-node-cgeuf9bcg7ekgna3.canadacentral-01.azurewebsites.net/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Error connecting to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Header>
          <h1>Contact Us</h1>
        </Header>

        <Content>
          <FormSection>
            <form onSubmit={handleSubmit}>
              <Row>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Row>
              <Row>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Row>
              <Row>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Row>

              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {responseMessage && (
              <ResponseMessage success={responseMessage.includes("success")}>
                {responseMessage}
              </ResponseMessage>
            )}
          </FormSection>

          <InfoSection>
            <h2>Send Us Your Message!</h2>
            <p>
              We’d love to hear from you! Whether you have inquiries about our
              annotation services or need a custom solution for your project,
              our team is here to help. Reach out to us, and let’s collaborate
              to bring accuracy and efficiency to your AI and machine learning
              models.
            </p>
            <ContactDetails>
              <h2>Contact Details</h2>
              <p>📞 +91 (080) - 276 - 8055</p>
              <p>✉️ annotate@mansys.co.in</p>
              <p>
                📍 #333/1, 2nd Floor, V.J.Complex, Devanahalli Town, Bengaluru,
                Karnataka 562110
              </p>
            </ContactDetails>
          </InfoSection>
        </Content>
      </Container>
      <Map />
    </>
  );
};

export default Contact;

const Container = styled.div`
  width: 100%;
  margin-top: 70px;
`;

const Header = styled.div`
  position: relative;
  background: url(${contactbg}) no-repeat center/cover;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6); // overlay
    z-index: 1;
  }

  h1 {
    position: relative;
    z-index: 2;
    color: white;
    font-size: 4.25rem;
    font-weight: 800;
    font-family: "Montserrat", sans-serif;
    text-align: center;

    @media (max-width: 1024px) {
      font-size: 3rem;
    }

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      padding: 0 10px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 60px 80px;

  @media (max-width: 1024px) {
    gap: 30px;
    padding: 40px 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  background: #fff;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (max-width: 480px) {
    padding: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;

    input,
    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #ccc;
      border-radius: 6px;
      font-size: 14px;

      @media (max-width: 480px) {
        font-size: 13px;
        padding: 10px;
      }
    }

    textarea {
      height: 100px;
      resize: none;
    }

    button {
      padding: 14px;
      background: #1e2a5a;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border: none;
      border-radius: 6px;
      cursor: pointer;

      @media (max-width: 480px) {
        font-size: 14px;
        padding: 12px;
      }
    }
  }
`;

const Row = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }

  input {
    flex: 1;
  }
`;

const InfoSection = styled.div`
  flex: 1;

  h2 {
    font-size: 22px;
    margin-bottom: 15px;
    color: #1e2a5a;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    margin-bottom: 125px;
    line-height: 1.6;
    color: #000;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;

    @media (max-width: 768px) {
      margin-bottom: 60px;
    }

    @media (max-width: 480px) {
      margin-bottom: 40px;
      font-size: 14px;
    }
  }
`;

const ContactDetails = styled.div`
  margin-top: 20px;

  p {
    margin: 10px 0;
    color: #000;
    font-family: "Montserrat", sans-serif;

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

const ResponseMessage = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: ${(props) => (props.success ? "green" : "red")};
  font-size: 14px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
