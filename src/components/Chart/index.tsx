import ApexChart from 'react-apexcharts'
import styles from './styles'

type ChartProps<T> = {
  options: ApexCharts.ApexOptions
  title?: string
  series?: T[] | undefined
  range?: {
    min: number | string
    max: number | string
  }
}

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000

function Chart<T>({ options, series, title, range }: ChartProps<T>) {
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
    legend: {
      show: true
    },
    colors: ['#8380FF', '#ee5'],
    grid: {
      show: false
    },
    xaxis: {
      type: 'datetime',
      range: TIME_RANGE_IN_MILLISECONDS,
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      tickPlacement: 'off',
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toFixed(0)
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 80, 100]
      }
    },
    dataLabels: {
      enabled: false
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
    <div css={styles.root}>
      <p>{title}</p>
      <ApexChart
        type="area"
        height={200}
        options={defaultOptions}
        series={series}
      />
      <div className="range">
        <span>{range?.max}</span>
        <span>{range?.min}</span>
      </div>
    </div>
  )
}

export default Chart
