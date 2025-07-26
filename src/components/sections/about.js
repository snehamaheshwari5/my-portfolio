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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 15px;
  }

  .skills-category {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    font-weight: 400;
    margin-bottom: 8px;
  }

  .skills-text {
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--slate);
    line-height: 1.5;
    margin: 0 0 15px 0;
  }

  @media (max-width: 768px) {
    .skills-container {
      grid-template-columns: 1fr;
    }

    .skills-text {
      font-size: var(--fz-sm);
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
      filter: grayscale(100%) contrast(1);
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
    languages: ['JavaScript', 'TypeScript', 'Python', 'C++'],
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
              Hi, I'm Aryan — a Senior Software Engineer at{' '}
              <a href="https://www.thoughtworks.com/">Thoughtworks</a> with 6+ years specializing in
              backend and full-stack development. I architect distributed systems and microservices
              using JavaScript, TypeScript, Python, React, Node.js and React Native with a focus on
              scalability and performance.
            </p>

            <p>
              As a Technical Lead at <a href="https://gluelabs.com/">Glue Labs</a>, where I lead
              product development and mentor teams. I've had the opportunity to work on various
              exciting projects including <a href="https://fifo.im">FIFO</a>,{' '}
              <a href="https://glue.is">Glue</a>, <a href="https://id.glue.is">Glue Identity</a>,
              and several other innovative solutions.
            </p>

            <p>
              I'm also creator and incredibly excited to present{' '}
              <a href="https://dashgen.in">Dashgen</a> - an AI-powered platform that I'm building to
              revolutionize how an individual interact with LLMs. It provides a unified interface
              for working with various AI models like OpenAI, Anthropic, Google Gemini, Mistral, xAI
              and DeepSeek. I'd love for you to check it out!
            </p>

            <p>
              My focus is on building high-performance applications with clean, maintainable code.
              I'm passionate about user experience and believe in creating products that not only
              work well but are also enjoyable to use.
            </p>

            <p>Here are the technologies I've been working with:</p>
          </div>

          <div className="skills-container">
            <div>
              <h3 className="skills-category">Languages</h3>
              <p className="skills-text">{skills.languages.join(', ')}</p>
            </div>

            <div>
              <h3 className="skills-category">Backend</h3>
              <p className="skills-text">{skills.backend.join(', ')}</p>
            </div>

            <div>
              <h3 className="skills-category">Tools & DevOps</h3>
              <p className="skills-text">{skills.devops.join(', ')}</p>
            </div>

            <div>
              <h3 className="skills-category">Frontend</h3>
              <p className="skills-text">{skills.frontend.join(', ')}</p>
            </div>
          </div>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/Aryan_new.JPG"
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
