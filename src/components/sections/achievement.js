import React, { useEffect, useRef } from 'react';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 0px;
`;

const AchievementsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const Part = styled.div`
  background: var(--navy);
  border-radius: var(--border-radius);
  padding: 28px 32px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1.5px solid var(--lightest-navy);
  min-width: 300px;
  @media (max-width: 600px) {
    padding: 20px 14px;
  }
`;

const Heading = styled.h3`
  color: var(--green);
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: var(--light-slate);
  font-size: 1.08rem;
  margin-bottom: 0;
`;


const Achievement = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <Section id="achievements" ref={revealContainer}>
      <h2 className="numbered-heading">Achievements</h2>
      <AchievementsWrapper>
        <Part>
          <Heading>🏆 Hackathon Winner (2025)</Heading>
          <Description>
            I won a hackathon organized by Johnson &amp; Johnson in collaboration with the Analytics Cell in 2025, where I was part of the team that worked on the project <b>“Predicting Diabetes Patient Readmission Within 30 Days Of Discharge”</b>. It was an intense, hands-on experience applying machine learning to real healthcare data in a competitive environment.
          </Description>
        </Part>
        <Part>
          <Heading>📄 Research Paper Presentation (2023)</Heading>
          <Description>
            One of my research papers, <b>“Detection Of Black Holes Using A Logistic Regression Model And SVC Algorithm”</b>, was selected for oral presentation at the Indian Science Congress in 2023. This validation deepened my passion for combining astrophysics with data science.
          </Description>
        </Part>
      </AchievementsWrapper>
    </Section>
  );
};

export default Achievement;
