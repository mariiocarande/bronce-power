import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-button/dist/themes/theme-blue.css';
import styled from 'styled-components';
import { Card, CardBody, CardHeader} from 'reactstrap';
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'react-share';

import Avatar from './components/Avatar';
import Header from './components/Header';
import Logo from './components/Logo';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container border border-danger">
        <ContainerCard>
          <CustomCard>
            <CustomCardHeader>
              Nimble React Team
            </CustomCardHeader>
            <CustomCardBody>
              <Avatar />
            </CustomCardBody>
          </CustomCard>
          <div style={{ display: 'flex', flexDirection: "column" }}>
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
          </div>
        </ContainerCard>
      </div>
    </div>
  );
};

export default App;

const CustomCardHeader: React.FC = styled(CardHeader)`
  text-align: center;
  color: white;
  background-color: #7D8EA1;
`;

const ContainerCard: React.FC = styled.div`
  display: flex;
  width: 100%;
  height: -webkit-fill-available;
`;

const CustomCard: React.FC = styled(Card)`
  width: 100%;
  background-color: #3C4753;
  color: white;
`;

const CustomCardBody: React.FC = styled(CardBody)`
  display: flex;
  align-items: center;
`;

const CustomSocialMedia: React.FC = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
`;
