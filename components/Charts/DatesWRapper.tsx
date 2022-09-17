import { Col, DatePicker } from 'antd'
import React from 'react'

const { RangePicker } = DatePicker

const DatesWRapper = ({ handleDateChange }: any) => {
  return (
    <Col className="none">
      <div className="flex items-center gap-4">
        <span className="muted_text font-light">Choose range</span>
        <RangePicker placement="bottomLeft" onChange={handleDateChange} />
      </div>
    </Col>
  )
}

export default DatesWRapper
