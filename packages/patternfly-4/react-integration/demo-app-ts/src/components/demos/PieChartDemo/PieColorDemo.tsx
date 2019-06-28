import React from 'react';
import { ChartPie, ChartThemeColor } from '@patternfly/react-charts';

export class PieColorDemo extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div style={{width: '35%', paddingTop: '50px', paddingLeft: '50px'}}>
        <div className="pie-chart-legend-bottom">
          <ChartPie
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            height={275}
            labels={datum => `${datum.x}: ${datum.y}`}
            legendData={[{ name: 'Cats: 35' }, { name: 'Dogs: 55' }, { name: 'Birds: 10' }]}
            legendPosition="bottom"
            pieHeight={230}
            themeColor={ChartThemeColor.multi}
            width={300}
          />
        </div>
      </div>
    );
  }
}
