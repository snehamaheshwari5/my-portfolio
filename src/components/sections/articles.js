import React, { useEffect, useRef } from 'react';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import styled from 'styled-components';

const Section = styled.section`
  margin-top: 0px;
`;

const ArticlesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 32px;
  }
`;

const ArticleCard = styled.div`
  background: var(--navy);
  border-radius: var(--border-radius);
  padding: 28px 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1.5px solid var(--lightest-navy);
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.2s, background 0.2s;
  @media (max-width: 600px) {
    padding: 20px 14px;
  }
  a:hover & {
    background: var(--light-navy);
  }
  a:hover & .arrow {
    transform: translate(6px, -6px);
  }
`;

const Heading = styled.h3`
  color: var(--green);
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 12px;
`;

const Description = styled.p`
  color: var(--light-slate);
  font-size: 1.08rem;
  margin-bottom: 0;
`;

const articles = [
  {
    title: 'Market Mix Modelling - Explained',
    description: 'Explore how regression techniques can be used to evaluate the impact of marketing channels on sales and engagement.',
    url: 'https://drive.google.com/file/d/1MgIkzoRB8gf-fLylA0lbXWbTaNPl4knW/view?usp=sharing',
  },
  {
    title: 'A Quick Guide to Decision Trees',
    description: 'Discussing the application of decision trees in image classification and recommendation systems, along with their challenges.',
    url: 'https://drive.google.com/file/d/17O_ton2Ssb_Jrg4teYGnlPIX0P2yJymj/view?usp=sharing',
  },
  {
    title: 'CI/CD in Data Science Projects',
    description: 'A beginner-friendly walkthrough of the fundamentals of CI/CD, focusing on automation, version control, and efficient deployment practices.',
    url: 'https://drive.google.com/file/d/1rT_N6v8mEKlEAzu2dlv_dbYSBLzHvAGx/view?usp=sharing',
  },
];

const Articles = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <Section id="articles" ref={revealContainer}>
      <h2 className="numbered-heading">Articles</h2>
      <ArticlesWrapper>
        {articles.map(article => (
          <a
            key={article.title}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none', width: '100%' }}
          >
            <ArticleCard>
              <Heading style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ textDecoration: 'none' }}>{article.title}</span>
                <span className="arrow" style={{ textDecoration: 'none', display: 'inline-block', transition: 'transform 0.2s' }} aria-label="external link" title="View article">&#8599;</span>
              </Heading>
              <Description>{article.description}</Description>
            </ArticleCard>
          </a>
        ))}
      </ArticlesWrapper>
    </Section>
  );
};

export default Articles;
