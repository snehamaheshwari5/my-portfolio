import React, { useEffect, useRef } from 'react';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import styled from 'styled-components';

const educationList = [
  {
    year: '2024 - Present',
    degree: 'MSc. Statistics and Data Science',
    institution: 'Nilkamal School of Mathematics, Applied Statistics and Analytics, Mumbai',
  },
  {
    year: '2021 - 2024',
    degree: 'BSc. Statistics Hons.',
    institution: 'St. Xavier\'s College (Autonomous), Kolkata',
  },
  {
    year: '2020 - 2021',
    degree: 'Senior Secondary (XII)',
    institution: 'Bal Bhavan Public School, Delhi',
  },
  {
    year: '2018 - 2019',
    degree: 'Senior Secondary (X)',
    institution: 'Bal Bhavan Public School, Delhi',
  },
];

const Section = styled.section`
  margin-top: 0px;
`;


const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 32px;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ListItem = styled.li`
  list-style: none;
  position: relative;
  padding: 0 0 0 24px;
  margin: 0;
  border-left: 3px solid var(--lightest-navy);
  min-height: 64px;
  transition: border-color 0.2s;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:hover {
    border-left: 3px solid var(--green);
  }
  .edu-year {
    color: var(--light-slate);
    font-size: 1.02rem;
    font-weight: 400;
    margin-bottom: 2px;
    display: block;
    letter-spacing: 0.5px;
  }
  .edu-degree {
    color: var(--green);
    font-size: 1.18rem;
    margin-bottom: 2px;
    text-decoration: none;
    display: block;
    letter-spacing: 0.2px;
  }
  .edu-inst {
    color: var(--light-slate);
    font-size: 1.01rem;
    font-weight: 500;
    margin-bottom: 2px;
    display: block;
    font-style: italic;
  }
`;



const Education = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <Section id="education" ref={revealContainer}>
      <h2 className="numbered-heading">Education</h2>
      <List>
        {educationList.map((edu, idx) => (
          <ListItem key={idx}>
            <span className="edu-year">{edu.year}</span>
            <span className="edu-degree">{edu.degree}</span>
            <span className="edu-inst">{edu.institution}</span>
            <span className="edu-desc">{edu.description}</span>
          </ListItem>
        ))}
      </List>
    </Section>
  );
};

export default Education;
