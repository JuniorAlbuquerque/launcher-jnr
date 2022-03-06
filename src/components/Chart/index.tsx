import React from 'react'
import ApexChart from 'react-apexcharts'

type ChartProps = {
  options: ApexCharts.ApexOptions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series?: any[] | undefined
}

const TIME_RANGE_IN_MILLISECONDS = 30 * 1000

const Chart: React.FC<ChartProps> = ({ options, series }) => {
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
      }
    },
    colors: ['#8380FF', '#ee5'],
    grid: {
      show: false
    },
    xaxis: {
      type: 'datetime',
      range: TIME_RANGE_IN_MILLISECONDS,
      labels: {
        datetimeUTC: false
      },
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
      curve: 'smooth'
    },
    title: {
      align: 'left',
      style: {
        fontWeight: 600
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
    <div
      style={{
        width: 400,
        marginTop: 80,
        background: '#14133F',
        padding: 16,
        borderRadius: 8
      }}
    >
      <ApexChart
        type="area"
        height={200}
        options={defaultOptions}
        series={series}
      />
    </div>
  )
}

export default Chart
