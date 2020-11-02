import React from 'react';
import { Row, Col } from 'reactstrap';

import Mario from '../images/FotosPerfil_Marito.png';
import Agus from '../images/FotosPerfil_AgustinTissera.png';
import Romi from '../images/FotosPerfil_Romi.png';
import Panchito from '../images/FotosPerfil_Pancho.png';

const Avatar: React.FC = () => {
  return (
    <Row>
      <Col sm="3" xs="1" style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
        <small className=" d-block text-uppercase font-weight-bold mb-4">
          Romina Manzano
        </small>
          <img
            style={{ boxShadow: '0 .8rem 0.9rem black' }}
            alt="avatar"
            className=" img-fluid rounded-circle"
            src={Romi}
          />
        Fullstack developer
      </Col>
      <Col sm="3" xs="3" style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
        <small className=" d-block text-uppercase font-weight-bold mb-4">
          Mario Carande
        </small>
        <img
          style={{ boxShadow: '0 .8rem 0.9rem black' }}
          alt="avatar"
          className=" img-fluid rounded-circle"
          src={Mario}
        />
        Frontend developer
      </Col>
      <Col sm="3" xs="3" style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
        <small className=" d-block text-uppercase font-weight-bold mb-4">
          Francisco Valloire
        </small>
        <img
          style={{ boxShadow: '0 .8rem 0.9rem black' }}
          alt="avatar"
          className=" img-fluid rounded-circle"
          src={Panchito}
        />
        Frontend developer
      </Col>
      <Col sm="3" xs="1" style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
        <small className=" d-block text-uppercase font-weight-bold mb-4">
          Agustin Tisera
        </small>
        <img
          style={{ boxShadow: '0 .8rem 0.9rem black' }}
          alt="avatar"
          className=" img-fluid rounded-circle"
          src={Agus}
        />
        Frontend developer
      </Col>
    </Row>
  );
};

export default Avatar;
