// tslint:disable: no-any
import React from 'react';
import ChartComponent from 'react-chartjs-2';

import { barChartOptions } from './barChart/barOptionsConfig';

interface Props {
  data: any;
}

const BarChart: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ChartComponent
        type="bar"
        options={barChartOptions}
        data={data}
      />
    </div>
  );
};

export default BarChart;
