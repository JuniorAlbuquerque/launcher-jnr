export const radialOptions: ApexCharts.ApexOptions = {
  chart: {
    type: 'radialBar'
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%'
      },
      track: {
        background: '#3F3D76'
      },
      dataLabels: {
        name: {
          offsetY: -2,
          show: true,
          color: '#DBDFF1',
          fontSize: '1.4rem',
          fontFamily: 'Poppins'
        },
        value: {
          offsetY: 2,
          color: '#DBDFF1',
          fontSize: '1.2rem',
          fontFamily: 'Poppins',
          show: true
        }
      }
    }
  },
  stroke: {
    lineCap: 'round'
  }
}
