import { BarSeriesOption, LineSeriesOption } from 'echarts/charts';
import { DatasetComponentOption, GridComponentOption, TitleComponentOption } from 'echarts/components';
import * as echarts from 'echarts/core';
declare type EChartOption = echarts.ComposeOption<BarSeriesOption | LineSeriesOption | TitleComponentOption | GridComponentOption | DatasetComponentOption>;
declare const barOptions: EChartOption;
export { echarts, barOptions };
