"use client"

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  background-color: #f7fafc;
  color: #2d3748;
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 1rem;
`;

const FooterColumn = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 16.6667%;
  }
  margin-bottom: 2rem;

  h3 {
    font-weight: bold;
    color: #4a5568;
  }

  ul {
    margin-top: 1rem;
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #2d3748;
    text-decoration: none;
    transition: color 300ms ease;

    &:hover {
      color: #4a5568;
    }
  }
`;

const FooterText = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
`;

const FooterButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 1px solid #fff;
  padding: 0.75rem 1.5rem;
  margin-top: 1.5rem;
  transition: all 300ms ease-in-out;

  &:hover {
    background-color: #fff;
    color: #1a202c;
  }
`;

const FooterBottom = styled.div`
  background-color: #f7fafc;
  color: #2d3748;
  padding: 1rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-5xl font-bold">READY TO WORK</h1>
          <h1 className="text-5xl font-bold">
            WITH <span className="italic">Mds</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <FooterButton>Get started</FooterButton>
        </div>
      </div>

      <FooterContainer>
        <FooterContent>
          <FooterColumn>
            <FooterText>Mds</FooterText>
            <p>
              We&lsquo;re proudly a 5-star rated digital consultancy. With offices in
              South Africa and the Netherlands, we service clients globally.
            </p>
          </FooterColumn>
          <FooterColumn>
            <h3>Services</h3>
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
              <li>Digital Marketing</li>
              <li>UI/UX Design</li>
              <li>Custom Software</li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Offices</h3>
            <ul>
              <li>South Africa</li>
              <li>De Oude Schuur, 120 Bree Street, Cape Town</li>
              <li>+27 (0) 76 299 4102</li>
              <li>Netherlands</li>
              <li>Stichts End 36, Ankeveen</li>
              <li>+31 (0) 64 918 7745</li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <a href="mailto:contact@mds.com">Contact us</a>
              </li>
            </ul>
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
        </FooterContent>
      </FooterContainer>

      <FooterBottom>
        <div className="container mx-auto px-4">
          <SocialLinks>
            <a href="#" className="text-gray-900">
              Clutch
            </a>
            <a href="#" className="text-gray-900">
              LinkedIn
            </a>
          </SocialLinks>
        </div>
      </FooterBottom>
    </>
  );
};
