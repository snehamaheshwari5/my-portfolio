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
    font-size: 56px;
    @media (max-width: 900px) {
      font-size: clamp(32px, 7vw, 48px);
    }
    @media (max-width: 480px) {
      font-size: clamp(24px, 8vw, 36px);
    }
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  b {
    color: var(--green);
    font-weight: 400;
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
  const three = <h3 className="big-heading">I use data to make sense of the world</h3>;
  const four = (
    <>
      <p>
        I’m a postgraduate student in <b>Statistics and Data Science</b> at <b>Nilkamal School of Mathematics, Applied Statistics and Analytics, NMIMS</b>, with an academic background in Statistics from <b>St. Xavier’s College, Kolkata</b>.
      </p>
      <p>
        I’ve worked on projects in healthcare analytics, socio-economic modeling, climate data analysis, astrophysical forecasting, expression recognition and more.
      </p>
      <p>
        My work involves applying statistical methods, <b>machine learning, deep learning </b> and <b>time series analysis</b> to solve data-driven problems across varied domains.
      </p>
    </>
  );
  const five = (
    <div style={{ display: 'flex', gap: '20px' }}>
      <a
        className="email-link"
        href="mailto:maheshwarisneha00@gmail.com"
        target="_blank"
        rel="noreferrer">
        Get In Touch
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
