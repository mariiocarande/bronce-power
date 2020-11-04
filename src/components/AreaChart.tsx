// tslint:disable: no-any
import React from 'react';
import ChartComponent from 'react-chartjs-2';

import { areaChartOptions } from './areaChart/chartOptionsConfig';

interface Props {
  data: any;
}

const AreaChart: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <ChartComponent
        type="line"
        options={areaChartOptions}
        data={data}
        responsive={true}
        />
    </div>
  );
};

export default AreaChart;
