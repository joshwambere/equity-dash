import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Col, Row } from 'antd'
import { chartCutout } from '../../lib/charts/cutouts'
import DoughnutChartWrapper from './DoughnutChartWrapper'
import DatesWRapper from './DatesWRapper'

ChartJS.register(ArcElement, Tooltip, Legend)

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Awesome chart',
    },
  },
  cutout: chartCutout,
}

const OffersChart = ({ offersAnalytics }: any) => {
  const data = {
    labels: offersAnalytics?.labels?.concat(''),
    datasets: [
      {
        label: '',
        data: offersAnalytics?.data,
        backgroundColor: offersAnalytics?.datasets?.backgroundColor,
        borderWidth: 0,
      },
    ],
  }
  return (
    <>
      <Row className="mb-9 flex justify-between items-center">
        <Col flex="none">
          {offersAnalytics !== undefined && <span className="fowe900 text16">Offers</span>}
        </Col>
        <DatesWRapper />
      </Row>

      <DoughnutChartWrapper DoughnutData={offersAnalytics} title="title">
        <Doughnut height="100%" options={options} data={data} />
      </DoughnutChartWrapper>
    </>
  )
}

export default OffersChart
