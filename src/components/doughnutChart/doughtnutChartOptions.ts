// tslint:disable: no-any

import { chartTooltip } from '../utilsChart/utilsChart';

export const doughnutChartOptions: any = {
  legend: {
    position: 'bottom',
    labels: {
      padding: 15,
      usePointStyle: true,
      fontSize: 12,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  title: {
    display: false,
  },
  cutoutPercentage: 80,
  layout: {
    padding: {
      bottom: 10,
    },
  },
  tooltips: chartTooltip,
};
