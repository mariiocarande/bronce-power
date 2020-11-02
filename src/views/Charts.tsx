// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

import Header from '../components/Header';
import OrganizationLayout from '../components/OrganizationLayout';

interface Props {
  history: any;
}

type HandleClick = () => void;

const Homepage: React.FC<Props> = ({ history }) => {
  const handleClick: HandleClick = () => {
    history.push('/');
  };

  return (
    <div>
      <Header />
      <CustomMovePages>
        <Button onClick={handleClick}>
          {'<'}
        </Button>
      </CustomMovePages>
      <div className="container border border-danger">
        <ContainerCard>
          <CustomCard>
            <CustomCardHeader>
              Estadisticas
            </CustomCardHeader>
            <CustomCardBody>

            </CustomCardBody>
          </CustomCard>
          <OrganizationLayout />
        </ContainerCard>
      </div>
    </div>
  );
};

export default Homepage;

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

const CustomMovePages: React.FC = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`;
