import React, { useEffect, useRef } from 'react';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import styled from 'styled-components';

const volunteerWork = [
  {
    title: 'Juhu Beach Cleaning Drive',
    description: 'I took part in the Juhu Beach Cleaning Drive, contributing to environmental conservation by removing litter and spreading awareness about marine pollution and sustainable habits.',
  },
  {
    title: 'Sishu Mela',
    description: 'I helped organize games and fun-filled activities at SXC for children from underprivileged backgrounds, aiming to foster joy, inclusivity, and community spirit during this annual event.',
  },
  {
    title: 'Behala Naba Proyas',
    description: 'Volunteered to teach and assist children with special needs at this remarkable institution. The experience helped me grow both emotionally and intellectually while supporting inclusive education.',
  },
];

const Section = styled.section`
  margin-top: 0px;
`;

const TileList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: var(--navy);
  border-radius: var(--border-radius);
  padding: 24px;
  min-width: 200px;
  max-width: 300px;
  text-decoration: none;
  box-shadow: 0 4px 24px rgba(0,0,0,0.1);
  transition: box-shadow 0.2s;
  border: 1.5px solid var(--lightest-navy);
  &:hover {
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
    border-color: var(--green);
  }
  .vol-title {
    color: #CCD6F6;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .vol-desc {
    color: var(--light-slate);
    font-size: 1rem;
    margin-bottom: 0;
  }
`;


const VolunteerWork = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <Section id="volunteer-work" ref={revealContainer}>
      <h2 className="numbered-heading">Volunteer Work</h2>
      <TileList>
        {volunteerWork.map(vol => (
          <Tile key={vol.title}>
            <span className="vol-title">{vol.title}</span>
            <span className="vol-desc">{vol.description}</span>
          </Tile>
        ))}
      </TileList>
    </Section>
  );
};

export default VolunteerWork;
