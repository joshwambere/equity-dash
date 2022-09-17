import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Col, Row } from 'antd'
import { chartColoRenderer } from '../../helpers/chartColoRenderer'
import DatesWRapper from './DatesWRapper'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  tension: 0.5,
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Equity chart',
    },
  },
}

const UserAnalyticsChart = ({ userAnalytics, handleDateChange }: any) => {
  const _datasets = userAnalytics?.datasets?.map((value: any) => ({
    ...value,
    borderColor: `${chartColoRenderer(value?.label)}`,
    backgroundColor: `${chartColoRenderer(value?.label)}`,
    borderWidth: 1.4,
  }))

  const data = {
    labels: userAnalytics?.labels,
    datasets: _datasets,
  }

  return (
    <>
      <Row justify="space-between" align="middle" className="mb-9">
        <Col flex="none">
          <span className="fowe900 text16">New users</span>
        </Col>
        <DatesWRapper handleDateChange={handleDateChange} />
      </Row>

      <Line height="100%" options={options} data={data} />
    </>
  )
}

export default UserAnalyticsChart
