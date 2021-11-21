import {
  BarChart,
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from 'echarts/charts';
import {
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  GridComponent,
  GridComponentOption,
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  // 内置数据转换器(filter, sort)
  TransformComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';


// 通过ComposeOption 来组合出一个只有必须组件和图表的Option类型 
type EChartOption = echarts.ComposeOption<
BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption | DatasetComponentOption>;



//注册必须的组件
echarts.use([
  BarChart,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const barOptions: EChartOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      stack: 'a',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      itemStyle: {
        color: '#f00',
        // borderColor: 'rgba(100, 100, 255, 0.8)',
        // borderWidth: 5,
        // borderType: 'dashed',
        // barBorderRadius: 10,
        opacity: 0.5
      }
    },
    {
      data: [20, 20, 50, 8, 7, 10, 30],
      type: 'bar',
      stack: 'a',
    }
  ]
}

export { echarts, barOptions };

