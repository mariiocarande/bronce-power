import React from 'react';
import {
  Card,
  CardBody,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  CardSubtitle,
} from 'reactstrap';

import AreaChart from '../components/AreaChart';
import { areaChartData } from './areaChart/chartDataConfig';
import BarChart from '../components/BarChart';
import { barChartData } from '../components/barChart/barChartData';

const VisitsChartCard: React.FC = () => {
  return (
    <Card>
      <CardBody>
            <CardSubtitle style={{ color: 'black', justifyContent: 'center', display: 'flex' }}>
              Visitantes
            </CardSubtitle>
          <div className="float-left float-none-xs">
            <span className="text-muted text-small d-block">
              Visitantes unicos
            </span>
          </div>
          <div className="btn-group float-right float-none-xs mt-2">
            <UncontrolledDropdown>
              <DropdownToggle caret={true} color="primary" className="btn-xs" outline={true}>
                This Week
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  Last Week
                </DropdownItem>
                <DropdownItem>
                  Last Month
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </div>
      </CardBody>

      <div className="chart card-body pt-0">
        <AreaChart data={areaChartData} />
      </div>

        <CardSubtitle style={{ color: 'black', justifyContent: 'center', display: 'flex' }}>
          Bars
        </CardSubtitle>
        <div className="chart-container">
          <BarChart data={barChartData} />
        </div>
    </Card>
  );
};

export default VisitsChartCard;
