const TIME_RANGE_IN_MILLISECONDS = 30 * 1000

export const lineOptions: ApexCharts.ApexOptions = {
  legend: {
    show: true
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
  }
}
