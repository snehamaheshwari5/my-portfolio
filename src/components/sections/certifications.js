import { StaticImage } from 'gatsby-plugin-image';
import React, { useEffect, useRef } from 'react';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import styled from 'styled-components';

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const certifications = [
  {
    year: '2025',
    title: 'Microsoft Excel: Beginner to Advanced',
    url: 'https://drive.google.com/file/d/1atBvqR7NzNOGDiZkHQc-FSERAgaXqmk_/view?usp=sharing',
    image: "../../images/AI.png",
  },
  {
    year: '2024',
    title: 'Artificial Intelligence Workshop: Techfest, IIT Bombay and GUVI-HCL.',
    url: 'https://drive.google.com/file/d/1DfFEFQ33-gaIGxzQV3k5oRXqIJUA_qkd/view?usp=sharing',
    image: "../../images/AI.png",
  },
  {
    year: '2023',
    title: 'Data Science: Academor',
    url: 'https://drive.google.com/file/d/1XNhwXv7ZiStuXmskhL0iF3P8qkYg5rOv/view?usp=sharing',
    image: "../../images/AI.png",
  },
];

const Section = styled.section`
  margin-top: 0px;
  margin-left: 250px;
  @media (max-width: 900px) {
    margin-left: 0;
  }
`;


const TileList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 32px;
`;

const Tile = styled.a`
  display: flex;
  align-items: center;
  background: rgba(23, 42, 69, 0.7);
  border-radius: 14px;
  box-shadow: 0 4px 24px 0 rgba(0,0,0,0.10);
  padding: 16px 20px;
  transition: box-shadow 0.2s, transform 0.2s;
  text-decoration: none;
  border: none;
  position: relative;
  min-width: 0;
  max-width: 550px;
  width: 100%;
  margin: 0;
  &:hover, &:focus {
    box-shadow: 0 8px 32px 0 rgba(0,255,163,0.15), 0 4px 24px 0 rgba(0,0,0,0.12);
    transform: translateY(-3px) scale(1.02);
    outline: none;
  }
  .cert-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 14px;
    min-width: 0;
    width: 100%;
    justify-content: flex-start;
  }
  .cert-year {
    color: var(--green);
    font-size: 1.05rem;
    font-weight: 600;
    opacity: 0.85;
    margin-right: 8px;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }
  .cert-divider {
    width: 1.5px;
    height: 20px;
    background: var(--lightest-navy);
    border-radius: 1px;
    margin-right: 8px;
    opacity: 0.5;
    flex-shrink: 0;
  }
  .cert-title {
    color: #CCD6F6;
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.3;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: pre-line;
    min-width: 0;
    word-break: break-word;
  }
  .cert-title-text {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .cert-external {
    font-size: 1em;
    color: var(--green);
    margin-left: 2px;
    vertical-align: middle;
    opacity: 0.8;
    text-decoration: none;
  }
`;


const Certifications = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <Section id="certifications" ref={revealContainer}>
      <h2 className="numbered-heading">Certifications</h2>
      <TileList>
        {certifications.map(cert => (
          <Tile href={cert.url} target="_blank" rel="noopener noreferrer" key={cert.title}>
            <div className="cert-info">
              <span className="cert-year">{cert.year}</span>
              <span className="cert-divider" />
              <span className="cert-title">
                <span className="cert-title-text">{cert.title}</span>
                <span className="cert-external" aria-label="external link" title="View certificate">↗</span>
              </span>
            </div>
          </Tile>
        ))}
      </TileList>
    </Section>
  );
};

export default Certifications;
