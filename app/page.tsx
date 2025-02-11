"use client"
import { Navigation } from '../components/navbar';
import { Footer } from '../components/footer';

import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

export default function Page() {
  const clientsData = [
    { name: 'Engen', imageUrl: 'https://storage.googleapis.com/a1aa/image/XLLOX5jUcAMLvl-IAoJexuIwWyhBVHu2NyaGpHBAz_0.jpg' },
    { name: 'Bank of America', imageUrl: 'https://storage.googleapis.com/a1aa/image/X7qlEEepIqeAvrDwkxu3Tl5DQGGW52cbkYP_QStg3CQ.jpg' },
    { name: 'Phillips', imageUrl: 'https://storage.googleapis.com/a1aa/image/D9RgxBMjBp88fXjtvoZ7ISr8ITsEZJmH3tLNPa1KmoE.jpg' },
    { name: 'Taquanta', imageUrl: 'https://storage.googleapis.com/a1aa/image/75bkwIi-88hYJ71dZNd3MvhIUI-FlD-tDP7CDNUhGjk.jpg' },
    { name: 'Alexander Paul', imageUrl: 'https://storage.googleapis.com/a1aa/image/YTRGtzXtxbymOsUjoqAFwqd1JE2swaJ3dLJf17Hr4B4.jpg' },
    { name: 'G4S', imageUrl: 'https://storage.googleapis.com/a1aa/image/yiqggLHhlAJjNbmCJ7GgdlWa02hAx4Zs1pgkoeK3iIs.jpg' },
    { name: 'Cellulant', imageUrl: 'https://storage.googleapis.com/a1aa/image/CJYb6cn_wp_bkZEZ8pBMh03UfCTPBgBigM1cqLYoJxs.jpg' },
    { name: 'Credit Suisse', imageUrl: 'https://storage.googleapis.com/a1aa/image/06mz4SUfLqYVv5SPGGIz_oHFFyAzkNhPWml2qEZPnxE.jpg' }
  ];
  
  const [remainingClients, setRemainingClients] = useState(86);
  const [clients, setClients] = useState(clientsData);
  
  const addMoreClients = () => {
    const newClients = [
      'Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5',
      'Client 6', 'Client 7', 'Client 8', 'Client 9', 'Client 10'
    ];
  
    const newClientItems = newClients.map(client => ({
      name: client,
      imageUrl: 'https://storage.googleapis.com/a1aa/image/XLLOX5jUcAMLvl-IAoJexuIwWyhBVHu2NyaGpHBAz_0.jpg'
    }));
  
    setClients([...clients, ...newClientItems]);
    setRemainingClients(remainingClients - 10);
  };
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
       {/* Global Team Section */}
       <GlobalTeamContainer>
        <GlobalTeamTitle>
          WE ARE A <br /> <GlobalHighlight>GLOBAL</GlobalHighlight> TEAM
        </GlobalTeamTitle>

        <GlobalTeamSection>
          <GlobalTeamCard>
            <img
              src="https://storage.googleapis.com/a1aa/image/xhW_u7xROzBVPeo1Fk9qzQy3GVAzuctFEQnSCAMBqlU.jpg"
              alt="A view of Cape Town, South Africa"
            />
            <h2>CAPE TOWN</h2>
            <p>+27 (0) 76 299 4102</p>
            <p>De Oude Schuur,<br />120 Bree Street, Cape Town,<br />South Africa</p>
          </GlobalTeamCard>
          <GlobalTeamCard>
            <img
              src="https://storage.googleapis.com/a1aa/image/XlZklN9wA8Y0ZCIN0ATIVCN5lomEObnKlfZKW1fn_sw.jpg"
              alt="A view of Amsterdam, Netherlands"
            />
            <h2>NETHERLANDS</h2>
            <p>+31 (0) 64 918 7745</p>
            <p>Stichts End 36, Ankeveen,<br />Netherlands</p>
          </GlobalTeamCard>
        </GlobalTeamSection>

        <ImpactSection>
          <ImpactTitle>IMPACT THAT LASTS</ImpactTitle>
          <ImpactStats>
            <ImpactCard>
              <h3>100%</h3>
              <p>Worem ipsum dolor sit amet consectetur.</p>
              <a href="#">View Services</a>
            </ImpactCard>
            <ImpactCard>
              <h3>100%</h3>
              <p>Worem ipsum dolor sit amet consectetur.</p>
            </ImpactCard>
            <ImpactCard>
              <h3>20+</h3>
              <p>Worem ipsum dolor sit amet consectetur.</p>
            </ImpactCard>
          </ImpactStats>
        </ImpactSection>
      </GlobalTeamContainer>

      <Container>
  {/* Title Container - Above the columns */}
  <TitleContainer>
    <Titles>SERVICING CLIENTS</Titles>
    <Subtitle>GLOBALLY</Subtitle>
  </TitleContainer>

  <Content>
    {/* Left Column - Descriptions */}
    <LeftColumn>
      <Descriptions>
        We use a <span className="font-bold italic">platform-agnostic</span> approach to service every campaign.
        This allows us to customize every project based on brand goals and needs.
      </Descriptions>
    </LeftColumn>

    {/* Right Column - Client List */}
    <RightColumn>
      <ClientList>
        {clients.map((client, index) => (
          <ClientItem key={index}>
            {client.name}
            <img
              alt={`Placeholder image for ${client.name}`}
              className="hover-image ml-2"
              height="50"
              src={client.imageUrl}
              width="50"
            />
          </ClientItem>
        ))}
      </ClientList>
      {remainingClients > 0 && (
        <MoreText onClick={addMoreClients}>+{remainingClients} More</MoreText>
      )}
    </RightColumn>
  </Content>
</Container>



      <Footer />

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
  width: 30%;
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

// New Styled Components for the Global Section
const GlobalTeamContainer = styled.section`
  background-color: #32373B;  
  padding: 4rem 2rem;
  color: white;
`;

const GlobalTeamTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: left;
`;

const GlobalHighlight = styled.span`
  color: #3b82f6;
  font-style: italic;
`;

const GlobalTeamSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GlobalTeamCard = styled.div`
  img {
    justify-content: center;
    width: 90%;
    height: 40%;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 1rem;
    
  }

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
  }

  p {
    margin: 0.25rem 0;
  }
`;

const ImpactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImpactTitle = styled.div`
  flex: 1;
  font-size: 1.125rem;
  font-weight: 600;
`;

const ImpactStats = styled.div`
  flex: 3;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ImpactCard = styled.div`
  h3 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  p {
    margin: 0.5rem 0;
  }

  a {
    color: #3b82f6;
    text-decoration: none;
  }
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  flex-direction: column; /* Stack title and content vertically */
  position: relative;
`;

const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 2fr; /* Left column smaller, right column larger */
  gap: 2rem;
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin-left: 30rem;
  margin-bottom: 2rem; /* Space between the title and content */
`;

const Titles = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #00bcd4;
  font-style: italic;
`;

const Descriptions = styled.p`
  font-size: 1rem;
  color: #4b5563;
`;

const ClientList = styled.ul`
  list-style-type: none;
  padding: 0;
  font-size: 1.5rem;
  color: #4b5563;
`;

const ClientItem = styled.li`
  border-bottom: 1px solid #d1d5db;
  padding-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: #3b82f6;
  }

  .hover-image {
    display: none;
  }

  &:hover .hover-image {
    display: inline-block;
  }
`;

const MoreText = styled.p`
  margin-top: 1rem;
  font-size: 1.5rem;
  color: #9ca3af;
  cursor: pointer;
`;




// const StyledText = styled.h1`
//   font-size: 80px;
//   line-height: 1.1;
//   text-align: center;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   font-family: 'Aeonik', sans-serif;
// `;