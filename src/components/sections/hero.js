import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Sneha Maheshwari.</h2>;
  const three = <h3 className="big-heading">I build innovative software solutions.</h3>;
  const four = (
    <>
      <p>
        I'm a Senior Software Engineer at{' '}
        <a href="https://www.thoughtworks.com/" target="_blank" rel="noreferrer">
          Thoughtworks
        </a>{' '}
        and former Technical Lead at{' '}
        <a href="https://gluelabs.com/" target="_blank" rel="noreferrer">
          Glue Labs
        </a>
        , with 6+ years of experience in software development, specializing in building scalable and
        innovative solutions.
      </p>
      <p>
        Currently, I'm building{' '}
        <a href="https://dashgen.in/" target="_blank" rel="noreferrer">
          Dashgen
        </a>{' '}
        — a unified platform for multiple AI models including OpenAI, Anthropic, Google Gemini,
        Mistral, xAI and DeepSeek.
      </p>
    </>
  );
  const five = (
    <div style={{ display: 'flex', gap: '20px' }}>
      <a
        className="email-link"
        href="mailto:aryankush025@gmail.com"
        target="_blank"
        rel="noreferrer">
        Get In Touch
      </a>
      <a className="email-link" href="https://v1.aryankush25.com/" target="_blank" rel="noreferrer">
        View New Portfolio
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
