// tslint:disable: no-any
import React from 'react';
import styled from 'styled-components';
import { CardImg } from 'reactstrap';

import warecloudLogo from '../images/warecloud_logo.png';

const Logo: React.FC = () => {
  return (
    <ContainerImage>
      <CardImg style={{ width: '350px' }} alt="warecloudLogo" src={warecloudLogo} />
    </ContainerImage>
  );
};

export default Logo;

const ContainerImage: React.FC<any> = styled.div`
  display: flex;
  justify-content: flex-end;
`;
