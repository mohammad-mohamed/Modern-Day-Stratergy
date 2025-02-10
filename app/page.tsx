"use client"
import { Navigation } from '../components/navbar';
import styled from 'styled-components';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <Navigation />
      <MainContainer>
        <ContentWrapper>
          {/* Left Side Text */}
          <StyledText>
            <span>HIGH</span>
            <span>
              <BickhamD>D</BickhamD>IGITAL
            </span>
          </StyledText>

          {/* Centered Image */}
          <ImageContainer>
            <StyledImage
              alt="Person working on a laptop"
              src="https://storage.googleapis.com/a1aa/image/QlF_IvUCVK9P9smVe08BR29_Vm1R6g6Ol9P8aRCIz1Y.jpg"
              width={400}
              height={500}
              priority
            />
          </ImageContainer>

          {/* Right Side Text */}
          <StyledText>
            <span>QUALITY</span>
            <span>SERVICES</span>
          </StyledText>
        </ContentWrapper>

        {/* Sentence Below Everything */}
        <Description>
        Proudly a 5-star rated digital consultancy. With offices <br />
          in South Africa and the Netherlands, we service <br />
          clients globally.
        </Description>
      </MainContainer>

      {/* New Section with White Background */}
      <ServicesContainer>
        <Title>
          <Highlight>TECHNOLOGY IS</Highlight>
          <Highlight>ACCESSIBLE TO</Highlight>
          <Highlight>VIRTUALLY ANYONE.</Highlight>
          <p>BUT, <ItalicHighlight>GOOD SERVICE</ItalicHighlight></p>
          <Highlight>IS HARD TO FIND.</Highlight>
        </Title>
        <Paragraph>
          <ParagraphText>We use a platform-agnostic approach to <br />service every campaign. This allows us to <br />customize every project based on brand <br />goals and needs.</ParagraphText>
        </Paragraph>
        <ServicesSection>
          <ServicesTitle>OUR SERVICES</ServicesTitle>
          <ServicesGrid>
            <ServiceCard>
              <ServiceTitle>Website Design & Development</ServiceTitle>
              <ServiceDescription>Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.</ServiceDescription>
              <ServiceLink href="#">Find out more</ServiceLink>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Web App Development</ServiceTitle>
              <ServiceDescription>Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.</ServiceDescription>
              <ServiceLink href="#">Find out more</ServiceLink>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Mobile App Development</ServiceTitle>
              <ServiceDescription>Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.</ServiceDescription>
              <ServiceLink href="#">Find out more</ServiceLink>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Custom Software Development</ServiceTitle>
              <ServiceDescription>Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.</ServiceDescription>
              <ServiceLink href="#">Find out more</ServiceLink>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>UI/UX Design</ServiceTitle>
              <ServiceDescription>Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.</ServiceDescription>
              <ServiceLink href="#">Find out more</ServiceLink>
            </ServiceCard>
            <ServiceCard>
              <ServiceTitle>Digital Marketing</ServiceTitle>
              <ServiceDescription>Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.</ServiceDescription>
              <ServiceLink href="#">Find out more</ServiceLink>
            </ServiceCard>
          </ServicesGrid>
        </ServicesSection>
      </ServicesContainer>
    </>
  );
}

// Styled Components
const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 1rem;
  background-color: black;
  font-family: 'Aeonik', sans-serif;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledText = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Aeonik', sans-serif;
`;

const BickhamD = styled.span`
  font-family: 'Bickham Script', cursive;
  font-size: 90px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled(Image)`
  width: 300px;
  height: auto;

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.25rem;
  max-width: 800px;
  color: white;
  font-family: 'Aeonik', sans-serif;
  text-align: center;
`;

// New Styled Components for the Service Section
const ServicesContainer = styled.div`
  background-color: white;
  padding: 4rem 2rem;
  color: black;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
`;

const Highlight = styled.p`
  text-decoration: underline;
  text-decoration-color: #00f;
`;

const ItalicHighlight = styled.span`
  font-style: italic;
  text-decoration: underline;
  text-decoration-color: #00f;
`;

const Paragraph = styled.div`
  margin-top: 2rem;
  font-size: 1.125rem;
  display: flex;
  justify-content: flex-end;
`;

const ParagraphText = styled.p`
  width: 20%;
`;

const ServicesSection = styled.div`
  margin-top: 4rem;
`;

const ServicesTitle = styled.h2`
  font-size: 0.875rem;
  font-weight: bold;
  color: #6b7280;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled.div``;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
`;

const ServiceDescription = styled.p`
  margin-top: 0.5rem;
  color: #4b5563;
`;

const ServiceLink = styled.a`
  margin-top: 0.5rem;
  display: inline-block;
  color: #3b82f6;
`;
