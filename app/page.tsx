"use client"
import { Navigation } from '../components/navbar';
import { Footer } from '../components/footer';

import styled from 'styled-components';
// import Image from 'next/image';
import { useState } from 'react';

import localfont from "next/font/local"

const bickhamFont = localfont({
  src: "../public/fonts/Bickham-regular.ttf"
})

const ImageStack = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;

const StyledImageWrapper = styled.div<{ 
  rotation: string; 
  zIndex: number; 
  translateX: string; 
  translateY: string;
  position: number;
}>`
  position: absolute;
  width: 300px;
  height: 400px;
  transform: ${props => `rotate(${props.rotation}) translate(${props.translateX}, ${props.translateY})`};
  z-index: ${props => props.zIndex};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.position === 1 ? 1 : props.position === 2 ? 0.9 : 0.8};
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
`;

const UXLabel = styled.span`
  position: absolute;
  top: 16px;
  left: 16px;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  z-index: 10;
`;

const StyledImages = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const LeftText = styled.h1`
  position: absolute;
  left: 3%;
  top: 55%;
  transform: translateY(-50%);
  font-size: 120px;
  line-height: 0.8;
  text-align: right;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Aeonik', sans-serif;
  z-index: 4;
`;

const RightText = styled.h1`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translateY(-50%);
  font-size: 120px;
  line-height: 1.1;
  text-align: left;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Aeonik', sans-serif;
  z-index: 4;
`;

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

  const [images, setImages] = useState([
    { id: 1, src: "https://storage.googleapis.com/a1aa/image/QlF_IvUCVK9P9smVe08BR29_Vm1R6g6Ol9P8aRCIz1Y.jpg", alt: "Digital service 1" },
    { id: 2, src: "https://storage.googleapis.com/a1aa/image/QlF_IvUCVK9P9smVe08BR29_Vm1R6g6Ol9P8aRCIz1Y.jpg", alt: "Digital service 2" },
    { id: 3, src: "https://storage.googleapis.com/a1aa/image/QlF_IvUCVK9P9smVe08BR29_Vm1R6g6Ol9P8aRCIz1Y.jpg", alt: "Digital service 3" }
  ]);

  const rotateImages = () => {
    setImages(prevImages => {
      const newImages = [...prevImages];
      const firstImage = newImages.shift();
      if (firstImage) newImages.push(firstImage);
      return newImages;
    });
  };

  const getImageStyles = (index: number) => {
    const styles = [
      { rotation: "-8deg", zIndex: 3, translateX: "0px", translateY: "0px" },
      { rotation: "0deg", zIndex: 2, translateX: "0px", translateY: "0px" },
      { rotation: "8deg", zIndex: 1, translateX: "0px", translateY: "0px" }
    ];
    return styles[index];
  };

  return (
    <>
      <Navigation />
      <MainContainer>
        <ContentWrapper>
          {/* Left Side Text */}
          <LeftText>
            <span>HIGH</span>
            <span>
              <BickhamD className = {`${bickhamFont.className}`}>D</BickhamD>IGITAL
            </span>
          </LeftText>

          {/* Centered Image Stack */}
          <ImageStack onClick={rotateImages}>
            {images.map((image, index) => {
              const styles = getImageStyles(index);
              return (
                <StyledImageWrapper
                  key={image.id}
                  rotation={styles.rotation}
                  zIndex={styles.zIndex}
                  translateX={styles.translateX}
                  translateY={styles.translateY}
                  position={index + 1}
                >
                  <StyledImageContainer>
                    <UXLabel>UX DESIGN</UXLabel>
                    <StyledImages
                      src={image.src}
                      alt={image.alt}
                    />
                  </StyledImageContainer>
                </StyledImageWrapper>
              );
            })}
          </ImageStack>

          {/* Right Side Text */}
          <RightText>
            <span>QUALITY</span>
            <span>SERVICES</span>
          </RightText>
        </ContentWrapper>

        {/* Sentence Below Everything */}
        <ClientDescription>
          Proudly a 5-star rated digital consultancy. With offices <br />
          in South Africa and the Netherlands, we service <br />
          clients globally.
        </ClientDescription>
      </MainContainer>

      {/* New Section with White Background */}
      <ServicesContainer>
        <MaxWidthWrapper>
          <Title>
            <Highlight>TECHNOLOGY IS</Highlight>
            <Highlight>ACCESSIBLE TO</Highlight>
            <Highlight>VIRTUALLY ANYONE.</Highlight>
            <Highlight>BUT, <BickhamG className = {`${bickhamFont.className}`}>G</BickhamG>OOD SERVICE</Highlight>
            <Highlight>IS HARD TO FIND.</Highlight>
          </Title>
          
          <Paragraph>
            <ParagraphText>
              {`We use a platform-agnostic approach to
service every campaign. This allows us to
customize every project based on brand
goals and needs.`}
            </ParagraphText>
          </Paragraph>
          
          <ServicesSection>
            <ServicesTitle>OUR SERVICES</ServicesTitle>
            <ServicesGrid>
              <ServiceCard>
                <ServiceTitle>Website Design<br />& Development</ServiceTitle>
                <ServiceDescription>
                  Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.
                </ServiceDescription>
                <ServiceLink href="#">Find out more</ServiceLink>
              </ServiceCard>
              
              <ServiceCard>
                <ServiceTitle>Web App<br />Development</ServiceTitle>
                <ServiceDescription>
                  Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.
                </ServiceDescription>
                <ServiceLink href="#">Find out more</ServiceLink>
              </ServiceCard>
              
              <ServiceCard>
                <ServiceTitle>Mobile App<br />Development</ServiceTitle>
                <ServiceDescription>
                  Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.
                </ServiceDescription>
                <ServiceLink href="#">Find out more</ServiceLink>
              </ServiceCard>
              
              <ServiceCard>
                <ServiceTitle>Custom Software<br />Development</ServiceTitle>
                <ServiceDescription>
                  Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.
                </ServiceDescription>
                <ServiceLink href="#">Find out more</ServiceLink>
              </ServiceCard>
              
              <ServiceCard>
                <ServiceTitle>UI/UX<br />Design</ServiceTitle>
                <ServiceDescription>
                  Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.
                </ServiceDescription>
                <ServiceLink href="#">Find out more</ServiceLink>
              </ServiceCard>
              
              <ServiceCard>
                <ServiceTitle>Digital<br />Marketing</ServiceTitle>
                <ServiceDescription>
                  Worem ipsum dolor sit amet consectetur. Justo ipsum ac mattis facilisis pretium pulvinar fermentum vitae lectus. In augue adipiscing enim dui ut proin velit. Tincidunt.
                </ServiceDescription>
                <ServiceLink href="#">Find out more</ServiceLink>
              </ServiceCard>
            </ServicesGrid>
          </ServicesSection>
        </MaxWidthWrapper>
      </ServicesContainer>
       {/* Global Team Section */}
       <GlobalTeamContainer>
        <GlobalTeamContent>
          <GlobalTeamTitle>
            WE ARE A<br />
            <GlobalText><BickhamG className = {`${bickhamFont.className}`}>G</BickhamG>LOBAL</GlobalText> TEAM
          </GlobalTeamTitle>

          <LocationsGrid>
            <LocationCard>
              <img
                src="https://storage.googleapis.com/a1aa/image/xhW_u7xROzBVPeo1Fk9qzQy3GVAzuctFEQnSCAMBqlU.jpg"
                alt="Cape Town cityscape"
              />
              <h2>CAPE <BickhamLetter className = {`${bickhamFont.className}`}>T</BickhamLetter>OWN</h2>
              <p>+27 (0) 76 299 4102</p>
              <p>De Oude Schuur,<br />120 Bree Street, Cape Town,<br />South Africa</p>
            </LocationCard>

            <LocationCard>
              <img
                src="https://storage.googleapis.com/a1aa/image/XlZklN9wA8Y0ZCIN0ATIVCN5lomEObnKlfZKW1fn_sw.jpg"
                alt="Amsterdam cityscape"
              />
              <h2>NETHER<BickhamLetter className = {`${bickhamFont.className}`}>L</BickhamLetter>ANDS</h2>
              <p>+31 (0) 64 918 7745</p>
              <p>Stichts End 36, Ankeveen,<br />Netherlands</p>
            </LocationCard>
          </LocationsGrid>

          <ImpactSection>
            <ImpactTitle>IMPACT THAT LASTS</ImpactTitle>
            <StatsGrid>
              <StatItem>
                <h2>100%</h2>
                <p>{`Worem ipsum dolor sit amet
consectetur.`}</p>
                <a href="#">View Services</a>
              </StatItem>
              <StatItem>
                <h2>100%</h2>
                <p>{`Worem ipsum dolor sit amet
consectetur.`}</p>
              </StatItem>
              <StatItem>
                <h2>20+</h2>
                <p>{`Worem ipsum dolor sit amet
consectetur.`}</p>
              </StatItem>
            </StatsGrid>
          </ImpactSection>
        </GlobalTeamContent>
      </GlobalTeamContainer>

<Container>
  <Content>
    <MainTitleWrapper>
      <MainTitle>
        SERVICING CLIENTS
        <GloballyText>
          <BickhamG className = {`${bickhamFont.className}`}>G</BickhamG>LOBALLY
        </GloballyText>
      </MainTitle>
    </MainTitleWrapper>

    <ContentGrid>
      <ClientDescription>
        {`We use a platform-agnostic
approach to service every
campaign. This allows us to
customize every project based on
brand goals and needs.`}
      </ClientDescription>

      <ClientsList>
        {clients.map((client, index) => (
          <ClientItem key={index}>
            {client.name}
            <img
              src={client.imageUrl}
              alt={client.name}
              width={70}
              height={70}
            />
          </ClientItem>
        ))}
        {remainingClients > 0 && (
          <MoreClients onClick={addMoreClients}>
            +{remainingClients} More
          </MoreClients>
        )}
      </ClientsList>
    </ContentGrid>
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
  position: relative;
  width: 100%;
  max-width: 1440px;
  height: 70vh;
  margin: 0 auto;
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

const BickhamD = styled.span`
  font-size: 240px
  
`;

// const ImageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledImage = styled(Image)`
//   width: 300px;
//   height: auto;

//   @media (min-width: 768px) {
//     width: 400px;
//   }
// `;

// const Description = styled.p`
//   font-size: 1rem;
//   color: #4b5563;
//   margin-top: 2rem;
//   max-width: 80%;
// `;

// New Styled Components for the Service Section
const MaxWidthWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const ServicesContainer = styled.div`
  background-color: white;
  padding: 6rem 0;
  width: 100%;
`;

const Title = styled.div`
  font-family: 'Aeonik', sans-serif;
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
`;

const Highlight = styled.p`
  text-decoration: underline;
  text-decoration-color: #06AED5;
  text-decoration-thickness: 4px;
  text-underline-offset: 8px;
  margin: 0;
  padding: 0.5rem 0;
  font-weight: 700;
`;

const BickhamG = styled.span`
  font-size: 180px;  
  font-weight: 140;

  
`;

// const ItalicHighlight = styled.span`
//   font-family: 'Bickham Script', cursive;
//   font-size: 1.4em;
//   text-decoration: underline;
//   text-decoration-color: #00A3FF;
//   text-decoration-thickness: 4px;
//   text-underline-offset: 8px;
// `;

const Paragraph = styled.div`
  margin: 6rem 0;
  font-size: 1.125rem;
  display: flex;
  justify-content: flex-end;
`;

const ParagraphText = styled.p`
  width: 31.8%;
  font-family: 'Aeonik', sans-serif;
  line-height: 1.6;
  color: #4b5563;
  white-space: pre-line;
`;

const ServicesSection = styled.div`
  margin-top: 4rem;
`;

const ServicesTitle = styled.h2`
  font-family: 'Aeonik', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled.div`
  font-family: 'Aeonik', sans-serif;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
  line-height: 1.2;
`;

const ServiceDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ServiceLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

// New Styled Components for the Global Section
const GlobalTeamContainer = styled.div`
  background-color: #001011;
  padding: 6rem 0;
  width: 100%;
`;

const GlobalTeamContent = styled(MaxWidthWrapper)`
  color: white;
`;

const GlobalTeamTitle = styled.h1`
  font-family: 'Aeonik', sans-serif;
  font-size: clamp(3.5rem, 5vw, 4.5rem);
  font-weight: 700;
  margin-bottom: 4rem;
  line-height: 1;
`;

const GlobalText = styled.span`
  color: #06AED5;
  font-family: 'Aeonik', sans-serif;
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 6rem;
`;

const LocationCard = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 12px;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    font-family: 'Aeonik', sans-serif;
  }

  p {
    font-size: 1rem;
    color: #94A3B8;
    margin: 0.5rem 0;
  }
`;

const BickhamLetter = styled.span`

  font-size: 2.1em;
`;

const ImpactSection = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  align-items: start;
`;

const ImpactTitle = styled.h3`
  font-size: 0.875rem;
  color: #94A3B8;
  font-weight: 500;
  padding-top: 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const StatItem = styled.div`
  h2 {
    font-size: clamp(4rem, 6vw, 5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    font-family: 'Aeonik', sans-serif;
    line-height: 1;
  }

  p {
    color: #94A3B8;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
    white-space: pre-line;
  }

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Container = styled.div`
  background-color: white;
  padding: 6rem 0;
  width: 100%;
`;

const Content = styled(MaxWidthWrapper)`
  position: relative;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

const MainTitleWrapper = styled.div`
  margin-bottom: 6rem;
`;

const MainTitle = styled.h1`
  font-family: 'Aeonik', sans-serif;
  font-size: clamp(3.5rem, 5vw, 4.5rem);
  font-weight: 700;
  line-height: 1;
  display: flex;
  flex-direction: column;
`;

const GloballyText = styled.div`
  color: #06AED5;
  font-family: 'Aeonik', sans-serif;
  font-size: clamp(3.5rem, 5vw, 4.5rem);
  font-weight: 700;
  margin-top: 0.5rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 25% auto;
  gap: 4rem;
`;

const ClientDescription = styled.p`
  font-size: 1rem;
  color:rgb(255, 255, 255);
  
  line-height: 1.6;
  white-space: pre-line;
  font-weight: 500;
`;

const ClientsList = styled.div`
  border-left: 1px solid #e5e7eb;
  padding-left: 4rem;
`;

const ClientItem = styled.div`
  font-size: 4rem;
  font-weight: 550;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: 'Aeonik', sans-serif;

  &:hover {
    color: #06AED5;
  }

  img {
    display: none;
    width: 70px;
    height: 70px;
    object-fit: cover;
  }

  &:hover img {
    display: block;
  }
`;

const MoreClients = styled.div`
  font-size: 4rem;
  color: #9ca3af;
  padding: 1.5rem 0;
  cursor: pointer;
  font-family: 'Aeonik', sans-serif;
`;