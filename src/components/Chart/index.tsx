import ApexChart from 'react-apexcharts'
import styles from './styles'

type ChartProps = {
  options?: ApexCharts.ApexOptions
  title?: string
  type?:
    | 'area'
    | 'line'
    | 'bar'
    | 'histogram'
    | 'pie'
    | 'donut'
    | 'radialBar'
    | 'scatter'
    | 'bubble'
    | 'heatmap'
    | 'treemap'
    | 'boxPlot'
    | 'candlestick'
    | 'radar'
    | 'polarArea'
    | 'rangeBar'
    | undefined
  series?: ApexAxisChartSeries | ApexNonAxisChartSeries
  range?: {
    min: number | string
    max: number | string
  }
  width?: number
  height?: number
  withoutBg?: boolean
}

function Chart({
  options,
  series,
  title,
  type,
  range,
  width,
  height,
  withoutBg
}: ChartProps) {
  const defaultOptions: ApexCharts.ApexOptions = {
    chart: {
      zoom: {
        enabled: false
      },
      animations: {
        easing: 'linear',
        dynamicAnimation: {
          speed: 500
        }
      },
      foreColor: '#827D99',
      fontFamily: 'Poppins',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    colors: ['#6D6AE3', '#ee5'],
    grid: {
      show: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    tooltip: {
      fillSeriesColor: true,
      theme: 'false',
      style: {
        fontFamily: 'Poppins'
      }
    },
    ...options
  }

  return (
    <div css={(theme) => styles.root(theme, withoutBg)}>
      {!!title && <p>{title}</p>}
      <ApexChart
        type={type}
        height={height ? height : 200}
        width={width ? width : '100%'}
        options={defaultOptions}
        series={series}
      />
      {!!range && (
        <div className="range">
          <span>{range?.max}</span>
          <span>{range?.min}</span>
        </div>
      )}
    </div>
  )
}

export default Chart
