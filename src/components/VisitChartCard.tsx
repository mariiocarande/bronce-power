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

const WebsiteVisitsChartCard: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <div className="float-left float-none-xs">
          <div className="d-inline-block">
            <h5 className="d-inline">
              Visitantes
            </h5>
            <span className="text-muted text-small d-block">
              Visitantes unicos
            </span>
          </div>
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

      <CardSubtitle>
          Bars
        </CardSubtitle>
        <div className="chart-container">
          <BarChart data={barChartData} />
        </div>
    </Card>
  );
};

export default WebsiteVisitsChartCard;
