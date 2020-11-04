// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardHeader, Button, CardSubtitle } from 'reactstrap';

import Header from '../components/Header';
import OrganizationLayout from '../components/OrganizationLayout';
import VisitChartCard from '../components/VisitChartCard';
import DoughnutChart from '../components/DoughnutChart';
import { doughnutChartData } from '../components/doughnutChart/doughtnutChartData';

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
            <CardBody>
              <VisitChartCard />
            <CustomCard>
              <Card className="h-100">
                <CardBody>
                  <CardSubtitle
                    style={{ color: 'black', justifyContent: 'center', display: 'flex' }}
                    >
                    Products
                  </CardSubtitle>

                  <div className="dashboard-donut-chart">
                    <DoughnutChart data={doughnutChartData} />
                  </div>
                </CardBody>
              </Card>
            </CustomCard>
            </CardBody>
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
  height: 100%;
  height: -webkit-fill-available;
  width: 100%;
`;

const CustomCard: React.FC = styled(Card)`
  width: 100%;
  background-color: #e0f0fd;
  color: white;
`;

const CustomMovePages: React.FC = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`;
