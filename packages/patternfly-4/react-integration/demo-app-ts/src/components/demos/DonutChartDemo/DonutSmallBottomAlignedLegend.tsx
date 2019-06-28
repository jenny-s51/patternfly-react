import React from 'react';
import { ChartDonut } from '@patternfly/react-charts';

export class DonutSmallBottomAlignedLegend extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div style={{width: '30%', paddingTop: '50px', paddingLeft: '50px'}}>
        <div className="donut-chart-legend-bottom-subtitle-right-sm">
          <ChartDonut
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            donutHeight={150}
            height={200}
            labels={datum => `${datum.x}: ${datum.y}%`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendPosition="bottom"
            subTitle="Pets"
            subTitlePosition="right"
            title="100"
            width={300}
          />
        </div>
      </div>

    )
  }
}
