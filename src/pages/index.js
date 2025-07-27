import Certifications from '../components/sections/certifications';
import VolunteerWork from '../components/sections/volunteerWork';
import Education from '../components/sections/education';
import Achievement from '../components/sections/achievement';
import Articles from '../components/sections/articles';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Responsibility, Featured, Projects, Contact } from '@components';

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Education />
      <Responsibility />
      <Achievement />
      <Projects />
      <Articles />
      <Certifications />
      <VolunteerWork />
      <Contact />
    </StyledMainContainer>
  </Layout>
);

IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
