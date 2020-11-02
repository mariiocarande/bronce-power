import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';

import Logo from './Logo';

const Homepage: React.FC = () => {
  return (
    <CustomOrganizationContainer>
      <Logo />
      <CustomSocialMedia>
        <FacebookShareButton url="https://www.facebook.com/warecloudco">
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <TwitterShareButton url="https://www.twitter.com/warecloudco/">
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <LinkedinShareButton url="https://www.linkedin.com/company/warecloudco/">
          <LinkedinIcon size={32} round={true} />
        </LinkedinShareButton>
      </CustomSocialMedia>
    </CustomOrganizationContainer>
  );
};

export default Homepage;

const CustomSocialMedia: React.FC = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
`;

const CustomOrganizationContainer: React.FC = styled.div`
  display: flex;
  flex-direction: column;
`;
