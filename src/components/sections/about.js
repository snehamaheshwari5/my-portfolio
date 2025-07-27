import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  .skills-container {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }

  .skills-category {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
    margin-bottom: 8px;
  }

  .chip-list {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 18px;
    margin-bottom: 15px;
  }

  .chip {
    background: rgba(100, 255, 218, 0.07);
    color: var(--green);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 500;
    border-radius: 22px;
    padding: 8px 22px;
    display: inline-block;
    border: none;
    letter-spacing: 0.01em;
    transition: background 0.2s;
    box-shadow: none;
    cursor: default;
  }

  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: 1fr;
    }
  }
`;
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

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  // Core skills by category
  const skills = {
    languages: ['Python', 'R', 'SQL', 'Microsoft Excel', 'Minitab', 'Power BI'],
    backend: [
      'Node.js',
      'Nest.js',
      'Express.js',
      'Fastify',
      'Flask',
      'FastAPI',
      'Django',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Kafka',
      'Redis',
      'Socket.IO',
      'Sequelize ORM',
      'TypeORM',
      'SQLAlchemy',
      'Alembic',
      'OAuth 2.0',
      'OpenID Connect',
      'Ory Kratos',
      'Ory Hydra',
      'Microservices',
      'Distributed Systems',
    ],
    devops: [
      'Docker',
      'Kubernetes',
      'Langchain',
      'GitHub Actions',
      'Buildkite',
      'Terraform',
      'GraphQL',
      'Docker Containerisation',
      'Firebase',
      'Supabase',
      'AWS S3',
      'AWS EC2',
      'AWS SES',
      'AWS RDS',
      'Nginx',
    ],
    frontend: [
      'React.js',
      'React Native',
      'Next.js',
      'Flutter',
      'TailwindCSS',
      'Redux',
      'Redux Saga',
      'React Query',
      'Zustand',
      'Material UI',
      'Styled Components',
      'HTML',
      'CSS',
      'Svelte',
    ],
  };

  // No need to combine all skills as we're displaying them by category

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hi, I'm Sneha — an MSc. Student at NSOMASA, NMIMS, Mumbai{' '}
              I ask a lot of questions — the kind that dig beneath the surface and chase patterns hiding in plain sight. 
              Numbers, to me, aren’t just values; they’re stories waiting to be told, decisions waiting to be made smarter. 
              I’m drawn to problems that don’t have easy answers, and I love the process of breaking them down — through data, 
              through logic, and sometimes through sheer persistence. Whether I’m building a model, or shaping a narrative, 
              I’m always looking for the intersection where curiosity meets impact.
            </p>

            <p>
             My projects reflect this mindset — from developing a handwritten mathematical expression recognition system to analyzing the impact of 
             HbA1c levels on hospital readmissions using predictive imputation and statistical testing.
             I’ve also modeled global income inequality, forecasted climate anomalies, built classifiers for black hole detection, and studied the emotional impact of music using behavioral data.
            </p>

            <p>
              I bring a strong foundation in statistics and data science, with practical experience in Python, R, and SQL, as well as tools 
              like Excel and Minitab. My work spans data analysis, predictive modeling, time series forecasting, and deep learning — with a 
              focus on building solutions that are both analytically robust and relevant to real-world contexts.
            </p>

            <p>Here are the technologies I've been working with:</p>
          </div>

          <div className="skills-container">
            <div>
              <h3 className="skills-category">Languages</h3>
              <div className="chip-list">
                {skills.languages.map(lang => (
                  <span className="chip" key={lang}>{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/my_photo.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
