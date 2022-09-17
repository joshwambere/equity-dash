import React from 'react'

const DoughnutChartWrapper = ({ children }: any) => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          lineHeight: '19px',
          textAlign: 'center',
          zIndex: '999999999999999',
        }}>
        <>
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}>
            <span>20%</span>
          </div>
        </>
      </div>
      {children}
    </div>
  )
}

export default DoughnutChartWrapper
