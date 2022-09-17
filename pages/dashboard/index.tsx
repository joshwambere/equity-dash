import { Col, Row } from 'antd'
import React, { useState } from 'react'
import ChartWrapper from '../../components/Charts/ChartWrapper'
import CompaniesChart from '../../components/Charts/CompaniesChart'
import InvestmentsChart from '../../components/Charts/InvestmentsChart'
import OffersChart from '../../components/Charts/OffersChart'
import UserAnalyticsChart from '../../components/Charts/UserAnalyticsChart'
import PrivateLayout from '../../components/Shared/Layout/Private'
import { SmallSpinLoader } from '../../components/Shared/Loaders'
import { TagsWrapper } from '../../components/Shared/MetaTags/TagsWrapper'

import {
  useUserAnalyticsQuery,
  useInvestmentsAnalyticsQuery,
  useCompaniesAnalyticsQuery,
  useOffersAnalyticsQuery,
} from '../../lib/endpoints/analyticsEndpoints'

const Analytics = (): JSX.Element => {
  const [dateFromNewUsers, setDateFromNewUsers] = useState('')
  const [dateToNewUsers, setDateToNewUsers] = useState('')

  const [dateFromInvestments, setDateFromInvestments] = useState('')
  const [dateToInvestments, setDateToInvestments] = useState('')

  const [dateFromCompanies, setDateFromCompanies] = useState('')
  const [dateToCompanies, setDateToCompanies] = useState('')

  const handleNewUsersDateChange = (_: any, date: any) => {
    setDateFromNewUsers(date[0])
    setDateToNewUsers(date[1])
  }

  const handleInvestmentsDateChange = (_: any, date: any) => {
    setDateFromInvestments(date[0])
    setDateToInvestments(date[1])
  }

  const handleCompaniesDateChange = (_: any, date: any) => {
    setDateFromCompanies(date[0])
    setDateToCompanies(date[1])
  }

  const {
    data: userAnalytics,
    isLoading: isUserAnalyticsLoading,
    isFetching: isUserAnalyticsFetching,
  }: any = useUserAnalyticsQuery({
    dateFrom: dateFromNewUsers,
    dateTo: dateToNewUsers,
  })

  const {
    data: investmentsAnalytics,
    isLoading: isInvestmentsAnalyticsLoading,
    isFetching: isInvestmentsAnalyticsFetching,
  }: any = useInvestmentsAnalyticsQuery({
    dateFrom: dateFromInvestments,
    dateTo: dateToInvestments,
  })

  const {
    data: companiesAnalytics,
    isLoading: isCompaniesAnalyticsLoading,
    isFetching: isCompaniesAnalyticsFetching,
  }: any = useCompaniesAnalyticsQuery({
    dateFrom: dateFromCompanies,
    dateTo: dateToCompanies,
  })

  const {
    data: offersAnalytics,
    isLoading: isOffersAnalyticsLoading,
    isFetching: isOffersAnalyticsFetching,
  }: any = useOffersAnalyticsQuery()

  return (
    <PrivateLayout>
      <TagsWrapper title="Analytics" />

      <div className="equity_pages_wrapper">
        <div style={{ padding: '1rem', width: '100%' }}>
          <Row justify="space-between" gutter={[16, 16]} className="mt-4">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ChartWrapper>
                {isUserAnalyticsLoading || isUserAnalyticsFetching ? (
                  <div className="h-full w-full flex justify-center items-center">
                    <SmallSpinLoader />
                  </div>
                ) : (
                  <UserAnalyticsChart
                    userAnalytics={userAnalytics}
                    handleDateChange={handleNewUsersDateChange}
                  />
                )}
              </ChartWrapper>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ChartWrapper>
                {isInvestmentsAnalyticsLoading || isInvestmentsAnalyticsFetching ? (
                  <div className="h-full w-full flex justify-center items-center">
                    <SmallSpinLoader />
                  </div>
                ) : (
                  <InvestmentsChart
                    investmentsAnalytics={investmentsAnalytics}
                    handleDateChange={handleInvestmentsDateChange}
                  />
                )}
              </ChartWrapper>
            </Col>
          </Row>

          <Row justify="space-between" gutter={[16, 16]} className="mt-4">
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ChartWrapper>
                {isCompaniesAnalyticsLoading || isCompaniesAnalyticsFetching ? (
                  <div className="h-full w-full flex justify-center items-center">
                    <SmallSpinLoader />
                  </div>
                ) : (
                  <CompaniesChart
                    companiesAnalytics={companiesAnalytics}
                    handleDateChange={handleCompaniesDateChange}
                  />
                )}
              </ChartWrapper>
            </Col>

            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <ChartWrapper>
                {isOffersAnalyticsLoading || isOffersAnalyticsFetching ? (
                  <div className="h-full w-full flex justify-center items-center">
                    <SmallSpinLoader />
                  </div>
                ) : (
                  <OffersChart offersAnalytics={offersAnalytics} />
                )}
              </ChartWrapper>
            </Col>
          </Row>
        </div>
      </div>
    </PrivateLayout>
  )
}

export default Analytics
