// tslint:disable: no-any
import React from 'react';
import ChartComponent from 'react-chartjs-2';

import { centerTextPlugin } from './utilsChart/utilsChart';
import { doughnutChartOptions } from './doughnutChart/doughtnutChartOptions';

interface Props {
  data: any;
}

const Doughnut: React.FC<Props> = ({ data }) => {
  return (
    <ChartComponent
      type={'doughnut'}
      plugins={[centerTextPlugin]}
      options={doughnutChartOptions}
      data={data}
      responsive={true}
    />
  );
};

export default Doughnut;
