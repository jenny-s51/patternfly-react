import React from 'react';
import { ChartDonut, ChartLegend } from '@patternfly/react-charts';

export class BlueDonutDemo extends React.Component {

  render() {
    return (
      <div>
        <div className="donut-chart-inline">
          <div className="donut-chart-container">
            <ChartDonut
              data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
              labels={datum => `${datum.x}: ${datum.y}`}
              subTitle="Pets"
              title="100"
            />
          </div>
          <ChartLegend
            data={[{ name: 'Cats' }, { name: 'Dogs' }, { name: 'Birds' }]}
            height={230}
            orientation="vertical"
            responsive={false}
            y={70}
          />
        </div>
      </div>

    )
  }
}
