import React from 'react'

const DoughnutChartWrapper = ({ children, percentage, title, DoughnutData }: any) => {
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
        {DoughnutData === undefined ? (
          <span className="muted_text fowe400 text13">Something is wrong</span>
        ) : (
          <>
            <span className="text28 fowe900 mabo16 text-black">
              {percentage} {percentage && '%'}
            </span>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}>
              <div>20%</div>
            </div>
            <span className="muted_text fowe400 text13">{title}</span>
          </>
        )}
      </div>
      {children}
    </div>
  )
}

export default DoughnutChartWrapper
