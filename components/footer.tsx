"use client"

import React from 'react';
import styled from 'styled-components';
import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper';
import localfont from "next/font/local"

const bickhamFont = localfont({
  src: "../public/fonts/Bickham-regular.ttf"
})

const aeonikFont = localfont({
  src: "../public/fonts/Aeonik-regular.ttf"
})



const FooterContainer = styled.footer`
  width: 100%;
`;

const ReadyToWorkSection = styled.div`
  background-color:rgb(0, 0, 0);
  color: #FFFCFF;
  padding: 8rem 0;
  text-align: center;
`;

const FooterButton = styled.button`
  background-color: transparent;
  color: #FFFCFF;
  border: 1px solid #FFFCFF;
  border-radius: 10px;
  padding: 0.75rem 2rem;
  margin-top: 2rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #FFFCFF;
    color: #111827;
  }
`;

const FooterContent = styled.div`
  background-color: #FFFCFF;
  padding: 6rem 0;
`;

const StyledMaxWidthWrapper = styled(MaxWidthWrapper)`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 4.5fr 1.2fr 1.3fr 1fr 1fr;
  gap: 6rem;

  @media (max-width: 1024px) {
    gap: 4rem;
  }
`;

const FooterColumn = styled.div`
  &:not(:first-child) h3 {
    font-size: 0.875rem;
    font-weight: 500;
    color: #6B7280;
    margin-bottom: 1.25rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 0.5rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: #4b5563;
    line-height: 1.5;

    &.service-item {
      color: #000;
      font-weight: 600;
    }

    &.address-item {
      color: #000;
    }

    &.location-header {
      color: #000;
      font-weight: 600;
    }

    a {
      color: #000;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const FooterLogo = styled.div`
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  font-style: italic;
  text-align: left;
`;

const FooterDescription = styled.p`
  color:rgb(0, 0, 0);
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  white-space: pre-line;
`;

const FooterBottom = styled.div`
  grid-column: 1 / -1;
  margin-top: 2rem;
`;


const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  width: 100%;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    display: block;
    max-width: 100px;
    height: auto;
  }
`;


const BickhamMm = styled.span`
  font-size: 50px;
`;

const BickhamM = styled.span`
  font-size: 120px;
  font-weight: 100;
`;


export const Footer = () => {
  return (
    <FooterContainer className = {`${aeonikFont.className}`}>
      <ReadyToWorkSection>
        <MaxWidthWrapper>
          <h1 className="text-7xl font-bold">READY TO WORK</h1>
          <h1 className="text-7xl font-bold">
            WITH <span><BickhamM className = {`${bickhamFont.className}`}>M</BickhamM>ds</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <FooterButton>Get started</FooterButton>
        </MaxWidthWrapper>
      </ReadyToWorkSection>

      <FooterContent>
        <StyledMaxWidthWrapper>
          <FooterColumn>
            <FooterLogo><BickhamMm className = {`${bickhamFont.className}`}>M</BickhamMm>ds</FooterLogo>
            <FooterDescription>{`We're proudly a 5-star rated digital
consultancy. With offices in South Africa and
the Netherlands, we service clients globally.`}</FooterDescription>
          </FooterColumn>

          <FooterColumn>
            <h3>Services</h3>
            <ul>
              <li className="service-item">Web Development</li>
              <li className="service-item">App Development</li>
              <li className="service-item">Digital Marketing</li>
              <li className="service-item">UI/UX Design</li>
              <li className="service-item">Custom Software</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Offices</h3>
            <ul>
              <li className="location-header">South Africa</li>
              <li className="address-item">De Oude Schuur,</li>
              <li className="address-item">120 Bree Street,</li>
              <li className="address-item">Cape Town</li>
              <li className="address-item">+27 (0) 76 299 4102</li>
              <li className="location-header" style={{ marginTop: '1rem' }}>Netherlands</li>
              <li className="address-item">Stichts End 36,</li>
              <li className="address-item">Ankeveen</li>
              <li className="address-item">+31 (0) 64 918 7745</li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <a href="mailto:contact@mds.com">Contact us</a>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn>
            <h3>Social Media</h3>
            <ul>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.clutch.co" target="_blank" rel="noopener noreferrer">
                  Clutch
                </a>
              </li>
            </ul>
          </FooterColumn>

          <FooterBottom>
            <SocialLinks>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://vectorlogoseek.com/wp-content/uploads/2019/10/clutch-co-vector-logo.png" width={70} rel="noopener noreferrer" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src="https://mohammad-mohamed.github.io/hostedImages/images/linkedin.png" width={100} style={{ filter: "grayscale(100%) brightness(50%)" }}  rel="noopener noreferrer"/></a>
            </SocialLinks>
          </FooterBottom>
        </StyledMaxWidthWrapper>
      </FooterContent>
    </FooterContainer>
  );
};
