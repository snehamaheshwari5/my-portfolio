import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledJobsSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 32px;
`;

const JobsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-top: 56px;
`;

const JobTile = styled.div`
  border-radius: 18px;
  border: none;
  padding: 4px 48px;
  display: flex;
  flex-direction: row;
  gap: 0;
  align-items: flex-start;
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 20px 8px;
  }

  .job-range {
    color: var(--light-slate);
    font-family: var(--font-mono);
    font-size: 12px;
    font-weight: 600;
    min-width: 180px;
    max-width: 220px;
    flex-shrink: 0;
    margin-right: 40px;
    text-align: left;
    @media (max-width: 800px) {
      margin-right: 0;
      margin-bottom: 18px;
      min-width: 0;
      max-width: none;
    }
  }
  .job-details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }
  .job-title {
    font-size: 22px;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--green);
  }
  .job-description {
    color: var(--light-slate);
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 0;
    line-height: 1.35;
    letter-spacing: 0.01em;
    @media (max-width: 600px) {
      font-size: 1.15rem;
    }
      ul {
        margin-left: 1.25em;
        padding-left: 0;
        list-style-position: outside;
      }
  }
`;


const Jobs = () => {
  const data = useStaticQuery(graphql`
    query {
      jobs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/jobs/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              company
              location
              range
              url
            }
            html
          }
        }
      }
    }
  `);

  const jobsData = data.jobs.edges;
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    sr.reveal(revealContainer.current, srConfig());
  }, [prefersReducedMotion]);

  return (
    <StyledJobsSection id="responsibility" ref={revealContainer}>
      <h2 className="numbered-heading">Positions of Responsibility</h2>
      <JobsList>
        {jobsData && jobsData.map(({ node }, i) => {
          const { frontmatter, html } = node;
          const { title, url, company, range } = frontmatter;
          return (
            <JobTile key={i}>
              <div className="job-range">{range}</div>
              <div className="job-details">
                <div className="job-title">
                  {title}
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <span>&middot; {company}</span>
                    </a>
                  )}
                  {!url && <span>@ {company}</span>}
                </div>
                <div className="job-description" dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </JobTile>
          );
        })}
      </JobsList>
    </StyledJobsSection>
  );
};

export default Jobs;
