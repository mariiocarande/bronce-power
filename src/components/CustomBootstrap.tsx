// tslint:disable: no-any
import React from 'react';
import { Col } from 'reactstrap';

const Colxx: React.FC<any> = (props: any) => (
  <Col {...props} widths={['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl']} />
);

const Separator: React.FC<any> = (props: any) => (
  <div className={`separator ${props.className}`} />
);

export { Colxx, Separator };
